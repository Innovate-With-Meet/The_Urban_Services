# from pydantic import BaseModel,Field,validator
# from bson import ObjectId
# from typing import Optional, Dict, Any
# import bcrypt   #pip install bcrypt

# #  first the user registration and then after the login : post : get : verfied of email and password
# # User: post, USerOut: get, UserLogin: post

# # for the registeration of the user
# # for the post method for the registration
# class User(BaseModel):
#     firstName:str
#     lastName:str
#     age:int
#     status:bool
#     role_id:str
#     email:str
#     password:str
    
#     # for the password of the user
#     @validator("password",pre=True,always=True)
#     def encrypt_password(cls,v): # encrypt the password
#         if v is None:
#             return None
#         return bcrypt.hashpw(v.encode("utf-8"),bcrypt.gensalt())

# # for the get method of the user
# # that get by the get router and controller
# class UserOut(User):
#     id:str = Field(alias="_id")    
#     #role:str = Field(alias="role_id")
#     #[{firstna,,,,role:{"onjectid",des,name}},{},{}]
#     role:Optional[Dict[str,Any]] = None
#     email:Optional[str] = None
#     password:Optional[str] = None
    
#     @validator("id",pre=True,always=True)
#     def convert_objectId(cls,v):
#         if isinstance(v,ObjectId):
#             return str(v)
#         return v
    
#     @validator("role", pre=True, always=True)
#     def convert_role(cls, v):
#         if isinstance(v, dict) and "_id" in v:
#             v["_id"] = str(v["_id"])  # Convert role _id to string
#         return v

# # for the login of the user
# class UserLogin(BaseModel):
#     email:str
#     password:str    

# from pydantic import BaseModel, Field, validator
# from bson import ObjectId
# from typing import Optional, Dict, Any
# import bcrypt   # pip install bcrypt

# # for the registration of the user
# # for the post method for the registration
# class User(BaseModel):
#     name: str
#     email: str
#     password: str
#     # for the password of the user
#     @validator("password", pre=True, always=True)
#     def encrypt_password(cls, v):  # encrypt the password
#         if v is None:
#             return None
#         return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt())

# # for the get method of the user
# # that get by the get router and controller
# class UserOut(BaseModel):
#     id: str = Field(alias="_id")
    
#     name: str
#     email: Optional[str] = None
#     password: Optional[str] = None
    
#     @validator("id", pre=True, always=True)
#     def convert_objectId(cls, v):
#         if isinstance(v, ObjectId):
#             return str(v)
#         return v

# # for the login of the user
# class UserLogin(BaseModel):
#     email: str
#     password: str

# from pydantic import BaseModel, Field, field_validator
# from bson import ObjectId
# from typing import Optional, Dict, Any
# import bcrypt

# class User(BaseModel):
#     firstName: str
#     lastName: str
#     age: int
#     status: bool
#     role_id: str
#     email: str
#     password: str

#     @field_validator("password", mode="before")
#     def encrypt_password(cls, v):
#         if v is None:
#             return None
#         return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

# class UserOut(User):
#     id: str = Field(alias="_id")    
#     role: Optional[Dict[str, Any]] = None
#     email: Optional[str] = None
#     password: Optional[str] = None

#     @field_validator("id", mode="before")
#     def convert_objectId(cls, v):
#         return str(v) if isinstance(v, ObjectId) else v

#     @field_validator("role", mode="before")
#     def convert_role(cls, v):
#         if isinstance(v, dict) and "_id" in v:
#             v["_id"] = str(v["_id"])  # Convert role _id to string
#         return v

# class UserLogin(BaseModel):
#     email: str
#     password: str
from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional
import bcrypt   # pip install bcrypt

class User(BaseModel):
    name: str
    email: str
    password: str
    
    @validator("password", pre=True, always=True)
    def encrypt_password(cls, v):
        if v is None:
            return None
        return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

class UserOut(BaseModel):
    id: str = Field(alias="_id")
    name: str
    email: Optional[str] = None
    password: Optional[str] = None
    
    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v

class UserLogin(BaseModel):
    email: str
    password: str