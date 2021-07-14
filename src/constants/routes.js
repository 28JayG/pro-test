import { IconCloud, IconDatabase, IconBell, IconUser } from '@tabler/icons';

export const InternalRoutes = {
  HOME:'/',
  MY_CLOUD: '/my-cloud',
  LOCAL_STORAGE: '/local-storage',
  NOTIFICATIONS: '/notifications',
  PROFILE: '/profile',
};

const navLinkStyles = {
  strokeOpacity: 0,
  fill: true,
};

export const bottomNavRoutes = {
  my_cloud: {
    icon: () => <IconCloud {...navLinkStyles} />,
    route: InternalRoutes.MY_CLOUD,
  },
  local_storage: {
    icon: () => <IconDatabase color='white' {...navLinkStyles} />,
    route: InternalRoutes.LOCAL_STORAGE,
  },
  notifications: {
    icon: () => <IconBell {...navLinkStyles} />,
    route: InternalRoutes.NOTIFICATIONS,
  },
  profile: {
    icon: () => <IconUser {...navLinkStyles} />,
    route: InternalRoutes.PROFILE,
  },
};
