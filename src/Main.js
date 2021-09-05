import { withStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const Main = withStyles(styles)(({ classes }) => (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Box component="span" m={1}>
            <Button>Button</Button>
        </Box>
    </Grid>
));
export default Main;