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

<img width="1920" height="1080" alt="Screenshot (318)" src="https://github.com/user-attachments/assets/01648ea2-b633-47c4-8b1a-23b4a09eb168" />
<img width="1920" height="1080" alt="Screenshot (319)" src="https://github.com/user-attachments/assets/1df68997-8282-4174-8627-73b4c66519dd" />
<img width="1920" height="1080" alt="Screenshot (320)" src="https://github.com/user-attachments/assets/7c336a04-3e82-4b4e-a6f7-10d9fbe91821" />
<img width="1920" height="1080" alt="Screenshot (321)" src="https://github.com/user-attachments/assets/acfa8c0f-b4e3-4cc3-8ffe-773c51f73d57" />
<img width="1920" height="1080" alt="Screenshot (322)" src="https://github.com/user-attachments/assets/10ac9eae-3d2e-4db0-b987-5d56f1a0438a" />
<img width="1920" height="1080" alt="Screenshot (323)" src="https://github.com/user-attachments/assets/cd05aae4-a0b2-48e8-9a9b-a4afefbf2e71" />
<img width="1920" height="1080" alt="Screenshot (324)" src="https://github.com/user-attachments/assets/a16204ce-725b-4faa-b00d-9407f19ba42f" />
<img width="1920" height="1080" alt="Screenshot (325)" src="https://github.com/user-attachments/assets/19cad10d-a734-469f-b0fb-315ce5d119fd" />
<img width="1920" height="1080" alt="Screenshot (326)" src="https://github.com/user-attachments/assets/8b8725bc-1fa5-44c5-9e7c-53351f00d900" />
<img width="1920" height="1080" alt="Screenshot (327)" src="https://github.com/user-attachments/assets/1196bd39-9bcd-4e26-97fc-6a2add5536f9" />
<img width="1920" height="1080" alt="Screenshot (328)" src="https://github.com/user-attachments/assets/3823fcac-b918-45c2-b284-36e8c4fa35a0" />









