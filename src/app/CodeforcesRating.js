import React, { useState, useEffect } from 'react';

function CodeforcesRating({ handle }) {
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch rating from the backend
        const fetchRating = async () => {
            try {
                const response = await fetch(`https://spring-boot-backend-2-q5io.onrender.com/api/codeforces/user/SG_14/rating`);
                if (!response.ok) {
                    throw new Error("Failed to fetch rating");
                }
                const data = await response.json();
                setRating(data); // Set rating
            } catch (err) {
                setError(err.message); // Handle error
            }
        };

        fetchRating();
    }, [handle]);

    return (
        <div>
            <h2>Codeforces Rating</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : rating !== null ? (
                <p>
                    <strong>{handle}</strong>: {rating}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CodeforcesRating;
