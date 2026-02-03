# BSR Pharma Pvt Ltd – React Website

A responsive React website for **BSR Pharma Pvt Ltd** with product pages, enquiry forms (WhatsApp), and company information.

## Features

- **Theme**: Primary `#19bcdb`, White `#ffffff`, Accent `#ec5c42`
- **Top header**: Email, phone
- **Header**: Logo, navigation (Home, Products, About, Contact)
- **Header banner**: Dismissible featured product strip
- **Home**: Hero (Xerosera-SP), Our Products grid, Lab & Lifecycle section, Contact with map and social links
- **Product detail**: Full Xerosera-SP™ info (composition, indications, mechanism, benefits, dosage, storage, disclaimer)
- **Enquiry**: “Enquire on WhatsApp” opens a small form; on submit, data is sent as a pre-filled WhatsApp message
- **Footer**: Brand, product links, contact, social (Facebook, Instagram, LinkedIn, Twitter)
- **Bottom footer**: Copyright and disclaimer
- **WhatsApp float**: Fixed button linking to company WhatsApp
- **Responsive**: Mobile-first, works on all screen sizes

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Configure

- **WhatsApp number**: Edit `company.whatsapp` in `src/data/products.js` (e.g. `'919876543210'`).
- **Contact & map**: Update `company.address`, `company.mapEmbed`, `company.email`, `company.phone`, and `company.social` in `src/data/products.js`.
- **Products**: Add or edit entries in the `products` array in `src/data/products.js`. Use `bannerImage` and `image` paths (e.g. under `public/assets/`).

## Build

```bash
npm run build
npm run preview
```

Static output is in `dist/`.

## Assets

- Product banner: `public/assets/xerosera-banner.png` (Xerosera-SP)
- Lab lifecycle: Optional image at `public/assets/lab-lifecycle.jpg`; if missing, a placeholder with steps is shown.
- Favicon: `public/favicon.svg`

Replace dummy icons/social placeholders with final assets as needed.
