import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavBar() {
  const content = `More links 🙂`
  const router = useRouter();
  return (
    <div>
      <div className='flex flex-col justify-center items-left mb-4 -ml-32 mr-32 p-4 min-w-max bg-lessdark rounded-3xl bg-opacity-25'>
        <Link href="/" className={`mr-16 py-2 px-4 font-bold italic text-4xl text-steel ${router.pathname == "/" ? "text-white" : "text-steel"}`}>JL</Link>
        <Link href="/aboutme" className={`mr-16 py-2 px-4 font-bold italic text-2xl text-steel ${router.pathname == "/aboutme" ? "text-white" : "text-steel"}`}>About Me</Link>
        <Link href="/portfolio" className={`mr-16 py-2 px-4 font-bold italic text-2xl text-steel ${router.pathname == "/portfolio" ? "text-white" : "text-steel"}`}>Portfolio</Link>
        <Link href="/projects" className={`mr-16 py-2 px-4 font-bold italic text-2xl text-steel ${router.pathname == "/projects" ? "text-white" : "text-steel"}`}>Projects</Link>
        <div className='p-4'>
          {content}
        </div>
        <div className='flex flex-row items-center'> 
          <a href="https://www.linkedin.com/in/jleung007/" className='overflow-hidden w-[54px]'>
            <Image 
            priority
            className="mx-4"
            src="/static/images/linkedin-logo.png"
            height={32}
            width={32}
            alt="linkedin"
            />
          </a>
          <a href="https://gitlab.com/JamesLeung7158/" className='overflow-hidden w-[54px]'>
            <Image 
            priority
            className="mr-4"
            src="/static/images/gitlab-logo.png"
            height={45}
            width={45}
            alt="gitlab"
            />
          </a>
          <a href="https://github.com/jleung7158" className='overflow-hidden w-[54px]'>
            <Image 
            priority
            className="mr-4"
            src="/static/images/github-mark-white.png"
            height={32}
            width={32}
            style={{"width": "50%", "height": "auto"}}
            alt="gitlab"
            />
          </a>
        </div>

      </div>
    </div>
  )
}