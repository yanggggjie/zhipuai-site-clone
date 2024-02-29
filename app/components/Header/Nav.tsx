import _ from 'lodash'
import { clsx } from 'clsx'
import Link from 'next/link'
interface Props {}

export default function Nav({}: Props) {
  const navList = [
    {
      title: '产品服务',
      url: '/',
    },
    {
      title: '新闻动态',
      url: '/news',
    },
    {
      title: '关于我们',
      url: '/aboutus',
    },
  ]

  return (
    <div className={'flex flex-row items-center gap-2'}>
      {navList.map(({ title, url }) => {
        return (
          <Link
            href={url}
            key={title}
            className={
              'box-border text-[rgb(61,94,147)] cursor-pointer text-[16px] font-normal tracking-[1px] relative whitespace-pre-wrap leading-[84px] mr-[50px]'
            }
          >
            {title}
          </Link>
        )
      })}
    </div>
  )
}
