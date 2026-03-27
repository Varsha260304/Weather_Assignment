# Weather-Based Delivery Delay System

## Project Overview
This project is a simple Node.js application that checks the weather for different cities and updates delivery status based on the weather conditions.
If the weather is bad (like rainy, sunny, or extreme conditions), the order is marked as "Delayed" and a message is added for the customer.

## How It Works
* The script reads order details from a JSON file (orders.json)
* It fetches current weather data using the OpenWeather API
* All API calls are made at the same time using Promise.all (parallel execution)
* Based on the weather condition, it updates the order status
* It also generates a simple message explaining the delay
* If a city is invalid, the error is handled without stopping the program

## Setup Instructions
1. Install dependencies:
npm install

2. Create a `.env` file and add your API key:
API_KEY=53c1aa2d24ee3aa995eac9eef312b129

3. Run the project:
node index.js

## AI Usage (AI Log)
I used AI tools to help with:
* Understanding how to use Promise.all for making multiple API calls at once
* Writing error handling so the program does not crash when a city is invalid
* Creating a simple message for delayed orders based on weather conditions

## Output
After running the script:
* The `orders.json` file gets updated
* If weather is bad, order status changes to "Delayed"
* A message is added for the customer explaining the delay

## Notes
* Invalid cities are handled safely and do not stop the script
* API key is stored in `.env` file for security
