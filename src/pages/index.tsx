import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

import BlogPage from "../components/BlogPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Computer Project</title>
        <meta name="description" content="A website for a school computer project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="fullflex">
        <h1 className="text-7xl incon shadow-lg bg-white p-2 rounded-lg">Intertots Trillingual School🌍</h1>
      </main>

      <About />
      <BlogPage />
    </>
  );
};

export default Home;
