import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";


export default function Contact() {
  return (
    <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto  rounded-lg" id='contact'>
      <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Get in Touch</h2>
      <p className="text-lg sm:text-xl text-slate-400 mt-4 leading-relaxed text-center">Ready to transform your business with AI?</p>
            <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div>
                  <h1 className='text-start font-bold text-2xl text-white'>Contact Information</h1>
                    <ul className="mt-12 space-y-8">
                        <li className="flex items-center">
                          <CiMail  className="text-purple-500 text-2xl font-bold"/>
                            <Link href="#" className="text-white text-sm ml-4">contact@agentiaworld.com</Link>
                        </li>
                        <li className="flex items-center">
                          <IoEarthOutline  className="text-purple-500 text-2xl font-bold"/>
                            <Link href="#" className="text-white text-sm ml-4">www.agentiaworld.com</Link>
                        </li>
                    </ul>

                    <div className='flex justify-start gap-5 text-3xl font-bold my-4'>
                                <FiGithub className=' text-gray-600 cursor-pointer hover:text-white'/>
                                <FaLinkedin className=' text-gray-600 cursor-pointer hover:text-white'/>
                                <IoLogoTwitter className=' text-gray-600 cursor-pointer hover:text-white'/>
                              </div>
                </div>
                {/* Form Section */}
                <form className='space-y-4' >
      <div className='grid sm:grid-cols-2 gap-4'>
        <input name='firstname' type="text" placeholder='First Name' className='bg-black/70 rounded-xl border border-purple-200 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500' />
        <input name='secondname' type="text" placeholder='Last Name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-200' />
        <input name='phone' type="tel" placeholder='Phone Number' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-200' />
        <input name='email' type="email" placeholder='Email Address' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-200' />
      </div>
      <textarea className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full border border-purple-200' placeholder='Your Message' />
      <button className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-900 hover:to-blue-900 text-white px-6 py-2 w-full font-semibold text-lg md:text-xl rounded-xl'>Send Message</button>
    </form>
            </div>
        </div>
  )
}
