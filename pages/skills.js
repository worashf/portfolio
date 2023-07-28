import React from 'react';
import PageContainer from '../components/layout/Container';
import ToolSet from '../components/home/ToolSet';
const skills = () => {
  return (
    <PageContainer
      currentPage="Skills"
      pageDesc="My toolbelt for success."
      meta={{
        desc: "I'm a passionate full-stack developer and designer coding beautiful platforms.",
      }}
      link={{link:"/favicon-16x16.png"}}
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
