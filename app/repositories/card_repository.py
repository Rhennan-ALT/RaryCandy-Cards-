from database import poke_collection
from bson import ObjectId


def get_all_cards():
    return list(poke_collection.find())

def get_cards_by_id(card_id):
    return poke_collection.find_one({"_id": ObjectId(card_id)})

def create_card(card_dict):
    return poke_collection.insert_one(card_dict)

def update_card(card_id, card_dict):
    return poke_collection.update_one(
        {"_id": ObjectId(card_id)},
        {"$set": card_dict}
    )

def delete_card(card_id):
    return poke_collection.delete_one(
        {"_id": ObjectId(card_id)}
    )

