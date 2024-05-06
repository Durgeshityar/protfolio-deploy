import React from 'react'

const Footer = () => {
  return (
    <div className="py-4 border-t px-4">
      <ul className="flex justify-between text-sm font-thin">
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

export default Footer
