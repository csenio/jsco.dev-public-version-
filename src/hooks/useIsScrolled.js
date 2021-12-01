import {useState, useEffect} from 'react'

export default function useIsScrolled(params) {
  const threshold = params?.threshold ?? 10
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isScrolled
}
