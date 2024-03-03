const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  model: "gpt-3.5-turbo",
});

const fetchMessage = async (messages) => {
  const res = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
  console.log(res);
  return res;
}

const createMessage = async (messages, fn) => {
  try {
    const response = await fn(messages);
    if (response.ok) {
      return response.choices[0];
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    console.error(`Error fetching response from OpenAI: ${error.message}`);
    return "An error occurred while processing your request.";
  }
};

module.exports = { createMessage, fetchMessage };
