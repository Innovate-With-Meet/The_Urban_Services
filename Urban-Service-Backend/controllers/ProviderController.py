from models.ProviderModel import ProviderUser,ProviderUserOut,ProviderUserLogin
from bson import ObjectId
from config.database import provider_user_collection
from fastapi import HTTPException, Depends
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt

SECRET_KEY = "your_secret_provider_key"
ALGORITHM = "RS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 300

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


async def addProviderUser(provider_user: ProviderUser):
    result = await provider_user_collection.insert_one(provider_user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "Provider User Added Successfully"}, status_code=201)

async def getAllProviderUsers():
    provider_users = await provider_user_collection.find().to_list(length=None)
    return [ProviderUserOut(**{**provider_user, "providerId": str(provider_user["_id"])}) for provider_user in provider_users]

async def deleteProviderUser(_id:str):
    result = await provider_user_collection.delete_many({"_id":ObjectId(_id)})
    print("After delete Provider User", result)
    return {"Message": "Provider User Is Deleted"}

async def loginProviderUser(request: ProviderUserLogin):
    foundProviderUser = await provider_user_collection.find_one({"email": request.email})
    if foundProviderUser is None:
        raise HTTPException(status_code=404, detail="Provider User not found")
    
    foundProviderUser["_id"] = str(foundProviderUser["_id"])

    if "password" in foundProviderUser and bcrypt.checkpw(request.password.encode(), foundProviderUser["password"].encode()):
        access_token = create_access_token(data={"sub": foundProviderUser["email"]})

        return {
            "message": "User login success",
            "access_token": access_token,
            "token_type": "bearer",
            "user": ProviderUserOut(**foundProviderUser)
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid password")