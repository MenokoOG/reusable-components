import React from 'react';

const Table = ({ headers, rows }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-darkBg text-primaryText">
                <thead>
                    <tr className="bg-darkBgGradientStart">
                        {headers.map((header, index) => (
                            <th key={index} className="py-2 px-4 border-b border-secondaryText text-left">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-darkBgGradientStart' : 'bg-darkBgGradientEnd'}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="py-2 px-4 border-b border-secondaryText text-left">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
