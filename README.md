# bearer-auth   



## About 
  has various endpoints that perform sign in and sign up  and users and secret 

<hr>

## Author
 Ahmad Arman
<hr>

## Links
* (link heroku ready to test on postman)[https://ahmad-bearer-auth.herokuapp.com/signup]
* (link heroku ready to test on postman)[https://ahmad-bearer-auth.herokuapp.com/signin]
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
- **CRUD Operation** :  https://ahmad-bearer-auth.herokuapp.com/signin
- **Response Body**   : JSON
```
{
    "user": {
        "_id": "60ad7274327db30015ce844a",
        "username": "ahmadadmain100",
        "password": "$2b$10$NH.uC7huSLZyhEel7WMWK.Gjb2RAFlAzhm0utAoiY2hGxaY2wTDbS",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkYWRtYWluMTAwIiwiaWF0IjoxNjIxOTc5OTU1LCJleHAiOjE2MjIwNjYzNTV9.HBTK8zqaYp3djNUAevFiczt5YjfPwXT1a2CEYBlG7OA"
}
```
<br>

- **Method** : POST 
- **CRUD Operation** :https://ahmad-bearer-auth.herokuapp.com/signup
- **Response Body**   : JSON
```
   {
    "user": {
        "_id": "60ad7274327db30015ce844a",
        "username": "ahmadadmain100",
        "password": "$2b$10$NH.uC7huSLZyhEel7WMWK.Gjb2RAFlAzhm0utAoiY2hGxaY2wTDbS",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkYWRtYWluMTAwIiwiaWF0IjoxNjIxOTc5NzY1LCJleHAiOjE2MjIwNjYxNjV9.HCo4Kr0OeVMFngY4hGqisaEo64nY4-z5_IagNautoSE"
}
```
<br>
<br>

- **Method** : GET 
- **CRUD Operation** : https://ahmad-bearer-auth.herokuapp.com/users
- **Response Body**   : JSON
```
  [
    "aaaaaassssaa",
    "ahmadarman",
    "ahmdadmain",
    "ahmadadmain",
    "ahmadadmain100"
]
```
<br>


- **Method** : GET 
- **CRUD Operation** : https://ahmad-bearer-auth.herokuapp.com/secret
- **Response Body**   : text
```
Welcome to the secret area!
```
<br>


4. Test .

* There's 3 test files .basic-auth-middleware.test.js  ,,,, bearer-auth-middleware.test.js ,,,,, router.test.js
* In terminal run :

```
npm test
```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![image](./umlpassword.png)