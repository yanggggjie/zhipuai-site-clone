import { basePath } from '@/lib/util'

export function Logo() {
  return (
    <img
      src={basePath + '/logo.png'}
      alt="智谱AI"
      className="box-border align-middle cursor-pointer block w-[80px] leading-[84px] text-[rgba(0,0,0,0.85)] text-[16px]"
    />
  )
}
