# Spotify Jukebox API

## Install

    npm install

## Run the app

    DEBUG=spotify_jukebox:* npm run devstart

# REST API

The Rest v1 API is described below.


## User

## Get list of Users

### Request

`GET /user`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Get your user information

### Request

`GET /users/me`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []


## Create a new User

### Request

`POST /user/signup`

#### body
```
{
	"email": "your email",
	"password": "your password"
}
```

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"email": "your email",
	"password": "your password"}

## Authenticate as user

### Request

`POST /user/signin`

#### Body 
```
{
	"email": "your email",
	"password": "your password"
}
```

### Response

    The response will return your token, and your basic info

```
{
   "_id": "5daccb573033e20a6276fb42",
    "email": "testUser1@gmail.com",
    "token": "token#"
}
``` 
## Party

## Get list of Parties

### Request

`GET /v1/parties`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

