import { connect } from 'react-redux';

import MainLayout from '../../components/common/main-layout/main-layout.component';
import Content from '../../components/my-cloud/content/content.component';
import Summary from '../../components/my-cloud/summary/summary.component';

const MyCloud = ({ user }) => {
  return (
    <MainLayout isHome>
      {user && (
        <>
          <Summary user={user} />
          <Content user={user} />
        </>
      )}
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(MyCloud);
