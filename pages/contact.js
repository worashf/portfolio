import React from 'react';
import PageContainer from '../components/layout/Container';
import Contact from '../components/contact/Contact';
const contact = () => {
  return (
    <PageContainer
      currentPage="About"
      pageDesc="Hello! I am available for hire and open to any ideas of cooperation"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <div className="pt-10  ">
        <div className="md:mx-5 space-y-20  ">
          <Contact />
        </div>
      </div>
    </PageContainer>
  );
};

export default contact;
