# Designalytics Dashboard

Designalytics is a modern, responsive web dashboard designed for displaying sales, revenue statistics, and visitor information. Built with HTML, CSS, and JavaScript, this dashboard adapts to various screen sizes, ensuring an optimal user experience across desktop, tablet, and mobile devices.

## Features
- **Responsive Design**: The layout adjusts dynamically for mobile, tablet, and desktop screens using CSS Grid and Flexbox.
- **Interactive Dashboard**: Displays real-time sales, revenue, and conversion stats.
- **Visitor Tracking**: Lists and details of visitors with a clean, interactive interface.
- **Mobile Navigation**: A collapsible mobile navigation menu that appears on smaller screens.
- **Premium Section**: A call-to-action for users to "Go Premium" for additional features.

## Technologies Used
- **HTML5**: Semantic HTML for structure and accessibility.
- **CSS3**: Stylesheets using custom properties (CSS variables) for consistent theming and responsive layouts.
- **JavaScript**: Lightweight JS for any interactivity (e.g., menu toggling).
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts for clean, modern typography.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Tariq-mujtaba/Designalytics-dashboard.git
```

### 2. Navigate to the project directory
```bash
cd designalytics-dashboard
```

### 3. Open the project in your browser
Once the repository is cloned and you've navigated into the project folder, you can open the `index.html` file in your browser to view the dashboard:
```bash
open index.html
```
Alternatively, you can use any code editor with live preview or start a local server if you need to interact with the JavaScript.

## Project Structure

The project is structured as follows:

```
designalytics-dashboard/
│
├── assets/              # Contains image assets used throughout the project
│   ├── logo.svg         # Dashboard logo
│   ├── usrm1.jpg        # User profile images
│   ├── chart-top.svg    # Sales chart image
│   └── open-menu.svg    # Mobile navigation menu icon
│
├── css/                 # Contains stylesheets
│   └── style.css        # Main CSS file with layout and styling
│
├── script.js            # JavaScript for any interactive elements
├── index.html           # Main HTML file for the dashboard
└── README.md            # This file
```

### Assets
The `assets` folder contains images used for the logo, user avatars, icons, and charts. You can easily replace these with your own images if desired.

### CSS
The `style.css` file contains all the styling for the dashboard, including the layout, colors, typography, and responsive design using media queries.

### JavaScript
The `script.js` file is used to manage JavaScript functionality, like toggling the navigation menu on mobile devices.

## How to Contribute

1. Fork the repository
2. Create a new branch for your changes
3. Make the changes in your branch
4. Submit a pull request

We welcome contributions! Please ensure any new features or bug fixes are well-documented and include tests if applicable.


## Notes

- **Responsive Design**: This project is designed with mobile-first principles. The CSS uses media queries to adapt the layout to different screen sizes.
- **Customization**: You can customize the colors, typography, and layout by modifying the CSS variables in the `:root` selector.
