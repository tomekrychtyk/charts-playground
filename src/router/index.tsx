import { Suspense, lazy, FC, ComponentProps } from 'react';

import { RouteObject } from 'react-router';

import Layout from '@/components/Layout/Layout';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';

const Loader = (Component: FC) => (props: ComponentProps<FC>) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Homepage = Loader(lazy(() => import('@/features/homepage/Homepage')));

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
];

export default router;
