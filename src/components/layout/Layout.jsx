import React from "react";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import Header from "../../pages/header/Header";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />

      {/* <main style={{ minHeight: "74vh" }}> */}
      <div>
        <Toaster />
        {children}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: " - shop now",
  description: "mern stack project",
  keywords: "mern, react, mongodb, node",
  author: "sagarkrydv",
};

export default Layout;
