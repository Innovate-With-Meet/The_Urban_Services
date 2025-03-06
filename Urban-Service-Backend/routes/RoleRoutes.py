# # from fastapi import APIRouter
# # from models.RoleModel import Role,RoleOut
# # from controllers.RoleController import getAllRoles,addRole,getRoleById #,deleteRole,

# # router = APIRouter()

# # @router.get("/roles/")
# # async def get_roles():
# #     return await getAllRoles() #promise
# # #{name:"",descr:""}


# # # @router.delete("/role/{roleId}")
# # # async def delete_role(roleId:str):
# # #     return await deleteRole(roleId)

# # @router.get("/role/{roleId}")
# # async def get_role_byId(roleId:str):
# #     return await getRoleById(roleId)


# # @router.post("/role/")
# # async def post_role(role:Role):
# #     return await addRole(role)
# from fastapi import APIRouter, HTTPException
# from models.RoleModel import Role, RoleOut
# from controllers.RoleController import getAllRoles, addRole, getRoleById  # deleteRole
# from typing import List

# router = APIRouter()

# @router.get("/roles/", response_model=List[RoleOut])
# async def get_roles():
#     try:
#         return await getAllRoles()
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @router.get("/role/{roleId}", response_model=RoleOut)
# async def get_role_by_id(roleId: str):
#     try:
#         return await getRoleById(roleId)
#     except Exception as e:
#         raise HTTPException(status_code=404, detail=str(e))

# @router.post("/role/", response_model=dict)
# async def post_role(role: Role):
#     try:
#         return await addRole(role)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# # Uncomment this if you plan to implement role deletion later
# # @router.delete("/role/{roleId}", response_model=dict)
# # async def delete_role(roleId: str):
# #     try:
# #         return await deleteRole(roleId)
# #     except Exception as e:
# #         raise HTTPException(status_code=500, detail=str(e))

from fastapi import APIRouter
from models.RoleModel import Role,RoleOut
from controllers.RoleController import getAllRoles,addRole,deleteRole,getRoleById

router = APIRouter()

@router.get("/roles/")
async def get_roles():
    return await getAllRoles() #promise
#{name:"",descr:""}

@router.post("/role/")
async def post_role(role:Role):
    return await addRole(role)


@router.delete("/role/{roleId}")
async def delete_role(roleId:str):
    return await deleteRole(roleId)

@router.get("/role/{roleId}")
async def get_role_byId(roleId:str):
    return await getRoleById(roleId)