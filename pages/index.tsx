import Head from "next/head";
import { Button, Typography } from "@material-ui/core";
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
        <link rel="icon" href="/favicon-lg.png" type="image/x-icon" />
      </Head>
      <Typography gutterBottom variant="h6">
        Home Page
      </Typography>
      <Link as="a" href="/blog">
        <Button variant="contained" color="primary" startIcon={<MenuBook />}>
          View My Blog
        </Button>
      </Link>
    </>
  );
}
