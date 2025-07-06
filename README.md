# YayWay Landing Page

A modern, responsive landing page for YayWay's investment pitch, showcasing the social karaoke platform opportunity.

## Project Structure

```
yayway-landing-pages/
├── index.html         # Main HTML file (550 lines)
├── stylesheet.css     # External stylesheet (59 lines)
├── script.js          # External JavaScript for charts and interactions (183 lines)
├── assets/            # Static assets folder
│   └── YayWayLogo.ico # Company logo
├── vercel.json        # Vercel deployment configuration
└── README.md          # This file
```

## Deployment

This project is configured for deployment on Vercel:

1. **GitHub Integration**: Connect your GitHub repository to Vercel
2. **Automatic Deployments**: Every push to main branch triggers a new deployment
3. **Custom Domain**: Add your domain in Vercel dashboard
4. **Environment**: Production-ready with CDN optimization

### Quick Deploy
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Deploy automatically

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
- **Brand Integration**: YayWay logo as favicon and header branding

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Chart.js**: Interactive data visualizations
- **Vanilla JavaScript**: Modern ES6+ features
- **Google Fonts**: Inter font family
- **Vercel**: Hosting and deployment platform

## Getting Started

1. Open `index.html` in a web browser
2. All dependencies are loaded from CDNs
3. No build process required

## File Descriptions

- **index.html**: Main landing page with all content sections
- **stylesheet.css**: Custom styles for charts, navigation, and animations
- **script.js**: Chart configurations and navigation functionality
- **assets/YayWayLogo.ico**: Company logo used in header branding
- **vercel.json**: Vercel deployment configuration for optimal hosting 