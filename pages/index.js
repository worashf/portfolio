import PageContainer from '../components/layout/Container';
import HeadLine from '../components/home/HeadLine';
export default function Home() {
  return (
    <PageContainer
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <HeadLine />
    </PageContainer>
  );
}
