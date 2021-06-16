import type { AppProps } from "next/app";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import "@fontsource/roboto";

export default function MyApp({ Component, pageProps }: AppProps) {
  const useStyles = makeStyles((theme) => ({
    root: {
      darkMode1: "",
      darkMode2: "",
      darkModeText1: "",
      darkModeText2: "",
      lightModeText1: "",
      lightModeText2: "",
      lightMode1: "",
      lightMode2: "",
      // minHeight: "100vh",
      // backgroundImage: `url(${
      //   process.env.PUBLIC_URL + "/public/hero-maldives.jpg"
      // }))`,
    },
  }));
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
