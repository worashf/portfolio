import React from 'react';
import PageContainer from '../components/layout/Container';
import ToolSet from '../components/home/ToolSet';
const skills = () => {
  return (
    <PageContainer
      currentPage="Skills"
      pageDesc="My toolbelt for success."
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <div className="pt-10  ">
        <div className="md:mx-5 space-y-32  ">
          <ToolSet />
        </div>
      </div>
    </PageContainer>
  );
};

export default skills;
