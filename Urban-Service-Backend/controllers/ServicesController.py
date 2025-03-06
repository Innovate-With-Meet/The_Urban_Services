<<<<<<< HEAD
from fastapi import HTTPException
from models.ServicesModel import Services
from config.database import db
from bson import ObjectId
from typing import List

# Collection reference
services_collection = db["services"]

# 🔹 Create a New Service
async def addService(service: Services):
    service_data = service.dict()
    result = await services_collection.insert_one(service_data)
    service_data["_id"] = str(result.inserted_id)
    return service_data

# 🔹 Get All Services
async def getAllServices():
    services = await services_collection.find().to_list(100)
    for service in services:
        service["_id"] = str(service["_id"])
    return services

# 🔹 Get a Single Service by ID
async def getService(service_id: str):
    service = await services_collection.find_one({"_id": ObjectId(service_id)})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    service["_id"] = str(service["_id"])
    return service

# 🔹 Update a Service
async def updateService(service_id: str, updated_service: Services):
    update_data = updated_service.dict(exclude_unset=True)
    result = await services_collection.update_one({"_id": ObjectId(service_id)}, {"$set": update_data})
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Service not found or no changes made")

    updated_service = await services_collection.find_one({"_id": ObjectId(service_id)})
    updated_service["_id"] = str(updated_service["_id"])
    return updated_service

# 🔹 Delete a Service
async def deleteService(service_id: str):
    result = await services_collection.delete_one({"_id": ObjectId(service_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Service not found")
    return {"message": "Service deleted successfully"}
=======
from fastapi import HTTPException
from models.ServicesModel import Services
from config.database import db
from bson import ObjectId
from typing import List

# Collection reference
services_collection = db["services"]

# 🔹 Create a New Service
async def addService(service: Services):
    service_data = service.dict()
    result = await services_collection.insert_one(service_data)
    service_data["_id"] = str(result.inserted_id)
    return service_data

# 🔹 Get All Services
async def getAllServices():
    services = await services_collection.find().to_list(100)
    for service in services:
        service["_id"] = str(service["_id"])
    return services

# 🔹 Get a Single Service by ID
async def getService(service_id: str):
    service = await services_collection.find_one({"_id": ObjectId(service_id)})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    service["_id"] = str(service["_id"])
    return service

# 🔹 Update a Service
async def updateService(service_id: str, updated_service: Services):
    update_data = updated_service.dict(exclude_unset=True)
    result = await services_collection.update_one({"_id": ObjectId(service_id)}, {"$set": update_data})
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Service not found or no changes made")

    updated_service = await services_collection.find_one({"_id": ObjectId(service_id)})
    updated_service["_id"] = str(updated_service["_id"])
    return updated_service

# 🔹 Delete a Service
async def deleteService(service_id: str):
    result = await services_collection.delete_one({"_id": ObjectId(service_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Service not found")
    return {"message": "Service deleted successfully"}
>>>>>>> 487dbc7a72b152e91eaf9da07a372b3610d3c52b
