import MainLayout from '../../components/common/main-layout/main-layout.component';
import Content from '../../components/my-cloud/content/content.component';
import Summary from '../../components/my-cloud/summary/summary.component';

const MyCloud = () => {
  return (
    <MainLayout isHome>
      <Summary />
      <Content />
    </MainLayout>
  );
};

export default MyCloud;
