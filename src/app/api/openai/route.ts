import openai from '../../../lib/openai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  console.log('prompt', prompt);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  console.log(completion.data);

  const body = JSON.stringify(completion.data.choices[0].message);

  return new Response(body);

  const json = {
    role: 'assistant',
    content:
      "Of course! If you're looking for a nice dinner place to go on a first date, I would suggest checking out some of these options:\n\n1. The Capital Grille - This upscale steakhouse has a romantic atmosphere, great food and wine, and excellent service.\n\n2. Olive Garden - This casual Italian restaurant offers delicious food, cozy ambiance, and an affordable price range.\n\n3. The Melting Pot - This fondue restaurant provides a cozy and intimate atmosphere perfect for a romantic dinner.\n\n4. Ruth's Chris Steak House - With delicious food and impeccable service, this classic steakhouse is a great option for a first date.\n\n5. Seasons 52 - This contemporary restaurant offers fresh, seasonal American fare, a romantic ambiance, and live piano music.\n\nUltimately, the best place to go on a first date depends on your personal preferences and the vibe you're going for!",
  };
}
