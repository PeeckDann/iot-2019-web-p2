from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class Seafood(BaseModel):
    id: Optional[int]
    name: str
    country: str
    type: str
    description: str
    price: int

seafood_list: List[Seafood] = [{
        "id": 1,
        "name": "Fish 1",
        "country": "Japan",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 123
    },
    {
        "id": 2,
        "name": "Fish 2",
        "country": "Indonesia",
        "type": "Frozen",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 234
    },
    {
        "id": 3,
        "name": "Fish 3",
        "country": "Netherlands",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 345
    },
    {
        "id": 4,
        "name": "Fish 4",
        "country": "Indonesia",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 456
    },
    {
        "id": 5,
        "name": "Fish 5",
        "country": "Japan",
        "type": "Frozen",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 567
    },
    {
        "id": 6,
        "name": "Fish 6",
        "country": "Indonesia",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 678
    },
    {
        "id": 7,
        "name": "Fish 7",
        "country": "Japan",
        "type": "Frozen",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 789
    },
    {
        "id": 8,
        "name": "Fish 8",
        "country": "Netherlands",
        "type": "Frozen",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 890
    },
    {
        "id": 9,
        "name": "Fish 9",
        "country": "Japan",
        "type": "Frozen",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 901
    },
    {
        "id": 10,
        "name": "Fish 10",
        "country": "Netherlands",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 1012
    },
    {
        "id": 11,
        "name": "Fish 8",
        "country": "Netherlands",
        "type": "Fresh",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        "price": 1023
    }]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/seafood')
def post(seafood: Seafood):
    seafood["id"] = len(seafood_list) + 1
    seafood_list.append(seafood)
    return seafood

@app.get('/seafood', response_model=List[Seafood])
def get():
    return seafood_list

@app.get('/seafood/{id}', response_model=Seafood)
def get_by_id(id: int):
    for seafood in seafood_list:
        if seafood["id"] == id:
            return seafood
    raise HTTPException(status_code=404, detail="Seafood not found")

@app.put('/seafood/{id}')
def put(id: int, seafood: Seafood):
    for i, existing_seafood in enumerate(seafood_list):
        if existing_seafood["id"] == id:
            seafood_list[i] = seafood
            return
    raise HTTPException(status_code=404, detail="Seafood not found")

@app.delete('/seafood/{id}', response_model=Seafood)
def delete(id: int):
    for i, seafood in enumerate(seafood_list):
        if seafood["id"] == id:
            return seafood_list.pop(i)
    raise HTTPException(status_code=404, detail="Seafood not found")

@app.get('/seafood/filters/{type}&{country}', response_model=List[Seafood])
def get_filtered(type: str, country: str):
    return [seafood for seafood in seafood_list if
            (type == 'None' or seafood.get('type', 'None') == type) and
            (country == 'None' or seafood.get('country', 'None') == country)]