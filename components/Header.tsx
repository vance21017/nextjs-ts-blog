import {
  Toolbar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpen from "@material-ui/icons/LockOpen";
import LeftDrawer from "../components/LeftDrawer";

export const useStyles = makeStyles((theme) => {
  {
    menu: {
    }
    title: {
      flexGrow: "1";
    }
    login: {
    }
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <LeftDrawer>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </LeftDrawer>
        <Typography variant="h4" className={classes.title}>
          Welcome to Vance's Site
        </Typography>
        <Button variant="outlined" endIcon={<LockOpen />} disabled>
          Login
        </Button>
        <Typography variant="overline">coming soon</Typography>
      </Toolbar>
      <Divider />
    </>
  );
}
