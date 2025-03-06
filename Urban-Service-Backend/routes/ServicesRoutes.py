from fastapi import APIRouter
from controllers.ServicesController import addService, getAllServices, getService, updateService, deleteService
from models.ServicesModel import Services

router = APIRouter()

@router.post("/service/")
async def post_service(service: Services):
    return await addService(service)

@router.get("/services/")
async def get_services():
    return await getAllServices()

@router.get("/service/{service_id}")
async def get_service(service_id: str):
    return await getService(service_id)

@router.put("/service/{service_id}")
async def put_service(service_id: str, service: Services):
    return await updateService(service_id, service)

@router.delete("/service/{service_id}")
async def delete_service(service_id: str):
    return await deleteService(service_id)
