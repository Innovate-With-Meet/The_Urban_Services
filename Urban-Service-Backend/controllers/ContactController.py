from models.ContactModel import Contact,ContactOut
from bson import ObjectId
from config.database import contact_collection #database
from fastapi import HTTPException, Depends, UploadFile, Form, File, Request
from fastapi.responses import JSONResponse
import bcrypt
from datetime import datetime, timedelta
import jwt
import shutil  # Import shutil for file operations

async def addContact(contact: Contact):
    # Hash the user's password
    # Insert the user into the database
    try: 
        contact_result = await contact_collection.insert_one(contact.dict(exclude_unset=True))
        return JSONResponse(
            content={"message": "Contact message added successfully", "id": str(contact_result.inserted_id)},
            status_code=201
        )
    except Exception as e:
        raise Exception(f"Failed to add contact: {str(e)}")
    
    
async def getAllContacts():
    contacts = await contact_collection.find().to_list(length=None)
    return [ContactOut(**contact) for contact in contacts]

async def deleteContact(_id: str):
    contact_result = await contact_collection.delete_many({"_id": ObjectId(_id)})
    if contact_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    return {"message": "Contact Deleted Successfully"}