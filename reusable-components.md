This project is an excellent opportunity to delve into building reusable and customizable components. Here's a detailed plan to get you started:

## **Project Setup**

### **Initialize the Project**

1. **Create a New Directory**:
    ```sh
    mkdir reusable-component-library
    cd reusable-component-library
    ```

2. **Initialize a React Project using Vite**:
    ```sh
    npm create vite@latest
    ```

### **Project Structure**

Create the following directory structure:
```plaintext
reusable-component-library/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Card.jsx
│   │   ├── Typography.jsx
│   │   └── Notification.jsx
│   ├── docs/
│   │   ├── Button.md
│   │   ├── Input.md
│   │   ├── Modal.md
│   │   ├── Card.md
│   │   ├── Typography.md
│   │   └── Notification.md
│   ├── examples/
│   │   └── App.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── index.html
└── README.md
```

### **Install Necessary Packages**

- Install Tailwind CSS:
    ```sh
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

- Configure `tailwind.config.js`:
    ```js
    module.exports = {
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

- Create a `src/index.css` file and include Tailwind's directives:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- Import `index.css` in your `main.jsx`:
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```

## **Component Development**

### **Button Component**

- **File**: `src/components/Button.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    const Button = ({ type = 'button', size = 'md', onClick, children, className }) => {
        const sizeClasses = {
            sm: 'px-2 py-1 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        const baseClass = 'inline-block font-semibold rounded';

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
    ```

### **Input Component**

- **File**: `src/components/Input.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
        return (
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border p-2 rounded ${className}`}
            />
        );
    };

    export default Input;
    ```

### **Modal Component**

- **File**: `src/components/Modal.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded">
                    <button className="float-right" onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        );
    };

    export default Modal;
    ```

### **Card Component**

- **File**: `src/components/Card.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    const Card = ({ title, content, footer }) => {
        return (
            <div className="border rounded p-4 shadow">
                <h2 className="font-bold text-lg">{title}</h2>
                <div className="mt-2">{content}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </div>
        );
    };

    export default Card;
    ```

### **Typography Component**

- **File**: `src/components/Typography.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    export const Heading = ({ level, children }) => {
        const Tag = `h${level}`;
        return <Tag className="font-bold">{children}</Tag>;
    };

    export const Paragraph = ({ children }) => {
        return <p className="mt-2">{children}</p>;
    };
    ```

### **Notification Component**

- **File**: `src/components/Notification.jsx`
- **Implementation**:
    ```jsx
    import React from 'react';

    const Notification = ({ type = 'info', message, onClose }) => {
        const typeClasses = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-black',
        };

        return (
            <div className={`p-4 rounded ${typeClasses[type]}`}>
                {message}
                <button className="float-right" onClick={onClose}>X</button>
            </div>
        );
    };

    export default Notification;
    ```


