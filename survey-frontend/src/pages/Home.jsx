import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        api.get('/surveys').then(res => setSurveys(res.data));
    }, []);

    return (
        <div>
            <h1>Available Surveys</h1>
            <ul>
                {surveys.map(s => (
                    <li key={s.id}>
                        <Link to={`/survey/${s.id}`}>{s.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
