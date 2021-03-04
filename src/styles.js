import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grid: {
    '& > *': {
      padding: theme.spacing(2),
    },
    alignItems: "center",
    justify: "center",
    height : '100vh',
    padding : theme.spacing(2)
  },
  income: {
    [theme.breakpoints.down('md')]: {
      order: 2,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
    }
  },
  main: {
    [theme.breakpoints.down('md')]: {
      order: 1,
      // paddingBottom: '',
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      // paddingBottom: '2rem',
    },
  },
  expense: {
    [theme.breakpoints.down('md')]: {
      order: 3,
    },
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
}));