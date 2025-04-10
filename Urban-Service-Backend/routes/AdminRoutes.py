import os
import shutil
from typing import Optional
from bson import ObjectId
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from controllers.AdminController import UPLOAD_FOLDER, addAdminUser, get_current_Adminuser,getAllAdminUsers,deleteAdminUser,loginAdminUser
from models.AdminModel import AdminUser,AdminUserOut,AdminUserLogin
from config.database import end_user_collection #database

router = APIRouter()

@router.post("/admin/")
async def post_admin(admin_user:AdminUser):
    return await addAdminUser(admin_user)

@router.get("/admins/")
async def get_admins():
    return await getAllAdminUsers()

@router.delete("/admin/{_id}")
async def delete_admin(_id:str):
    return await deleteAdminUser(_id)

@router.post("/admin/login/")
async def login_admin(admin_user:AdminUserLogin):
    return await loginAdminUser(admin_user)

@router.get("/admin/profile/")
async def admin_profile(current_user:dict = Depends(get_current_Adminuser)):
    return {
        "message":"Admin Profile Data",
        "user":current_user
    }

@router.put("/user/ProfilePage/update")
async def update_user_profile(
    address: Optional[str] = Form(None),  # Accept address as a form field
    profile_image: Optional[UploadFile] = File(None),  # Accept profile_image as an optional file
    current_user: dict = Depends(get_current_Adminuser)
):
    Adminuser_id = current_user["_id"]  # Extract user ID from the authenticated user

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
        file_path = os.path.join(UPLOAD_FOLDER, f"{Adminuser_id}_{profile_image.filename}")

        # Save the uploaded file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(profile_image.file, buffer)

        update_data["profile_image"] = file_path  # Save file path in DB

    # Update the user's profile in the database
    if update_data:
        update_result = await end_user_collection.update_one(
            {"_id": ObjectId(Adminuser_id)},
            {"$set": update_data}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=400, detail="Failed to update profile")

    return {"message": "Profile updated successfully", "updated_fields": update_data}