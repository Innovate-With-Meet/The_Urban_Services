from typing import Optional
from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from fastapi.security import OAuth2PasswordBearer
from controllers.ContactController import (addContact, getAllContacts, deleteContact
    
)
from models.ContactModel import Contact, ContactOut
from config.database import contact_collection
from bson import ObjectId
import shutil
import os


router = APIRouter()

@router.post("/contact/")
async def post_contact(contact: Contact):

    try: 
        contact_result = await addContact(contact)
        return contact_result
    except Exception as e:
        raise HTTPException(status_code=500, details=str(e))

@router.get("/contacts/")
async def get_contacts():
    return await getAllContacts()

@router.delete("contact/{_id}")
async def delete_contact(_id: str):
    return await deleteContact(_id)

