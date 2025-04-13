# Image Search Website

This is a responsive web application that allows users to search and view high-quality images based on keywords. The app integrates with the **Unsplash API** to fetch and display results dynamically. It features a modern UI, a "Load More" functionality, and works well across different screen sizes.

## Features

- Search for images by entering a keyword.
- Fetches results from the Unsplash API.
- "Load More" button to view additional images.
- Responsive design using Flexbox and media queries.
- Smooth hover effects and transitions.

## Project Structure

```plaintext
Image-search-website
├── .vscode/
├── .gitignore
├── index.html
├── script.js
└── style.css
```
## Technologies Used

- HTML5  
- CSS3 (Flexbox, Media Queries)  
- JavaScript (ES6)  
- Unsplash API  

## Setup Instructions

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Replace the API key in `script.js` with your own Unsplash key:
   ```javascript
   const Api_Key = "YOUR_UNSPLASH_API_KEY";

## API Used

https://unsplash.com/developers

## Notes

No frameworks or build tools required.
Works on desktop and mobile devices.
Can be extended with additional features like image modals, pagination, or download buttons.
