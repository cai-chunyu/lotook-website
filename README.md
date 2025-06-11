# Lotook AI - Company Website

A modern, responsive website for Lotook AI, showcasing cutting-edge artificial intelligence solutions with smooth animations and professional design.

## 🚀 Features

- **Modern Design**: Clean, professional interface optimized for AI company branding
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Type-Safe**: Full TypeScript implementation for better code quality
- **Component Library**: Built with shadcn/ui for consistent, reusable components
- **SEO Optimized**: Structured for search engine optimization
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **Package Manager**: [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager
- **Deployment**: [Netlify](https://netlify.com/) - Modern web deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cai-chunyu/lotook-website.git
   cd lotook-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🔧 Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run Biome linter and TypeScript type checking
- `bun run format` - Format code with Biome

## 📁 Project Structure

```
 src/
   ├── app/                 # App Router pages and layouts
   │   ├── layout.tsx       # Root layout component
   │   ├── page.tsx         # Homepage component
   │   ├── ClientBody.tsx   # Client-side body wrapper
   │   └── globals.css      # Global styles
   ├── components/
   │   └── ui/              # shadcn/ui components
   │       ├── button.tsx
   │       ├── card.tsx
   │       └── badge.tsx
   └── lib/
       └── utils.ts         # Utility functions
 public/                  # Static assets
 package.json            # Dependencies and scripts
 tailwind.config.ts      # Tailwind CSS configuration
 tsconfig.json           # TypeScript configuration
 next.config.js          # Next.js configuration
 netlify.toml            # Netlify deployment configuration
```

## 🚀 Deployment

The website is configured for deployment on Netlify with optimized build settings.

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `bun run build`
3. **Set publish directory**: `out`
4. **Deploy**: Netlify will automatically build and deploy your site

### Environment Variables

No environment variables are required for the basic setup. Add any API keys or configuration as needed for additional features.

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for custom design tokens
- Update `src/app/globals.css` for global styles
- Use the shadcn/ui component system for consistent styling

### Content
- Edit `src/app/page.tsx` to update homepage content
- Modify animations in the Framer Motion variants
- Add new pages in the `src/app/` directory

### Components
- Add new shadcn/ui components: `npx shadcn@latest add -y -o [component-name]`
- Create custom components in `src/components/`
- Extend the design system as needed

## 🏢 About Lotook AI

Lotook AI is a cutting-edge artificial intelligence company focused on developing innovative AI solutions that transform businesses and enhance human capabilities. Our mission is to make AI accessible, practical, and beneficial for organizations of all sizes.

## 📄 License

This project is proprietary software owned by Lotook AI. All rights reserved.

## 🤝 Contributing

This is a private company website. For internal team members, please follow the established development guidelines and submit pull requests for review.

## 📞 Contact

For questions about this website or Lotook AI services:

- **Website**: [https://lotook.ai](https://lotook.ai)
- **Email**: contact@lotook.ai
- **Support**: support@lotook.ai

---

Built with ❤️ by the Lotook AI team
EOF  
cd /home/project && cd lotook-website && cat > README.md << 'EOF'
# Lotook AI - Company Website

A modern, responsive website for Lotook AI, showcasing cutting-edge artificial intelligence solutions with smooth animations and professional design.

## 🚀 Features

- **Modern Design**: Clean, professional interface optimized for AI company branding
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Type-Safe**: Full TypeScript implementation for better code quality
- **Component Library**: Built with shadcn/ui for consistent, reusable components
- **SEO Optimized**: Structured for search engine optimization
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **Package Manager**: [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager
- **Deployment**: [Netlify](https://netlify.com/) - Modern web deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cai-chunyu/lotook-website.git
   cd lotook-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🔧 Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run Biome linter and TypeScript type checking
- `bun run format` - Format code with Biome

## 📁 Project Structure

```
 src/
   ├── app/                 # App Router pages and layouts
   │   ├── layout.tsx       # Root layout component
   │   ├── page.tsx         # Homepage component
   │   ├── ClientBody.tsx   # Client-side body wrapper
   │   └── globals.css      # Global styles
   ├── components/
   │   └── ui/              # shadcn/ui components
   │       ├── button.tsx
   │       ├── card.tsx
   │       └── badge.tsx
   └── lib/
       └── utils.ts         # Utility functions
 public/                  # Static assets
 package.json            # Dependencies and scripts
 tailwind.config.ts      # Tailwind CSS configuration
 tsconfig.json           # TypeScript configuration
 next.config.js          # Next.js configuration
 netlify.toml            # Netlify deployment configuration
```

## 🚀 Deployment

The website is configured for deployment on Netlify with optimized build settings.

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `bun run build`
3. **Set publish directory**: `out`
4. **Deploy**: Netlify will automatically build and deploy your site

### Environment Variables

No environment variables are required for the basic setup. Add any API keys or configuration as needed for additional features.

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for custom design tokens
- Update `src/app/globals.css` for global styles
- Use the shadcn/ui component system for consistent styling

### Content
- Edit `src/app/page.tsx` to update homepage content
- Modify animations in the Framer Motion variants
- Add new pages in the `src/app/` directory

### Components
- Add new shadcn/ui components: `npx shadcn@latest add -y -o [component-name]`
- Create custom components in `src/components/`
- Extend the design system as needed

## 🏢 About Lotook AI

Lotook AI is a cutting-edge artificial intelligence company focused on developing innovative AI solutions that transform businesses and enhance human capabilities. Our mission is to make AI accessible, practical, and beneficial for organizations of all sizes.

## 📄 License

This project is proprietary software owned by Lotook AI. All rights reserved.

## 🤝 Contributing

This is a private company website. For internal team members, please follow the established development guidelines and submit pull requests for review.

## 📞 Contact

For questions about this website or Lotook AI services:

- **Website**: [https://lotook.ai](https://lotook.ai)
- **Email**: contact@lotook.ai
- **Support**: support@lotook.ai

---

Built with ❤️ by the Lotook AI team
