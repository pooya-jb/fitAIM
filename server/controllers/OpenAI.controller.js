'use strict';

const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${apiKey}`,
};

let prompt = 'What is the meaning of fitness?';

// In your API call, you can set the temperature parameter to control
// the response length.Higher values may lead to longer responses, and
//lower values may result in shorter and more focused responses
const temperature = 0.7;
const fetchDataAPI = async (req, res) => {
  console.log(req.body);
  const { userInfo, question } = req.body;
  prompt = `Answer to this request or question: ${question} for me with this information: age: ${userInfo.age}, height: ${userInfo.height}, weight: ${userInfo.weight}, gender: ${userInfo.gender}, body shape: ${userInfo.bodyShape}, goal: ${userInfo.goal}, dietary preference: ${userInfo.dietaryPreference}, workout location preference: ${userInfo.workout}. Keep the answer direct to the point and related to the question.`;
  console.log(prompt);
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a fitness coach, and dietitian',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 1000,
    temperature: temperature,
  };
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      res.status(response.status).json(responseData);
    } else {
      console.error('Error:', responseData.error || 'Unknown Error!');
      res
        .status(response.status)
        .json({ error: responseData.error || 'Unknown Error!' });
      console.log(responseData);
    }

    // res.status(response.status).json({ content: responseData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};

module.exports = { fetchDataAPI };
