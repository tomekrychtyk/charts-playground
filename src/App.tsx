import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { useRoutes } from 'react-router-dom';

import router from '@/router';
import theme from '@/theme';

function App() {
  const content = useRoutes(router);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
