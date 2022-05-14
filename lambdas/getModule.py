import json
import boto3

def lambda_handler(event, context):
    # TODO implement
    s3 = boto3.resource('s3')
    print(event)
    modId = event['pathParameters']['moduleId']

    key = "module"+modId+".json"
    obj = s3.Bucket('creditskinnymodules').Object(key)
    jsonStr = obj.get()['Body'].read().decode('utf-8')
    jsonObj = json.loads(jsonStr)
    print(json)
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {"Access-Control-Allow-Origin":"*"	}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(jsonObj)
    return responseObject
    
