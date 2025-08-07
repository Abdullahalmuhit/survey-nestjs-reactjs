📝 Survey Form Project
A full-stack application built using React.js (Frontend), NestJS (Backend), and MySQL (Database) to collect and manage survey responses.

📌 Features
Collect user inputs: Name, Age, Satisfaction Level, Suggestions.

Save responses to a MySQL database.

View and manage submitted responses.

Delete a specific survey entry.

Modular code structure with clean API integration.

📁 Tech Stack
Layer	Technology
Frontend	React.js
Backend	NestJS (Node.js)
Database	MySQL
HTTP Client	Axios
ORM	TypeORM

🚀 Getting Started
1. Clone the Repository
   bash
   Copy
   Edit
   git clone https://github.com/Abdullahalmuhit/survey-nestjs-reactjs
   cd survey-form-app
   ⚙️ Backend Setup (NestJS)
   bash
   Copy
   Edit
   cd backend
   npm install
   📄 Environment File
   Create a .env file in the backend/ directory:

env
Copy
Edit
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=survey_db
🏃 Start Backend Server
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
🔧 Configure API URL
Make sure the Axios base URL in index.jsx or SurveyForm.jsx points to your backend:

js
Copy
Edit
axios.defaults.baseURL = 'http://localhost:3000'; // adjust port as needed
🏃 Start React App
bash
Copy
Edit
npm start
🖼️ Project Structure
css
Copy
Edit
survey-form-app/
├── backend/
│   ├── src/
│   │   ├── survey/
│   │   └── main.ts
│   ├── .env
├── frontend/
│   ├── src/
│   │   ├── SurveyForm.jsx
│   │   └── SurveyList.jsx
│   ├── index.jsx
├── README.md
📬 API Endpoints
Method	Endpoint	Description
POST	/responses	Save survey response
GET	/responses	Get all responses
DELETE	/responses/:id	Delete a response

📌 To-Do (optional)
Add form validation.

Add pagination or filtering for survey list.

Export responses to CSV or PDF.

📄 License
This project is licensed under the MIT License.

Let me know if you'd like to include screenshots, deployment instructions (Docker, Vercel, etc.), or database schema details.