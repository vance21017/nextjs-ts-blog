import Head from "next/head";
import { Button, Typography, Grid } from "@material-ui/core";
import MenuBook from "@material-ui/icons/MenuBook";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vance</title>
        <meta
          name="description"
          content="Welcome to developer Vance Denson's website"
        />
        <link rel="icon" href="/favicon-sm.png" type="image/x-icon" />
      </Head>
      <Grid container direction="column" align="center">
        <Grid item>
          <Typography
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Home Page
          </Typography>
        </Grid>
        <Grid item>
          <Link as="a" href="/blog">
            <Button
              variant="contained"
              color="primary"
              startIcon={<MenuBook />}
            >
              View My Blog
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
