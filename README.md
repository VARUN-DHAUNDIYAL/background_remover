# Background Remover Frontend

A modern React + Vite web application for background removal. This project features a clean UI, interactive components, and is ready for deployment on Vercel.

## Features
- Fast, modern React (with Vite)
- Tailwind CSS for styling
- Component-based architecture
- Ready for Vercel deployment

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build for Production
To build the app for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Preview Production Build
To locally preview the production build:
```bash
npm run preview
```

## Deploying to Vercel
1. **Push your code to GitHub (or GitLab/Bitbucket).**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Select the Vite framework preset.**
4. **Use the default build command (`npm run build`) and output directory (`dist`).**
5. **Deploy!**

> The included `vercel.json` ensures correct routing for single-page applications.

## Project Structure
```
├── public/           # Static assets
├── src/              # Source code
│   ├── assets/       # Images, videos, etc.
│   ├── components/   # React components
│   ├── pages/        # Page components
│   └── App.jsx       # Main app component
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── vercel.json       # Vercel deployment config
```

## License
[MIT](LICENSE)  

---

**Made with ❤️ using React, Vite, and Tailwind CSS.**
