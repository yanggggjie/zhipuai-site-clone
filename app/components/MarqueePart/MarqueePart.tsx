import _ from 'lodash'
import { clsx } from 'clsx'
import LogoMarquee from '@/app/components/MarqueePart/LogoMarquee'
import React from 'react'
import Title from '@/app/components/MarqueePart/Title'
interface Props {}

export default function MarqueePart() {
  return (
    <div>
      <Title></Title>
      <LogoMarquee></LogoMarquee>
    </div>
  )
}
