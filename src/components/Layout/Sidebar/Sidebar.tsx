import { Box, styled, alpha, lighten, useTheme } from '@mui/material';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
  width: ${theme.sidebar.width};
  height: 100%;
  min-width: ${theme.sidebar.width};
  color: ${theme.palette.secondary.light};
  position: relative;
  z-index: 7;
  padding-bottom: 61px;
`
);

export default function Sidebar() {
  const theme = useTheme();

  return (
    <SidebarWrapper
      sx={{
        position: 'fixed',
        background: theme.sidebar.background,
        left: 0,
        top: 0,
        display: 'inline-block',
      }}
    >
      <Box>Sidebar</Box>
    </SidebarWrapper>
  );
}
