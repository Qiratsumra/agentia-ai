import { FaCode } from "react-icons/fa";
import { LuEarth } from "react-icons/lu";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { TbBrain } from "react-icons/tb";

const features = [
  {
    icon: <TbBrain size={30} className="text-white" />,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making.",
  },
  {
    icon: <HiOutlineCpuChip size={30} className="text-white" />,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition.",
  },
  {
    icon: <FaCode size={30} className="text-white" />,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms.",
  },
  {
    icon: <LuEarth size={30} className="text-white" />,
    title: "Global Scale",
    description: "Distributed AI processing across global networks.",
  },
];

export default function Technology() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 md:px-12" id="technology">
      <div className="max-w-7xl mx-auto font-[sans-serif]">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Powered by Advanced AI
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mt-4 leading-relaxed">
            Built on cutting-edge neural architectures.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-md p-6 text-center hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105"
            >
              {/* Icon Container */}
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
                {item.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-slate-400 mt-2 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
