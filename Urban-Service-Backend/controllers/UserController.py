# from models.UserModel import User,UserOut,UserLogin
# from bson import ObjectId
# from config.database import user_collection,role_collection
# from fastapi import HTTPException
# from fastapi.responses import JSONResponse
# import bcrypt

# async def adduser(user:User):
#     user.role_id = ObjectId(user.role_id)
#     print("after type cast",user.role_id)
#     result = await user_collection.insert_one(user.dict())

#     return JSONResponse(content={"message":"User Added Successfully"},status_code=201)

# async def getAllusers():
#     users = await user_collection.find().to_list(length=None)
#     for user in users:
#         if "role_id" in user and isinstance(user["role_id"], ObjectId):
#             user["role_id"] = str(user["role_id"])

#         role = await role_collection.find_one({"_id":ObjectId(user["role_id"])})

#         if role:
#             role["id"] = str(role["_id"])
#             user["role"] = role
#     return [UserOut(**user) for user in users]
# async def loginUser(request:UserLogin):
# #async def loginUser(email:str,password:str):
#     #norma; password : plain text --> encr
    
#     foundUser = await user_collection.find_one({"email":request.email})
#     print(":foundUser",foundUser)
    
#     foundUser["_id"] = str(foundUser["_id"])
#     foundUser["role_id"] = str(foundUser["role_id"])
    
#     if foundUser is None:
#         raise HTTPException(status_code=404,detail="User not found")
#     #compare password
#     if "password" in foundUser and bcrypt.checkpw(request.password.encode(),foundUser["password"].encode()):
#         #database role.. roleid
#         role = await role_collection.find_one({"_id":ObjectId(foundUser["role_id"])})
#         foundUser["role"] = role
#         return {"message":"user login success","user":UserOut(**foundUser)}
#     else:
#         raise HTTPException(status_code=404,detail="Invalid password")
    
# from models.UserModel import User, UserOut, UserLogin
# from bson import ObjectId
# from config.database import user_collection, role_collection
# from fastapi import HTTPException
# from fastapi.responses import JSONResponse
# import bcrypt

# async def addUser(user: User):
#     user.role_id = ObjectId(user.role_id)  # Convert role_id to ObjectId
#     result = await user_collection.insert_one(user.dict(exclude_unset=True))
#     return JSONResponse(status_code=201, content={"message": "User created successfully"})

# async def getAllUsers():
#     users = await user_collection.find().to_list(length=None)

#     for user in users:
#         # Convert role_id to ObjectId and fetch role details
#         role = await role_collection.find_one({"_id": ObjectId(user["role_id"])})  
        
#         if role:
#             role["_id"] = str(role["_id"])  # Convert role _id to string
#             user["role"] = role

#     return [UserOut(**user) for user in users]

# async def loginUser(request: UserLogin):
#     foundUser = await user_collection.find_one({"email": request.email})

#     if foundUser is None:
#         raise HTTPException(status_code=404, detail="User not found")

#     foundUser["_id"] = str(foundUser["_id"])
#     foundUser["role_id"] = str(foundUser["role_id"])

#     if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
#         role = await role_collection.find_one({"_id": ObjectId(foundUser["role_id"])})
#         foundUser["role"] = role
#         return {"message": "User login success", "user": UserOut(**foundUser)}
#     else:
#         raise HTTPException(status_code=401, detail="Invalid password")
from models.UserModel import User, UserOut, UserLogin
from bson import ObjectId
from config.database import user_collection
from fastapi import HTTPException
from fastapi.responses import JSONResponse
import bcrypt

async def addUser(user: User):
    result = await user_collection.insert_one(user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "User Added Successfully"}, status_code=201)

async def getAllUsers():
    users = await user_collection.find().to_list(length=None)
    return [UserOut(**user) for user in users]

async def loginUser(request: UserLogin):
    foundUser = await user_collection.find_one({"email": request.email})
    if foundUser is None:
        raise HTTPException(status_code=404, detail="User not found")

    foundUser["_id"] = str(foundUser["_id"])

    if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
        return {"message": "User login success", "user": UserOut(**foundUser)}
    else:
        raise HTTPException(status_code=401, detail="Invalid password")