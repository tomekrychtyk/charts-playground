import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            pt: `${theme.header.height}`,
            ml: `${theme.sidebar.width}`,
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
