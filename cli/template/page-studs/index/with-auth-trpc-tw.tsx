import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#250657]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-[5rem]">
            Create <span className="text-purple-300">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
            {technologyCards.map((technology, idx) => (
              <TechnologyCard key={`techcard-${idx}`} {...technology} />
            ))}
          </div>
          <p className="text-xl text-purple-100">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <AuthShowcase />
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-xl text-purple-100">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-xl text-purple-100">{secretMessage}</p>
      )}
      <button
        className="mt-2 rounded-full bg-purple-100 px-5 py-3 text-sm font-semibold text-slate-800 no-underline transition hover:bg-purple-200 sm:text-base lg:text-sm xl:text-base"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const technologyCards: TechnologyCardProps[] = [
  {
    name: "Next.js",
    description:
      "We love React. It has made UI development accessible in ways we never imagined before. It also can lead developers down some rough paths. Next.js offers a lightly opinionated, heavily optimized approach to creating a website using React. From routing to API definitions to image rendering, we trust Next.js to lead developers towards good decisions.",
    documentation: "https://nextjs.org/docs",
  },
  {
    name: "tRPC",
    description:
      "If you use TypeScript on both the frontend and backend, you should use tRPC to infer types to create a full stack type-safe API. It can be used in place or alongside Next.js' API routes, or as a standalone server.",
    documentation: "https://trpc.io/docs/v10/",
  },
  {
    name: "TypeScript",
    description:
      'Javascript is hard. Why add more rules? We firmly believe the experience TypeScript provides will help you be a better developer, regardless of where you are in your career as an engineer. Whether you\'re new to web development or a seasoned pro, the "strictness" of TypeScript will provide a less frustrating, more consistent experience than vanilla JS.',
    documentation: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Prisma",
    description:
      "Prisma is the best way to work with databases in your NextJS app. It provides a simple, type-safe API to query your database, and it can be used with a bunch of different databases, including Postgres, MySQL, SQL Server, and SQLite.",
    documentation: "https://www.prisma.io/docs/concepts",
  },
  {
    name: "TailwindCSS",
    description:
      "TailwindCSS is a utility-first CSS framework that helps you build beautiful, responsive designs without any extra configuration. It’s built with utility-first principles, and is completely customizable and extendable.",
    documentation: "https://tailwindcss.com/docs",
  },
  {
    name: "NextAuth.js",
    description:
      "When you need a flexible, secure, and scalable authentication solution, NextAuth.js is the go-to. It ties into your existing database and provides a simple API to manage users and sessions, and ties into NextJS and tRPC to provide a seamless experience.",
    documentation: "https://next-auth.js.org/getting-started/introduction",
  },
];

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <div className="flex flex-col justify-between rounded-md border border-purple-200/20 bg-white/5 transition-colors hover:border-purple-300/50">
      <a href={documentation} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-between space-x-4 rounded-tr-md rounded-tl-md bg-white/10 p-2 px-6 py-3 text-lg font-medium leading-6 text-purple-200 transition-colors hover:bg-white/20 hover:text-purple-400 md:text-xl">
          <h2>{name}</h2>
          <p className="flex flex-row items-center">
            <span>Docs</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="ml-2 h-4 fill-current"
            >
              <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"></path>
            </svg>
          </p>
        </div>
      </a>
      <p className="m-6 h-full text-sm text-purple-100 subpixel-antialiased md:text-base">
        {description}
      </p>
    </div>
  );
};
