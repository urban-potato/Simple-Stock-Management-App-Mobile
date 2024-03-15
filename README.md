# Simple Stock Management App

## Description

Simple Stock Management App (Mobile)

## Preparations

### 1. Clone and set up the backend

https://github.com/urban-potato/Simple-Stock-Management-App-Backend

### 2. Install the libraries

Go to the main project directory in CMD and run:

```
npm install
```

### 3. In the `.env` file specify two variables: `URL` and `WEATHER_API_KEY`

1. `URL`

It is the backend URL. Don't use "localhost" or "127.0.0.1". Enter your current ipv4 address with correct port where the backend is running.
By default the project backend is running on port 9393.

So, the variable will look like:

`URL = 'http://123.456.78.901:9393'`

2. `WEATHER_API_KEY`

It is needed for the weather module to work on the map screen.
To get the api key you need to register on https://openweathermap.org/ and get the key in your profile.

So, the variable will look like:

`WEATHER_API_KEY = 'api_key'`

## Run

In the main project directory in CMD run:

```
npm run android:dev
```

## Build .apk file

In the main project directory in CMD run:

```
expo build:android
```

## Backend

https://github.com/urban-potato/Simple-Stock-Management-App-Backend

## Interface preview

### Products screen

![products screen](https://github.com/urban-potato/Simple-Stock-Management-App-Mobile/blob/main/interface_screens/products_screen.png?raw=true)

### Create new product screen

![create new product screen](https://github.com/urban-potato/Simple-Stock-Management-App-Mobile/blob/main/interface_screens/create_new_product_screen.png?raw=true)

### Product screen

![product screen](https://github.com/urban-potato/Simple-Stock-Management-App-Mobile/blob/main/interface_screens/product_screen.png?raw=true)

### Edit product screen

![edit product screen](https://github.com/urban-potato/Simple-Stock-Management-App-Mobile/blob/main/interface_screens/edit_product_screen.png?raw=true)

### Map screen

![map screen](https://github.com/urban-potato/Simple-Stock-Management-App-Mobile/blob/main/interface_screens/map_screen.png?raw=true)
