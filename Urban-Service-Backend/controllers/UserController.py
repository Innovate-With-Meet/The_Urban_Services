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
