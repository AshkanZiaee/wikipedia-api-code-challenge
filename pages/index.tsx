import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "react-query";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wikipedia Search App</title>
        <meta
          name="keywords"
          content="wikipedia, search app, wikipedia search app"
        />
      </Head>
    </div>
  );
};

export default Home;
