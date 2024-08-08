import React from 'react';

export const Heading = ({ level, children }) => {
    const Tag = `h${level}`;
    return <Tag className="font-bold text-primaryText">{children}</Tag>;
};

export const Paragraph = ({ children }) => {
    return <p className="mt-2 text-secondaryText">{children}</p>;
};
