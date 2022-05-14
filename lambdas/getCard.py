import json
import boto3
import json
import inspect
from boto3.dynamodb.types import TypeSerializer, TypeDeserializer
from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
  def default(self, obj):
    if isinstance(obj, Decimal):
      return str(obj)
    return json.JSONEncoder.default(self, obj)
    
client = boto3.client('dynamodb')
region = 'us-east-1' 
td = TypeDeserializer()


def get_relevant_values(data, username):
    converted = {}
    if 'Item' in data:
        data = data['Item']
        for key in data:
            converted[key] = td.deserialize(data[key])
    print(converted)
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
    data = client.get_item(TableName='CreditSkinnyCards',
    Key={
    'id': {
    'S': str(query_id)
    }
    }
    )
    card = get_relevant_values(data, query_id)
    return card



def lambda_handler(event, context):
    print(event)
    cardId = event['pathParameters']['cardId']
    card = query_dynamodb(cardId)
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {"Access-Control-Allow-Origin":"*"	}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(card, cls=DecimalEncoder)
    print(responseObject)
    return responseObject

