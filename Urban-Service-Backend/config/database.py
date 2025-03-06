from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME = "The_Urban_Service_Database"
client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]
user_collection = db["user"]
role_collection = db["role"]

categoryid_collection = db["categoryid"]
# category_id category_name description created_at
subcategoryid_collection = db["subcategoryid"]
# subcategory_id category_id subcategory_name description created_at
service_collection = db["service"]
# provider_id, provider_id, service_name, price, duration, availability, created_at
booking_collection = db["booking"]
# booking_id,service_id,customer_id,booking_date,status,payment_status,created_at
payment_collection = db["payment"]
# payment_id, booking_id, amount, payment_method, transaction_id, status, created_at
review_collection = db["review"]
# review_id, service_id, customer_id, rating, review_text,created_at