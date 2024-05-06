import Image from 'next/image'
import BoxName from '../components/BoxName'
import ImageConatiner1 from '../components/ImageContainer1'

import ImageConatiner2 from '../components/ImageContainer2'
import Fog from '../components/Fog'
import Footer from '../components/footer'

export default function Page() {
  return (
    <div className=" ml-3  lg:ml-80 mt-28 lg:mt-10 overflow-hidden mr-3">
      <p className="text-slate-300 font-sans font-medium text-sm pb-8">
        LET THAT FOG SETTLE...
      </p>
      <div className=" md:flex ">
        <div>
          <BoxName />
        </div>

        <div className="min-w-full">
          <div className="hidden md:block">
            <ImageConatiner1 />
          </div>
          <Fog>
            <Image
              src={'/1.JPG'}
              alt="myimage"
              height={700}
              width={900}
              className="md:hidden mix-blend-overlay rounded"
            />
          </Fog>
        </div>
      </div>
      <hr className="m-4"></hr>
      <div className="md:flex md:justify-between md:items-center">
        <div className="pt-8 hidden min-w-fit pr-10 md:flex flex-col items-center">
          <Fog>
            <Image
              src={'/info.jpeg'}
              alt="info image"
              width={300}
              height={300}
              className="mix-blend-overlay rounded"
            />
          </Fog>
        </div>
        <div className="flex flex-col gap-4 text-sm  md:font-thin ">
          <p className="font-medium text-slate-500"> Introduction</p>
          <p>
            I'm a full stack developer living in Raipur, Chhattisgarh, India. I
            started my journey with a BTech electrical. Along the way, I've been
            curious about how people interact with technology and how we can
            make it even better. There's so much to learn about how humans and
            machines connect, and I'm excited to dive into it. I shifted my
            focus from traditional engineering to designing for digital spaces
            because I wanted to work on bigger projects that move quickly. Even
            though technology and engineering are always changing, the core of
            design remains the same—it's all about making things that improve
            people's lives and look good doing it. Instead of walking through
            physical spaces, now people are scrolling through digital ones. My
            background in engineering gives me a unique perspective on designing
            technology that feel friendly and easy to use..
          </p>
        </div>
      </div>
      <hr className="m-4" />
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex flex-col gap-1 text-sm font-thin">
          <p className="font-medium  text-slate-500"> Education</p>
          <p className="text-2xl font-bold">Bharati Vidyapeeth university</p>
          <p className="text-2xl font-bold text-slate-500">
            College of engineering
          </p>
          <p>Bachelor of Technology in Electrical Engineering</p>
        </div>
        <div className="  pt-8  min-w-fit pr-10 flex flex-col items-center lg:pr-56 md:pl-5">
          <Fog>
            <Image
              src={'/podium.jpeg'}
              alt="info image"
              width={300}
              height={300}
              className="mix-blend-overlay rounded"
            />
          </Fog>
          <p className="pt-2"> Engineering building of our campus</p>
        </div>
      </div>
      <hr className="m-4" />
      <p className="font-medium  text-slate-500 text-sm pb-9">Coding mindset</p>

      <div className="flex flex-col gap-1 text-sm md:font-thin">
        <p className="font-semibold"> Great taste and future of technology </p>
        <p>
          I think being really good at making things look nice, like Ira Glass
          says, comes from learning about lots of different stuff like art,
          buildings, clothes, and more. It's not just about making computer
          stuff pretty; it's about knowing what looks good in the real world
          too. I like to try new stuff and always aim to be really, really good
          at what I do. <br />
          <span className="font-semibold font-sans">
            "Technology democratizes consumption but consolidates production.
            The best person in the world for anything, gets to do it for
            everyone " - Naval Ravikant
          </span>
        </p>
      </div>

      <hr className="m-4" />
      <div className="md:flex justify-between md:items-center">
        <div className="flex flex-col gap-1 text-sm font-thin">
          <p className="font-medium pb-3  text-slate-500">
            Things I love to do
          </p>
          <p className="text-2xl font-bold">Traveling</p>
          <p className="text-2xl font-bold text-slate-500">Anime</p>
          <p className="text-2xl font-bold text-slate-400">Calisthenics</p>
        </div>
        <div className=" hidden md:block min-w-fit lg:pr-52">
          <ImageConatiner2 />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
