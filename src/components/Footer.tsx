import Link from "next/link"
const Footer = () => {
  return (
    <div className="h-[150px] flex sm:flex-row flex-col sm:justify-between items-end md:mx-20 mx-10 my-10 gap-4">
      <div>
        <h1 className="text-[#1529AF] text-xl font-semibold mr-12">Muneeb Ahmed - 2024</h1>
      </div>
      <ul className="flex gap-10 font-semibold mr-7 lg:mr-0">
        <li>
            <Link href="">LinkedIn</Link>
        </li>
        <li>
            <Link href="">Github</Link>
        </li>
        <li>
            <Link href="">Twitter</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Footer