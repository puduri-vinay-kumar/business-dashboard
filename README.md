# 📊 Mini Local Business Dashboard

A mini dashboard that simulates how local businesses might view their SEO content and Google Business data.
This project demonstrates **frontend-backend integration, API communication, and responsive UI design** using **React, Tailwind CSS, Node.js, and Express.**

---

## 🚀 Project Overview

This dashboard allows small businesses to:

* Enter their **Business Name** and **Location**
* View simulated:

  * Google Rating
  * Number of Reviews
  * AI-generated SEO Headline
* Regenerate a new SEO Headline with a button click

---



## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS, Vite
* **Backend:** Node.js, Express
* **Deployment:** Vercel (Frontend), Render (Backend)

---

## 🌟 Features

* Responsive dashboard (mobile-friendly)
* Business name and location input form
* Display card with:

  * Google Rating
  * Number of Reviews
  * AI-generated SEO Headline
* Regenerate SEO Headline functionality
* Loading indicator during API calls
* Backend CORS-enabled for cross-origin requests

---

## 📦 Setup Instructions

### ✅ 1. Clone the Project

```bash
git clone https://github.com/your-username/business-dashboard.git
cd business-dashboard
```

---

### ✅ 2. Backend Setup

```bash
cd backend
npm install
node index.js
```

Backend runs on `http://localhost:5000` by default.

---

### ✅ 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

---

## 🌐 API Endpoints

### ➞ POST `/business-data`

**Request Body:**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### ➞ GET `/regenerate-headline`

**Example Request:**

```
GET /regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```

**Example Response:**

```json
{
  "headline": "Discover the Hidden Gem in Your City!"
}
```

---

## ✨ Bonus Features (Optional)

* ✅ Loading spinner during API requests
* ✅ Basic form validation (fields must not be empty)
* ✅ Deployment on Vercel and Render
* ✅ Clean and mobile-friendly responsive design
* ✅ Optional: Use UptimeRobot to keep Render backend awake

---

## 🚀 Deployment Guide

### 🔹 Backend (Render)

* Deploy backend as a **Web Service**.
* Start command: `node index.js`
* No build command needed.
* Render will provide the live API URL.

---

### 🔹 Frontend (Vercel)

* Deploy the React app via GitHub or Vercel CLI.
* Set environment variable in Vercel:

```text
VITE_API_URL = https://business-dashboard-backend-1.onrender.com
```

* Vercel will provide the live frontend URL.
https://business-dashboard-frontend-five.vercel.app/

---



## 📄 .gitignore 

```text
node_modules/
dist/
.env
```

---

## ✅ Prerequisites

* Node.js installed
* Basic React and Express knowledge
* npm or yarn

---



