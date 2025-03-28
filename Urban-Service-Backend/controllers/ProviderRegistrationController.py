from bson import ObjectId
from config.database import provider_user_registration_collection
from models.ProviderRegistrationModel import Register_Provider, Register_Provider_Out
from fastapi.responses import JSONResponse

# Function to register a provider
async def ProviderRegistration(provider_registration: Register_Provider):
    result = await provider_user_registration_collection.insert_one(provider_registration.dict(exclude_unset=True))
    return JSONResponse(content={"Message": "Provider Registered Successfully"}, status_code=201)

# Function to retrieve all registered providers
async def getAllRegisterProvider():
    provider_list = await provider_user_registration_collection.find().to_list(length=None)
    return [
        Register_Provider_Out(**{**provider, "providerId": str(provider["_id"])}) 
        for provider in provider_list
    ]

# Function to delete a registered provider
async def deleteRegisterProvider(_id: str):
    result = await provider_user_registration_collection.delete_one({"_id": ObjectId(_id)})
    if result.deleted_count == 0:
        return JSONResponse(content={"Message": "Provider Not Found"}, status_code=404)
    return JSONResponse(content={"Message": "Provider Deleted Successfully"}, status_code=200)
