import React from 'react';

const Card = ({ title, content, footer }) => {
    return (
        <div className="border rounded p-4 shadow bg-darkBg text-primaryText">
            <h2 className="font-bold text-lg">{title}</h2>
            <div className="mt-2">{content}</div>
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};

export default Card;
