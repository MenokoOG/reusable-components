import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ links }) => {
    return (
        <nav className="flex items-center space-x-2">
            {links.map((link, index) => (
                <span key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    <Link to={link.path} className="text-blue-500 hover:underline">{link.label}</Link>
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
