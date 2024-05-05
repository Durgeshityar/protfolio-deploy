import Image from 'next/image'
import Fog from './Fog'

const ImageConatiner1 = () => {
  return (
    <Fog>
      <div className="flex gap-5 p-8">
        <div>
          <Image
            src={`/2.jpg`}
            alt="photos"
            width={200}
            height={400}
            className="rounded-md mix-blend-overlay "
          />
        </div>

        <div className="pt-4 ">
          <Image
            src={`/1.JPG`}
            alt="photos"
            width={330}
            height={400}
            className="rounded-md mix-blend-overlay"
          />
        </div>

        <div>
          <Image
            src={`/3.jpg`}
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

export default ImageConatiner1
