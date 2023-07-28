import React from 'react';
import PageContainer from '../components/layout/Container';
// import Resume from '../components/cv/Resume';
const resume = () => {
  return (
    <PageContainer
      currentPage="Home"
      meta={{
        desc: "I'm a passionate full-stack developer, who love coding beautiful websites and apps.",
      }}
      link={{link:"/favicon-16x16.png"}}
    >
      <div className="pt-1  ">
        <div className="md:mx-5 space-y-10  ">{/* <Resume /> */}</div>
      </div>
    </PageContainer>
  );
};

export default resume;
