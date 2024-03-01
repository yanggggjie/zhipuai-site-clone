import _ from 'lodash'
import { clsx } from 'clsx'
interface Props {}

export default function Copyright({}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'h-20',
        'border border-t-2',
      )}
    >
      <p className="box-border text-[rgb(51,51,51)] text-[14px] leading-[18px] m-0">
        Copyright © 2023 北京智谱华章科技有限公司
      </p>
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        className="box-border bg-[rgba(0,0,0,0)] text-[rgb(51,51,51)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation text-[14px] leading-[18px] block"
      >
        京ICP备20011824号-24
      </a>
    </div>
  )
}
