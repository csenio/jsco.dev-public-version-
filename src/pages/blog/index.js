import Footer from 'components/common/footer'
import Navigation from 'components/common/navigation'
import Fuse from 'fuse.js'
import Link from 'next/link'
import {useState} from 'react'

const articles = [
  {
    title: 'How to set up Tailwindcss (jit) with the new Svelte kit',
    created: '29/03/2021',
    kicker: 'A quick guide on how to set up svelte kit with tailwindcss ',
    external: false,
    url: '/blog/how-to-set-up-tailwindcss-with-svelte-kit',
  },
  {
    title: 'How to build a resizable box',
    created: '15/12/2020',
    kicker: 'This article describes how you can build a resizable box using javascript and simple math.',
    external: false,
    url: '/blog/how-to-build-a-resizable-box',
  },
  {
    title: 'How to build bulletproof react components',
    created: '12/04/2020',
    kicker: 'Learn how to leverage the declarative mindset to build components that never break',
    external: true,
    url: 'https://dev.to/jsco/how-to-build-bulletproof-react-components-mo7',
  },
  {
    title: 'Understanding Image formats on the Web',
    created: '14/11/2019',
    kicker:
      'Images are on of the biggest performance bottlenecks on websites. Tons of developers spend hours shaving of some kb of their bundle while serving megabytes worth of images.',
    external: true,
    url: 'https://dev.to/jsco/understanding-image-formats-on-the-web-4op8',
  },
]

const fuse = new Fuse(articles, {
  keys: ['title'],
})

export default function Index() {
  const [query, setQuery] = useState('')

  const result = query ? fuse.search(query) : articles.map((a) => ({item: a}))

  return (
    <>
      <Navigation />
      <main className="flex flex-col mx-auto px-5 max-w-md py-28">
        <h1 className="text-5xl font-header font-bold text-gray-900 mb-10 text-center mx-auto">Blog</h1>
        <div className="flex space-x-2">
          {/* searchbar */}
          <div className="relative flex-grow">
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              type="search"
              placeholder="Search articles"
              className="bg-indigo-50 pl-10 w-full placeholder-indigo-300 rounded border border-indigo-50 focus:border-indigo-200 transition-colors duration-150 p-2"
            />
            <div className="absolute top-0 pointer-events-none left-0 h-full px-3 flex items-center align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#818CF8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* sort */}
          {/* <select className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer pr-10 text-indigo-600 placeholder-indigo-400 rounded border border-indigo-50 focus:border-indigo-200 transition-colors duration-150 p-2">
            <option value="new">Newest</option>
            <option value="views">Most views</option>
          </select> */}
        </div>
        <div className="flex flex-col w-full space-y-8 mt-10">
          {result.length === 0 && (
            <div className="text-center text-gray-500">
              <span role="img" aria-label="shrug">
                🤷‍♂️
              </span>{' '}
              No Results
            </div>
          )}
          {result.map(({item}) => (
            <Link href={item.url}>
              <a className="w-full flex flex-col group">
                <h2 className="text-gray-900 font-header font-bold text-2xl mb-2">{item.title}</h2>
                <p className="text-gray-500">{item.kicker}</p>
                <div className="text-indigo-500 mt-1 flex items-center font-header">
                  Read
                  <svg
                    className="h-3 ml-2 transition-transform transform-gpu duration-150 group-hover:translate-x-1"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.305288 9.71942C0.117817 9.53189 0.0125018 9.27758 0.0125018 9.01242C0.0125017 8.74726 0.117817 8.49295 0.305288 8.30542L3.59829 5.01242L0.305288 1.71942C0.209778 1.62717 0.133595 1.51683 0.0811865 1.39482C0.0287775 1.27282 0.00119119 1.1416 3.73635e-05 1.00882C-0.00111646 0.876042 0.024185 0.744363 0.0744659 0.621467C0.124747 0.49857 0.199 0.386919 0.292893 0.293026C0.386785 0.199133 0.498437 0.12488 0.621334 0.0745992C0.74423 0.0243187 0.87591 -0.00098423 1.00869 0.00016971C1.14147 0.00132365 1.27269 0.0289096 1.39469 0.0813188C1.5167 0.133728 1.62704 0.20991 1.71929 0.305421L5.71929 4.30542C5.90676 4.49295 6.01207 4.74726 6.01207 5.01242C6.01207 5.27758 5.90676 5.53189 5.71929 5.71942L1.71929 9.71942C1.53176 9.90689 1.27745 10.0122 1.01229 10.0122C0.747124 10.0122 0.492816 9.90689 0.305288 9.71942Z"
                      fill="#818CF8"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
