import React from 'react';

const ConditionalRendering = () => {
    const isLoggedIn = true; // Change to false to see alternate output

    return (
        <div>
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        </div>
    );
};

export default ConditionalRendering;
