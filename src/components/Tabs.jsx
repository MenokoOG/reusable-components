import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        <div>
            <div className="flex space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-4 py-2 rounded-t ${activeTab === tab.label ? 'bg-primaryAccent text-primaryText' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 border rounded-b">
                {tabs.find((tab) => tab.label === activeTab).content}
            </div>
        </div>
    );
};

export default Tabs;
