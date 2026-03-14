Pet Adoption Management System
Project Description

This is a full stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse pets available for adoption and submit adoption requests. Administrators can manage pets and review adoption applications.

The goal of this project is to demonstrate full stack development including frontend UI, backend APIs, authentication, and database integration.

Technologies Used

Frontend
React
Axios
Bootstrap

Backend
Node.js
Express.js
JWT Authentication

Database
MongoDB

Features
Visitor

View list of available pets

Search pets by name

Filter pets by species

View pet details

Pagination on pet list

User

Register and login

Apply to adopt available pets

View personal adoption applications and status

Admin

View all adoption applications

Approve or reject adoption requests

Pet status updates automatically when adoption is approved

Project Structure
pet-adoption-system
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── .env.example
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── App.js
│
└── README.md
Installation and Setup
Clone the repository
git clone <repository-url>
Backend Setup

Go to the backend folder.

cd backend
npm install
npm start

Create a .env file and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Frontend Setup

Go to the frontend folder.

cd frontend
npm install
npm start

The application will run at:

http://localhost:3000
API Endpoints

Auth Routes
POST /api/auth/register
POST /api/auth/login

Pet Routes
GET /api/pets
POST /api/pets
PUT /api/pets/:id
DELETE /api/pets/:id

Application Routes
POST /api/applications
GET /api/applications/my
GET /api/applications/all
PUT /api/applications/:id

Run Your Project Locally
Backend:
cd backend
npm install
npm start

Frontend:
cd frontend
npm install
npm start

Author

Sunidhi Kumari
