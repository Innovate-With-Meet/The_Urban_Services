from pydantic import BaseModel, Field, validator
from bson import ObjectId

class Register_Provider(BaseModel):
    firstName: str
    lastName: str
    providerEmail: str
    specialiseService: str
    specialiseSubService: str
    Experience: str  # Fixed Typo
    GstNo: str
    Location: str
    Rating: str

class Register_Provider_Out(BaseModel):
    providerId: str = Field(alias="_id")
    firstName: str
    lastName: str
    providerEmail: str
    specialiseService: str
    specialiseSubService: str
    Experience: str
    GstNo: str
    Location: str
    Rating: str

    @validator("providerId", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v
