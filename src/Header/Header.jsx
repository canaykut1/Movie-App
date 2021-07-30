import * as React from "react";
import "./Header.scss";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    })
  );
  const classes = useStyles();

  return (
    <div className="header-component">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Movie App</Link>
          </Typography>
          <Typography className="search">
            <Link to="/search">Search</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
