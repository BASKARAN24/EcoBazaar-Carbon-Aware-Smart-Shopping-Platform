# 🌱 EcoBazaar-Carbon-Aware-Smart-Shopping-Platform

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Eco Friendly](https://img.shields.io/badge/Eco-Friendly-21BA45?style=for-the-badge)
![Full Stack](https://img.shields.io/badge/Full-Stack-007ACC?style=for-the-badge)

   EcoBazaar is a full-stack carbon-aware e-commerce platform that helps users make environmentally responsible shopping decisions by displaying product carbon footprints, eco-friendly alternatives, and total CO₂ impact during checkout. 
   Built with Spring Boot, React, and MySQL, EcoBazaar demonstrates real-world sustainability-driven software design.
   
# 🚀 Features

## 🛍️ Product Management

View products with price & carbon footprint
Add new eco-products from UI
Store products in MySQL database

## 🌱 Carbon-Aware Shopping

Display carbon impact (CO₂) per product
Calculate total carbon footprint in cart
Suggest eco-friendly (low CO₂) alternatives

## 🛒 Cart & Checkout

Add/remove products to cart
Real-time total price & total carbon
Checkout and store order history

## 🔐 Authentication

User / Seller / Admin roles
JWT-based authentication (extendable)

## 🎨 UI

Clean, responsive React UI
Material-UI ready
Developer-friendly structure

# 🏗️ Tech Stack

Frontend:
⚛️ React (Create React App)
Axios
Context API (Cart management)
Material UI

Backend:
Java Spring Boot
Spring Web
Spring Data JPA
REST APIs

Database:
🐬 MySQL
JPA / Hibernate ORM

# 📁 Project Structure

EcoBazaar/
│
├── backend/                 # Spring Boot backend
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   └── application.properties
│
├── frontend/
│   └── ecobazaar-react/     # React frontend
│       ├── src/
│       │   ├── components/
│       │   ├── context/
│       │   ├── services/
│       │   └── App.js
│
└── database/
    └── ecobazaar.sql

## ⚙️ Setup Instructions

1️⃣ Backend Setup (Spring Boot)
cd backend
./mvnw spring-boot:run
Backend runs on:
http://localhost:8080

2️⃣ Database Setup (MySQL)
CREATE DATABASE ecobazaar;
Configure application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/ecobazaar
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

3️⃣ Frontend Setup (React)
cd frontend/ecobazaar-react
npm install
npm start
Frontend runs on:
http://localhost:3000

## 🔗 API Endpoints

Products:
GET /api/products – Get all products
POST /api/products – Add product
GET /api/products/eco/{carbon} – Eco-friendly suggestions

Orders:
POST /api/orders – Place order

## 📊 Sample Use Case

User views products with carbon footprint
Adds items to cart
Cart shows total CO₂ impact
System suggests greener alternatives
User checks out → order stored
