# from config.database import role_collection # roles
# from models.RoleModel import Role,RoleOut
# from bson import ObjectId

# #business logic function

# async def getAllRoles():
#     #find --> select * from roles
#     roles = await role_collection.find().to_list()
#     print("roles...................",roles)
#     return [RoleOut(**role) for role in roles]

# #//json..
# async def addRole(role:Role):
#     #role -->Object.. json
#     result = await role_collection.insert_one(role.dict())
#     print(result)
#     return {"message":"Role Created Successfully.."}
    

# #delete from roles where _id = ?Y

# # async def deleteRole(roleId:str):
# #     result = await role_collection.delete_one({"_id":ObjectId(roleId)})
# #     print("after delete result",result)
# #     return {"Message":"Role Deleted Successfully!"}


# async def getRoleById(roleId:str):
#     result = await role_collection.find_one({"_id":ObjectId(roleId)})
#     print(result)    
#     #return {"message":"role fetched successfully!"}
#     #return result
#     return RoleOut(**result)




# from config.database import role_collection  # roles
# from models.RoleModel import Role, RoleOut
# from bson import ObjectId
# from fastapi import HTTPException

# # Get all roles
# async def getAllRoles():
#     roles = await role_collection.find().to_list(length=None)
#     return [RoleOut(**role) for role in roles]

# # Add a new role
# async def addRole(role: Role):
#     result = await role_collection.insert_one(role.dict(exclude_unset=True))
#     return {"message": "Role Created Successfully."}

# # Get role by ID
# async def getRoleById(roleId: str):
#     result = await role_collection.find_one({"_id": ObjectId(roleId)})

#     if not result:
#         raise HTTPException(status_code=404, detail="Role not found")
    
#     return RoleOut(**result)

from config.database import role_collection # roles
from models.RoleModel import Role,RoleOut
from bson import ObjectId

#business logic function

async def getAllRoles():
    #find --> select * from roles
    roles = await role_collection.find().to_list()
    print("roles...................",roles)
    return [RoleOut(**role) for role in roles]

#//json..
async def addRole(role:Role):
    #role -->Object.. json
    result = await role_collection.insert_one(role.dict())
    print(result)
    return {"message":"Role Created Successfully.."}
    

#delete from roles where _id = ?

async def deleteRole(roleId:str):
    result = await role_collection.delete_one({"_id":ObjectId(roleId)})
    print("after delete result",result)
    return {"Message":"Role Deleted Successfully!"}


async def getRoleById(roleId:str):
    result = await role_collection.find_one({"_id":ObjectId(roleId)})
    print(result)    
    #return {"message":"role fetched successfully!"}
    #return result
    return RoleOut(**result)




    