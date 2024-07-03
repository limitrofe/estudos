import csv
import json

csv_file_path = 'aracaju.csv'
json_file_path = 'aracaju.json'

data = []

with open(csv_file_path, encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)
