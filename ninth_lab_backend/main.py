from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
seafood_list = []


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
        if seafood.id == id:
            return seafood


@app.put('/seafood/{id}')
def put(id, seafood: Seafood):
    for i in range(len(seafood_list)):
        if seafood_list[i].id == id:
            seafood_list[i] = seafood
            return


@app.delete('/seafood/{id}')
def delete(id):
    for i in range(len(seafood_list)):
        if seafood_list[i].id == id:
            return seafood_list.pop(i)


@app.get('/seafood/filters/{type}&{country}')
def get_filtered(type, country):
    return [i for i in seafood_list
    if type in (i.type, 'None') and country in (i.country, 'None')]
