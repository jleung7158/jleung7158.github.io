import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import { WageGaugePics } from '../components/sliderimages/wagegaugeimages.js'
import WageGaugeImageSlider from "../components/wagegaugeimageslider";
import { CarCarPics } from '../components/sliderimages/carcarimages.js'
import CarCarImageSlider from "../components/carcarimageslider";

export default function Projects() {
  const imageStyle = {
    backgroundcolor: "white"
  }

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Projects</h1>
      <div className="flex flex-col mx-8 w-[520px]">
        <div className="flex flex-row justify-between align-text-bottom">
          <h1 className={utilStyles.headingXl}>
            <a href="https://wagegauge.gitlab.io/WageGauge/" className="text-lesslight hover:text-light">
              WageGauge
            </a>
            </h1>
          <a href="https://gitlab.com/WageGauge/WageGauge">
            <Image 
            priority
            className="mx-4"
            src="/static/images/wagegauge/logo512.png"
            height={40}
            width={40}
            alt="wagegauge"
            />
          </a>
        </div>
        <div className="text-lesslight text-lg mb-4">
          Tech Stacks used:
        </div>
        <div className="flex flex-row justify-evenly">
          <Image 
          priority
          src="/static/images/fastapi-logo.png"
          height={37}
          width={37}
          alt="fastAPI"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/portreact-logo.png"
          height={37}
          width={40}
          alt="React"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/redux-logo.png"
          height={37}
          width={37}
          alt="Redux Toolkit"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/porttailwind-logo.png"
          height={37}
          width={37}
          alt="TailwindCSS"
          style={imageStyle}
          />
        </div>
        <WageGaugeImageSlider slides={WageGaugePics}/>
        <div className="flex flex-row justify-between align-text-bottom mt-8">
          <h1 className={utilStyles.headingXl}>
            <a href="https://wagegauge.gitlab.io/WageGauge/" className="text-lesslight hover:text-light">
              CarCar
            </a>
            </h1>
          <a href="https://gitlab.com/JamesLeung7158/carcar">
            <Image 
            priority
            className="mx-4"
            src="/static/images/gitlab-logo.png"
            height={38}
            width={50}
            alt="carcar"
            />
          </a>
        </div>
        <div className="text-lesslight text-lg mb-4">
          Tech Stacks used:
        </div>
        <div className="flex flex-row justify-evenly">
          <Image 
          priority
          src="/static/images/django-logo2.png"
          height={32}
          width={40}
          alt="django"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/portreact-logo.png"
          height={37}
          width={37}
          alt="React"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/rabbitmq-logo.png"
          height={37}
          width={32}
          alt="rabbitMQ"
          style={imageStyle}
          />
          <Image 
          priority
          src="/static/images/Bootstrap-logo.png"
          height={28}
          width={45}
          alt="Bootstrap"
          style={imageStyle}
          />
        </div>
        <CarCarImageSlider slides={CarCarPics}/>
      </div>
      <h2 className={utilStyles.headingXl}> MORE TO COME👷‍♂️</h2>
      <footer>
        <h2 className="my-4 ml-64 text-lg">
          <Link href="/">Back to home</Link>
        </h2>
      </footer>
    </Layout>
  );
}