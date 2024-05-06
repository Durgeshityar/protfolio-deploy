import Footer from './components/footer'
import { HoverEffect } from './components/ui/card-hover-effect'
import { CardStack } from './components/ui/card-stack'
import { HeroParallax } from './components/ui/hero-parallax'
import { cn } from './utils/cn'
export default function Home() {
  return (
    <div className=" ml-3  lg:ml-80 mt-28 lg:mt-10 overflow-hidden mr-3 flex flex-col items-center w-full">
      <p className="text-2xl text-slate-400">
        🤘 Yo, I'm Durgesh Chandrakar and ..
      </p>
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
      <p className="text-xl mx-5 font-sans text-slate-400">
        When I'm not out with my loved ones.
      </p>
      <p className="text-2xl mx-5 font-semibold">
        You'll catch me doing a combo of these
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <p className="text-2xl mx-5 font-semibold">
        Here’s what you can expect from me...
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={project2} />
      </div>
      <p className="text-md text-slate-400 mx-5 font-sans">
        PS: these are not my work but i can help to make
      </p>
      <p className="text-2xl mx-5 font-semibold">
        Your product look something like this too..
      </p>
      <div>
        <HeroParallax products={HeroProducts} />;
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  )
}

const CARDS = [
  {
    id: 0,
    name: '',
    designation: 'key skills',
    content: (
      <p>
        Itranslate complex user needs into beautiful and functional web
        applications, leveraging my expertise in the MERN stack
        <Highlight>Next.js, React.js, Node.js, MongoDB</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: '',
    designation: 'Focuses on outcome',
    content: (
      <p>
        Helping digital founders create <Highlight>unique</Highlight>, empathic
        <Highlight>product experiences</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: '',
    designation: 'Backend expertise',
    content: (
      <p>
        I architect scalable and<Highlight>secure backend system</Highlight>
        using a variety of technologies, ensuring data integrity and efficient
        performance.{' '}
      </p>
    ),
  },
  {
    id: 3,
    name: '',
    designation: 'Architecture',
    content: (
      <p>
        creating scalable and responsive <Highlight> SaaS </Highlight>
        applications using <Highlight> serverless </Highlight> architecture on
        AWS and an event-driven approach.
      </p>
    ),
  },
  {
    id: 4,
    name: '',
    designation: 'Senior shitposter',
    content: (
      <p>
        checkout people ❌ <br />
        git checkout ✅
      </p>
    ),
  },
]

const projects = [
  {
    title: 'things I create',
    description: 'website , app design , visual identity, illustrations ,ui',
  },
  {
    title: 'for products in',
    description: 'SaaS, fintech, web3.0, ai, medtech and more',
  },
  {
    title: 'using tools like',
    description: 'figma , after effects , photoshop, framer, blender ',
  },
]

const project2 = [
  {
    title: '',
    description: 'Coporate level practices, big energy and fresh thinking ',
  },
  {
    title: '',
    description:
      'Listen, challenge and reconnect the dots — joining your team with conviction and openness.',
  },
  {
    title: '',
    description:
      'Bridge the gap between creative and commercial objectives — speaking both languages.',
  },
]

const HeroProducts = [
  {
    title: '',
    link: '',
    thumbnail: '/parralax/moonbeam.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/cursor.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/rogue.png',
  },

  {
    title: '',
    link: '',
    thumbnail: '/parralax/editorially.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/editrix.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/pixelperfect.png',
  },

  {
    title: '',
    link: '',
    thumbnail: '/parralax/algocrunch.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/aceternityui.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/tailwindmasterkit.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/smartbridge.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/renderwork.png',
  },

  {
    title: '',
    link: '',
    thumbnail: '/parralax/cremedigital.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/goldenbellsacademy.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/invoker.png',
  },
  {
    title: '',
    link: '',
    thumbnail: '/parralax/efreeinvoice.png',
  },
]
