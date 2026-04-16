from pydantic import BaseModel
from enum import Enum
from fastapi import FastAPI

app=FastAPI()

class RoleEnum(str, Enum):
    super_admin="super-admin"
    admin="admin"
    developer="developer"
    designer="designer"
    qa="qa"


class User(BaseModel):
    name:str
    email:str
    password:str
    role: RoleEnum  

@app.post("/employee")

def create_employee(emp:User):
    return emp

print(User(name="Soumitra", email="maity@gmail.com", password="123456", role=RoleEnum.super_admin))
# in pydantic model it will auto convert to "24" -> 24