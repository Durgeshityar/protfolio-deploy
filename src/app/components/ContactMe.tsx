const ContactMe = () => {
  return (
    <div className="p-8  flex flex-col gap-4">
      <p className="font-thin font-sans text-sm"> CONTACT</p>
      <ul className="text-sm flex flex-col gap-3 ">
        <a
          href="https://shorturl.at/acvy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer">Linkedin</li>
        </a>
        <a
          href="https://twitter.com/Durgesh_47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer">Twitter</li>
        </a>
        <a
          href=" https://github.com/Durgeshityar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer"> Github</li>
        </a>
      </ul>
    </div>
  )
}

export default ContactMe
