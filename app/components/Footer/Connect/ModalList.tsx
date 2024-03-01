export function ModalList() {
  return (
    <div className="box-border w-[163.994px] text-[rgba(0,0,0,0.85)] text-[16px] leading-[25.144px] mr-[15px]">
      <p className="box-border text-[rgb(51,51,51)] text-[14px] font-semibold leading-[16px] mt-0 mb-[34px] mx-0">
        大模型列表
      </p>
      <div className="box-border">
        <a
          href="https://chatglm.cn/"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">ChatGLM-130B</div>
        </a>
        <a
          href="https://github.com/THUDM/ChatGLM-6B"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">ChatGLM-6B</div>
        </a>
        <a
          href="https://lab.bigmodel.ai/glm-130b"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">GLM-130B</div>
        </a>
        <a
          href="https://lab.bigmodel.ai/codegeex/blog/"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">CodeGeeX</div>
        </a>
        <a
          href="https://github.com/THUDM/CogView"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">CogView</div>
        </a>
        <a
          href="https://github.com/THUDM/CogVideo"
          target="_blank"
          className="box-border bg-[rgba(0,0,0,0)] text-[rgb(66,70,78)] cursor-pointer transition-[color] duration-[0.3s] ease-[ease] delay-0 touch-manipulation block text-[14px] leading-[16px] relative mb-[14px]"
        >
          <div className="box-border">CogVideo</div>
        </a>
      </div>
    </div>
  )
}
