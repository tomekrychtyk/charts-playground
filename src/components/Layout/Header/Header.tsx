import { styled, Box, Stack, Divider, Typography } from '@mui/material';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
  height: ${theme.header.height};
  color: white;
  padding: ${theme.spacing(0, 2)};
  right: 0;
  z-index: 6;
  background-color: ${theme.header.background};
  position: fixed;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1280px) {
    left: ${theme.sidebar.width};
    width: auto;
  }
`
);

export default function Header() {
  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <Typography color="primary">HEADER</Typography>
      </Stack>
    </HeaderWrapper>
  );
}
