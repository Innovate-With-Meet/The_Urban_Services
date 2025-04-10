import shutil
from models.AdminModel import AdminUser, AdminUserOut, AdminUserLogin
from bson import ObjectId
from config.database import admin_user_collection
from fastapi import File, Form, HTTPException, Depends, Request, UploadFile
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer

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

async def deleteAdminUser(_id: str):
    result = await admin_user_collection.delete_many({"_id": ObjectId(_id)})
    print("After delete Admin User", result)
    return {"Message": "Admin User Is Deleted"}

async def loginAdminUser(request: AdminUserLogin):
    found_admin_user = await admin_user_collection.find_one({"email": request.email})
    if found_admin_user is None:
        raise HTTPException(status_code=404, detail="Admin User not found")

    found_admin_user["_id"] = str(found_admin_user["_id"])

    if "password" in found_admin_user and bcrypt.checkpw(request.password.encode(), found_admin_user["password"].encode()):
        access_token = create_access_token(data={"sub": found_admin_user["_id"]})
        return {
            "message": "User login success",
            "access_token": access_token,
            "token_type": "bearer",
            "user": AdminUserOut(**found_admin_user)
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid password")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/admin/login/")

async def get_current_Adminuser(token: str = Depends(oauth2_scheme)):
    print("🔹 Received Token:", token)

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print("🔹 Decoded Payload:", payload)

        admin_user_id = payload.get("sub")
        if not admin_user_id:
            raise HTTPException(status_code=401, detail="Invalid token: No user ID")

        admin_user = await admin_user_collection.find_one({"_id": ObjectId(admin_user_id)})
        print("🔹 Retrieved User:", admin_user)

        if not admin_user:
            raise HTTPException(status_code=404, detail="User not found")

        admin_user["_id"] = str(admin_user["_id"])
        return admin_user

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token format")

async def getAdminUserProfile(request: Request, current_user: dict = Depends(get_current_Adminuser)):
    base_url = str(request.base_url)

    if current_user.get("profile_image"):
        current_user["profile_image"] = f"{base_url}{current_user['profile_image']}"

    return {
        "message": "User Profile Data",
        "user": AdminUserOut(**current_user)
    }

UPLOAD_FOLDER = "uploads/"

async def update_user_profile(
    address: str = Form(...),
    profile_image: UploadFile = File(...),
    current_user: dict = Depends(get_current_Adminuser)
):
    admin_user_id = current_user["_id"]
    update_data = {"address": address}

    if profile_image:
        file_location = f"{UPLOAD_FOLDER}{admin_user_id}_{profile_image.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(profile_image.file, buffer)

        update_data["profile_image"] = file_location

    result = await admin_user_collection.update_one(
        {"_id": ObjectId(admin_user_id)}, {"$set": update_data}
    )

    if result.modified_count == 0:
        raise HTTPException(status_code=400, detail="Profile update failed")

    return {"message": "Profile updated successfully"}
