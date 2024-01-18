# INAM Drugs API
INAM Drugs API, is a free online REST API which providing you all INAM pharmaceutical products JSON data.

# Description
This API just provide you INAM products but not allows you to make some actions like: create, upadte or delete.


# Ressources
There's just one ressource which are the products
  - products:  http://localhost:PORT/drugs

# How to
  You can get data by all the way you know (fetch API, AJAX, cURL, Axios,...), the API will return you JSON data.

# Get all drugs
  ```
  fetch("http://localhost:PORT/drugs/")
    .then((data) => console.log(data));
  ```
# Get drug by name
  ```
  fetch("http://localhost:PORT/drugs?name=test")
    .then((data) => console.log(data));
  ```

# Get drug by id
  ```
  fetch("http://localhost:PORT/drugs/id")
    .then((data) => console.log(data));
  ```

# Get all therapies
  ```
  fetch("http://localhost:PORT/drugs/therapies")
    .then((data) => console.log(data));
  ```
# Get drugs by therapy
  ```
  fetch("http://localhost:PORT/drugs/therapy?=test")
    .then((data) => console.log(data));
  ```
# Drugs 
  ```
    {
      "id": String,
      "name": String,
      "price": Number,
      "price_inam": Number,
      "shape": String,
      "quantity": String,
      "dosage": String,
      "therapy": String
    }
  ```
