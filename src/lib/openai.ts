import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const prompt =
  'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.';

export default openai;
