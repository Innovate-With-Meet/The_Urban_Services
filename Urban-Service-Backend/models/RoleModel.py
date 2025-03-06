# from pydantic import BaseModel,Field, validator
# from bson import ObjectId

# # for the role of the user
# # for the post method
# class Role(BaseModel):
#     role_name: str
#     role_description: str

# # for the get method

# class RoleOut(Role):
#     id:str = Field(alias='_id')

#     @validator('id', pre=True, always=True)
#     def convert_object_id(cls, v):
#         if isinstance(v,ObjectId):
#             return str(v)
# #         return v
# from pydantic import BaseModel, Field, field_validator
# from bson import ObjectId

# # for creating a role
# class Role(BaseModel):
#     role_name: str
#     role_description: str

# # for fetching roles
# class RoleOut(Role):
#     id: str = Field(alias="_id")

#     @field_validator('id', mode='before')
#     def convert_object_id(cls, v):
#         return str(v) if isinstance(v, ObjectId) else v

from pydantic import BaseModel,Field,validator
from bson import ObjectId

#_id:field pk obbjectId

class Role(BaseModel):
    name:str
    description:str


#response class
class RoleOut(Role):
    id:str =Field(alias="_id")  
    
    @validator("id", pre=True, always=True)
    def convert_objectId(cls,v):
        if isinstance(v,ObjectId):
            return str(v)  
        
        return v