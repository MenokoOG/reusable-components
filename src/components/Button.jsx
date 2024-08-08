import React from 'react';

const Button = ({ type = 'button', size = 'md', onClick, children, className }) => {
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const baseClass = 'inline-block font-semibold rounded bg-primaryAccent text-primaryText hover:bg-secondaryAccent';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClass} ${sizeClasses[size]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
