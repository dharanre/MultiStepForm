# Multi-Step Form Project

A fully functional, visually appealing multi-step form built using React.js. This project includes form navigation, state management with Zustand, animations with Framer Motion, mock API integration, UI/UX enhancements, and responsive design.

## Features

- **Multi-Step Navigation**: Form divided into multiple steps for better user experience.
- **State Management**: Centralized form data management using Zustand.
- **Smooth Animations**: Animated transitions between form steps using Framer Motion.
- **Mock API Integration**: Simulated data fetching to auto-fill the form using a mock API.
- **Responsive Design**: Fully responsive form for mobile and desktop views.
- **UI/UX Enhancements**: Improved visual appeal with styled components and navigation.

## Project Setup

### 1. Clone the Repository:

To get started, first clone the project repository to your local machine:

```bash 
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
```

## 2. Install Dependencies:
npm install
This will install the following dependencies:

zustand: State management library.
framer-motion: Animation library for smooth transitions.
@radix-ui/react-tooltip: Optional, for adding tooltips to enhance the form.

## 3. Run the Project:
npm start
This will start the development server. Open your browser and go to http://localhost:3000 to view the form in action.

### Folder Structure
```
/multi-step-form
|-- /public
|-- /src
    |-- /components
        |-- Navigation.js
    |-- /pages
        |-- Step1.js
        |-- Step2.js
        |-- Step3.js
        |-- Step4.js
    |-- /state
        |-- FormProvider.js
    |-- App.js
    |-- App.css
    |-- mockApi.js
```
-  /public: Contains static files like images and the index.html file.
- /src: Contains the main application code.
- /components: Reusable components like Navigation.js for step navigation.
- /pages: Contains each form step component like Step1.js, Step2.js, etc.
- /state: Contains the FormProvider.js for centralized state management using Zustand.
- App.js: The main entry point of the application.
- App.css: The main CSS file for styling the application.
- mockApi.js: Simulates API data fetching to pre-fill the form.

### License

This project is licensed under the MIT License.

```

This version includes all the steps, folder structure, and dependencies required for the project. Let me know if you'd like any changes!
```
