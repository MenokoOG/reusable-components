import React from 'react';

const Notification = ({ type = 'info', message, onClose }) => {
    const typeClasses = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-black',
        info: 'bg-blue-500 text-white',
    };

    return (
        <div className={`p-4 rounded ${typeClasses[type]}`}>
            {message}
            <button className="float-right" onClick={onClose}>X</button>
        </div>
    );
};

export default Notification;
