import React, { useState, useEffect } from 'react';

function LeetcodeStats({ username }) {
    const [stats, setStats] = useState(null); // Store fetched stats
    const [error, setError] = useState(null); // Handle errors

    useEffect(() => {
        // Fetch stats from the backend
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://leetcode-backend-1.onrender.com/api/leetcode/user/${username}/stats`);
                if (!response.ok) {
                    throw new Error("Failed to fetch stats");
                }
                const data = await response.json();
                setStats(data); // Update stats state
                // console.log(data); // Debugging: Check the API response structure
            } catch (err) {
                setError(err.message); // Update error state
            }
        };

        fetchStats();
    }, [username]); // Re-run effect when username changes

    return (
        <div>
            <h2>Leetcode Stats</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : stats ? (
                <div>
                   
                    <p>
                        <strong>Questions Solved:</strong> {stats.totalSolved}
                    </p>
                    <p>
                        <strong>Ranking:</strong> {stats.ranking}
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default LeetcodeStats;
