import React from 'react';
import PageContainer from '../components/layout/Container';
// import Resume from '../components/cv/Resume';
const resume = () => {
  return (
    <PageContainer
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <div className="pt-1  ">
        <div className="md:mx-5 space-y-10  ">{/* <Resume /> */}</div>
      </div>
    </PageContainer>
  );
};

export default resume;
