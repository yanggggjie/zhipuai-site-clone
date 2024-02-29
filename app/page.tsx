import Image from 'next/image'
import Header from '@/app/components/Header/Header'
import { basePath } from '@/lib/util'
import { clsx } from 'clsx'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
    </div>
  )
}

function Banner() {
  return (
    <div
      style={{
        background: 'url("/zhipuai-site-clone/banner_bg.jpg")',
      }}
    >
      <Title></Title>
      <Text></Text>
      <OpenPlatform></OpenPlatform>
      <LogoList></LogoList>
      <DownArrow></DownArrow>
    </div>
  )
}

function Title() {
  return (
    <div className="box-border text-[rgb(44,96,158)] text-[54px] font-medium leading-[54px] visible mb-[16px]">
      <div className="box-border text-[rgb(34,104,189)]">AI新纪元</div>
      新一代认知智能大模型
    </div>
  )
}

function Text() {
  return (
    <div className="box-border text-[rgb(45,115,201)] text-[24px] font-normal leading-[36px] visible mb-[16px]">
      数据与知识双轮驱动，让机器像人一样思考
    </div>
  )
}

function OpenPlatform() {
  return (
    <div className="box-border text-white bg-[rgb(24,119,255)] cursor-pointer inline-block text-[14px] font-normal h-[40px] leading-[40px] transition-all duration-[0.2s] ease-[ease-in-out] delay-0 visible px-[24px] py-0 rounded-[20px] border-[0.666667px] border-solid border-[rgb(24,119,255)]">
      访问开放平台
      <svg className="box-border fill-white h-[14px] overflow-hidden w-[14px]">
        <use xlinkHref="#icon-jiantou1" className="box-border" />
      </svg>
    </div>
  )
}

function LogoList() {
  const logoList = [
    {
      url: '/ChatGLM.png',
    },
    {
      url: '/GLM-130B.png',
    },
    {
      url: '/CodeGeex.png',
    },
    {
      url: '/CogView.png',
    },
  ].map(({ url }) => {
    return {
      url: basePath + url,
    }
  })

  return (
    <div className={clsx('flex flex-row items-center gap-2')}>
      {logoList.map(({ url }) => {
        return <img key={url} src={url} alt={url} />
      })}
    </div>
  )
}

function DownArrow() {
  return <div></div>
}
