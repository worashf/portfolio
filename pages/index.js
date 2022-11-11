import PageContainer from '../components/layout/Container';
import HeadLine from '../components/home/HeadLine';
import MyInfo from '../components/home/MyInfo';

import Testimonial from '../components/home/Testimonial';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <PageContainer
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <div className="pt-1  ">
        <div className="md:mx-5 space-y-10  ">
          <HeadLine />
          <MyInfo />
          <Testimonial />
          <CTA />
        </div>
      </div>
    </PageContainer>
  );
}
