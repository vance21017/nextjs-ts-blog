import {
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpen from "@material-ui/icons/LockOpen";
import LeftDrawer from "../components/LeftDrawer";

export default function Header() {
  return (
    <>
      <Toolbar>
        <Grid container direction="row" xs="10">
          <Grid item xs="2" align="left" justify="center">
            <LeftDrawer>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </LeftDrawer>
          </Grid>
          <Grid item justify="center" align="center" xs="10">
            <Typography variant="h4" color="primary">
              Welcome to Vance's Site
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spaceing="space-between"
          diection="column"
          xs="2"
          alignContent="flex-end"
        >
          <Grid item>
            <Button variant="outlined" endIcon={<LockOpen />} disabled>
              Login
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="overline">coming soon</Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />
    </>
  );
}
