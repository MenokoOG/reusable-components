import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider, useDataContext } from './context/DataContext';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Card from './components/Card';
import { Heading, Paragraph } from './components/Typography';
import Notification from './components/Notification';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import Dropdown from './components/Dropdown';
import Tabs from './components/Tabs';
import Tooltip from './components/Tooltip';
import Table from './components/Table';
import Spinner from './components/Spinner';

const AppContent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [notification, setNotification] = useState(null);

    // Consuming context data
    const {
        user,
        notifications,
        tableData,
        tabs,
        breadcrumbs
    } = useDataContext();

    const showNotification = (type, message) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-darkBgGradientStart to-darkBgGradientEnd text-primaryText">
            <div className="space-y-8">
                <Heading level={1}>Component Library Example</Heading>

                <div>
                    <Button size="lg" onClick={() => setModalOpen(true)}>Open Modal</Button>
                </div>

                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <Heading level={2}>This is a Modal</Heading>
                    <Paragraph>Modal content goes here.</Paragraph>
                    <Button size="sm" onClick={() => setModalOpen(false)}>Close</Button>
                </Modal>

                <div>
                    <Input type="text" placeholder="Enter some text" />
                </div>

                <div>
                    <Card title="User Info" content={
                        <>
                            <Paragraph>Name: {user.name}</Paragraph>
                            <Paragraph>Age: {user.age}</Paragraph>
                            <Paragraph>Occupation: {user.occupation}</Paragraph>
                        </>
                    } />
                </div>

                <div className="space-x-4">
                    <Button size="md" onClick={() => showNotification(notifications[0].type, notifications[0].message)}>Show Success Notification</Button>
                    <Button size="md" onClick={() => showNotification(notifications[1].type, notifications[1].message)}>Show Error Notification</Button>
                    <Button size="md" onClick={() => showNotification(notifications[2].type, notifications[2].message)}>Show Warning Notification</Button>
                </div>

                {notification && (
                    <Notification type={notification.type} message={notification.message} onClose={() => setNotification(null)} />
                )}

                <div>
                    <Avatar src={user.avatar} alt="Avatar" size="md" />
                </div>

                <div className="space-x-4">
                    <Badge type="success">Success Badge</Badge>
                    <Badge type="error">Error Badge</Badge>
                    <Badge type="warning">Warning Badge</Badge>
                    <Badge type="info">Info Badge</Badge>
                </div>

                <div>
                    <Breadcrumb links={breadcrumbs} />
                </div>

                <div>
                    <Dropdown label="Dropdown">
                        <Button size="sm">Option 1</Button>
                        <Button size="sm">Option 2</Button>
                    </Dropdown>
                </div>

                <div>
                    <Tabs tabs={tabs} />
                </div>

                <div>
                    <Tooltip text="This is a tooltip">
                        <Button size="md">Hover me</Button>
                    </Tooltip>
                </div>

                <div>
                    <Table headers={tableData.headers} rows={tableData.rows} />
                </div>

                <div>
                    <Spinner />
                </div>
            </div>
        </div>
    );
};

const App = () => (
    <Router>
        <DataProvider>
            <AppContent />
        </DataProvider>
    </Router>
);

export default App;
