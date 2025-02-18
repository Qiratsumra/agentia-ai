'use client'
import { VscRobot } from 'react-icons/vsc';
import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Tagline */}
            <div className="bg-gray-800 text-sm md:text-base text-white px-4 py-1 rounded-full mb-4 mx-auto flex justify-center">
            <span className="inline-flex size-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-[4px]"></span>
                <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 list-disc">POWERED BY PANAVERSITY</li>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight max-w-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    Enterprise AI Agents
                </span>
                <br />
                for the Future
            </h1>

            {/* Input Box with Typewriter */}
            <div className="mt-6 flex items-center bg-gray-900 border border-gray-700 rounded-lg p-3 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
                <span className="bg-purple-600 text-white p-2 rounded-full">
                    <VscRobot />
                </span>
                <div className="text-white px-3 flex-1 text-sm md:text-base w-full">
                    <Typewriter
                        options={{
                            strings: [
                                "Hello! I'm your AI agent. How can I enhance your business today?",
                                "I can help optimize your workflows with neural networks.",
                                "Let me assist you with advanced data analytics.",
                                "Would you like to explore our AI integration solutions?"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-800 hover:to-blue-900 text-white px-6 py-2 rounded-lg w-full sm:w-auto text-sm md:text-base transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    Deploy Your AI Agent →
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg w-full sm:w-auto text-sm md:text-base transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    Watch Demo
                </button>
            </div>
        </div>
    )
}
