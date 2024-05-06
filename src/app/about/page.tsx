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
          <p className="font-medium text-slate-500"> INFO</p>
          <p>
            I'm full stack developer living in Raipur,Chhattisgarh, India. My
            initial foray into the world of engineering, specifically with a
            BTech degree, equipped me with a strong foundation in
            problem-solving and a deep appreciation for the intricacies of
            building things. However, as I delved deeper, the potential of
            technology to create impactful experiences transcended the physical
            realm.
          </p>

          <p>
            Creating intuitive and user-centric experiences that simplify lives
            and push boundaries is what truly excites me. I believe my
            problem-solving skills and logical thinking, which, combined with my
            tech enthusiasm, offers a unique perspective for tackling the
            challenges of the digital world.
          </p>
          <p className="font-bold">
            "Technology is the application of knowledge to control the natural
            world. It’s the greatest driver of both human prosperity and our
            capacity for self-annihilation" - Naval Ravikant
          </p>
        </div>
      </div>
      <hr className="m-4" />
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex flex-col gap-1 text-sm font-thin">
          <p className="font-medium  text-slate-500"> EDUCATION</p>
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
      <p className="font-medium  text-slate-500 text-sm pb-9">CODING MINDSET</p>
      <div className="md:flex md:justify-between md:items-center md:gap-2">
        <div className="flex flex-col gap-1 text-sm md:font-thin">
          <p className="font-semibold"> Great Taste </p>
          <p>
            Steve Jobs once said, "Simplicity is the ultimate sophistication." I
            share that philosophy when it comes to full-stack development. Just
            like Jobs prioritized clean design, I believe in crafting elegant
            code that is both powerful and efficient. Every line I write is a
            building block towards a seamless user experience – a testament to
            the beauty of well-structured, well-thought-out code.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm md:font-thin pt-5 md:pt-0">
          <p className=" font-semibold"> Future Of Technology </p>
          <p>
            While some might see technology as a separate force, it's actually
            an extension of our understanding of the world. Philosophy helps us
            build the language of math, which unlocks the secrets of nature
            (science). And technology is the application of these scientific
            principles, constantly propelling humanity forward. It's not just a
            moving force, it's the very engine of our progress.
          </p>
          <p className="font-bold">
            “Technology is not only the thing that moves the human race forward,
            but it’s the only thing that ever has. Without technology, we’re
            just monkeys playing in the dirt."
          </p>
        </div>
      </div>
      <hr className="m-4" />
      <div className="md:flex justify-between md:items-center">
        <div className="flex flex-col gap-1 text-sm font-thin">
          <p className="font-medium pb-3  text-slate-500">
            THINGS I LOVE TO DO
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
