from fastapi import HTTPException
from models.ReviewModel import Review
from config.database import db
from bson import ObjectId
from typing import List

# Collection reference
reviews_collection = db["reviews"]

# 🔹 Create a New Review
async def addReview(review: Review):
    review_data = review.dict()
    result = await reviews_collection.insert_one(review_data)
    review_data["_id"] = str(result.inserted_id)
    return review_data

# 🔹 Get All Reviews
async def getAllReviews():
    reviews = await reviews_collection.find().to_list(100)
    for review in reviews:
        review["_id"] = str(review["_id"])
    return reviews

# 🔹 Get Reviews by Service ID
async def getReviewsByService(service_id: str):
    reviews = await reviews_collection.find({"service_id": service_id}).to_list(100)
    for review in reviews:
        review["_id"] = str(review["_id"])
    return reviews

# 🔹 Get a Single Review by ID
async def getReview(review_id: str):
    review = await reviews_collection.find_one({"_id": ObjectId(review_id)})
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    review["_id"] = str(review["_id"])
    return review

# 🔹 Update a Review
async def updateReview(review_id: str, updated_review: Review):
    update_data = updated_review.dict(exclude_unset=True)
    result = await reviews_collection.update_one({"_id": ObjectId(review_id)}, {"$set": update_data})

    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Review not found or no changes made")

    updated_review = await reviews_collection.find_one({"_id": ObjectId(review_id)})
    updated_review["_id"] = str(updated_review["_id"])
    return updated_review

# 🔹 Delete a Review
async def deleteReview(review_id: str):
    result = await reviews_collection.delete_one({"_id": ObjectId(review_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Review not found")
    return {"message": "Review deleted successfully"}
