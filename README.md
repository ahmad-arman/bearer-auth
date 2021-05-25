# bearer-auth   



## About 
  has various endpoints that perform sign in and sign up  and users and secret 

<hr>

## Author
 Ahmad Arman
<hr>

## Links
* (link heroku ready to test on postman)[https://ahmad-bearer-auth.herokuapp.com/api/v1/signup]
* (link heroku ready to test on postman)[https://ahmad-bearer-auth.herokuapp.com/api/v1/signin]
* [Submission Pull Request](https://github.com/ahmad-arman/bearer-auth/pull/1)
* [Deployed App](https://ahmad-bearer-auth.herokuapp.com/)
* [Error Report](https://github.com/ahmad-arman/bearer-auth/actions)
<hr>

## Setup
1. `(.env)` file 
```
PORT = 3000
MONGOOSE_URI = mongodb+srv://ahmad:eng.ahmad123@cluster0.kilwd.mongodb.net/test


```
2. Install the following dependencies
```
npm init -y 
npm i "@code-fellows/supergoose": "^1.1.0",
    "base-64": "^1.0.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^8.6.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "jest": "^26.6.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.11",
    "morgan": "^1.10.0",
    "session": "^0.1.0" 



```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## sign in 
  ### * `/signin`
<br>

- **Method** : post 
- **CRUD Operation** :  http://localhost:3000/api/v1/signin
- **Response Body**   : JSON
```
[
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
]
```
<br>

- **Method** : POST 
- **CRUD Operation** : http://localhost:3000/signup
- **Response Body**   : JSON
```
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
```
<br>
<br>

- **Method** : GET 
- **CRUD Operation** : http://localhost:3000/users
- **Response Body**   : JSON
```
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
```
<br>


- **Method** : GET 
- **CRUD Operation** : http://localhost:3000/secret
- **Response Body**   : JSON
```
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
```
<br>


4. Test .

* There's 2 test files . logger.test.js and server.test.js
* In terminal run :

```
npm test
```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![image](./umlpassword.png)