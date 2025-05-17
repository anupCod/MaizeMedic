For backend:-
pip install django torch torchvision djangorestframework pillow django-cors-headers djangorestframework-simplejwt

# MaizeMedic

**MaizeMedic** is an application that assists farmers in identifying and detecting maize diseases more effectively to reduce the challenges faced due to loss in production.Our system can accurately detect early signs of diseases in maize crops, ensuring farmers to take timely action to prevent its widespread.

Our platform leverages advanced machine learning algorithms, specifically convolutional neural networks (CNN), to analyze images of maize plants and identify potential diseases. By providing real-time results, the system enables farmers to quickly assess the health of their crops, reducing the need for costly and time-consuming manual inspections. With an easy-to-use interface, the application ensures that farmers, even with limited technical expertise, can easily upload images and receive immediate feedback, empowering them to make informed decisions and protect their crops effectively.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **Vite**: A fast build tool and development server for React, replacing Create React App.
- **React Router**: For navigation between pages.
- **Axios**: For handling HTTP requests.
- **CSS**: For styling the application.
- **Bootstrap/tailwind**: For responsive, mobile-first front-end development. Used to quickly design and customize the app's layout.

### Mobile App

- **React Native**: Framework for building native mobile applications using React.
- **React Navigation**: Handles navigation between screens in the app.
- **Axios**: Used to make API requests and handle responses.
- **NativeWind**: Tailwind CSS utility-based styling for React Native.
- **TypeScript**: Adds static typing to improve code quality and maintainability 

### Backend

- **Django:** A high-level Python web framework used to build scalable and maintainable backend systems with built-in features like authentication, admin panel, and ORM.
- **Django REST Framework:** A powerful toolkit for building RESTful APIs on top of Django.
- **SQLite:** A lightweight, file-based relational database used to store user and application data, ideal for development environments.
- **bcrypt:** A secure password-hashing library used to encrypt and verify user passwords.
- **JWT (JSON Web Tokens):** A token-based authentication method used for user login and access control.
- **CORS (Cross-Origin Resource Sharing):** Middleware to allow or restrict requests between the frontend and backend when hosted on different origins.


### Database Management
- **DBSQLite (DB Browser for SQLite)** – A lightweight, open-source tool for managing SQLite databases. It supports database design, query execution, and browsing data in a user-friendly interface.
---

## Project Setup

### 1. **Clone the repository**

To get started with the project, first clone the repository to your local machine:

```bash
git clone https://github.com/anupCod/MaizeMedic.git
cd maizemedic
```

# Setup Instructions

### Frontend

#### Install Dependencies


1. Navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Install the dependencies using **npm**:

    ```bash
    npm install
    ```

---

### **Running in Development Mode**

To start the frontend in development mode:

```bash
npm run dev
```

# Setup Instructions

### Mobile (React Native)

#### Install Dependencies

1. Navigate to the `mobileapp` folder:

    ```bash
    cd mobileapp
    ```

2. Install the dependencies using **npm** or **yarn**:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

---

### **Running in Development Mode**

To start the React Native app in development mode:

```bash
npx expo start
```
or

``` 
npm start
```

