import json
import boto3


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
def update_user(event):
    client = boto3.client('dynamodb')
    item = {
        "username": {
        "S": event['username']
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
    # TODO implement
    print(event)
    #event = json.loads(event)
    cb_vec = []
    travel_vec = []
    for key, value in event.items():
        if value == "" or value=="0":
            value = ".1"
        if key in cash_back_keys:
            cb_vec.append(float(value))
        if key in travel_keys:
            travel_vec.append(float(value))
    print(cb_vec)
    print(travel_vec)
            
    #update_user(event)
    

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

