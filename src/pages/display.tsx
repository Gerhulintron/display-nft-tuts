import type { NextPage } from "next"
import Head from "next/head"
import { DisplayView } from "../views"
import {FetchNft} from "../components/FetchNft";

const Display: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <DisplayView />
    </div>
  )
}

export default Display
