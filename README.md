# Metallic Horses

**Live site:** [metallicv2.vercel.app](https://metallicv2.vercel.app/)

Metallic Horses is an e-commerce/marketplace platform built with Angular, TypeScript, and Tailwind CSS. <!-- One or two sentences on what makes this marketplace unique — what's sold, who it's for, what problem it solves. -->

---

## ✨ Features

- 🛍️ Product browsing and search
- 🛒 Shopping cart and checkout flow
- 👤 User authentication and account management
- 📱 Fully responsive design
<!-- Add / remove features to match what's actually built: seller dashboards, payment integration, order tracking, reviews, wishlists, admin panel, etc. -->

## 🖼️ Preview

<!-- Add a screenshot or GIF of the app here -->
![Metallic Horses preview](./docs/preview.png)

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Framework  | Angular                 |
| Language   | TypeScript               |
| Styling    | Tailwind CSS             |
| Hosting    | Vercel                   |
| Backend/API| <!-- e.g. Node/Express, Firebase, Supabase --> |
| Database   | <!-- e.g. PostgreSQL, MongoDB, Firestore --> |
| Payments   | <!-- e.g. Stripe, Paystack, Flutterwave --> |

## 📂 Project Structure

```
metallic-horses/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   ├── assets/
│   └── environments/
├── angular.json
├── tailwind.config.js
├── package.json
└── README.md
```
<!-- Adjust to match the actual repo layout -->

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-org-or-username>/metallic-horses.git
cd metallic-horses

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file (or `src/environments/environment.ts`) with:

```
API_BASE_URL=
PAYMENT_PUBLIC_KEY=
```
<!-- Replace with the actual variables your app needs -->

### Running Locally

```bash
ng serve
```

Visit `http://localhost:4200` in your browser.

### Building for Production

```bash
ng build --configuration production
```

## 🧪 Running Tests

```bash
ng test
```

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com/). Pushes to the `main` branch trigger an automatic deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

<!-- e.g. MIT, or "All rights reserved — proprietary" -->

## 👤 Author

**Badmus Muhammad Adeniyi**
Founder & Principal Engineer, [FluxForge Software Engineering Company](#)
