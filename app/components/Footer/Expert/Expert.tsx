import _ from 'lodash'
import { clsx } from 'clsx'
import { basePath } from '@/lib/util'
import React from 'react'
interface Props {}

export default function Expert({}: Props) {
  return (
    <div
      className={clsx('flex flex-col items-center', 'py-10')}
      style={{
        backgroundImage: `url('${basePath + '/ExpertBG.png'}')`,
      }}
    >
      <h2 className="box-border text-[rgba(0,0,0,0.85)] font-medium text-[36px] leading-[47px] mt-0 mb-[18px]">
        认知大模型引领AI产业革新
      </h2>
      <div className="pointer-events-auto box-border text-white bg-[rgb(24,119,255)] cursor-pointer inline-block text-[14px] font-normal h-[40px] leading-[40px] transition-all duration-[0.2s] ease-[ease-in-out] delay-0 visible px-[24px] py-0 rounded-[20px] border-[0.666667px] border-solid border-[rgb(24,119,255)]">
        预约专家交流
        <svg className="box-border fill-white h-[14px] overflow-hidden w-[14px]">
          <use xlinkHref="#icon-jiantou1" className="box-border" />
        </svg>
      </div>
    </div>
  )
}
