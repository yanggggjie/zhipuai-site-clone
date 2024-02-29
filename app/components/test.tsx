'use client'
import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
interface Props {
  children: React.ReactNode
}

function HiddenHeader({ children }: Props) {
  // 定义状态来追踪Header的显示状态和上一次滚动位置
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = () => {
    // 当前滚动位置
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY) {
      // 向下滚动
      setIsVisible(false)
    } else {
      // 向上滚动
      setIsVisible(true)
    }
    // 更新上一次滚动位置
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [lastScrollY])

  return (
    <Transition
      show={isVisible}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        {/* Header内容 */}
        {children}
      </header>
    </Transition>
  )
}

export default HiddenHeader
