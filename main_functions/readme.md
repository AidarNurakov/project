## REST API documentation

`javascript const base_url for api-shop = "http://localhost:5050/api" `
`javascript const base_url2 for api-shop = "http://localhost:5000/auth" `

### Products

- get products in special category, for main page, METHOD: GET
- url: base_url/api/products-by-category/:categoryId
- где :categoryId это айди категории, например 609e5fef04005f1b0811fdf0

- Response:

```
{
      success: true,
      data: [
        {
          category: 'Аксесcуары',
          products: [
            {
             "price": "8000",
              "rate": 0,
              "_id": "60a267b0a922ad14b460352b",
              "name": "AirPods",
              "category": "60993eaee6317c402c173736",
              "__v": 0
            }
          ]
        }
      ]
}
```

- create one product for main page, METHOD: POST
- url: base_url/api/create-product

```
- Response:
{
    "message": "Продукт успешно создан",
    "status": "success",
    "data": {
        "price": "2000",
        "rate": 0,
        "_id": "60a3b8b07f8ee7399473a422",
        "name": "Motorolla v3",
        "category": "609947ad60a45b243823974e",
        "__v": 0
    }
}

```

- delete product by it's Id, METHOD: DELETE
- url: base_url/api/products/:productId
- где productId это Id товара

- Response if product found:
``` 
{
    "message": "Продукт успешно удален"
}
```

- Добавление товара в избранное, METHOD: POST
- url: base_url/products/add-favorite

- Response: 

```
{
    "message": "Товар успешно добавлен в избранные",
    "status": "success"
}
```
- Получение всех избранных товаров, METHOD: GET
- url: base_url/favorites

- Response: 

```

  "data": {
        "favorites": [
            "60e31792f64cff10a0486808",
            "60e73bc86c2cc20550bdd591"
        ],
        "_id": "60e74b48963dc615704d6e48",
        "user": "60e3446fc81c0320a0e7dc6c",
        "__v": 2
    }  

```




### Categories

- Создание категории, METHOD: POST
- url: base_url/api/category

- Response:

```
{
    "message": "Категория успешно создана",
    "status": "success",
    "data": {
        "_id": "60e7551f736b520434889927",
        "name": "test",
        "__v": 0
    }
}

```

- Получение всех категорий, METHOD: GET
- url: base_url/api/categories

- Response :

```
{
    "message": "Получены все категории",
    "data": [
        {
            "_id": "60e2a4ef04f5724cdca131c0",
            "name": "phones",
            "__v": 0
        },
        {
            "_id": "60e2b287c286582d304280b9",
            "name": "accesories",
            "__v": 0
        },
        {
            "_id": "60e2b8c664bdf02d701a3808",
            "name": "home stuff",
            "__v": 0
        },
        {
            "_id": "60e2f2ed05fbde224c1ca752",
            "name": "Personal Computers and Laptops",
            "__v": 0
        }
    ]
}

```

- Получение категории по айди, METHOD: GET
- url: base_url/api/category/:id

- Response:

```
{
    "_id": "60e2a4ef04f5724cdca131c0",
    "name": "phones",
    "__v": 0
}

```

- Регистрация пользователя, METHOD: POST
- url: base_url2/auth/registration
- Передаем через body username и password в формате JSON

- Response: 

```
{
    "message": "Пользователь успешно зарегистрирован"
}

```

- Аутентификация пользователя, METHOD: POST
- url: base_url2/auth/login
- Передаем через body username и password в формате JSON

- Response 

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTU3NTA5NWU4MjQwNDJlYzkxOTIwYyIsImlhdCI6MTYyNTc3Mzg2MSwiZXhwIjoxNjI1Nzc0NDYxfQ.EllScG3ug7Ck60fW_4sRa7w9wUxhlS9gQbzSkt30e7Y"
}

```