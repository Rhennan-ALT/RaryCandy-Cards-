from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.card_routers import router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500/frontend/index.html"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)

@app.get("/")
def home():
    return {"Message": "Crie sua Propria Carta Pokemon!"}