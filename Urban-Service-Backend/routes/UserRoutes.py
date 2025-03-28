from fastapi import APIRouter, Depends
from controllers.UserController import addUser, get_current_user,getAllUsers,loginUser,deleteUser,getUserProfile
from models.UserModel import User,UserOut,UserLogin

router = APIRouter()

@router.post("/user/")
async def post_user(user:User):
    return await addUser(user)

@router.get("/users/")
async def get_users():
    return await getAllUsers()

@router.delete("/user/{_id}")   
async def delete_user(_id:str):
     return await deleteUser(_id)

@router.post("/user/login/")
async def login_user(user:UserLogin):
        return await loginUser(user)

@router.get("/userprofile/")
async def user_profile(user: dict = Depends(get_current_user)):
    return await getUserProfile(user)