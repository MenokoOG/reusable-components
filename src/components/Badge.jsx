import React from 'react';

const Badge = ({ type = 'info', children }) => {
    const typeClasses = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
    };

    return (
        <span className={`inline-block px-2 py-1 rounded ${typeClasses[type]}`}>
            {children}
        </span>
    );
};

export default Badge;
