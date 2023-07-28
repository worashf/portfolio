import React from 'react';
import ProjectList from '../components/projects/ProjectList';
import PageContainer from '../components/layout/Container';
import Heading from '../components/projects/Heading';
import More from '../components/projects/More';
const portfolio = () => {
  return (
    <PageContainer
      currentPage="Projects"
      pageDesc="I ' ve built cool apps and websites"
      meta={{
        desc: "I'm a passionate full-stack developer, who love coding beautiful websites and apps.",
      }}
      link={{link:"/favicon-16x16.png"}}


    >
      <div className="pt-2">
        <div className="md:mx-5 space-y-10  ">
          <Heading />
          <ProjectList />
          <More />
        </div>
      </div>
    </PageContainer>
  );
};

export default portfolio;
