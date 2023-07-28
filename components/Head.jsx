import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Shanthosh Lakshman is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="web developer portfolio, mern stack, vscode-portfolio"
      />
      <meta property="og:title" content="Shanthosh Lakshman's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shanthosh Lakshman',
};
