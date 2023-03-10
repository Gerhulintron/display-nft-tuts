import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { FetchNft} from "../components/FetchNft";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
