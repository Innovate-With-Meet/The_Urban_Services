<<<<<<< HEAD
from fastapi import APIRouter
from controllers.ReviewController import addReview, getAllReviews, getReviewsByService, getReview, updateReview, deleteReview
from models.ReviewModel import Review

router = APIRouter()

@router.post("/review/")
async def post_review(review: Review):
    return await addReview(review)

@router.get("/reviews/")
async def get_reviews():
    return await getAllReviews()

@router.get("/reviews/service/{service_id}")
async def get_reviews_by_service(service_id: str):
    return await getReviewsByService(service_id)

@router.get("/review/{review_id}")
async def get_review(review_id: str):
    return await getReview(review_id)

@router.put("/review/{review_id}")
async def put_review(review_id: str, review: Review):
    return await updateReview(review_id, review)

@router.delete("/review/{review_id}")
async def delete_review(review_id: str):
    return await deleteReview(review_id)
=======
from fastapi import APIRouter
from controllers.ReviewController import addReview, getAllReviews, getReviewsByService, getReview, updateReview, deleteReview
from models.ReviewModel import Review

router = APIRouter()

@router.post("/review/")
async def post_review(review: Review):
    return await addReview(review)

@router.get("/reviews/")
async def get_reviews():
    return await getAllReviews()

@router.get("/reviews/service/{service_id}")
async def get_reviews_by_service(service_id: str):
    return await getReviewsByService(service_id)

@router.get("/review/{review_id}")
async def get_review(review_id: str):
    return await getReview(review_id)

@router.put("/review/{review_id}")
async def put_review(review_id: str, review: Review):
    return await updateReview(review_id, review)

@router.delete("/review/{review_id}")
async def delete_review(review_id: str):
    return await deleteReview(review_id)
>>>>>>> 487dbc7a72b152e91eaf9da07a372b3610d3c52b
