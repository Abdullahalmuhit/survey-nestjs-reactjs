# 📝 Survey Form Project

A full-stack application built using **React.js (Frontend)**, **NestJS (Backend)**, and **MySQL (Database)** to collect and manage survey responses.

---

## 📌 Features

- Collect user inputs: Name, Age, Satisfaction Level, Suggestions.
- Save responses to a MySQL database.
- View and manage submitted responses.
- Delete specific survey entries.
- Modular code structure with clean API integration.

---

## 📁 Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Frontend  | React.js       |
| Backend   | NestJS (Node.js) |
| Database  | MySQL          |
| HTTP Client | Axios        |
| ORM       | TypeORM        |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abdullahalmuhit/survey-nestjs-reactjs
cd survey-nestjs-reactjs
⚙️ Backend Setup (NestJS)
bash
Copy
Edit
cd backend
npm install
Create .env file in backend/
env
Copy
Edit
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=survey_db
Start the Backend Server
bash
Copy
Edit
npm run start:dev
💻 Frontend Setup (React.js)
bash
Copy
Edit
cd frontend
npm install
Configure API URL
Update the Axios base URL in your frontend code (e.g., SurveyForm.jsx):

js
Copy
Edit
axios.defaults.baseURL = 'http://localhost:3000'; // Adjust port if needed
Start the React App
bash
Copy
Edit
npm start
🖼️ Project Structure
css
Copy
Edit
survey-nestjs-reactjs/
├── backend/
│   ├── src/
│   │   ├── survey/
│   │   └── main.ts
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── SurveyForm.jsx
│   │   │   └── SurveyList.jsx
│   └── index.jsx
└── README.md
📬 API Endpoints
Method	Endpoint	Description
GET	/surveys/:id	Get a survey by ID
POST	/responses	Submit survey response
GET	/responses	Get all responses
DELETE	/responses/:id	Delete a response

✅ To-Do (optional)
 Add form validation

 Add pagination/filtering

 Export responses to CSV/PDF

 Add admin panel for managing surveys

📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Abdullah Al Muhit

GitHub: @Abdullahalmuhit

yaml
Copy
Edit

---

### ✅ Result:
This version is:
- Cleanly structured
- Markdown compliant
- Readable on GitHub
- Easy for contributors to follow

Would you like a downloadable `.md` file version of this?