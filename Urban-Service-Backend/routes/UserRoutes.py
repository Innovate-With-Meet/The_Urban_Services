
# # from fastapi import APIRouter
# # from controllers.UserController import adduser,getAllusers,loginUser
# # from models.UserModel import User,UserOut,UserLogin

# # router = APIRouter()

# # @router.get("/users/")
# # async def get_users():
# #     return await getAllusers()

# # @router.post("/user/")
# # async def post_user(user:User):
# #     return await adduser(user)

# # @router.post("/user/login/")
# # async def login_user(user:UserLogin):
# #     return await loginUser(user)

# from fastapi import APIRouter, HTTPException
# from controllers.UserController import addUser, getAllUsers, loginUser
# from models.UserModel import User, UserOut, UserLogin
# from typing import List

# router = APIRouter()

# @router.get("/users/", response_model=List[UserOut])
# async def get_users():
#     try:
#         return await getAllUsers()
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @router.post("/user/", response_model=dict)
# async def post_user(user: User):
#     try:
#         return await addUser(user)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @router.post("/user/login/", response_model=dict)
# async def login_user(user: UserLogin):
#     try:
#         return await loginUser(user)
#     except Exception as e:
#         raise HTTPException(status_code=401, detail=str(e))
from fastapi import APIRouter
from controllers.UserController import addUser,getAllUsers,loginUser
from models.UserModel import User,UserOut,UserLogin

router = APIRouter()

@router.post("/user/")
async def post_user(user:User):
    return await addUser(user)

@router.get("/users/")
async def get_users():
    return await getAllUsers()

@router.post("/user/login/")
async def login_user(user:UserLogin):
    return await loginUser(user)