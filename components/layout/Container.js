import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';
const PageContainer = ({ currentPage, pageDesc, meta: { desc }, children }) => {
  const pageTitle = `${
    currentPage === 'Home'
      ? 'Worash -Full-Stack Web Developer'
      : `${currentPage} - ${pageDesc}`
  }`;
  return (
    <div
      className="w-full flex flex-col md:flex-row   min-h-screen opening-box-animate-paddin text-white  "
      style={{ maxWidth: '1200px' }}
    >
      <Head>
        <title>{pageTitle}</title>

        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />

        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>

      <Navbar />
      <div className="p-10 w-full ">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageContainer;
