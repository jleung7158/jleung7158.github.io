import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import Layout from "../components/layout";
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Typer from '../components/typer'

const content = `I'm a full-stack software engineer who strives to write clean, readable, and efficient code.

Before picking up coding, I was a Mechanical Engineering student with a Master's degree.

I chose the field because I have loved math and science from an early age, and enjoy 
learning it. It was actually during my time as a Master's student that I picked up some 
coding tasks.

The rest as, you can say, is history!
`

export default function AboutMe() {
  const title = "< About Me >"
  const endTitle = "</ About Me >"
  
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>{title}</h1>
      <div className='my-2 mx-8 text-xl min-w-[520px] max-w-[520px]'>
        <Typer content={content} speed={15}/>
      </div>
      <h2 className='text-xs'>{endTitle}</h2>
      <footer>
        <h2 className="my-4 ml-64 text-lg">
          <Link href="/">Back to home</Link>
        </h2>
      </footer>
    </Layout>
  );
}