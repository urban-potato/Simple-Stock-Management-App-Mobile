# Simple Stock Management App

## Description

Simple Stock Management App (Mobile)

## Preparations

### 1. Clone and set up the backend:

https://github.com/urban-potato/Simple-Stock-Management-App-Backend

### 2. Install the libraries.

Go to the main project directory in CMD and run:

```
npm install
```

### 3. In the `.env` file specify two variables: `URL` and `WEATHER_API_KEY`

1. `URL`

It is the backend URL. Don't use the "localhost" word. Enter your current ipv4 address with correct port where the backend is running.
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

## Backend API docs

http://localhost:9393/swagger-ui/index.html

## Application User Guide:

1. On the home page, you can view a list of products with basic information about each product and the quantity of the product.
2. The product page provides detailed information about the product, as well as the ability to edit the information and delete the product.
3. On the page for creating a new product, you can create a new product by specifying the necessary information.
4. On the map page you can see a map on which the warehouse and point of sale are marked.