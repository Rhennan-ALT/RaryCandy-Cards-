from fastapi import APIRouter
from bson import ObjectId
from database import poke_collection
from app.schemas.card_schemas import *
from app.services.card_services import *

router = APIRouter(tags=["Pokemon TCG"])

@router.get("/cards")
def list_cards():
    return get_all_card_services()

@router.post("/cards")
def create_cards(card: Card):
    return create_card_service(card)

@router.get("/cards/{card_id}")
def get_cards(card_id: str):
    return get_card_by_id_service(card_id)

@router.put("/cards/{card_id}")
def update_cards(card_id: str, card: Card):
    return update_card_service(card_id, card)

@router.delete("/cards/{card_id}")
def delete_cards(card_id: str):
    return delete_card_service(card_id)
