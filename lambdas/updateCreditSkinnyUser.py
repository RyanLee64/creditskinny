import json
import boto3
import json
import inspect
from boto3.dynamodb.types import TypeSerializer, TypeDeserializer

client = boto3.client('dynamodb')
region = 'us-east-1' 
td = TypeDeserializer()


def put_profile(p):
    item ={
    "username": {
    "S": p['username']
    },
     "cards": {
            "L": [
                  {
                    "S": p['cards'][0]
                  },
                  {
                    "S": p['cards'][1]
                  },
                  {
                    "S": p['cards'][2]
                  }
                ]
        },
    "currentModule": {
    "S": p['currentModule']
    },
    "email": {
    "S": "tmp"
    },
    "firstName": {
    "S": p['firstName']
    },
    "lastName": {
    "S": p['lastName']
    }
    }
    client.put_item(TableName='CreditSkinnyUsers',Item=item)


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



def lambda_handler(event, context):
    
    body = event
    print(body)
    user = put_profile(event)
    print(event)
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {"Access-Control-Allow-Origin":"*"	}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps("success from lambda!")
    print(responseObject)
    return responseObject

