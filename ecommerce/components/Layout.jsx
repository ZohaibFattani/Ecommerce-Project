import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Zohaib's Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        EMPTY
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
