# visual-product-matcher
A visual search web app that allows users to upload an image (or provide an image URL) and find visually similar products from a product database.
It’s designed to mimic the core functionality of “image-based product search” used in e-commerce platforms — with a clean UI, responsive layout, and simple deployment workflow.

🚀 Features
🔍 Search Interface

Upload an image or paste an image URL

Instantly view uploaded image preview

Get a list of visually similar products

Filter products by similarity score or category

🧠 Product Matching

Uses a lightweight similarity model to compare the uploaded image with product embeddings

Displays the top matches from a dataset of 50+ products

🗃️ Product Database

Contains at least 50 products with:

Product image

Name

Category

Similarity score / metadata

📱 Responsive Design

Fully responsive for mobile, tablet, and desktop

Built with Tailwind CSS for clean and modern UI

⚙️ Developer Features

Production-quality React + TypeScript code

Modular architecture with reusable components

Basic error handling and loading states

Easy deployment on Vercel / Netlify / Render

🧩 Tech Stack
Category	Technology
Frontend Framework	React (TypeScript)
Build Tool	Vite
Styling	Tailwind CSS
State & Hooks	React Hooks + Custom Hook (useModelLoader)
Deployment	Vercel / Netlify
Data	JSON or static asset-based product dataset

⚙️ Setup and Installation
1️⃣ Clone the Repository
git clone https://github.com/Bisht-10/visual-product-matcher.git
cd visual-product-matcher

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


The app should now be running at https://visual-product-matcher-liard.vercel.app/

🧭 How It Works

User uploads an image or provides a URL.

The app processes it and compares it with images in the product dataset.

A similarity score is generated, ranking products by how close they match visually.

Results are displayed in a grid layout, with filter options to refine results.

⚠️ Error Handling & UX

Graceful fallback if model or image fails to load

Loading spinners during processing

User-friendly messages for invalid input or missing data

📄 Documentation

This repository includes:

Clean and modular TypeScript code

In-line component documentation

A simple architecture with clearly separated responsibilities

💡 Future Improvements

Integrate real image embeddings (e.g., CLIP model)

Add search history and favorites

Connect to a backend API for dynamic datasets

👨‍💻 Author

Ayush Bisht
📧 ayushb.9347@gmail.com
💼 https://www.linkedin.com/in/ayushbishtt/
