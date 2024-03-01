import _ from 'lodash'
import { clsx } from 'clsx'
interface Props {}

export default function Banner({}: Props) {
  return (
    <div>
      <div
        className={clsx(
          'box-border text-white h-[570px] overflow-hidden text-center  text-[16px] leading-[25.144px]',
        )}
      >
        <h1 className="box-border font-medium text-[48px] leading-[55.2px] mt-[170px] mb-0">
          让机器像人一样思考
        </h1>
        <label className="box-border touch-manipulation text-[18px]">
          Teaching Machines to Think Like Humans
        </label>
        <p className="box-border text-[20px] mt-[30px] mb-[20px]">
          打造超越图灵测试的机器认知智能，实现SaaS、PaaS到MaaS的升级，模型化服务时代的引领者
        </p>
      </div>
    </div>
  )
}
