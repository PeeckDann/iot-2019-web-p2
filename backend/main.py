from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
seafood_list = [{
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


class Seafood(BaseModel):
    id: Optional[str]
    name: str
    country: str
    type: str
    description: str
    price: int


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/seafood')
def post(seafood: Seafood):
    temp_id = 1
    while str(temp_id) in map(lambda i: i.id, seafood_list):
        temp_id += 1
    seafood.id = str(temp_id)
    seafood_list.append(seafood)
    print(seafood_list)


@app.get('/seafood')
def get():
    return seafood_list


@app.get('/seafood/{id}')
def get_by_id(id):
    for seafood in seafood_list:
        if seafood["id"] == int(id):
            return seafood


@app.put('/seafood/{id}')
def put(id, seafood: Seafood):
    for i in range(len(seafood_list)):
        if seafood_list[i]["id"] == int(id):
            seafood_list[i] = seafood
            return


@app.delete('/seafood/{id}')
def delete(id):
    for i in range(len(seafood_list)):
        if seafood_list[i]["id"] == int(id):
            return seafood_list.pop(i)


@app.get('/seafood/filters/{type}&{country}')
def get_filtered(type, country):
    return [i for i in seafood_list if
    (type == 'None' or i.get('type', 'None') == type) and
    (country == 'None' or i.get('country', 'None') == country)]