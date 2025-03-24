from fastapi import APIRouter
from controllers.ProviderController import addProviderUser,getAllProviderUsers,deleteProviderUser,loginProviderUser
from models.ProviderModel import ProviderUser,ProviderUserOut,ProviderUserLogin

router = APIRouter()

@router.post("/provider/")
async def post_provider(provider_user:ProviderUser):
    return await addProviderUser(provider_user)

@router.get("/providers/")
async def get_providers():
    return await getAllProviderUsers()

@router.delete("/provider/{_id}")
async def delete_provider(_id:str):
    return await deleteProviderUser(_id)

@router.post("/provider/login/")
async def login_provider(provider_user:ProviderUserLogin):
    return await loginProviderUser(provider_user)
