# Pet Adoption System

A full-stack MERN application for browsing pets and managing adoption requests.

## Live Demo

- **Frontend:** https://petadoptionsystemm.netlify.app/
- **Backend API:** https://pet-adoption-system-8duc.onrender.com/
- **GitHub:** https://github.com/sunidhi1598/pet-adoption-system

## Features

### Visitor
- View list of available pets
- Search pets by name or breed
- Filter pets by species
- View pet details
- Pagination on pet list

### User
- Register and login with JWT authentication
- Apply to adopt available pets
- View personal adoption applications and status

### Admin
- View all adoption applications
- Approve or reject adoption requests
- Pet status automatically updates after approval

## Tech Stack

**Frontend:** React, Axios, Bootstrap, React Router  
**Backend:** Node.js, Express.js, MongoDB, JWT Authentication  
**Deployment:** Netlify (Frontend), Render (Backend)

## Installation

### Backend Setup
```bash
cd backend
npm install
npm start

Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Frontend Setup
cd frontend
npm install
npm start
API Endpoints
Auth

POST /api/auth/register - Register user

POST /api/auth/login - Login user

Pets

GET /api/pets - Get all pets

GET /api/pets/:id - Get pet details

Applications

POST /api/applications - Apply for adoption

GET /api/applications/all - Get all applications

PUT /api/applications/:id - Approve or reject application

Project Structure
pet-adoption-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
└── README.md

Author
Sunidhi Kumari
