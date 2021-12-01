import React, {useRef} from 'react'
import {useSpring, animated} from 'react-spring'

function CaseOtion() {
  const cardRef = useRef()
  const [mouse, setMouse] = useSpring(() => ({xy: [1, 0.5], s: 0}))

  function mousePosToRotation(x, y) {
    const strength = 5
    return `rotateY(${(x * 2 - 1) * strength}deg) rotateX(${(y * 2 - 1) * -strength}deg)`
  }

  function handleMouseMove({clientX, clientY}) {
    const rect = cardRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const relativeY = clientY - rect.top
    const x = relativeX / rect.width
    const y = relativeY / rect.height
    setMouse({xy: [x, y], s: 1})
  }

  return (
    <a
      href="https://otion.app"
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouse({s: 1})}
      onMouseLeave={() => setMouse({xy: [0.5, 0.5], s: 0})}
      className="bg-indigo-50 hover:bg-indigo-100 max-w-full transition-colors duration-200 rounded-2xl p-6 lg:p-14 pb-8 mx-auto group"
      style={{perspective: 600}}
    >
      {/* background rect */}
      <animated.div
        ref={cardRef}
        style={{
          background: 'radial-gradient(100.02% 136.97% at 0% 100%, #4A508F 0%, #14142E 100%)',
          transform: mouse.xy.interpolate(mousePosToRotation),
          perspective: 400,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-md p-5 relative"
      >
        {/* blob 1 */}
        <animated.svg
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 10}px)`)}}
          className="absolute md:-top-14 -top-7 -left-7 md:-left-14 w-1/3 md:w-1/2"
          viewBox="0 0 192 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M111.726 119.031C74.4475 156.309 73.777 205.774 36.4986 168.496C-0.779842 131.217 -0.779842 70.7769 36.4986 33.4985C73.777 -3.77989 134.217 -3.77989 171.496 33.4985C208.774 70.7769 149.004 81.7526 111.726 119.031Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="178.132" y1="19.1938" x2="13.1102" y2="145.107" gradientUnits="userSpaceOnUse">
              <stop stopColor="#565EAE" />
              <stop offset="1" stopColor="#141530" />
              <stop offset="1" stopColor="#0F1264" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="192" height="189" fill="white" />
            </clipPath>
          </defs>
        </animated.svg>

        {/* blob 2 */}
        <animated.svg
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 10}px)`)}}
          className="absolute -bottom-7 -right-7 md:-bottom-14 md:-right-14 w-1/3 md:w-1/2"
          viewBox="0 0 173 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M151.892 46.17C170.14 67.9489 177.441 138.087 126.518 151.732C75.5944 165.377 23.2516 135.157 9.60674 84.2335C-4.0381 33.3103 3.85094 19.3488 54.7742 5.70401C105.697 -7.94083 130.985 21.216 151.892 46.17Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="68.0351" y1="-45.5769" x2="94.5685" y2="160.293" gradientUnits="userSpaceOnUse">
              <stop stopColor="#565EAE" />
              <stop offset="1" stopColor="#141530" />
              <stop offset="1" stopColor="#0F1264" />
            </linearGradient>
            <clipPath id="clip0"></clipPath>
          </defs>
        </animated.svg>
        {/* timeline */}
        <animated.svg
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 5}px)`)}}
          className="w-40 absolute top-3 right-3"
          viewBox="0 0 170 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M84.8057 30L166.001 30.0047L163.484 33.5047L166.001 37.0047H84.8065L87.718 33.5047L84.8057 30Z" fill="#EF4444" fillOpacity="0.22" />
          <path d="M3.5 0H84.9997L81.5261 3.5L84.9997 7H3.5L6.68387 3.5L3.5 0Z" fill="#6366F1" fillOpacity="0.3" />
          <rect x="84.791" y="15.9327" width="4.07511" height="4.07511" transform="rotate(45 84.791 15.9327)" fill="#F43F5E" fillOpacity="0.2" stroke="#FB7185" />
          <rect x="165.992" y="15.9327" width="4.07511" height="4.07511" transform="rotate(45 165.992 15.9327)" fill="#F43F5E" fillOpacity="0.2" stroke="#FB7185" />
          <path d="M87 33.5H163.33" stroke="#FB7185" />
          <path d="M6.19629 3.5H81.9979" stroke="#818CF8" />
          <rect x="165.992" y="30.5235" width="4.07511" height="4.07511" transform="rotate(45 165.992 30.5235)" fill="#F43F5E" fillOpacity="0.2" stroke="#FB7185" />
          <rect x="84.791" y="30.5235" width="4.07511" height="4.07511" transform="rotate(45 84.791 30.5235)" fill="#F43F5E" fillOpacity="0.2" stroke="#FB7185" />
          <rect x="3.58887" y="0.707107" width="4.07511" height="4.07511" transform="rotate(45 3.58887 0.707107)" fill="#6366F1" fillOpacity="0.3" stroke="#818CF8" />
          <rect x="84.791" y="0.707107" width="4.07511" height="4.07511" transform="rotate(45 84.791 0.707107)" fill="#6366F1" fillOpacity="0.3" stroke="#818CF8" />
        </animated.svg>

        {/* screen */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 20}px)`)}}
          className="relative w-80"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607195476/Frame_11_1_p2efpe.png"
          alt="otion landing"
        />
      </animated.div>
      <div className="flex flex-col items-center pt-16">
        <div className="text-indigo-500 text-sm">Design & Development</div>
        <h3 className="font-header font-bold text-gray-900 text-2xl">Otion.app</h3>
      </div>
    </a>
  )
}

function CaseParfum() {
  const cardRef = useRef()
  const [mouse, setMouse] = useSpring(() => ({xy: [0.5, 0.5], s: 0}))

  function mousePosToRotation(x, y) {
    const strength = 7
    return `rotateY(${(x * 2 - 1) * strength}deg) rotateX(${(y * 2 - 1) * -strength}deg)`
  }

  function handleMouseMove({clientX, clientY}) {
    const rect = cardRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const relativeY = clientY - rect.top
    const x = relativeX / rect.width
    const y = relativeY / rect.height
    setMouse({xy: [x, y], s: 1})
  }

  return (
    <a
      href="https://parfum.nl"
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouse({s: 1})}
      onMouseLeave={() => setMouse({xy: [0.5, 0.5], s: 0})}
      className="bg-transparent hover:bg-red-50 transition-colors duration-200 rounded-2xl px-14 pt-14 pb-8 mx-auto group"
      style={{perspective: 600}}
    >
      {/* background rect */}
      <animated.div
        ref={cardRef}
        style={{
          background: 'radial-gradient(98.02% 134.33% at 1.93% 97.54%, #D5003B 0%, #9F1239 100%)',
          transform: mouse.xy.interpolate(mousePosToRotation),
          perspective: 400,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-md p-5 relative"
      >
        {/* blob 1 (largest) */}
        <animated.div style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 10}px)`)}} className="absolute -right-14 -top-14 w-2/3">
          <div
            className="w-full rounded-full"
            style={{background: 'radial-gradient(74.79% 74.79% at 15.42% 13.12%, #881337 0%, #FFCDDB 0.01%, #ED3B6C 100%)', paddingTop: '100%'}}
          />
        </animated.div>
        {/* blob 2 */}
        <animated.div style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 10}px)`)}} className="absolute -left-6 top-14 w-1/3">
          <div className="w-full rounded-full" style={{background: 'radial-gradient(67.19% 67.19% at 60.16% 23.44%, #FF95A4 0%, #E91D56 100%)', paddingTop: '100%'}} />
        </animated.div>

        {/* blob 3 (smallest) */}
        <animated.div style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 20}px)`)}} className="absolute -left-8 top-8 w-1/12">
          <div className="w-full rounded-full" style={{background: 'radial-gradient(53.13% 53.13% at 35.01% 33.1%, #FB7185 0%, #BC093B 100%)', paddingTop: '100%'}} />
        </animated.div>

        {/* screen */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 20}px)`)}}
          className="relative w-80"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607262312/chrome_Pv1TUDzLXx_1_pyusuk.png"
          alt="parfum.nl landing"
        />
        {/* checkout */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 30}px)`)}}
          className="absolute w-36 -bottom-10 left-0 rounded shadow-md group-hover:shadow-lg transition-shadow duration-200"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607273924/Frame_14_1_itdrkj.png"
          alt="parfum.nl profile"
        />
        {/* card */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 35}px)`)}}
          className="absolute w-20 -bottom-14 right-4 rounded"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607274058/Group_1_1_h8i6ca.png"
          alt="parfum.nl landing"
        />
      </animated.div>
      <div className="flex flex-col items-center pt-16">
        <div className="text-indigo-500 text-sm">Development</div>
        <h3 className="font-header font-bold text-gray-900 text-2xl">Parfum.nl</h3>
      </div>
    </a>
  )
}

function CaseCvfr() {
  const cardRef = useRef()
  const [mouse, setMouse] = useSpring(() => ({xy: [0.5, 0.5], s: 0}))

  function mousePosToRotation(x, y) {
    const strength = 5
    return `rotateY(${(x * 2 - 1) * strength}deg) rotateX(${(y * 2 - 1) * -strength}deg)`
  }

  function handleMouseMove({clientX, clientY}) {
    const rect = cardRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const relativeY = clientY - rect.top
    const x = relativeX / rect.width
    const y = relativeY / rect.height
    setMouse({xy: [x, y], s: 1})
  }

  return (
    <a
      href="https://cv.fr"
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouse({s: 1})}
      onMouseLeave={() => setMouse({xy: [0.5, 0.5], s: 0})}
      className="bg-transparent hover:bg-gray-50 transition-colors relative duration-200 rounded-2xl px-14 pt-14 pb-8 mx-auto group"
      style={{perspective: 600}}
    >
      {/* background rect */}
      <animated.div
        ref={cardRef}
        style={{
          background: '#F3F2EF',
          transform: mouse.xy.interpolate(mousePosToRotation),
          perspective: 400,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-md p-5 relative"
      >
        {/* blobs*/}

        <animated.svg
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 15}px)`), width: '110%'}}
          className="absolute -left-10 -top-10"
          viewBox="0 0 429 367"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="373.5" cy="107.5" r="55.5" fill="url(#paint0_radial)" />
          <circle cx="404.5" cy="31.5" r="11.5" fill="url(#paint1_radial)" />
          <circle cx="392.5" cy="5.5" r="5.5" fill="url(#paint2_radial)" />
          <circle cx="168.5" cy="355.5" r="11.5" fill="url(#paint3_radial)" />
          <circle cx="81.5" cy="276.5" r="81.5" fill="url(#paint4_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(374 121) rotate(-71.9395) scale(72.5758)">
              <stop stopColor="#2C4FFF" />
              <stop offset={1} stopColor="#0020C0" />
            </radialGradient>
            <radialGradient id="paint1_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(405 36) rotate(-82.4054) scale(15.1327)">
              <stop stopColor="#4563FF" />
              <stop offset={1} stopColor="#1D42FF" />
            </radialGradient>
            <radialGradient id="paint2_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(391.5 8.5) rotate(-69.444) scale(8.544)">
              <stop stopColor="#3657FF" />
              <stop offset={1} stopColor="#0B31F8" />
            </radialGradient>
            <radialGradient id="paint3_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(169 362) rotate(-84.2894) scale(15.0748)">
              <stop stopColor="#4A68FF" />
              <stop offset="0.0001" stopColor="#3153FF" />
              <stop offset={1} stopColor="#062CED" />
            </radialGradient>
            <radialGradient id="paint4_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(77 325) rotate(-87.4439) scale(112.112)">
              <stop stopColor="#4B68FF" />
              <stop offset={1} stopColor="#0027F3" />
            </radialGradient>
          </defs>
        </animated.svg>

        {/* screen */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 20}px)`)}}
          className="relative w-80"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607453951/Frame_16_qxuhqi.png"
          alt="parfum.nl landing"
        />
        {/* checkout */}
        <animated.img
          style={{transform: mouse.s.interpolate((s) => `translateZ(${s * 30}px)`)}}
          className="absolute w-40 -bottom-0 -left-10 rounded"
          src="https://res.cloudinary.com/deirqouhr/image/upload/v1607453950/Group_17_u0b3hh.png"
          alt="parfum.nl profile"
        />
      </animated.div>
      <div className="flex flex-col items-center pt-16">
        <div className="text-indigo-500 text-sm">Design & Development</div>
        <h3 className="font-header font-bold text-gray-900 text-2xl">cv.fr</h3>
      </div>
    </a>
  )
}

export default function Cases() {
  return (
    <section id="work" className="w-full py-10">
      <h2 className="font-bold font-header text-4xl md:text-5xl text-center text-gray-900 mx-auto mb-2">Work samples</h2>
      <p className="text-center mx-auto text-gray-500 text-lg mb-14">Some of the projects I worked on</p>
      <div className="max-w-7xl px-4 mx-auto flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 justify-between">
        <CaseParfum />
        <CaseOtion />
        <CaseCvfr />
      </div>
    </section>
  )
}
