import React, { useState } from 'react';
import axios from "axios";

function SurveyForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        satisfaction: '',
        suggestions: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/surveys', formData);

            if (response.status === 201 || response.status === 200) {
                setSubmitted(true);
            } else {
                alert('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Server error!');
        }
    };


    return (
        <div style={styles.container}>
            <h2>Survey Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.question}>
                    <label>Name:</label><br />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                </div>

                <div style={styles.question}>
                    <label>Age Group:</label><br />
                    <select name="age" required value={formData.age} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Under 18">Under 18</option>
                        <option value="18-30">18-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51+">51+</option>
                    </select>
                </div>

                <div style={styles.question}>
                    <label>Satisfaction:</label><br />
                    {['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'].map(option => (
                        <label key={option}>
                            <input
                                type="radio"
                                name="satisfaction"
                                value={option}
                                checked={formData.satisfaction === option}
                                onChange={handleChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>

                <div style={styles.question}>
                    <label>Suggestions:</label><br />
                    <textarea name="suggestions" rows="3" value={formData.suggestions} onChange={handleChange} />
                </div>

                <button type="submit">Submit Survey</button>
            </form>

            {submitted && (
                <div style={styles.result}>
                    <h3>Survey Submitted!</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Age:</strong> {formData.age}</p>
                    <p><strong>Satisfaction:</strong> {formData.satisfaction}</p>
                    <p><strong>Suggestions:</strong> {formData.suggestions || 'None'}</p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial',
        maxWidth: 600,
        margin: '40px auto',
        padding: 20,
        border: '1px solid #ddd',
        borderRadius: 8,
    },
    question: {
        marginBottom: 15,
    },
    result: {
        marginTop: 20,
        padding: 15,
        background: '#f1f1f1',
        border: '1px solid #ccc',
    },
};

export default SurveyForm;
