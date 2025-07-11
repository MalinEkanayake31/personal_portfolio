# Malin Ekanayake - Personal Portfolio

A modern, dark-themed personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Dark Theme Design**: Professional dark UI with custom color scheme
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern UI**: Glassmorphism effects, rounded corners, and clean typography
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **Google Fonts** - Inter and JetBrains Mono fonts

## 📋 Sections

1. **Hero Section** - Fullscreen welcome with animated particles
2. **About Me** - Personal introduction with timeline
3. **Projects** - Showcase of featured projects
4. **Skills** - Technical skills organized by category
5. **Certifications** - Professional achievements and qualifications
6. **Contact** - Contact form and social links
7. **Footer** - Additional links and copyright

## 🎯 Key Features

### Design System
- **Primary Color**: #0D1117 (Dark background)
- **Accent Color**: #EFC11A (Golden yellow)
- **Text Colors**: #FCFCFC (Primary), #C9D1D9 (Secondary), #8B949E (Muted)

### Animations
- Scroll-triggered animations
- Hover effects on cards and buttons
- Floating particles in hero section
- Staggered animations for lists
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Optimized typography scaling

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section with particles
│   ├── About.js         # About section with timeline
│   ├── Projects.js      # Projects showcase
│   ├── Skills.js        # Skills organized by category
│   ├── Certifications.js # Certifications and achievements
│   ├── Contact.js       # Contact form and info
│   └── Footer.js        # Footer with social links
├── data/
│   └── projectData.json # Project information
├── App.js               # Main app component
├── App.css              # Global styles and animations
└── index.css            # Tailwind imports
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0D1117',
    light: '#161B22',
    dark: '#010409',
  },
  accent: {
    DEFAULT: '#EFC11A',
    light: '#F4D03F',
    dark: '#D4AC0D',
  },
  text: {
    primary: '#FCFCFC',
    secondary: '#C9D1D9',
    muted: '#8B949E',
  }
}
```

### Projects
Add or modify projects in `src/data/projectData.json`:
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "techStack": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/project",
  "image": "project-image.jpg"
}
```

### Content
Update personal information in each component:
- Hero: Name, tagline, and social links
- About: Personal description and timeline
- Skills: Technical skills and categories
- Certifications: Professional achievements
- Contact: Contact information and form

## 🚀 Deployment

### GitHub Pages
1. Add `homepage` field to `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repository-name"
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

## 📱 Performance

- Optimized images and assets
- Lazy loading for animations
- Reduced motion support for accessibility
- Efficient CSS with Tailwind
- Minimal bundle size

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion preferences
- High contrast color scheme
- Screen reader friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: malinash246@gmail.com
- **LinkedIn**: [linkedin.com/in/malin-ekanayake-92a86b26b](https://linkedin.com/in/malin-ekanayake-92a86b26b)
- **GitHub**: [github.com/MalinEkanayake31](https://github.com/MalinEkanayake31)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
