# backend/main.py
from bson import ObjectId
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, validator
from typing import List

class Contact(BaseModel):
    
    name: str
    email: str
    message: str

class ContactOut(BaseModel):
    id: str = Field(alias="_id") # it gives the extra _id by the help of alias and get the id, name, emai,password to the user
    name: str
    email: str
    message: str

    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v