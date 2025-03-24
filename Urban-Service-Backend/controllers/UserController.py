from models.UserModel import User, UserOut, UserLogin
from bson import ObjectId
from config.database import end_user_collection
from fastapi import HTTPException
from fastapi.responses import JSONResponse
import bcrypt

async def addUser(user: User): # come from the model and perform the "OR"
    result = await end_user_collection.insert_one(user.dict(exclude_unset=True))
    return JSONResponse(content={"message": "End User Added Successfully"}, status_code=201)

async def getAllUsers(): # get all user that is register by the getalluser fun
    users = await end_user_collection.find().to_list(length=None) # it find the all user in end_user_coection by the list
    return [UserOut(**user) for user in users] # here it get all user by circulating the loop by the list, and send it to the UserOut function that is registerd in the model

async def deleteUser(_id:str):
    result = await end_user_collection.delete_many({"_id":ObjectId(_id)})
    print("After delete User", result)
    return {"Message": "User Is Deleted ,Come Again for Destruction"}


async def loginUser(request: UserLogin): # it verify the "email" and "password" param that is stored in the db by the [adduser.controller] and [User.Model] and then if credential is found than give the access or return the message
    foundUser = await end_user_collection.find_one({"email": request.email})
    if foundUser is None:
        raise HTTPException(status_code=404, detail="User not found")

    foundUser["_id"] = str(foundUser["_id"])

    if "password" in foundUser and bcrypt.checkpw(request.password.encode(), foundUser["password"].encode()):
        return {"message": "User login success", "user": UserOut(**foundUser)}
    # logic here for given the credential is correct and access of the account 
    else:
        raise HTTPException(status_code=401, detail="Invalid password")
    # or give the error