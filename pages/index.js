import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

const name = '< James Leung >';
const endName = '</ James Leung >';
const title = '< Full-Stack Software Engineer >';
const endTitle = '</ Full-Stack Software Engineer >';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <h2 className={utilStyles.headingLg2}>{title}</h2>
      <section className='my-4 mx-8 text-lg w-[520px]' >
        <div className='flex flex-col w-auto'>
          <p className='mt-4 ml-8 text-lg typing'>
            Hi there, and welcome to my profile!
          </p>
          <p className='mb-4 ml-8 text-lg typing2'>
            Feel free to click around the page 😊
          </p>
        </div>
      </section>
      <p className='text-xs'>(Can't forget the end tags)</p>
      <h2 className='ml-8 text-xs'>{endTitle}</h2>
      <h1 className='text-xs'>{endName}</h1>
    </Layout>
  );
}
