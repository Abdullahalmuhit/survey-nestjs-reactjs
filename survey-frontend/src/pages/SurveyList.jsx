// pages/index.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SurveyList() {
    const [surveyList, setSurveyList] = useState([]);

    useEffect(() => {
        fetchSurveys();
    }, []);

    const fetchSurveys = async () => {
        try {
            const response = await axios.get('http://localhost:3000/surveys');
            console.log('response data',response);
            setSurveyList(response.data);
        } catch (error) {
            console.error('Failed to fetch surveys:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Survey Submissions</h2>
            <div style={styles.headerRow}>
                <Link to="/" style={styles.addLink}>+ Add New Survey</Link>
            </div>

            {surveyList.length === 0 ? (
                <p>No surveys found.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age Group</th>
                        <th>Satisfaction</th>
                        <th>Suggestions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {surveyList.map((survey) => (
                        <tr key={survey.id}>
                            <td>{survey.id}</td>
                            <td>{survey.name}</td>
                            <td>{survey.age}</td>
                            <td>{survey.satisfaction}</td>
                            <td>{survey.suggestions || '—'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial',
        maxWidth: 800,
        margin: '40px auto',
        padding: 20,
        border: '1px solid #ddd',
        borderRadius: 8,
        backgroundColor: '#fafafa',
    },
    headerRow: {
        marginBottom: 20,
        textAlign: 'right',
    },
    addLink: {
        textDecoration: 'none',
        padding: '8px 12px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: 5,
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        textAlign: 'left',
        borderBottom: '1px solid #ccc',
    },
    td: {
        padding: 10,
        borderBottom: '1px solid #ccc',
    },
};

export default SurveyList;
