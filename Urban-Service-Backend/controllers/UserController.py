from models.UserModel import User, UserOut, UserLogin
from bson import ObjectId
from config.database import end_user_collection
from fastapi import HTTPException, Depends
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer


SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


async def addUser(user: User): # come from the model and perform the "OR"
    result = await end_user_collection.insert_one(user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "End User Added Successfully"}, status_code=201)

async def getAllUsers(): # get all user that is register by the getalluser fun
    users = await end_user_collection.find().to_list(length=None) # it find the all user in end_user_coection by the list
    return [UserOut(**user) for user in users] # here it get all user by circulating the loop by the list, and send it to the UserOut function that is registerd in the model

async def deleteUser(_id:str):
    result = await end_user_collection.delete_many({"_id":ObjectId(_id)})
    print("After delete User", result)
    return {"Message": "User Is Deleted ,Come Again for Destruction"}

# 
async def loginUser(request: UserLogin): # it verify the "email" and "password" param that is stored in the db by the [adduser.controller] and [User.Model] and then if credential is found than give the access or return the message
    foundUser = await end_user_collection.find_one({"email": request.email})
    if foundUser is None:
        raise HTTPException(status_code=404, detail="User not found")

    foundUser["_id"] = str(foundUser["_id"])

    if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
        # access_token = create_access_token(data={"sub": foundUser["email"]})
        access_token = create_access_token(data={"sub": foundUser["_id"]})


        return {
            "message": "User login success",
            "access_token": access_token,
            "token_type": "bearer",
            "user": UserOut(**foundUser)
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid password")
# 


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# 
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")  # Using 'sub' to store user_id
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")

        user = await end_user_collection.find_one({"_id": ObjectId(user_id)})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        user["_id"] = str(user["_id"])  # Convert ObjectId to string
        return user

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    
async def getUserProfile(current_user: dict = Depends(get_current_user)):
    """Return only the logged-in user's profile"""
    return {
        "message": "User Profile Data",
        "user": UserOut(**current_user)
    }