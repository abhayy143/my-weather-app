![adadadaad](https://github.com/user-attachments/assets/8ddf79df-6bf2-4fa8-85d7-ce87a76b5645)# ☀️ Modern React Weather App

## A sleek and responsive web application built with React to fetch and display current weather information for any city worldwide.

![Weather App Screenshot - Mobile View](![adadadaad](https://github.com/user-attachments/assets/8d476fd7-f439-4528-bfe7-566eb96c2020)
)
)

---

### 📋 Table of Contents
- [✨ About The Project](#-about-the-project)
- [🚀 Live Demo](#-live-demo)
- [💡 Features](#-features)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [📦 API Usage](#-api-usage)
- [▶️ Getting Started](#%EF%B8%8F-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [🔮 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

---

### ✨ About The Project

This project is a clean, minimalistic weather application designed to provide users with quick and accurate current weather conditions for any city they search for. Built with React and Vite, it emphasizes a smooth user experience and a modern, responsive UI.

Upon initial load, the app proudly displays the current weather for **Guwahati, Assam, India**, offering an immediate glimpse into its capabilities. Users can then easily search for any other city by typing its name and hitting 'Search' or 'Enter'.

This application showcases key front-end development skills including:
-   **Component-based architecture** with React.
-   **State management** using React Hooks (`useState`, `useEffect`).
-   **Asynchronous data fetching** from external APIs.
-   **Robust error handling** and clear loading indicators.
-   **Modern CSS** for a clean, intuitive, and responsive design.

---

### 🚀 Live Demo

Experience the app live!
🔗 [https://my-weather-app-gules-gamma.vercel.app/] 

---

### 💡 Features

-   **City Search:** Instantly get weather updates for any city entered.
-   **Current Weather Display:** Shows temperature (°C), weather description, humidity (%), and wind speed (m/s).
-   **Dynamic Weather Icons:** Simple emoji icons reflect current weather conditions.
-   **Default City Load:** Displays weather for Guwahati, Assam, India on initial load.
-   **Loading Indicators:** Provides feedback while data is being fetched.
-   **Error Handling:** User-friendly messages for invalid city names or API issues.
-   **Responsive Design:** Optimized for seamless viewing across desktops, tablets, and mobile devices.
-   **Minimalistic UI:** Clean and modern interface for an uncluttered experience.

---

### 🛠️ Technologies Used

-   **Frontend:**
    -   [**React.js**](https://react.dev/) - A JavaScript library for building user interfaces.
    -   [**Vite**](https://vitejs.dev/) - A blazing fast build tool for modern web projects.
    -   **HTML5**
    -   **CSS3** (with modern techniques like Flexbox and Media Queries)
    -   **JavaScript (ES6+)**

-   **APIs:**
    -   [**Open-Meteo API**](https://open-meteo.com/) - For fetching accurate weather data (temperature, humidity, wind, weather codes).
    -   [**Nominatim API (OpenStreetMap)**](https://nominatim.openstreetmap.org/ui/search.html) - For geocoding (converting city names to latitude and longitude).

---

### 📦 API Usage

This project utilizes two fantastic free and open-source APIs, making it a cost-effective solution for a personal project:

1.  **Open-Meteo API**:
    * **No API Key Required**: This API is free for non-commercial use and does not require any authentication, simplifying development.
    * Provides precise weather data based on geographic coordinates.

2.  **Nominatim API (OpenStreetMap)**:
    * **No API Key Required**: This API is also free for reasonable non-commercial usage.
    * Used to convert the user-entered city name into geographical coordinates (latitude and longitude), which are then used by the Open-Meteo API.
    * **Polite Usage Note**: When using Nominatim, it's good practice to include a `User-Agent` header in your requests. In this project, it's set as `'User-Agent': 'ReactWeatherApp/1.0 (your-email@example.com)'` to identify your application. Remember to replace `your-email@example.com` in `src/App.jsx` with your actual email.

---

### ▶️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

-   **Node.js**: Make sure you have Node.js (version 14.x or higher) and npm (Node Package Manager) installed. You can download it from [nodejs.org](https://nodejs.org/).
    ```bash
    node -v
    npm -v
    ```

#### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abhayy143/my-weather-app
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

#### Running the App

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173/` (or the address provided in your terminal).

---

---

### 🔮 Future Enhancements

-   Implement a 5-day forecast display.
-   Add a toggle for Celsius/Fahrenheit units.
-   Improve weather icon variety (e.g., using a dedicated icon library).
-   Implement location auto-detection using Geolocation API.
-   Add a search history feature.
-   Debounce the input for better performance on rapid typing.

---
### 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

### 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
*(Consider creating a `LICENSE` file in your project root with the MIT license text.)*

---

### 📧 Contact

Abhay Chetry - [abhaychetri22@gmail.com](mailto:abhaychetri22@gmail.com)

Project Link: [https://github.com/abhayy143/my-weather-app](https://github.com/abhayy143/my-weather-app)

---
