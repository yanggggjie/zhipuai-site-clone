import { usePathname } from 'next/navigation'

export default function useIsHome() {
  const pathName = usePathname()
  const isHome = pathName === '/'
  return {
    isHome,
  }
}
