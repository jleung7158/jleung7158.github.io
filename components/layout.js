import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from './navbar';
import { useRouter } from 'next/router';
import Underwater from './underwater';

export const siteTitle = 'James\' Profile';

export default function Layout({ children, home }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Check out my profile!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className='flex flex-row mt-8'>
        <NavBar />
        <div className='flex flex-col'>
          <header className={styles.header}>
            <div className='flex flex-row mb-8'>
              <Image
                priority
                src="/static/images/profile.png"
                className={utilStyles.borderCircle}
                height={148}
                width={148}
                style={{"width": "20%", "height": "auto"}}
                alt=""
              />
            </div>
          </header>
          <main className='pl-4'>{children}</main>
        </div>
        <div className='ml-24'>
          <Underwater />
        </div>
      </div>
    </div>
  );
}