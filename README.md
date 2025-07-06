# YayWay Landing Page

A modern, responsive landing page for YayWay's investment pitch, showcasing the social karaoke platform opportunity.

## Project Structure

```
yayway-landing-pages/
├── YayWay.html      # Main HTML file (544 lines, down from 784)
├── Yayway.css       # External stylesheet (44 lines)
├── script.js        # External JavaScript for charts and interactions (183 lines)
└── README.md        # This file
```

## Benefits of This Structure

### ✅ **Maintainability**
- **Separation of Concerns**: HTML for structure, CSS for styling, JS for behavior
- **Easier Debugging**: Issues can be isolated to specific files
- **Cleaner Code**: Each file has a single responsibility

### ✅ **Performance**
- **Caching**: Browsers can cache CSS and JS files separately
- **Parallel Loading**: CSS and JS can load in parallel with HTML
- **Smaller HTML**: Reduced file size improves initial page load

### ✅ **Collaboration**
- **Team Development**: Different developers can work on different files
- **Version Control**: Easier to track changes in specific areas
- **Code Reviews**: More focused reviews on specific functionality

### ✅ **Reusability**
- **Modular CSS**: Styles can be reused across multiple pages
- **Shared JavaScript**: Chart configurations and utilities can be shared
- **Scalability**: Easy to add new pages or features

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Charts**: Market data, funding allocation, and financial projections
- **Smooth Navigation**: Active state tracking and smooth scrolling
- **Modern UI**: Clean, professional design with consistent branding

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Chart.js**: Interactive data visualizations
- **Vanilla JavaScript**: Modern ES6+ features
- **Google Fonts**: Inter font family

## Getting Started

1. Open `YayWay.html` in a web browser
2. All dependencies are loaded from CDNs
3. No build process required

## File Descriptions

- **YayWay.html**: Main landing page with all content sections
- **Yayway.css**: Custom styles for charts, navigation, and animations
- **script.js**: Chart configurations and navigation functionality 