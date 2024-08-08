import React from 'react';

const Tooltip = ({ children, text }) => {
    return (
        <div className="relative flex items-center group">
            {children}
            <div className="absolute bottom-full mb-2 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
