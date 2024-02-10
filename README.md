# FitAIM

FitAIM is a fitness application designed to provide personalized workout and diet plans to users. Leveraging AI technology, users can receive weekly plans tailored to their goals and preferences.

<img width="1501" alt="Screenshot 2024-02-10 at 17 36 42" src="https://github.com/pooya-jb/fitAIM/assets/81810893/e152f122-b2e0-4920-ab78-b4809d64cf15">

<img width="1512" alt="Screenshot 2024-02-10 at 17 37 47" src="https://github.com/pooya-jb/fitAIM/assets/81810893/ebe78fd7-2778-46d0-b978-3ec93580bf34">

## Getting Started

To get started with FitAIM, follow these steps:

1. Clone the repository ``` git clone https://github.com/pooya-jb/fitAIM ```
2. Move to the client folder ``` cd client ```
3. Install dependencies ``` npm install ```
4. Run ``` npm run dev ``` , the client side will run on your machine on " http://localhost:5173/ "
5. Open a new terminal and move to the server folder
   ``` cd .. ```
   ``` cd server ```
6. Install dependencies ``` npm install ```
7 . Start the development server ``` node index.js ``` , the server will run on " http://localhost:3000/ "
   
# API key
For sending request to OpenAI API, you need to create an account and get generate your secret key, once you have it, create a .env file in the server directory and put it like this :
``` API_KEY = "your secrect key" ```

## Tech Stack
### Frontend:
- React (Vite)
- TypeScript
- Reudx Toolkit
### Backend:
- Express.js
- MongoDB (Mongoose)
- OpenAI API





