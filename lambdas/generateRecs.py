import json
import boto3
import json
import requests
import inspect
from requests_aws4auth import AWS4Auth
from requests.auth import HTTPBasicAuth
from botocore.exceptions import ClientError


region = 'us-east-1' 
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

host = 'https://cards.es.us-east-1.aws.found.io:9243' # The OpenSearch domain endpoint with https://
index = 'cards'
url = host + '/' + index + '/_search'
auth=HTTPBasicAuth("ryan","123456")






def query_elasticsearch(which_vec, qvec):
    #message_body = json.loads((message.get('Messages'))[0].get('Body'))
    #desired_cuisine = message_body.get('cuisine')
    #return three random results 
    #https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html#function-random
    query_cashback = {
      "size" : 1,
      "query": {
        "script_score": {
          "query": {
            "match_all" : {}
          },
          "script": {
            "source": "doc['cashback'].size() == 0 ? 0 : cosineSimilarity(params.queryVector, 'cashback')",
            "params": {
              "queryVector": qvec
            }
          }
        }
      }
    }
    query_travel = {
      "size" : 1,
      "query": {
        "script_score": {
          "query": {
            "match_all" : {}
          },
          "script": {
            "source": "doc['travel'].size() == 0 ? 0 : cosineSimilarity(params.queryVector, 'travel')",
            "params": {
              "queryVector": qvec
            }
          }
        }
      }
    }
    
    # Elasticsearch 6.x requires an explicit Content-Type header
    headers = { "Content-Type": "application/json" }
    # Make the signed HTTP request
    if(which_vec=="cashback"):
        r = requests.get(url, auth=auth, headers=headers, data=json.dumps(query_cashback))
    else:
        print("in travel")
        r = requests.get(url, auth=auth, headers=headers, data=json.dumps(query_travel))
        
    json_data = json.loads(r.text)
    print(json_data)
    query_id_cb = (json_data.get('hits').get('hits'))[0].get('_source').get('id')
    print(query_id_cb)
    
    #query_id_2 = (json_data.get('hits').get('hits'))[1].get('_source').get('id')
    #query_id_3 = (json_data.get('hits').get('hits'))[2].get('_source').get('id')

    return query_id_cb
cash_back_keys = [
  "Supermarkets",
  "Streaming",
  "Rideshare",
  "Gas",
  "Everything",
  "Dining",
  "Drugstore",
  "Wholesale",
  "Amazon",
  "Paypal",
  "Target",
  "Walmart",
  "Home Improvement",
]

travel_keys = [
  "Hotel Points",
  "Car Rental Points",
  "Fly Southwest",
  "Fly American",
  "Fly Delta",
  "Fly United",
  "Free Checked Bag",
  "Uber Credit",
  "Free TSA Precheck",
  "Priority Pass",
  "Stay at Marriot",
  "Stay at Hilton",
  "Priority Boarding"
]
def update_user(event, cards):
    client = boto3.client('dynamodb')
    item = {
        "username": {
        "S": event['username']
        },
        "cards": {
            "L": [
                  {
                    "S": cards[0]
                  },
                  {
                    "S": cards[1]
                  },
                  {
                    "S": cards[2]
                  }
                ]
        },
        "currentModule": {
        "S": "1"
        },
        "email": {
        "S": "tmp"
        },
        "firstName": {
        "S": event['firstName']
        },
        "lastName": {
        "S": event['lastName']
        }
        }
       
    client.put_item(TableName='CreditSkinnyUsers',Item=item)
    

    
def lambda_handler(event, context):
   
    # Lambda execution starts here

    
    converted = json.loads(event)
    print(converted)
    cb_vec = []
    travel_vec = []
    for key, value in converted.items():
        if value == "" or value=="0" or value is None:
            value = ".1"
        if key in cash_back_keys:
            cb_vec.append(float(value))
        if key in travel_keys:
            travel_vec.append(float(value))
    print(cb_vec)
    print(travel_vec)
    cb_id = query_elasticsearch("cashback",cb_vec)
    travel_id = query_elasticsearch("travel", travel_vec)
    print("CB ID: ")
    print(cb_id)
    print("TRAVEL ID")
    print(travel_id)
    starter = 2
    if(converted['college'] == "No" or converted["rebuild"] == "Yes"):
        starter = -1
    update_user(converted, [str(starter), str(cb_id), str(travel_id)])
    return {
        'statusCode': 200,
        'body': json.dumps('Succesful Survey Registration!')
    } 
    
