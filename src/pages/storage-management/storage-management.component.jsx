import { IconArrowNarrowLeft } from '@tabler/icons';
import MainLayout from '../../components/common/main-layout/main-layout.component';
import StoragePie from '../../components/storage-management/storage-pie/storage-pie.component';
import UsageDetails from '../../components/storage-management/usage-details/useage-details.component';

import './storage-management.styles.scss';

const StorageManagement = () => {
  return (
    <MainLayout isSubPage>
      <div className='sm-header'>
        <IconArrowNarrowLeft className='back' />
        <h4 className='sm-heading'>Storage Management</h4>
      </div>
      <StoragePie />
      <UsageDetails />
    </MainLayout>
  );
};

export default StorageManagement;
