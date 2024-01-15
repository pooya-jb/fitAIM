'use strict';

const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const prompt = 'What is the meaning of fitness?';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${apiKey}`,
};

const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content: 'You are a fitness coach.',
    },
    {
      role: 'user',
      content: prompt,
    },
  ],
  max_tokens: 50,
};

const fetchDataAPI = async (req, res) => {
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
