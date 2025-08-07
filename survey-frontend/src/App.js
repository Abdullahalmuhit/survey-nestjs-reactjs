import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SurveyForm from './pages/SurveyForm';
import SurveyForm3 from "./pages/SurveyForm3";
import SurveyList from "./pages/SurveyList";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SurveyForm3 />} />
                    {/* Add more routes here as needed */}
                    {<Route path="/survey" element={<SurveyForm />} /> }
                    {<Route path="/survey/list" element={<SurveyList />} /> }
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;