'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { basePath } from '@/lib/util'

export default function LogoMarquee() {
  const imageList = [
    {
      path: '/marquee/1.png',
      speed: 30,
    },
    {
      path: '/marquee/2.png',
      speed: 50,
    },
    {
      path: '/marquee/3.png',
      speed: 30,
    },
  ].map((item) => {
    return {
      ...item,
      path: basePath + item.path,
    }
  })

  return (
    <div>
      {imageList.map((item) => {
        return (
          <Marquee key={item.path} gradient={true} speed={item.speed}>
            <img className={'h-16'} src={item.path} alt={item.path} />
          </Marquee>
        )
      })}
    </div>
  )
}
