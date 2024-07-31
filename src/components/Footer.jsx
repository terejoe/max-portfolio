import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="mx-auto mt-4 text-center ">
      <ul className="flex md:hidden gap-4 justify-center">
        <li className="mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full">
          <a href="https://x.com/kellslte">
            <FaXTwitter size={20} className="fill-white" />
          </a>
        </li>

        <li className="mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full">
          <a href="https://linkedin.com/in/max-otifavour">
            <FaLinkedinIn size={20} className="fill-white" />
          </a>
        </li>

        <li className="mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full">
          <a href="https://github.com/kellslte">
            <RiGithubLine size={22} className="fill-white" />
          </a>
        </li>
      </ul>

      <p className="leading-6 text-sm md:text-base text-[#ADB5BD] mt-4 pb-6">
        Designed by <span className="text-white">Prince Chijoke</span>
      </p>
    </div>
  );
}
