import json
import boto3
import json
import inspect
import time
from boto3.dynamodb.types import TypeSerializer, TypeDeserializer

client = boto3.client('dynamodb')
region = 'us-east-1' 
td = TypeDeserializer()


def get_relevant_values(data, username):
    converted = {}
    if 'Item' in data:
        data = data['Item']
        for key in data:
            converted[key] = td.deserialize(data[key])
    else:
        print("recurse")
        item = {
        "username": {
        "S": username
        },
        "cards": {
          "L": [
           {
            "S": "2"
           },
           {
            "S": "3"
           },
           {
            "S": "4"
           }
          ]
         },
        "currentModule": {
        "S": "-1"
        },
        "email": {
        "S": "tmp"
        },
        "firstName": {
        "S": "tmp"
        },
        "lastName": {
        "S": "tmp"
        }
        }
        client.put_item(TableName='CreditSkinnyUsers',Item=item)
        return {
         "username": username,
         "cards": [""
         ],
         "currentModule": "-1",
         "email": "",
         "firstName": "",
         "lastName": ""
        }

    
    return converted



"""
{
 "username": {
  "S": "b138f03f-4904-4031-ada1-767765199a39"
 },
 "currentModule": {
  "S": "1"
 },
 "email": {
  "S": "dbl2127@columbia.edu"
 },
 "firstName": {
  "S": "ryan"
 },
 "lastName": {
  "S": "lee"
 }
}
"""
def query_dynamodb(query_id):
    data = client.get_item(TableName='CreditSkinnyUsers',
    Key={
    'username': {
    'S': str(query_id)
    }
    }
    )
    user = get_relevant_values(data, query_id)
    return user



def lambda_handler(event, context):
    username = event['pathParameters']['username']
    user = query_dynamodb(username)
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {"Access-Control-Allow-Origin":"*"	}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(user)
    print(responseObject)
    return responseObject
