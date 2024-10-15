# File to CAR Converter Web App 📦

This web app allows you to select a file from your local device, convert it into a **CAR (Content Addressable Archive)** file compatible with **Filecoin**, and download the resulting CAR file directly from the browser.

## Features
- Upload any file and convert it to CAR format.
- Download the CAR file instantly.
- Optimized for production with Webpack.
- Lightweight and works with any simple HTTP server.

---

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- Install `http-server` globally or as a dev dependency:

  ```bash
  npm install -g http-server
  ```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd filecoin-car-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Development

1. **Run the development server:**
   ```bash
   npm start
   ```

2. Open your browser at **`http://localhost:8080`**.

---

## Production Build

1. **Create the production build:**
   ```bash
   npm run build
   ```

2. **Serve the build with `http-server`:**
   ```bash
   npm run serve
   ```

3. Visit **`http://localhost:8080`** to see the running app.

---

## Project Structure

```
filecoin-car-app/
│
├── public/
│   └── index.html         # HTML template for Webpack
├── src/
│   └── index.js           # JavaScript logic
├── dist/                  # Generated build files (gitignored)
├── webpack.config.js      # Webpack configuration
├── package.json           # Project metadata and dependencies
├── .gitignore             # Files and folders to ignore in Git
└── README.md              # Documentation (this file)
```

---

## Troubleshooting

- If the app doesn’t run, try clearing the cache and reinstalling dependencies:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```

- If `http-server` isn’t found, install it globally:
  ```bash
  npm install -g http-server
  ```

---

## Technologies Used
- **JavaScript (ES6+)**
- **Webpack** for bundling.
- **HTMLWebpackPlugin** for injecting JS into HTML.
- **IPLD CAR** library for CAR file creation.
- **Multiformats** for CID generation.

---

## License

This project is licensed under the **MIT License**.

---

## Contributing

Feel free to submit pull requests or open issues to suggest improvements.

---

## Acknowledgments

- Inspired by Filecoin and IPFS technologies.
- Special thanks to the **@ipld/car** and **multiformats** teams.
