import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SurveyForm() {
    const { id } = useParams(); // survey ID from route
    const [survey, setSurvey] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        age: '',
    });
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/surveys/${id}`)
            .then(res => setSurvey(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleInputChange = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            surveyId: survey.id,
            name: userInfo.name,
            email: userInfo.email,
            age: userInfo.age,
            answers: Object.entries(answers).map(([questionId, value]) => ({
                questionId: parseInt(questionId),
                value,
            })),
        };

        try {
            await axios.post('http://localhost:3000/responses', payload);
            alert('Survey submitted successfully!');
        } catch (err) {
            console.error(err);
            alert('Something went wrong!');
        }
    };

    if (!survey) return <p>Loading survey...</p>;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>{survey.title}</h2>
            <p>{survey.description}</p>

            <form onSubmit={handleSubmit}>
                <h3>Basic Info</h3>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        value={userInfo.name}
                        onChange={handleUserInfoChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={handleUserInfoChange}
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        name="age"
                        type="number"
                        value={userInfo.age}
                        onChange={handleUserInfoChange}
                        required
                    />
                </div>

                <h3>Questions</h3>
                {survey.questions.map((q) => (
                    <div key={q.id} style={{ marginBottom: '20px' }}>
                        <p><strong>{q.text}</strong></p>
                        {q.type === 'text' && (
                            <input
                                type="text"
                                value={answers[q.id] || ''}
                                onChange={(e) => handleInputChange(q.id, e.target.value)}
                            />
                        )}

                        {q.type === 'mcq' && (
                            q.options.map((opt) => (
                                <label key={opt} style={{ display: 'block' }}>
                                    <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        value={opt}
                                        checked={answers[q.id] === opt}
                                        onChange={() => handleInputChange(q.id, opt)}
                                    />
                                    {opt}
                                </label>
                            ))
                        )}
                    </div>
                ))}

                <button type="submit">Submit Survey</button>
            </form>
        </div>
    );
}

export default SurveyForm;
