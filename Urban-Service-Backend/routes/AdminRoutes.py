from fastapi import APIRouter
from controllers.AdminController import addAdminUser,getAllAdminUsers,deleteAdminUser,loginAdminUser
from models.AdminModel import AdminUser,AdminUserOut,AdminUserLogin

router = APIRouter()

@router.post("/admin/")
async def post_admin(admin_user:AdminUser):
    return await addAdminUser(admin_user)

@router.get("/admins/")
async def get_admins():
    return await getAllAdminUsers()

@router.delete("/admin/{_id}")
async def delete_admin(_id:str):
    return await deleteAdminUser(_id)

@router.post("/admin/login/")
async def login_admin(admin_user:AdminUserLogin):
    return await loginAdminUser(admin_user)
