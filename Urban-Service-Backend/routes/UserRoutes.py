from typing import Optional
from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from fastapi.security import OAuth2PasswordBearer
from controllers.UserController import (
    addUser, getAllUsers, loginUser, deleteUser, get_current_user
)
from models.UserModel import User, UserOut, UserLogin
from config.database import end_user_collection
from bson import ObjectId
import shutil
import os

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login/")
UPLOAD_FOLDER = "uploads/"  # Ensure this folder exists

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

@router.put("/user/profile/update")
async def update_user_profile(
    address: Optional[str] = Form(None),  # Accept address as a form field
    profile_image: Optional[UploadFile] = File(None),  # Accept profile_image as an optional file
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user["_id"]  # Extract user ID from the authenticated user

    update_data = {}

    # Handle address update
    if address:
        update_data["address"] = address

    # Handle profile_image upload
    if profile_image:
        # Ensure the upload directory exists
        if not os.path.exists(UPLOAD_FOLDER):
            os.makedirs(UPLOAD_FOLDER)

        # Define the path to save the profile picture
        file_path = os.path.join(UPLOAD_FOLDER, f"{user_id}_{profile_image.filename}")

        # Save the uploaded file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(profile_image.file, buffer)

        update_data["profile_image"] = file_path  # Save file path in DB

    # Update the user's profile in the database
    if update_data:
        update_result = await end_user_collection.update_one(
            {"_id": ObjectId(user_id)},
            {"$set": update_data}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=400, detail="Failed to update profile")

    return {"message": "Profile updated successfully", "updated_fields": update_data}