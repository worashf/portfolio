import React from 'react';
import PageContainer from '../components/layout/Container';
import About from '../components/about/About';
const AboutPage = () => {
  return (
    <PageContainer
      currentPage="About"
      pageDesc=" I’m a passionate web developer."
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <div className="pt-10  ">
        <div className="md:mx-5 space-y-20  ">
          <About />
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
