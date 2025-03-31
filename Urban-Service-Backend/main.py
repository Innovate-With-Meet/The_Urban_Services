from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional
from routes.RoleRoutes import router as role_router
from routes.UserRoutes import router as user_router
from routes.AdminRoutes import router as admin_router
from routes.ProviderRoutes import router as provider_router
from routes.Register_ProviderRoutes import router as register_provider_router
from fastapi.middleware.cors import CORSMiddleware
# from routes.UserRoutes import router as user_router

# from routes.ServicesRoutes import router as services_router
# from routes.BookingRoutes import router as booking_router
# from routes.PaymentRoutes import router as payment_router
# from routes.ReviewRoutes import router as review_router




app = FastAPI()
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/login/")



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    # allow_headers=["Authorization", "Content-Type"],  # Ensure Authorization is included

)
app.include_router(register_provider_router)
app.include_router(role_router)
app.include_router(user_router)
app.include_router(admin_router)
app.include_router(provider_router)
# app.include_router(user_router)

# app.include_router(services_router)
# app.include_router(booking_router)
# app.include_router(payment_router)
# app.include_router(review_router)
