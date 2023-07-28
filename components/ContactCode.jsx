import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'blog',
    link: 'lakshthink.tech.blog',
    href: 'https://lakshthink.tech.blog',
  },
  {
    social: 'email',
    link: 'shanthoshmanik@gmail.com',
    href: 'mailto:shanthoshmanik@gmail.com',
  },
  {
    social: 'github',
    link: 'mslaksh',
    href: 'https://github.com/mslaksh',
  },
  {
    social: 'linkedin',
    link: 'shanthoshlakshman',
    href: 'https://www.linkedin.com/in/shanthosh-lakshman-73839a211/',
  },
  {
    social: 'threads',
    link: 'shanthoshlakshman',
    href: 'https://www.threads.net/@shanthoshlakshman',
  },
  {
    social: 'instagram',
    link: 'shanthoshlakshman',
    href: 'https://www.instagram.com/shanthoshlakshman',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
