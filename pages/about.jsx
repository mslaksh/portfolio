const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <h3>Hi, I’m Shanthosh Lakshman. Nice to meet you.</h3>
      <p>I'm a web developer from Tamilnadu, India. Currently I working in some freelance projects. In my spare time I enjoy gaming and building my own projects. My preferred tools are Next.js and php.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
