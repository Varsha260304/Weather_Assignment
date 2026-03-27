require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

console.log("Starting script...");

const orders = JSON.parse(fs.readFileSync("orders.json"));
const API_KEY = process.env.API_KEY;

async function fetchWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return res.data.weather[0].main;
  } catch (error) {
    console.log("Error fetching:", city);
    return null;
  }
}

function generateMessage(name, city, weather) {
  return `Hi ${name}, your order to ${city} is delayed due to ${weather}.`;
}

async function processOrders() {
  const promises = orders.map(async (order) => {
    const weather = await fetchWeather(order.city);

    if (!weather) return;

    if (["Rain", "Snow", "Extreme"].includes(weather)) {
      order.status = "Delayed";
      order.message = generateMessage(order.customer, order.city, weather);
    }
  });

  await Promise.all(promises);

  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2));
  console.log("All orders processed!");
}

processOrders();