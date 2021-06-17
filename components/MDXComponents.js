import { Typography, Container, Divider } from "@material-ui/core";

const MDXComponents = {
  h1: (props) => (
    <Typography
      variant="h3"
      align="center"
      color="primary"
      {...props}
      gutterBottom
    />
  ),
  h2: (props) => (
    <Typography
      variant="subtitle1"
      align="center"
      color="textPrimary"
      {...props}
      gutterBottom
    />
  ),
  h3: (props) => (
    <Typography
      variant="subtitle2"
      align="center"
      color="textPrimary"
      {...props}
      gutterBottom
    />
  ),
  h4: (props) => (
    <Typography variant="body1" align="center" color="secondar" {...props} />
  ),
  h5: (props) => (
    <Typography variant="body2" align="center" color="secondary" {...props} />
  ),
  h6: (props) => (
    <Typography variant="h6" align="center" color="secondary" {...props} />
  ),
  inlineCode: (props) => <Code {...props} />,
  br: (props) => <Container {...props} />,
  hr: (props) => <Divider />,
  p: (props) => <Typography {...props} />,
  ul: (props) => <Container {...props} />,
  ol: (props) => <Container {...props} />,
  li: (props) => <Container {...props} />,
};

export default MDXComponents;
