import { basePath } from '@/lib/util'
import { clsx } from 'clsx'
import Copyright from '@/app/components/Copyright/Copyright'
import React from 'react'
import MarqueePart from '@/app/components/MarqueePart/MarqueePart'
import HomeBanner from '@/app/components/HomeBanner/HomeBanner'

export default function Home() {
  return (
    <div className={clsx()}>
      <MarqueePart></MarqueePart>
    </div>
  )
}
