import _ from 'lodash'
import { clsx } from 'clsx'
interface Props {}

export default function Title({}: Props) {
  return (
    <div className={clsx('flex flex-col items-center', 'space-y-1', 'pb-10')}>
      <span className="box-border text-[rgb(19,18,18)] text-[45px] font-normal leading-[56px] visible text-center bg-white">
        全球知名机构及企业的信任与选择
      </span>
      <div className="box-border text-[rgb(51,51,51)] text-[15px] font-light tracking-[-0.28px] leading-[19px] visible text-center bg-white">
        69个国家，1000+个研究机构，数万家先锋合作企业，正在与我们共建人工智能的美好未来
      </div>
    </div>
  )
}
