import React, { useState, useEffect } from 'react';

function CodeforcesRating({ handle }) {
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch rating from the backend
        const fetchRating = async () => {
            try {
                const response = await fetch(`https://spring-boot-backend-1-r3fa.onrender.com/api/codeforces/user/${handle}/rating`);
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
    }, [handle]); // Dependency array ensures API call is made when the handle changes

    return (
        <div>
            <h2 className="text-3xl ">Codeforces Rating</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : rating !== null ? (
                <p className="text-2xl flex justify-center">
                    <strong >{handle}</strong>: {rating}
                </p>
            ) : (
                <p className="text-lg">Loading...</p>
            )}
        </div>
    );
}

export default CodeforcesRating;
