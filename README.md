<h1 align="center">🔐 AuthSystem</h1>

<p align="center">
  <b>Secure Authentication & Authorization Backend API</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Auth-blue?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

---

## ✨ Features

- 📝 User Registration  
- 🔐 Secure Login  
- 🔑 JWT Authentication  
- 🔒 Protected Routes  
- 🗄 MongoDB Integration  
- 🔐 Password Hashing (bcrypt)  

---

## 🛠 Tech Stack

| 🚀 Technology | 📌 Usage |
|--------------|----------|
| Node.js | Backend Runtime |
| Express.js | API Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Security |
| dotenv | Environment Config |

---

## 📂 Project Structure

```bash
AuthSystem/
│
├── models/
├── routes/
├── middleware/
├── controllers/
├── config/
├── server.js
└── package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone Repo

```bash
git clone https://github.com/gudduKumar548/AuthSystem.git
cd AuthSystem
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```bash
npm start
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/protected` | Protected Route |

---

## 🔐 Security

> ✔ Password hashed using bcrypt  
> ✔ JWT-based authentication  
> ✔ Middleware route protection  

---

## 📌 Server Runs At

```
http://localhost:5000
```

---

## 🤝 Contributing

Pull requests are welcome!

---

## 📜 License
This project currently does not specify a license.
