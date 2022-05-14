import pandas as pd
import json

def main():
    json_arr = []
 
    df = pd.read_csv('elastic.csv')
    f = open("output1.txt", "w")
    i = 5
    for index, row in df.iterrows():
        template = {
            "id" : int(row['id']),
            "cashback" : [row['supermarkets'],	row['streaming'],	row['rideshare'],	row['gas'], row['everything'],	row['dining'],	row['drugstore'],	row['wholesale'],	row['amazon'],	row['paypal'],	row['target'],	row['walmart'],	row['homeimp']],
            "travel": [row['hotel'],row['car'],	row['southwest'],	row['american'],	row['delta'],	row['united'],	row['bag'],	row['uber'],	row['tsa'],	row['pass'],	row['marriott'],	row['hilton'],	row['board']]
        }
        print(template)
        stringified = json.dumps(template)
        f.write(json.dumps({ "index" : { "_index" : "cards", "_id" : str(i) } }))
        f.write('\n')
        f.write(stringified)
        f.write('\n')
        i+=1
    f.write(stringified)
    f.close

if __name__ == "__main__":
    main()
