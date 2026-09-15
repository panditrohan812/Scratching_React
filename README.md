# 🎓 Student Hub

A modern, colorful, and student-friendly web application built with **React.js** and **React Router**.

Student Hub is designed as a simple educational project to demonstrate the fundamentals of React development, including reusable components, page navigation, routing, forms, and responsive UI design.

## 📌 Project Overview

**Student Hub** is a React-based website created for students to learn and practice basic frontend development concepts.

The project contains multiple pages with a common navigation bar and footer. React Router is used to navigate between different pages without refreshing the browser.

### Main Pages

- 🏠 Home
- 📖 About
- 🛠️ Services
- 💬 Contact
- ❌ 404 Not Found

## ✨ Features

- ⚛️ Built with React.js
- 🧭 Client-side routing with React Router
- 🧩 Reusable React components
- 🎨 Modern and colorful user interface
- 📱 Responsive design for different screen sizes
- 📝 Functional contact form
- ✅ Form submission success message
- ❌ Custom 404 error page
- 📂 Clean and organized folder structure
- 🎓 Beginner/student-friendly code

## 🛠️ Technologies Used

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| React.js     | Frontend development              |
| React Router | Page navigation and routing       |
| JavaScript   | Application logic                 |
| HTML5        | Page structure                    |
| CSS3         | Styling and responsive design     |
| Vite         | Development server and build tool |

## 📂 Project Structure

````text
student-hub-react/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md



## 🧭 Application Routes

| Route       | Page     | Description                            |
| ----------- | -------- | -------------------------------------- |
| `/`         | Home     | Project introduction and main features |
| `/about`    | About    | Information about Student Hub          |
| `/services` | Services | Available student services             |
| `/contact`  | Contact  | Contact form                           |
| `*`         | 404      | Page shown for invalid URLs            |


## 🎨 UI Design

The project uses a colorful and modern design to make the interface attractive and easy to use.

### Design Highlights

* 💜 Purple navigation bar
* 🔵 Blue and purple hero section
* 🟠 Orange call-to-action buttons
* 🌈 Colorful feature cards
* 📱 Responsive mobile layout
* ✨ Simple hover effects
* 🧼 Clean spacing and typography


## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>


### 2. Open the Project

```bash
cd student-hub-react
````

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

````bash
npm run dev


### 5. Open in Browser

Vite will provide a local development URL such as:

http://localhost:5173/


Open the URL in your browser.


## 📦 Available Commands

### Start Development Server

```bash
npm run dev
````

### Create Production Build

````bash
npm run build

### Preview Production Build

```bash
npm run preview



## 🧩 Components

### Navbar

The `Navbar` component provides navigation links to all major pages.

It uses `NavLink` from React Router to highlight the currently active page.

### Footer

The `Footer` component provides a common footer section that appears throughout the application.



## 📄 Pages

### Home

The Home page contains:

* Welcome message
* Project introduction
* React + Router highlight
* Feature cards
* Call-to-action button

### About

The About page explains:

* What Student Hub is
* Project purpose
* Learning goals
* React practice features

### Services

The Services page contains different student-focused services such as:

* Study Resources
* React Learning
* UI Design
* Project Practice
* Mini Projects
* Student Support

### Contact

The Contact page contains a simple form with:

* Name
* Email
* Subject
* Message

After submitting the form, a success message is displayed.

> Note: The current contact form is a frontend-only form. It does not send data to a backend server or email service.

### 404 Page

The `NotFound` page is displayed whenever a user visits a route that does not exist.

## 🔄 Routing

React Router is used for client-side navigation.

Example:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>

This allows users to move between pages without a full browser refresh.


## 📱 Responsive Design

The application is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

CSS media queries are used to adjust the layout for smaller screens.



## 🎯 Learning Objectives

This project helps students understand:

1. React components
2. JSX syntax
3. React Router
4. Routes and navigation
5. `NavLink` and `Link`
6. React state using `useState`
7. Form handling
8. CSS styling
9. Responsive web design
10. Project folder organization


## 🚀 Future Improvements

The project can be extended with additional features such as:

* 🔐 Student Login & Registration
* 👤 Student Profile
* 📚 Course Management
* 📊 Student Dashboard
* 🔎 Search functionality
* 🌙 Dark Mode
* 💾 Backend database
* 📧 Real contact form submission
* 🔑 Authentication
* 🗄️ REST API integration



## 👨‍💻 Author

**Student Hub React Project**

Created as a student-level React project for learning and practicing modern frontend development.



## 📜 License

This project is created for **educational and learning purposes**.

You are free to modify and improve the project for your own educational use.



## ⭐ Acknowledgement

This project was developed using:

* React.js
* React Router
* Vite
* HTML5
* CSS3
* JavaScript



## 💡 Conclusion

**Student Hub** demonstrates how a simple React application can be structured into reusable components and multiple pages using React Router.

It provides a clean foundation for students who want to understand React fundamentals and gradually build larger web applications.
````
