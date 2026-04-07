from pydantic import BaseModel

class Card(BaseModel):
    nome_pokemon: str
    tipo: str
    ataque_principal: str
    ataque_secundario: str
    fraqueza: str
    vida: int

