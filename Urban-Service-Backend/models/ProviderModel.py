from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional
import bcrypt   # pip install bcrypt

class ProviderUser(BaseModel):
    
    # providerId: str
    name: str
    email: str
    password: str

    @validator("password", pre=True, always=True)
    def encrypt_password(cls, v):
        if v is None:
            return None
        return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    
class ProviderUserOut(BaseModel):
    id: str = Field(alias="_id")
    # providerId: str   
    name: str
    email: Optional[str] = None
    password: Optional[str] = None
    
    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v
class ProviderUserLogin(BaseModel):
    # providerId: str
    email: str
    password: str