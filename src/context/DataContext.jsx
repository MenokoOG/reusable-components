import React, { createContext, useContext, useState } from 'react';

// Create the context
const DataContext = createContext();

// Provide the context
export const DataProvider = ({ children }) => {
    const [fakeData, setFakeData] = useState({
        user: {
            name: 'John Doe',
            avatar: 'https://via.placeholder.com/150',
            age: 30,
            occupation: 'Software Engineer'
        },
        notifications: [
            { type: 'success', message: 'This is a success message!' },
            { type: 'error', message: 'This is an error message!' },
            { type: 'warning', message: 'This is a warning message!' }
        ],
        tableData: {
            headers: ['Name', 'Age', 'Occupation'],
            rows: [
                ['John Doe', '30', 'Software Engineer'],
                ['Jane Smith', '25', 'Designer']
            ]
        },
        tabs: [
            { label: 'Tab 1', content: 'This is content for Tab 1.' },
            { label: 'Tab 2', content: 'This is content for Tab 2.' }
        ],
        breadcrumbs: [
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' }
        ]
    });

    return (
        <DataContext.Provider value={fakeData}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the context
export const useDataContext = () => {
    return useContext(DataContext);
};
