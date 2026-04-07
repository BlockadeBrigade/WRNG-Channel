import React from "react"
const currentYear = new Date().getFullYear()
const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 text-white ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © {currentYear} WRNG CHANNEL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/wrngchannel/"
              target="_blank"
              className="transition-colors hover:text-violet-400"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@wrngchannel"
              target="_blank"
              className="transition-colors hover:text-violet-400"
            >
              YouTube
            </a>
            <a className="transition-colors hover:text-violet-400">Vimeo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
