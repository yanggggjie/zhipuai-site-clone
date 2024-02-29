import React from 'react'

const FullScreenBanner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* 全屏背景图片 */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-fullscreen-image.jpg')" }}
      ></div>

      {/* 透明Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-50 bg-black text-white">
        <h1>Logo</h1>
        <nav>
          {/* 导航项 */}
          <a href="#" className="mx-2">
            Home
          </a>
          <a href="#" className="mx-2">
            About
          </a>
          <a href="#" className="mx-2">
            Services
          </a>
          <a href="#" className="mx-2">
            Contact
          </a>
        </nav>
      </header>

      {/* Banner内容 */}
      <div className="flex justify-center items-center h-full">
        <h2 className="text-white text-4xl font-bold">
          Welcome to Our Website
        </h2>
      </div>
    </div>
  )
}

export default FullScreenBanner
