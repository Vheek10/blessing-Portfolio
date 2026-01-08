<!-- @format -->

# 🎬 Blessing Abba - Creative Portfolio

A modern, responsive portfolio website showcasing creative work in cinematography, videography, video editing, and social media management. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)

## ✨ Features

- 🎨 **Multiple Themes** - Switch between Purple, Teal, and Orange color themes
- 📱 **Fully Responsive** - Optimized for all screen sizes and devices
- 🎬 **Portfolio Showcase** - Filterable project gallery with categories
- 🎥 **Video Background** - Cinematic hero section with video background
- 🎯 **Smooth Animations** - 3D effects and smooth transitions throughout
- 📧 **Contact Form** - Integrated contact form for client inquiries
- 🚀 **Fast Performance** - Built with Vite for optimal loading speeds
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core

- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router 6.30.1** - Client-side routing

### Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **Material Icons** - Icon library
- **Custom CSS** - 3D effects and custom animations

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Additional icons
- **Class Variance Authority** - Component variants

### Forms & Data

- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching

### Fonts

- **Bebas Neue** - Display font for headings
- **Space Grotesk** - Body font

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **bun** package manager
- **Git** (for cloning the repository)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/blessing-portfolio.git
   cd blessing-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see your portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
blessing-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, videos, and media files
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ServicesSection.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Customization

### Changing Colors & Themes

Edit `src/index.css` to modify theme colors:

```css
:root {
	--primary: 50 100% 50%; /* Yellow accent */
	/* Modify other color variables */
}

.purple-theme {
	--primary: 300 100% 65%; /* Purple theme */
}

.teal-theme {
	--primary: 186 100% 45%; /* Teal theme */
}

.orange-theme {
	--primary: 25 100% 55%; /* Orange theme */
}
```

### Updating Content

1. **Hero Section** - Edit `src/components/HeroSection.tsx`
2. **About Section** - Edit `src/components/AboutSection.tsx`
3. **Portfolio** - Edit projects array in `src/components/PortfolioSection.tsx`
4. **Services** - Edit services array in `src/components/ServicesSection.tsx`
5. **Contact Info** - Edit `src/components/ContactSection.tsx`
6. **Navigation** - Edit `navLinks` in `src/components/Navigation.tsx`

### Adding Portfolio Items

Update the `projects` array in `src/components/PortfolioSection.tsx`:

```typescript
const projects = [
	{
		id: 1,
		title: "Your Project Title",
		category: "cinematography", // or "videography", "editing", "social"
		description: "Project description",
		image: yourImage,
	},
	// Add more projects...
];
```

### Updating Contact Information

Edit the contact details in `src/components/ContactSection.tsx`:

```typescript
const socialLinks = [
	{ icon: "mail", label: "Email", href: "mailto:your@email.com" },
	// Update other social links...
];
```

## 🎯 Key Features Explained

### Theme System

The portfolio includes a custom theme system that allows users to switch between different color schemes. Themes are managed through the `useTheme` hook.

### Portfolio Filtering

Projects can be filtered by category (Cinematography, Videography, Video Editing, Social Media) using the filter buttons or navigation dropdown menu.

### Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 3D Effects

Custom CSS animations create 3D perspective effects on cards, images, and interactive elements for a modern, engaging experience.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Push to GitHub and connect to Netlify

### Deploy to GitHub Pages

```bash
npm run build
# Follow GitHub Pages deployment guide
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint
```

### Vite Configuration

Edit `vite.config.ts` to customize build settings, plugins, and server configuration.

### Tailwind Configuration

Modify `tailwind.config.ts` to add custom colors, fonts, breakpoints, and utilities.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Blessing Abba**

- Email: abbablessing075@gmail.com
- Instagram: [@\_bless.official](https://www.instagram.com/_bless.official)
- LinkedIn: [Blessing Abba](https://www.linkedin.com/in/blessing-abba-aa9633345/)

## 🙏 Acknowledgments

- Design inspiration from Toon Boom Animation
- UI components from Radix UI
- Icons from Material Icons
- Fonts from Google Fonts

## 📞 Support

If you have any questions or need help, feel free to reach out:

- 📧 Email: abbablessing075@gmail.com
- 💬 Open an issue on GitHub

---

Made with ❤️ by Vheek
