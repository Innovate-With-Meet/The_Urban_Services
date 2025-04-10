from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional
import bcrypt   # pip install bcrypt

class User(BaseModel): #Post Method
    name: str
    email: str
    password: str
    address: Optional[str] = None  # Optional field for address
    profile_image: Optional[str] = None
    is_active: bool = True  # New field

    @validator("password", pre=True, always=True)
    def encrypt_password(cls, v):
        if v is None:
            return None
        return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

class UserOut(BaseModel): #Get method
    id: str = Field(alias="_id") # it gives the extra _id by the help of alias and get the id, name, emai,password to the user
    name: str
    email: Optional[str] = None
    password: Optional[str] = None # it gives the encrypted password to the end_user
    address: Optional[str] = None  # Optional field for address
    profile_image: Optional[str] = None    # Optional field for image
    is_active: bool = True  # New field

    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v

class UserLogin(BaseModel):
    email: str
    password: str
