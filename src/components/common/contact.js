import {useState} from 'react'
import useToast from './toast'

export default function Contact() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    fetch('/api/contact', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        message,
      }),
    })
      .then((res) => {
        toast({
          type: 'success',
          message: 'Message submitted successfully!',
        })
        setEmail('')
        setMessage('')
      })
      .catch((err) => {
        toast({
          type: 'error',
          message: 'There was an error, please try again later!',
        })
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <div className="w-full relative bg-indigo-50">
      {/* scroll point */}
      <div className="absolute -top-16" id="contact"></div>
      <svg className="w-full" viewBox="0 0 1532 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 101.134C599 131.664 954 67.2855 1532 101.134V0.5H0V101.134Z" fill="#fff" stroke="#fff" />
      </svg>

      <div className="max-w-screen-lg px-5 flex flex-col md:flex-row mx-auto items-center">
        {/* text */}
        <div className="max-w-sm py-14 md:py-24 md:pr-5 md:mr-auto">
          <h2 className="text-5xl font-header font-bold text-indigo-500 mb-4 text-center md:text-left">Let’s talk</h2>
          <p className="text-indigo-400 text-lg text-center md:text-left">
            Want to work with me, ask a question, or just chat? Drop me a message and I’ll get back to you <strong>within 48 hours</strong>.
          </p>
        </div>
        {/* blob */}
        <div className="relative w-full md:w-auto lg:-m-28 lg:p-28">
          <svg className="absolute hidden lg:block left-0 top-0 w-full transform -translate-x-5" viewBox="0 0 634 573" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M120.644 499.232C37.0591 409.763 -107.183 50.9172 129.317 36.4172C365.817 21.9172 425.186 -54.4278 549.745 70.1312C674.304 194.69 664.478 380.713 498.64 494.778C332.802 608.843 204.23 588.701 120.644 499.232Z"
                fill="#6366F1"
              />
              <path
                d="M612.177 260.828C608.544 362.558 495.929 528.917 254.093 528.917C108.493 528.917 82.3164 407.271 82.3164 260.828C82.3164 114.385 203.235 10.808 376.049 41.242C548.863 71.677 615.809 159.098 612.177 260.828Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="634" height="573" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <form onSubmit={handleSubmit} className="relative p-5 mb-5 md:mb-0 self-stretch rounded bg-white lg:bg-transparent ml-auto md:w-96 space-y-4">
            {/* text */}
            <div className="flex flex-col">
              <label htmlFor="email" className="label">
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                required
                className="bg-indigo-50 rounded border border-indigo-50 focus:border-indigo-200 transition-colors duration-150 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="label">
                Your Message
              </label>
              <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="input hover:bg-indigo-100 resize-none h-24" />
            </div>
            <button disabled={isSubmitting} type="submit" className="btn-primary disabled:bg-indigo-300">
              {isSubmitting ? 'Submitting...' : 'Get in touch'}
            </button>
          </form>
        </div>
      </div>
      <svg className="w-full" viewBox="0 0 1532 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 134.884H1532V16.175C903 38.7408 415 -29.6202 0 16.175V134.884Z" fill="#fff" stroke="#fff" />
      </svg>
    </div>
  )
}
