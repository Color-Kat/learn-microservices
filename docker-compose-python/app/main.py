from pymongo import MongoClient
from pprint import pprint

# mongo is a another docker compose service name
MONGO_URL = "mongodb://mongo:27017"

client = MongoClient(MONGO_URL)
db = client.admin
dbs_list = db.command("listDatabases")
pprint(dbs_list)