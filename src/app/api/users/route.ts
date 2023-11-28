import prisma from '../../../lib/prisma';

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  const body = JSON.stringify(users);

  console.log('body', body);

  return new Response(body);
}

export async function POST(request: Request) {
  console.log('reach here');
  const { name, email, image } = await request.json();
  console.log(name, email, image);
  await prisma.user.create({
    data: { name, email, image },
  });

  return new Response('ok');
}
