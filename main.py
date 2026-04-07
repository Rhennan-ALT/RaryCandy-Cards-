from fastapi import FastAPI
from app.routers.card_routers import router

app = FastAPI()
app.include_router(router)

@app.get("/")
def home():
    return {"Message": "Crie sua Propria Carta Pokemon!"}