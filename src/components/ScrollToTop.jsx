import { useEffect } from 'preact/hooks'
import { useRouter } from 'preact-router'

export function ScrollToTop() {
  const [result] = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [result?.url])

  return null
}
