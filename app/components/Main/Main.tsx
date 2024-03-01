'use client'
import _ from 'lodash'
import { clsx } from 'clsx'
import { basePath } from '@/lib/util'
import Header from '@/app/components/Header/Header'
import React, { ReactNode } from 'react'
import useIsHome from '@/app/hooks/useIsHome'
import Copyright from '@/app/components/Copyright/Copyright'
interface Props {
  children: ReactNode
}

export default function Main({ children }: Props) {
  const { isHome } = useIsHome()

  return (
    <>
      {isHome && (
        <main className={clsx('bg-[#fbfbfb]', 'relative w-full h-screen')}>
          <div
            className={clsx(
              'absolute top-0 left-0 w-full h-full bg-cover bg-center',
              'pt-20',
            )}
            style={{
              backgroundImage: `url('${basePath + '/banner_bg.jpg'}')`,
            }}
          >
            {children}
          </div>
          <Header></Header>
        </main>
      )}
      {!isHome && (
        <main className={clsx('bg-[#fbfbfb]')}>
          <div className={'pt-20'}>{children}</div>
          <Header></Header>
        </main>
      )}
    </>
  )
}
