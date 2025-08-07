import React, { useState } from 'react';

function SurveyForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        satisfaction: '',
        suggestions: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={styles.container}>
            <h2>Survey Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.question}>
                    <label>1. What is your name?</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={styles.question}>
                    <label>2. What is your age group?</label><br />
                    <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Under 18">Under 18</option>
                        <option value="18-30">18-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51+">51+</option>
                    </select>
                </div>

                <div style={styles.question}>
                    <label>3. How satisfied are you with our service?</label><br />
                    <label><input type="radio" name="satisfaction" value="Very Satisfied" onChange={handleChange} required /> Very Satisfied</label><br />
                    <label><input type="radio" name="satisfaction" value="Satisfied" onChange={handleChange} /> Satisfied</label><br />
                    <label><input type="radio" name="satisfaction" value="Neutral" onChange={handleChange} /> Neutral</label><br />
                    <label><input type="radio" name="satisfaction" value="Unsatisfied" onChange={handleChange} /> Unsatisfied</label>
                </div>

                <div style={styles.question}>
                    <label>4. Any suggestions?</label><br />
                    <textarea
                        name="suggestions"
                        value={formData.suggestions}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <button type="submit">Submit Survey</button>
            </form>

            {submitted && (
                <div style={styles.result}>
                    <h2>Survey Submitted</h2>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Age Group:</strong> {formData.age}</p>
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
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
    },
    question: {
        marginBottom: '15px'
    },
    result: {
        marginTop: '20px',
        backgroundColor: '#f9f9f9',
        padding: '15px',
        border: '1px solid #ccc'
    }
};

export default SurveyForm;
