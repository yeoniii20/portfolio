import type { NextPage } from "next";
import Header from "../composition/Header";
import Hero from "../composition/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
