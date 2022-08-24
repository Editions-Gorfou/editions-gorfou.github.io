import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <button className="
          navbar-toggler
          text-gray-500
          border-0
          hover:shadow-none hover:no-underline
          py-2
          px-2.5
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
      className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
      </svg>
      </button>
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
              <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 lg:mt-0 mr-1" href="#">
              <div className="mr-2 mt-2">
                <Image src="/assets/editions-gorfou-logo.svg" height={32} width={32} />
              </div>
              <span className="font-medium">Éditions Gorfou</span>
              </a>
              <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                  <li className="nav-item px-2">
                      <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                  </li>
                  <li className="nav-item pr-2">
                      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/catalog">Catalogue</a>
                  </li>
                  <li className="nav-item pr-2">
                      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/authors">Auteurs</a>
                  </li>
                  <li className="nav-item pr-2">
                      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/blog">Blog</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}