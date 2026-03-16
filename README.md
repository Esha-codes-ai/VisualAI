🤖 AI Study Buddy

AI Study Buddy is a simple AI-powered learning web application that helps students quickly understand any topic.
Users enter a topic and the system automatically generates:

AI explanation

Related image

Key learning points

Simple quiz

The project is built using HTML, CSS, JavaScript, and APIs.

🚀 Features

✔ Generate topic explanation using AI
✔ Display related educational images
✔ Automatically extract key learning points
✔ Interactive quiz for quick learning
✔ Simple and clean user interface

🛠️ Technologies Used

Frontend:

HTML

CSS

JavaScript

APIs:

OpenAI API – for generating explanations

Unsplash API – for displaying related images

📂 Project Structure
AI-Study-Buddy
│
├── index.html
├── style.css
├── script.js
├── api.js
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/ai-study-buddy.git
2️⃣ Open the project folder
cd ai-study-buddy
3️⃣ Open in VS Code

Run the project using Live Server.

🔑 API Setup

To use AI explanations you must create an API key from
OpenAI.

Steps:

Visit
https://platform.openai.com/api-keys

Click Create new secret key

Copy the key and paste it in api.js

Example:

const OPENAI_API_KEY = "your_api_key_here";
💻 How It Works

User enters a topic in the input field.

JavaScript sends a request to the AI API.

AI generates a simple explanation.

An image related to the topic is fetched from the image API.

Key points and quiz are displayed to the user.

🌐 Deployment

You can deploy the project using:

Netlify

Vercel

GitHub Pages

Steps:

Upload the project to GitHub

Connect the repository to Netlify or Vercel

Deploy the site

📸 Example Use

User enters:

Machine Learning

The system will display:

Explanation of Machine Learning

Related image

Key points

Simple quiz

🎯 Future Improvements

Voice input support

AI chatbot for doubt solving

Diagram generation

PDF notes download

Multi-language learning

👩‍💻 Author

Esha Joshi

BTech Student | Web Developer | AI Enthusiast
