'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Persona from './persona';

//OPENAI_API_KEY=YOUR_API_KEY

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [text, setText] = useState('');

  const chatWithGPT = async () => {
    const response = await fetch('/api/openai', {
      method: 'POST',
      body: JSON.stringify({
        prompt: text,
      }),
    }).then((res) => res.json());
    console.log(response);
  };
  const createUser = async () => {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe2',
        email: 'x45@y.z',
        image: 'https://example.com/image.png',
      }),
    });
  };

  const getUsers = async () => {
    const users = await fetch('/api/users').then((res) => res.json());
    console.log(users);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          </a>
        </div>
      </div>

      <Persona />

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a onClick={createUser}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Create User{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a onClick={getUsers}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Get Users{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a onClick={chatWithGPT}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            AI Response{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
