import { TbBrain } from "react-icons/tb";
import { CiChat1 } from "react-icons/ci";
import { FaTerminal } from "react-icons/fa6";
import { IoShieldOutline } from "react-icons/io5";

const features = [
  {
    title: "Autonomous Learning",
    des: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    icon: <TbBrain className="text-white" size={30} />,
  },
  {
    title: "Multi-Modal Intelligence",
    des: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    icon: <CiChat1 className="text-white" size={30} />,
  },
  {
    title: "Cognitive Integration",
    des: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    icon: <FaTerminal className="text-white" size={30} />,
  },
  {
    title: "Ethical AI Framework",
    des: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    icon: <IoShieldOutline className="text-white" size={30} />,
  },
];

export default function Feature() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 md:px-12" id="features">
      <div className="max-w-7xl mx-auto font-[sans-serif]">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Neural Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mt-4 leading-relaxed">
            Powered by next-generation artificial intelligence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-md p-6 text-center hover:ring-2 hover:ring-purple-600 transition-all cursor-pointer"
            >
              {/* Icon Container */}
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
                {item.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-slate-400 mt-2 text-sm md:text-base">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
