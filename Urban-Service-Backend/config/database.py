from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME = "The_Urban_Service_Database"
client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]



end_user_collection = db["user"]
admin_user_collection = db["admin_user"]
provider_user_collection = db["provider_user"]
provider_user_registration_collection =db["providers"]
role_collection = db["role"]
service_collection = db["service"]
contact_collection = db["contact"]
