from fastapi import APIRouter
from controllers.ProviderRegistrationController import ProviderRegistration, getAllRegisterProvider, deleteRegisterProvider
from models.ProviderRegistrationModel import Register_Provider

router = APIRouter()

@router.post("/register_provider/")
async def post_register_provider(provider_registration: Register_Provider):
    return await ProviderRegistration(provider_registration)

@router.get("/register_providers/")
async def get_register_providers():
    return await getAllRegisterProvider()

@router.delete("/register_provider/{_id}")
async def delete_register_provider(_id: str):
    return await deleteRegisterProvider(_id)
