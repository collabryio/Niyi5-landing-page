# Niyi5 Landing Page

A modern, responsive landing page for Niyi5 - the community-driven ranking platform.

## Features

- 🚀 **Modern Design**: Built with Next.js 13.4.0 and Tailwind CSS
- 🌍 **Bilingual**: English and Turkish language support
- 📱 **Responsive**: Mobile-first design with optimal UX
- 🔒 **Production Ready**: Docker containerization with Nginx
- ⚡ **Optimized**: Fast loading with image optimization

## Tech Stack

- **Framework**: Next.js 13.4.0 with TypeScript
- **Styling**: Tailwind CSS + Material Tailwind UI
- **Deployment**: Docker + Nginx with SSL
- **Languages**: English/Turkish with React Context

## Quick Start

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3010`

### Docker Deployment
```bash
docker-compose up --build
```

### Production with Nginx
1. Configure SSL certificates for `niyi5.com`
2. Deploy with global Nginx using provided config
3. Access at `https://niyi5.com`

## Project Structure

```
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   └── contexts/      # React contexts (language)
├── public/
│   ├── image/         # Static images
│   └── logos/         # Brand logos
├── nginx/             # Nginx configuration
└── docker/            # Docker setup files
```

## Contact

- **Email**: app@collabry.io
- **LinkedIn**: [Collabry](https://www.linkedin.com/company/collabrytr/)
- **App**: [Download Niyi5](https://play.google.com/store/apps/details?id=com.collabry.myapp)

---

Built with ❤️ by [Collabry Software and Information Inc.](https://collabry.io) 