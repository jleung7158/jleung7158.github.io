import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css'
import Typer from "../components/typer";

const imageStyle = {
  backgroundcolor: "white"
}
const currentSkills = "< CurrentSkills >"
const endCurrentSkills = "</ CurrentSkills >"
const learning = "< CurrentlyLearning >"
const endLearning = "</ CurrentlyLearning >"

const title = "< Portfolio >"
const endTitle = "</ Portfolio >"
const content = `Programming Languages | Python 3, JavaScript ES6+, HTML5, CSS, SQL

Front-end | React, React Hooks, Redux Toolkit, DOM manipulation, WebSockets, 
Tailwind, Bootstrap

Back-end | Django 4, RTK Query, PostgreSQL, FastAPI, MongoDB, RabbitMQ 

System Design | VS Code, Docker, Node.js, Git, npm, Monolith, Microservices, 
Domain-driven design, Message passing, Event sourcing
`

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>{title}</h1>
      <div className={utilStyles.headingLg}>{currentSkills}</div>
          <div className='flex flex-col mx-8 w-[520px] mb-16'>
            <div className="grid grid-cols-4 gap-4 mt-4 mb-8">
              <div className="grid grid-cols-2 gap-4 items-center mr-4 ml-8 max-w-[90px]">
                <Image 
                priority
                className=""
                src="/static/images/python-logo.png"
                height={37}
                width={37}
                alt="python"
                style={{"width": "95%", "height": "auto"}}
                />
                <Image 
                priority
                src="/static/images/javascript-logo.png"
                height={39}
                width={37}
                style={{"width": "90%", "height": "auto"}}
                alt="javascript"
                />
                <Image 
                priority
                src="/static/images/html-logo2.png"
                height={37}
                width={37}
                alt="html5"
                />
                <Image 
                priority
                src="/static/images/css-logo2.png"
                height={42}
                width={42}
                alt="css3"
                />
                <Image 
                priority
                className=""
                src="/static/images/sql-logo2.png"
                height={37}
                width={37}
                alt="sql"
                style={imageStyle}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 items-center mr-4 ml-8 max-w-[90px]">
                <Image 
                priority
                src="/static/images/portreact-logo.png"
                height={37}
                width={37}
                style={{"width": "90%", "height": "auto"}}
                alt="React"
                />
                <Image 
                priority
                src="/static/images/redux-logo.png"
                height={37}
                width={37}
                alt="Redux Toolkit"
                style={{"width": "90%", "height": "auto"}}
                />
                <Image 
                priority
                src="/static/images/porttailwind-logo.png"
                height={37}
                width={37}
                alt="TailwindCSS"
                style={imageStyle}
                />
                <Image 
                priority
                src="/static/images/portbootstrap-logo.png"
                height={37}
                width={37}
                alt="BootstrapCSS"
                style={{"width": "95%", "height": "auto"}}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 items-center mr-4 ml-8 max-w-[90px]">
                <Image 
                priority
                src="/static/images/django-logo2.png"
                height={42}
                width={42}
                alt="Django4"
                style={imageStyle}
                />
                <Image 
                priority
                src="/static/images/portrtk-logo.png"
                height={37}
                width={37}
                alt="Redux Toolkit Query"
                style={imageStyle}
                />
                <Image 
                priority
                src="/static/images/Postgresql-icon.png"
                height={37}
                width={37}
                alt="PostgreSQL"
                style={{"width": "90%", "height": "auto"}}
                />
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
                className="ml-2"
                src="/static/images/MongoDB_Logo.png"
                height={19}
                width={19}
                alt="MongoDB"
                style={{"width": "50%", "height": "auto"}}
                />
                <Image 
                priority
                className="ml-2"
                src="/static/images/rabbitmq-logo.png"
                height={28}
                width={28}
                alt="rabbitMQ"
                style={{"width": "70%", "height": "auto"}}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mr-4 ml-8 justify-center items-center max-w-[90px]">
                <Image 
                priority
                src="/static/images/vscode.png"
                height={37}
                width={37}
                alt="VS Code"
                style={{"width": "85%", "height": "auto"}}
                />
                <Image 
                priority
                className="ml-1"
                src="/static/images/Docker-logo.png"
                height={39}
                width={39}
                alt="Docker"
                style={{"width": "95%", "height": "auto"}}
                />
                <Image 
                priority
                src="/static/images/nodejs2-logo.png"
                height={37}
                width={37}
                alt="nodeJS"
                style={imageStyle}
                />
                <Image 
                priority
                src="/static/images/git-logo2.png"
                height={37}
                width={37}
                alt="git"
                style={imageStyle}
                />
                <Image 
                priority
                src="/static/images/npm-logo.png"
                height={37}
                width={37}
                alt="npm"
                style={imageStyle}
                />
              </div>
            </div>
            <div className="my-2 mx-8 text-xl">
              <Typer content={content} speed={10}/>
            </div>
          </div>
        <div className="text-xs mt-8 ml-8">{endCurrentSkills}</div>
        <div className="flex flex-col">
          <div className={utilStyles.headingLg}>{learning}</div>
          <div className="text-xl mt-4 ml-16">NextJS, ExpressJS, Typescript</div>
          <div className="flex flex-row mt-4 ml-16">
            <Image 
            priority
            className="ml-1"
            src="/static/images/nextjs-logo2.png"
            height={37}
            width={37}
            alt="NextJS"
            style={imageStyle}
            />
            <Image 
            priority
            className="ml-9"
            src="/static/images/expressjs-logo.png"
            height={37}
            width={37}
            alt="Express JS"
            style={imageStyle}
            />
            <Image 
            priority
            className="ml-7"
            src="/static/images/typescript-logo.png"
            height={37}
            width={52}
            alt="Typescript"
            style={imageStyle}
            />
          </div>
          <div className="mt-4 ml-16">( This site was actually made with NextJS! ) </div>
          <div className="text-xs mt-8 ml-8">{endLearning}</div>          
        </div>
        <div className="text-xs">{endTitle}</div>
      <footer>
        <h2 className="my-4 ml-64 text-lg">
          <Link href="/">Back to home</Link>
        </h2>
      </footer>
    </Layout>
  );
}