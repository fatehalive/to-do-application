import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: theme.palette.text.primary,
    marginTop: 64,
    marginLeft: 64,
  }
}))

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
    >
      <Typography
        className={classes.hello}
      >
        This is Dashboard
      </Typography>
    </Container>
  )
};