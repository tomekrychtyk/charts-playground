import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const chartData = [
  {
    name: 'Total',
    data: [220, 320, 430, 530, 580, 750, 920, 1000, 1060, 1150],
  },
  {
    name: 'Gold',
    data: [120, 200, 250, 300, 320, 440, 500, 520, 560, 600],
  },
  {
    name: 'Silver',
    data: [10, 20, 80, 130, 160, 110, 320, 380, 400, 450],
  },
];

const Homepage = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.colors.warning.main, theme.colors.primary.main],
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: theme.palette.mode,
    },
    fill: {
      opacity: 1,
      // colors: [theme.colors.gradients.black1, theme.colors.gradients.black1],
      gradient: {
        opacityFrom: 0,
        opacityTo: 0.55,
      },
    },
    stroke: {
      show: true,
      colors: [theme.colors.warning.main, theme.colors.primary.main],
      curve: 'straight',
      width: 3,
    },
    legend: {
      show: true,
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
      },
    },
    grid: {
      strokeDashArray: 3,
      borderColor: theme.colors.alpha.black[10],
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  return (
    <Grid
      sx={{
        px: 4,
        py: 4,
      }}
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
    >
      <Grid item xs={12}>
        <Card>
          <CardHeader
            sx={{
              p: 3,
            }}
            disableTypography
            action={
              <IconButton size="small" color="secondary">
                <MoreVertTwoToneIcon />
              </IconButton>
            }
            title={
              <>
                <Typography variant="h4">Clients overview</Typography>
              </>
            }
          />
          <Divider />
          <CardContent
            sx={{
              py: 0,
              pl: 1,
            }}
          >
            <Chart height={273} type="area" series={chartData} options={chartOptions} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Homepage;
