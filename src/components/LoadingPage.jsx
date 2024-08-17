import { useEffect, useState } from "react";


export default function LoadingPage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(percentage < 100){
        setPercentage((prevState) => prevState + 10)
      }
    },250)
    return() => clearInterval(interval)
  },[percentage])

  return (
    <div className="bg-[#191932] h-screen content-center">
      <p className="text-white text-center mb-2 monument-extended">Deploying {percentage}%</p>
      <div className="mx-auto boder-white border w-64 h-6">
        <div className="bg-gray-400 h-full" style={{ width: `${percentage}%`, transition: 'width 0.3s ease' }}></div>
      </div>
    </div>
  )
}
