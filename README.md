# **LUMAA TASK MANAGER**  

---

## **Demo and Notes**
- Video Demo: [Here](https://youtu.be/pyNs3RsFp5Q)
- Monthly Salary Expectations: $2,400 ($30/hour).

## **Prerequisites**  
- [Node.js](https://nodejs.org/) (Ensure you have Node.js installed)
- [Git](https://git-scm.com/)
- [Neon PostgreSOL](https://neon.tech/home)

---

## **Backend Setup**  

### **Step 1: Clone the Repository**  
```bash
git clone https://github.com/hiepnguyenduc2005/lumaa-spring-2025-swe
cd lumaa-spring-2025-swe
```
### **Step 2: Create a `.env` file** in the Backend folder 
Here’s an example of what the `.env` file should contain:  
```env
PGHOST='...'
PGDATABASE='neondb'
PGUSER='neondb_owner'
PGPASSWORD='...'
JWT_SECRET='...'
```

### **Step 3: Install the Required Dependencies**  
```bash
cd backend
npm install
```

### **Step 4: Initialize the Database (Migrations)**  
```bash 
npm run reset  
```

### **Step 5: Start the Backend Server**  
```bash
npm start
```

Your backend will now run at `http://localhost:5000`.

---

## **Frontend Setup**  

### **Step 1: Navigate to the Frontend Directory**  
```bash
cd frontend
```

### **Step 2: Install the Required Dependencies**  
```bash
npm install
```

### **Step 3: Start the Frontend Server**  
```bash
npm run dev
```

Your frontend will be available at `http://localhost:5173`.
