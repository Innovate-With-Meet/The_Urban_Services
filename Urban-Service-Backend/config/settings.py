import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

# 🔹 Admin-controlled client credentials
CLIENT_ID = os.getenv("CLIENT_ID", "your_client_id")
CLIENT_SECRET = os.getenv("CLIENT_SECRET", "your_client_secret")
