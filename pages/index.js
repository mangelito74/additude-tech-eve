import { Fragment } from "react";
import Head from "next/head";

import Introduction from "../components/Introduction";
import Speakers from "../components/Speakers/Speakers";
import Register from "../components/Register";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Additude Tech Eve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Introduction />
      <Register />
      <Speakers />
    </Fragment>
  );
};

export default HomePage;
