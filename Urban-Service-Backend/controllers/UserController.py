from models.UserModel import User, UserOut, UserLogin
from bson import ObjectId
from config.database import end_user_collection #database
from fastapi import HTTPException, Depends, UploadFile, Form, File, Request
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer
# from controllers.UserController import get_current_user  # Importing the authentication function

import shutil  # Import shutil for file operations

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
# For The Getting Profile Information From The Database

# Get Logged-in User's Profile
async def getUserProfile(request: Request,current_user: dict = Depends(get_current_user)):
    base_url = str(request.base_url)

    # If profile_image exists, prepend the base URL
    if current_user.get("profile_image"):
        current_user["profile_image"] = f"{base_url}{current_user['profile_image']}"

    return {
        "message": "User Profile Data",
        "user": UserOut(**current_user)
    }
# For Sending Profile Infomration to the User Profile Page

UPLOAD_FOLDER = "uploads/"

# For Updating User Profile
async def update_user_profile(
        address: str = Form(...),
        profile_image: UploadFile = File(...), 
        current_user: dict = Depends(get_current_user)):

    user_id = current_user["_id"]
    
    update_data = {
        "address": address,
        "status": True  # Set status to active by default
    }

    # Handle profile_image upload
    if profile_image:
        file_location = f"{UPLOAD_FOLDER}{user_id}_{profile_image.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(profile_image.file, buffer)
        
        update_data["profile_image"] = file_location  # Save file path in DB

    # Update user profile in the database
    result = await end_user_collection.update_one(
        {"_id": ObjectId(user_id)}, {"$set": update_data}
    )

    if result.modified_count == 0:
        raise HTTPException(status_code=400, detail="Profile update failed")

    return {"message": "Profile updated successfully and status set to active"}
