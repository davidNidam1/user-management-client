# User Management - Frontend

## Overview  
This repository contains the frontend for the **User Management System**, built using **React with TypeScript** and **Vite** for fast development. The frontend interacts with the backend API to allow user registration, login, and profile management.

## Technologies Used  
- **React** with **TypeScript**  
- **Vite** for fast builds and development  
- **React Router** for client-side navigation  
- **Tailwind CSS** for styling (if used)  
- **Axios / Fetch API** for communicating with the backend  

## Project Structure  
```
user-management-client/
│── public/            # Static assets
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API requests and logic
│   ├── hooks/         # Custom React hooks
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Application entry point
│── package.json       # Project dependencies
│── tsconfig.json      # TypeScript configuration
│── vite.config.ts     # Vite configuration
```

## Installation & Setup  

### 1. Clone the repository  
```sh
git clone https://github.com/davidNidam1/user-management-client.git
cd user-management-client
```

### 2. Install dependencies  
Ensure you have **Node.js** (latest LTS recommended) installed. If not, download it from:
[https://nodejs.org/](https://nodejs.org/)

Then, install project dependencies:
```sh
npm install
```

### 3. Run the application  
Start the development server with:
```sh
npm run dev
```

The frontend will be available at:
```
http://localhost:5173
```

### 4. Configuration  
By default, the frontend interacts with the backend at `http://localhost:5089`. If the backend is deployed elsewhere, update the API base URL in the service files.

## Features & Functionality  
- **User Registration**: New users can sign up with their email, name, and password.  
- **User Login**: Existing users can log in and receive a **JWT token**.  
- **Session Management**: The token is stored and included in API requests for authentication.  
- **Profile Display**: Logged-in users can view their profile information.  
- **Protected Routes**: Only authenticated users can access certain pages.

## User Limitations  
- **Login required**: Some routes are restricted to authenticated users.
- **No password recovery**: There is currently no 'forgot password' feature.
- **Basic UI design**: The interface is functional but minimalistic.

## Future Improvements  
If additional time were available, the following enhancements could be implemented:
- **Enhanced UI/UX** with improved styling and animations.
- **Error handling** to provide clearer user feedback.
- **OAuth login** for third-party authentication (Google, GitHub, etc.).
- **Docker support** to simplify deployment.
- **Production deployment** on Vercel, Netlify, or a cloud provider.

## Related Repositories  
- **[Backend Repository](https://github.com/davidNidam1/UserManagement)** - ASP.NET Core backend with MongoDB  
- **[Testing Repository](https://github.com/davidNidam1/UserServerTests)** - Integration and unit tests for the backend  

---  
This frontend serves as a fully functional interface for the User Management System, designed for easy extensibility and integration with the backend API.

