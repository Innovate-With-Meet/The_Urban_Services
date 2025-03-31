# from models.UserModel import User, UserOut, UserLogin
# from bson import ObjectId
# from config.database import end_user_collection
# from fastapi import HTTPException, Depends
# from fastapi.responses import JSONResponse
# import bcrypt
# from datetime import datetime, timedelta
# import jwt
# from fastapi.security import OAuth2PasswordBearer
# from config.settings import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES


# # SECRET_KEY = "your_secret_key"
# # ALGORITHM = "HS256"
# # ACCESS_TOKEN_EXPIRE_MINUTES = 30


# def create_access_token(data: dict, expires_delta: timedelta | None = None):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
#     to_encode.update({"exp": expire})
#     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# async def addUser(user: User): # come from the model and perform the "OR"
#     result = await end_user_collection.insert_one(user.dict(exclude_unset=True))
#     return JSONResponse(content={"message": "End User Added Successfully"}, status_code=201)
# # to add the new user in database 

# async def getAllUsers(): # get all user that is register by the getalluser fun
#     users = await end_user_collection.find().to_list(length=None) # it find the all user in end_user_coection by the list
#     return [UserOut(**user) for user in users] # here it get all user by circulating the loop by the list, and send it to the UserOut function that is registerd in the model
# # for the get all register user from database

# async def deleteUser(_id:str):
#     result = await end_user_collection.delete_many({"_id":ObjectId(_id)})
#     print("After delete User", result)
#     return {"Message": "User Is Deleted ,Come Again for Destruction"}
# # delete the user from the database

# async def loginUser(request: UserLogin): # it verify the "email" and "password" param that is stored in the db by the [adduser.controller] and [User.Model] and then if credential is found than give the access or return the message
#     foundUser = await end_user_collection.find_one({"email": request.email}) # in the end_user_collection db find one data that is email from the user
#     # if user = none.user then
#     # throw error
#     if foundUser is None:
#         raise HTTPException(status_code=404, detail="User not found")

# # convert the founduser[_id] = str 
#     foundUser["_id"] = str(foundUser["_id"])

# # chcck the founduser has a filed password, and password  is coming from input is same as in the backend and return the true if done
#     if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
#         # access_token = create_access_token(data={"sub": foundUser["email"]})
#         access_token = create_access_token(data={"sub": foundUser["_id"]})


#         return {
#             "message": "User login success",
#             "access_token": access_token,
#             "token_type": "bearer",
#             "user": UserOut(**foundUser)
#         }
#     else:
#         raise HTTPException(status_code=401, detail="Invalid password")
# # 


# # oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/login/")

#     # Get Current User

    
# # async def get_current_user(token: str = Depends(oauth2_scheme)):
# #     print(f"Received Token: {token}")
# #     try:
# #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
# #         print(f"Decoded Payload: {payload}")
        
# #         user_id = payload.get("sub")  # Using 'sub' to store user_id
# #         if user_id is None:
# #             raise HTTPException(status_code=401, detail="Invalid token")

# #         user = await end_user_collection.find_one({"_id": ObjectId(user_id)})
# #         if not user:
# #             raise HTTPException(status_code=404, detail="User not found")

# #         user["_id"] = str(user["_id"])  # Convert ObjectId to string
# #         return user

# #     except jwt.ExpiredSignatureError:
# #         raise HTTPException(status_code=401, detail="Token expired")
# #     except jwt.InvalidTokenError:
# #         raise HTTPException(status_code=401, detail="Invalid token")
    

# #     # Get Current User
# # async def getUserProfile(current_user: dict = Depends(get_current_user)):
# #     """Return only the logged-in user's profile"""
# #     return {
# #         "message": "User Profile Data",
# #         "user": UserOut(**current_user)
# #     }


# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/login/")

# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     try:
#         # Decode the JWT token
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         user_id = payload.get("sub")  # Extract user_id from token
        
#         if not user_id:
#             raise HTTPException(status_code=401, detail="Invalid token")

#         # Fetch the user from the database
#         user = await end_user_collection.find_one({"_id": ObjectId(user_id)})
#         if not user:
#             raise HTTPException(status_code=404, detail="User not found")

#         user["_id"] = str(user["_id"])  # Convert ObjectId to string
#         return user

#     except jwt.ExpiredSignatureError:
#         raise HTTPException(status_code=401, detail="Token expired")
#     except jwt.InvalidTokenError:
#         raise HTTPException(status_code=401, detail="Invalid token")


# from models.UserModel import User, UserOut, UserLogin
# from bson import ObjectId
# from config.database import end_user_collection
# from fastapi import HTTPException, Depends
# from fastapi.responses import JSONResponse
# import bcrypt
# from datetime import datetime, timedelta
# import jwt
# from fastapi.security import OAuth2PasswordBearer
# # from config.settings import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES

# SECRET_KEY="abcd"
# ALGORITHM="HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES="30"

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login/")

# # Create Access Token Function
# def create_access_token(data: dict, expires_delta: timedelta | None = None):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + (expires_delta or timedelta(minutes=30))
#     to_encode.update({"exp": expire})
#     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# # Register a New User
# async def addUser(user: User):
#     user.password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt()).decode()
#     result = await end_user_collection.insert_one(user.dict(exclude_unset=True))
#     return JSONResponse(content={"message": "End User Added Successfully"}, status_code=201)


# # Get All Registered Users
# async def getAllUsers():
#     users = await end_user_collection.find().to_list(length=None)
#     return [UserOut(**user) for user in users]


# # Delete a User by ID
# async def deleteUser(_id: str):
#     result = await end_user_collection.delete_many({"_id": ObjectId(_id)})
#     return {"Message": "User Deleted Successfully"}


# # User Login and JWT Token Generation
# async def loginUser(request: UserLogin):
#     foundUser = await end_user_collection.find_one({"email": request.email})

#     if not foundUser:
#         raise HTTPException(status_code=404, detail="User not found")

#     foundUser["_id"] = str(foundUser["_id"])

#     if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
#         access_token = create_access_token(data={"sub": foundUser["_id"]})

#         return {
#             "message": "User login success",
#             "access_token": access_token,
#             "token_type": "bearer",
#             "user": UserOut(**foundUser),
#         }
#     else:
#         raise HTTPException(status_code=401, detail="Invalid password")


# # Get Current Logged-in User
# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     print("🔹 Received Token:", token)  # Debugging: Print the token

#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         print("🔹 Decoded Payload:", payload)  # Debugging: Print decoded JWT
        
#         user_id = payload.get("sub")
#         if not user_id:
#             raise HTTPException(status_code=401, detail="Invalid token: No user ID")

#         user = await end_user_collection.find_one({"_id": ObjectId(user_id)})
#         print("🔹 Retrieved User:", user)  # Debugging: Print user from DB
        
#         if not user:
#             raise HTTPException(status_code=404, detail="User not found")

#         user["_id"] = str(user["_id"])
#         return user

#     except jwt.ExpiredSignatureError:
#         raise HTTPException(status_code=401, detail="Token expired")
#     except jwt.InvalidTokenError:
#         raise HTTPException(status_code=401, detail="Invalid token format")


# # Get Logged-in User's Profile
# async def getUserProfile(current_user: dict = Depends(get_current_user)):
#     return {
#         "message": "User Profile Data",
#         "user": UserOut(**current_user)
#     }

from models.UserModel import User, UserOut, UserLogin
from bson import ObjectId
from config.database import end_user_collection
from fastapi import HTTPException, Depends
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer

# Configuration
SECRET_KEY = "abcd"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login/")

# Create Access Token Function
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Register a New User
async def addUser(user: User):
    # Hash the user's password
    user.password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt()).decode()
    # Insert the user into the database
    result = await end_user_collection.insert_one(user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "End User Added Successfully"}, status_code=201)

# Get All Registered Users
async def getAllUsers():
    # Retrieve all users from the database
    users = await end_user_collection.find().to_list(length=None)
    return [UserOut(**user) for user in users]

# Delete a User by ID
async def deleteUser(_id: str):
    # Delete the user with the given ID
    result = await end_user_collection.delete_many({"_id": ObjectId(_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User Deleted Successfully"}

# User Login and JWT Token Generation
async def loginUser(request: UserLogin):
    # Find the user by email
    foundUser = await end_user_collection.find_one({"email": request.email})
    if not foundUser:
        raise HTTPException(status_code=404, detail="User not found")

    # Convert ObjectId to string
    foundUser["_id"] = str(foundUser["_id"])

    # Verify the password
    if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
        # Generate JWT token
        access_token = create_access_token(data={"sub": foundUser["_id"]})
        return {
            "message": "User login success",
            "access_token": access_token,
            "token_type": "bearer",
            "user": UserOut(**foundUser),
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid password")

# Get Current Logged-in User
async def get_current_user(token: str = Depends(oauth2_scheme)):
    print("🔹 Received Token:", token)  # Debugging: Print the token

    try:
        # Decode the JWT token
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print("🔹 Decoded Payload:", payload)  # Debugging: Print decoded JWT

        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid token: No user ID")

        # Retrieve the user from the database
        user = await end_user_collection.find_one({"_id": ObjectId(user_id)})
        print("🔹 Retrieved User:", user)  # Debugging: Print user from DB

        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        # Convert ObjectId to string
        user["_id"] = str(user["_id"])
        return user

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token format")

# Get Logged-in User's Profile
async def getUserProfile(current_user: dict = Depends(get_current_user)):
    return {
        "message": "User Profile Data",
        "user": UserOut(**current_user)
    }

# Update User Profile (Address and Image)
async def updateUserProfile(data: dict, current_user: dict):
    user_id = current_user["_id"]
    update_data = {key: value for key, value in data.items() if value is not None}  # Only include non-null fields
    result = await end_user_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": update_data}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=400, detail="Failed to update profile")
    return {"message": "Profile updated successfully"}