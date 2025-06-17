# Webflow React

This project demonstrates how to use React inside a Webflow project, bundled with Webpack.

## Prerequisites

- [Nix](https://nixos.org/download.html) (for reproducible development environment)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/) (managed by Nix)

## Getting Started

1. **Enter the Nix shell:**

   ```sh
   nix-shell
   ```

   This will provide all required dependencies (Node.js, Yarn, AWS CLI, etc.).

2. **Install dependencies:**

   ```sh
   yarn install
   ```

3. **Start the development server:**

   ```sh
   yarn start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**

   ```sh
   yarn build
   ```

   The output will be in the `dist/` folder.

5. **Deploy to AWS S3:**

   ```sh
   yarn deploy
   ```

   (Make sure your AWS credentials are configured.)

## Usage in Webflow

With all that out of the way, you’re ready to add your React component to your Webflow project!

### 1. Load the React library

- Open your Webflow project.
- Open the page where you want to add your React component.
- Click the gear icon to open the page settings.
- Find the **Inside `<head>` tag** section and paste the following script tags:

```html
<script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
```

This loads React and React DOM, which are required for your component to work.

---

### 2. Load your bundled app file

- In the same page settings, find the **Before `</body>` tag** section.
- Paste the script tag for your compiled bundle (replace with your actual bucket and region):

```html
<script src="https://react-to-webpack-bucket.s3.eu-north-1.amazonaws.com/bundle.js"></script>
```

---

### 3. Create a target div

- In the Webflow Designer, find where you want to render the React component.
- Add a **div** element.
- Set the **ID** of the div to `react-target` (this matches the target in your `index.js`):

```html
<div id="react-target"></div>
```

---

### 4. Deploy your Webflow project

When you publish or view your Webflow site, your React app will render inside the div you specified.

---

**Summary:**  
1. Load React and ReactDOM in the `<head>`.
2. Load your `bundle.js` before `</body>`.
3. Add a `<div id="react-target"></div>` where you want your component.
4. Deploy and enjoy your React-powered Webflow site!

### 5. Preview
![Screenshot from 2025-06-17 16-09-15](https://github.com/user-attachments/assets/43b06a69-bdb9-4b11-a7a9-a46544026d27)
