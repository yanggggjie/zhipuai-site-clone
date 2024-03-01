export function Contact() {
  return (
    <div className="box-border w-[210px] text-[rgba(0,0,0,0.85)] text-[16px] leading-[25.144px]">
      <p className="box-border text-[rgb(51,51,51)] text-[14px] font-semibold leading-[16px] mt-0 mb-[34px] mx-0">
        联系方式
      </p>
      <p className="box-border text-[rgb(66,70,78)] block text-[14px] leading-[16px] relative mt-0 mb-[14px] mx-0">
        商务合作：service@zhipuai.cn
      </p>
      <p className="box-border text-[rgb(66,70,78)] block text-[14px] leading-[22px] relative mt-0 mb-[14px] mx-0">
        公司地址：北京市海淀区中关村东路1号院9号楼10层
      </p>
      <div className="box-border flex justify-between mt-[30px]">
        <div className="box-border text-center">
          <img
            src="https://www.zhipuai.cn/assets/images/qiweikefu.png"
            alt="智谱AI"
            className="box-border align-middle h-[81.9922px] w-[81.9922px] rounded-[8px]"
          />
          <p className="box-border text-[rgb(66,70,78)] text-[12px] leading-[19px] mt-[5px] mb-0 mx-0">
            企微客服
          </p>
        </div>
        <div className="box-border text-center">
          <img
            src="https://www.zhipuai.cn/assets/images/zhipugongzhonghao.png"
            alt="智谱AI"
            className="box-border align-middle h-[81.9922px] w-[81.9922px] rounded-[8px]"
          />
          <p className="box-border text-[rgb(66,70,78)] text-[12px] leading-[19px] mt-[5px] mb-0 mx-0">
            智谱公众号
          </p>
        </div>
      </div>
    </div>
  )
}
