import _ from 'lodash'
import { clsx } from 'clsx'
import Nav from '@/app/components/Header/Nav'
import HiddenHeader from '@/app/components/test'
import { basePath } from '@/lib/util'
interface Props {}

export default function Header({}: Props) {
  return (
    <HiddenHeader>
      <div className={clsx('flex flex-row items-center', 'px-10')}>
        <div className={'flex flex-row  items-center gap-10'}>
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <div className={'grow'}></div>
        <LanguageSwitcher></LanguageSwitcher>
        <CooperationButton></CooperationButton>
      </div>
    </HiddenHeader>
  )
}

function Logo() {
  return (
    <img
      src={basePath + '/logo.png'}
      alt="智谱AI"
      className="box-border align-middle cursor-pointer block w-[110px] leading-[84px] text-[rgba(0,0,0,0.85)] text-[16px]"
    />
  )
}

function LanguageSwitcher() {
  return (
    <div className="box-border items-center flex flex-row justify-center leading-[84px] text-[rgba(0,0,0,0.85)] text-[16px] mx-[24px] my-0">
      <div className="box-border text-[rgb(44,96,158)] cursor-pointer text-[16px] font-normal leading-[24px] opacity-60 transition-all duration-[0.2s] ease-[ease-in-out] delay-0">
        简
      </div>
      <div
        role="separator"
        className="box-border text-[16px] leading-[25.144px] block h-[17.998px] relative top-[-0.96px] align-middle mx-[10px] my-0 border-l-[0.625px] border-l-[rgba(0,0,0,0.2)] border-t-0 border-t-[rgba(0,0,0,0.85)] border-none border-solid"
      />
      <div className="box-border text-[rgb(44,96,158)] cursor-pointer text-[16px] font-normal leading-[24px] opacity-60 transition-all duration-[0.2s] ease-[ease-in-out] delay-0">
        EN
      </div>
    </div>
  )
}

function CooperationButton() {
  return (
    <button
      className={clsx(
        'box-border text-white cursor-pointer text-[14px] h-[35.9961px] leading-[36px] text-center px-[16px] rounded-[50px]',
        'bg-[#1977fe]',
      )}
    >
      合作咨询
    </button>
  )
}
