import json 
import re
from database import poke_collection

def migrate():
    try:
        with open('frontend/data/teste_chars.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        json_data = re.sub(r'export const pokemon = ', '', content)
        json_data = json_data.strip().rstrip(';')

        cards = json.loads(json_data)
        poke_collection.delete_many({})

        if cards:
            result = poke_collection.insert_many(cards)
            print(f"{len(result.inserted_ids)} cards migrados")
    
    except Exception as e:
        print(f"erro de migração {e}")

if __name__ == "__main__":
    migrate()