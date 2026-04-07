from app.repositories.card_repository import *
from bson import ObjectId

def format_card(card):
    card["_id"] = str(card["_id"])
    return card

def create_card_service(card):
    res = create_card(card.model_dump())
    return {"Mensage": "Card Created...", "id": str(res.inserted_id)}

def get_all_card_services():
    cards = get_all_cards()
    return [format_card(card) for card in cards]

def get_card_by_id_service(card_id):
    try:
        card = get_cards_by_id(card_id)
    except:
        return {"error": "invalid id"}
    if not card:
        return {"error": "card not found"}
    return format_card(card)

def update_card_service(card_id, card):
    try:
        res = update_card(card_id, card.model_dump())
    except:
        return {"error": "invalid id"}
    if res.matched_count == 0:
        return {"error": "card not found"}
    return {"Mensage": "Card Upadated..."}

def delete_card_service(card_id):
    try:
        res = delete_card(card_id)
    except:
        return {"error": "invalid id"}
    if res.deleted_count == 0:
        return {"error": "card not found"}
    return {"Mensage": "Card Deleted..."}


