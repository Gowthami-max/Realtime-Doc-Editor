import React, { useState } from 'react';

const App = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Collaborative Editor</h1>
            <textarea
                rows="10"
                cols="50"
                value={text}
                onChange={handleChange}
                placeholder="Start typing here..."
            />
        </div>
    );
};

export default App;
