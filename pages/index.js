import { Fragment } from "react";
import Head from "next/head";

import Introduction from "../components/Introduction";
import Speakers from "../components/Speakers/Speakers";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Additude Tech Eve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Introduction />
      <Speakers />
    </Fragment>
  );
};

export default HomePage;
