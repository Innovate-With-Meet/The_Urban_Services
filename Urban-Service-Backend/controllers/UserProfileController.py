# from fastapi import Depends, HTTPException
# from bson import ObjectId
# from config.database import end_user_collection
# from controllers.UserController import get_current_user

# async def getUserProfile(current_user: dict = Depends(get_current_user)):
#     # Fetch full user data from DB using user ID
#     user_data_1 = await end_user_collection.find_one({"_id": ObjectId(current_user["_id"])})
#     if not user_data_1:
#         raise HTTPException(status_code=404, detail="User data not found")

#     user_data_1["_id"] = str(user_data_1["_id"])  # Convert ObjectId to string

#     return {
#         "message": "User Profile Data Retrieved",
#         "user": {
#             "id": user_data_1["_id"],
#             "email": user_data_1["email"],
#             "name": user_data_1.get("name", "No Name")  # Default if name field is missing
#         }
#     }