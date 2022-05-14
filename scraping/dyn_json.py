import pandas as pd
import json

def main():
    json_arr = []
 
    df = pd.read_csv('dynamo.csv')
    i = 5
    f = open("output.txt", "w")
        
    for index, row in df.iterrows():
        template = {
            "id":	str(row['id']),
            "title": row['title'],
            "summary":	[row['summary'],row['summary.1'],row['summary.2'],row['summary.3']],
            "img" : row['img'],
            "offer": row['offer'],
            "credit_req": [row['credit_req'], row['credit_req.1']],
            "app_link" : row['app_link']
            }
        stringified = json.dumps(json_arr)
        f.write({ "index" : { "_index" : "cards", "_id" : str(i) } })
        f.write(stringified)
        i+=1
    f.close


if __name__ == "__main__":
    main()
