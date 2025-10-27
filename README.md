# Portfolio Website - Angular

A modern, advanced single-page portfolio website built with Angular for showcasing your work as a computer science student.

## Features

- 🎨 Modern and sleek design with gradient effects
- 📱 Fully responsive layout
- ⚡ Smooth scrolling and animations
- 🎯 Single-page architecture
- 💼 Project showcase section
- 🛠️ Skills visualization
- 📧 Contact section
- 🌐 Social media links

## Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and technologies
3. **Skills** - Technical skills with progress bars
4. **Projects** - Featured projects with images
5. **Contact** - Get in touch section

## Installation

1. Install Node.js (v16 or higher) and npm
2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/portfolio/` directory.

## Customization

### Personal Information
Edit `src/app/app.component.ts` to update:
- Your name
- Projects and descriptions
- Skills and proficiency levels
- Social media links

### Styling
Modify `src/styles.css` to customize:
- Color scheme (CSS variables in `:root`)
- Fonts
- Animations
- Layout

### Images
Replace project images in the `projects` array or add local images to `src/assets/`

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Main component logic
│   │   ├── app.component.html      # Main template
│   │   └── app.component.css       # Component styles
│   ├── assets/                     # Static assets
│   ├── styles.css                  # Global styles
│   ├── index.html                  # Entry HTML
│   └── main.ts                     # Bootstrap file
├── angular.json                    # Angular configuration
├── package.json                     # Dependencies
└── tsconfig.json                   # TypeScript configuration
```

## Technologies Used

- Angular 17
- TypeScript
- CSS3 (with animations and gradients)
- Font Awesome Icons
- Google Fonts (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your portfolio!

## Credits

- Icons: Font Awesome
- Fonts: Google Fonts (Poppins)
- Images: Unsplash (replace with your own)

