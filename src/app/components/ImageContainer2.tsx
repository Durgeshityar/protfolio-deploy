import Image from 'next/image'
import Fog from './Fog'

const ImageConatiner2 = () => {
  return (
    <Fog>
      <div className="flex gap-5 p-8">
        <div>
          <Image
            src={`/anime.JPG`}
            alt="photos"
            width={200}
            height={400}
            className="rounded-md mix-blend-overlay "
          />
        </div>

        <div className="pt-4 ">
          <Image
            src={`/gym.JPG`}
            alt="photos"
            width={330}
            height={400}
            className="rounded-md mix-blend-overlay"
          />
        </div>

        <div>
          <Image
            src={`/travel.jpg`}
            alt="photos"
            width={200}
            height={400}
            className="rounded-md  mix-blend-overlay  "
          />
        </div>
      </div>
    </Fog>
  )
}

export default ImageConatiner2
