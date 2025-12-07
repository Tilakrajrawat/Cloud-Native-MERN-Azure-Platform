# 🌐 Cloud-Native MERN Platform (Azure – Architecture & Design)

A **cloud-ready MERN application** designed following **Azure cloud-native architecture principles**.  
The project focuses on **system design, modular structure, and deployment readiness** for Azure services such as App Service, Cosmos DB, Azure Functions, and GitHub Actions.

> ⚠️ Note: Due to student-budget constraints, this project focuses on **architecture, code, and deployment preparation** rather than live cloud hosting.

---

## 🚀 Project Goals

- Demonstrate **cloud-native application architecture**
- Design a MERN system ready for **Azure App Service deployment**
- Model data and services compatible with **Cosmos DB (Mongo API)**
- Implement **Azure Functions patterns** for background processing
- Prepare **CI/CD workflows** using GitHub Actions (not executed)

---

## ✨ Key Features

- ☁️ **Azure-ready App Service architecture** (frontend + backend)
- 🌍 **Cosmos DB (Mongo API)–compatible data models**
- ⚡ **Azure Functions–style background jobs** (code-only)
- 🔐 **Secure API layer** with Express.js, JWT, and environment-based configuration
- 📊 **Application Insights–style logging patterns**
- 🔄 **Prepared CI/CD workflows** using GitHub Actions
- 📦 Modular, production-oriented folder structure

---

## 🧰 Tech Stack

### **Frontend**
- React (Vite)
- Axios
- React Router
- Tailwind CSS (optional)

### **Backend**
- Node.js
- Express.js
- JWT Authentication
- Mongoose (MongoDB / Cosmos DB Mongo API compatible)

### **Cloud & DevOps (Design & Preparation)**
- Azure App Service (architecture)
- Azure Cosmos DB (Mongo API schema design)
- Azure Functions (background job patterns)
- Azure Application Insights (logging patterns)
- GitHub Actions (CI/CD workflow templates)

---

## 📂 Project Structure

```
Cloud-Native-MERN-Azure-Platform/
backend/
  .env.example
  package.json
  src/
    app.js
    server.js
    config/
      db.js
    controllers/
      authController.js
      recordController.js
    models/
      User.js
      Record.js
    middleware/
      authMiddleware.js
      errorHandler.js
      requestLogger.js
    routes/
      authRoutes.js
      recordRoutes.js
    utils/
      logger.js

frontend/
  .env.example
  package.json
  index.html
  postcss.config.js
  tailwind.config.js
  vite.config.mts
  src/
    main.jsx
    App.jsx
    index.css
    lib/
      api.js
    components/
      Layout.jsx
      Navbar.jsx
      ProtectedRoute.jsx
      RecordForm.jsx
      RecordList.jsx
    pages/
      Login.jsx
      Register.jsx
      Dashboard.jsx
      Records.jsx

functions/
  package.json
  tsconfig.json
  host.json
  local.settings.json.example
  shared/
    cosmosClient.ts
  processNotifications/
    function.json
    index.ts
  cleanupRecords/
    function.json
    index.ts

.github/
  workflows/
    deploy-backend.yml
    deploy-frontend.yml
    deploy-functions.yml

infra/
  cosmos.bicep
  appservice.bicep
  functionapp.bicep
  storage.bicep


