import { VscRobot } from 'react-icons/vsc';
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Link from 'next/link';

const product=[
    {title:'Features',path:'#features'},
    {title:'Pricing',path:'#pricing'},
    {title:'Documentation',path:'#'},
    {title:'API',path:'#'},
]

const company =[
    {title:'About',path:'#'},
    {title:'Blog',path:'#'},
    {title:'Careers',path:'#'},
    {title:'Contact',path:'#contact'}
]

const legal =[
    {title:'Privacy',path:'#'},
    {title:'Terms',path:'#'},
    {title:'Security',path:'#'},
    {title:'Compliance',path:'#'}
]

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10 pb-6">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-8">
        <div className="lg:col-span-2 space-y-3">
           <div className='flex  flex-wrap gap-4'>
           <VscRobot size={30} className=' text-purple-500 font-bold text-3xl'/>
           <h3 className="text-2xl font-bold mb-5">Agentia World</h3>
           </div>
          <p className="text-base text-gray-600">Next-generation AI agents powering
            <br />
            the future of enterprise intelligence.
          </p>
          <div className='flex justify-start gap-5 text-3xl font-bold'>
            <FiGithub className=' text-gray-600 cursor-pointer hover:text-white'/>
            <FaLinkedin className=' text-gray-600 cursor-pointer hover:text-white'/>
            <IoLogoTwitter className=' text-gray-600 cursor-pointer hover:text-white'/>
          </div>
        </div>
        <div>
          <h3 className="text-base  font-bold mb-5">Products</h3>
          <ul className="space-y-3">
            {product.map((item)=>(
                <li><Link href={item.path} className="text-base text-gray-400 hover:text-white">
                    {item.title}
                    </Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base  font-bold mb-5">Company</h3>
          <ul className="space-y-3">
            {company.map((item)=>(
                <li><Link href="#" className="text-base text-gray-400 hover:text-white">{item.title}</Link></li>
            ))}        
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold mb-5">Legal</h3>
          <ul className="space-y-3">
           {legal.map((item)=>(
            <li><Link href="#" className="text-base text-gray-400 hover:text-white">{item.title}</Link></li>
           ))}
          </ul>
        </div>
      </div>
      <hr className="mt-12 mb-6" />
      <div className="text-base text-center text-gray-600">
         © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </div>
  </footer>
  )
}
