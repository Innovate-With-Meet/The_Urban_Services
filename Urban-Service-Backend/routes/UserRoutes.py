# from fastapi import APIRouter, Depends
# from fastapi.security import OAuth2PasswordBearer
# from controllers.UserController import addUser, getAllUsers,loginUser,deleteUser
# # ,get_current_user
# # from controllers.UserProfileController import getUserProfile
# # ,getUserProfile, get_current_user,
# from models.UserModel import User,UserOut,UserLogin

# # oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/login/")

# router = APIRouter()
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login/")

# @router.post("/user/")
# async def post_user(user:User):
#     return await addUser(user)
# # for adding new user

# @router.get("/users/")
# async def get_users():
#     return await getAllUsers()
# # for getuser that are in the database

# @router.delete("/user/{_id}")   
# async def delete_user(_id:str):
#      return await deleteUser(_id)
# # delete the user from the database

# @router.post("/user/login/")
# async def login_user(user:UserLogin):
#         return await loginUser(user)
# # login the user form the front end 

# @router.get("/user/profile/", response_model=dict)
# async def user_profile(current_user: dict = Depends(oauth2_scheme)):
#     return await getUserProfile(current_user)

# # @router.get("/user/profile/")
# # async def user_profile(current_user: dict = Depends(getUserProfile)):
# #     return current_user


from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from controllers.UserController import (
    addUser, getAllUsers, loginUser, deleteUser, get_current_user, updateUserProfile
)
from models.UserModel import User, UserOut, UserLogin

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login/")

# Register a new user
@router.post("/user/")
async def post_user(user: User):
    return await addUser(user)

# Fetch all registered users
@router.get("/users/")
async def get_users():
    return await getAllUsers()

# Delete a user by ID
@router.delete("/user/{_id}")   
async def delete_user(_id: str):
    return await deleteUser(_id)

# User login and generate JWT token
@router.post("/user/login/")
async def login_user(user: UserLogin):
    return await loginUser(user)

# Fetch current user profile
@router.get("/user/profile/")
async def user_profile(current_user: dict = Depends(get_current_user)):
    print(current_user)
    return {
        "message": "User Profile Data",
        "user": current_user
    }
@router.put("/user/update-profile/")
async def update_profile(data: dict, current_user: dict = Depends(get_current_user)):
    return await updateUserProfile(data, current_user)