from pydantic import BaseModel

class Fruit(BaseModel):
    name:str
    age:int
    address:str

print(Fruit(name="Soumitra",age="24", address="kolkata")) 
# in pydantic model it will auto convert to "24" -> 24