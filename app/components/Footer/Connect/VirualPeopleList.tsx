export function VirtualPeopleList() {
  return (
    <div className="box-border w-[163.994px] text-[rgba(0,0,0,0.85)] text-[16px] leading-[25.144px] mr-[15px]">
      <p className="box-border text-[rgb(51,51,51)] text-[14px] font-semibold leading-[16px] mt-0 mb-[34px] mx-0">
        数字人产品
      </p>
      <div className="box-border">
        <a
          href="#!"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">有时</div>
          <img
            src="https://www.zhipuai.cn/assets/images/products/youshi_qr.jpeg"
            alt="智谱AI"
            className="box-border align-middle hidden h-[100px] absolute w-[100px] rounded-[8px] left-0 top-2/4"
          />
        </a>
        <a
          href="https://vip.aminer.cn/sign/"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">智慧手语</div>
        </a>
        <a
          href="#!"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">手语词典</div>
          <img
            src="https://www.zhipuai.cn/assets/images/products/shouyucidian_qr.png"
            alt="智谱AI"
            className="box-border align-middle hidden h-[100px] absolute w-[100px] rounded-[8px] left-0 top-2/4"
          />
        </a>
      </div>
    </div>
  )
}
