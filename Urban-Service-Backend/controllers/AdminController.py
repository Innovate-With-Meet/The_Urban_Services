from models.AdminModel import AdminUser,AdminUserOut,AdminUserLogin
from bson import ObjectId
from config.database import admin_user_collection
from fastapi import HTTPException, Depends
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt

SECRET_KEY = "your_secret_admin_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def addAdminUser(admin_user: AdminUser):
    result = await admin_user_collection.insert_one(admin_user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "Admin User Added Successfully"}, status_code=201)

async def getAllAdminUsers():
    admin_users = await admin_user_collection.find().to_list(length=None)
    return [AdminUserOut(**admin_user) for admin_user in admin_users]

async def deleteAdminUser(_id:str):
    result = await admin_user_collection.delete_many({"_id":ObjectId(_id)})
    print("After delete Admin User", result)
    return {"Message": "Admin User Is Deleted"}

async def loginAdminUser(request: AdminUserLogin):
    foundAdminUser = await admin_user_collection.find_one({"email": request.email})
    if foundAdminUser is None:
        raise HTTPException(status_code=404, detail="Admin User not found")
    
    foundAdminUser["_id"] = str(foundAdminUser["_id"])

    if "password" in foundAdminUser and bcrypt.checkpw(request.password.encode(), foundAdminUser["password"].encode()):
        access_token = create_access_token(data={"sub": foundAdminUser["email"]})

        return {
            "message": "User login success",
            "access_token": access_token,
            "token_type": "bearer",
            "user": AdminUserOut(**foundAdminUser)
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid password")