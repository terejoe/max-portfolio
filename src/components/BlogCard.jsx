import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function BlogCard({ blogId, title, text }) {
  return (
    <div className="border-[#97A1AB] border-2 justify-center items-center w-[350px] shrink-0 mt-6">
      <div className="p-6">
        {/* <img src={potrait} alt='Potrait' className='h-96 w-68'/> */}
        <p className="monument-extended text-lg text-left text-white mb-1">
          {title}
        </p>
        <p className="leading-6 text-sm md:text-base text-[#ADB5BD] line-clamp-3">
          {text}
        </p>
      </div>

      <Link to={`/blog-post/${blogId}`}>
        <button className="text-blue-600 font-bold px-6 py-3 flex items-center uppercase text-sm border-none mb-4">
          Read More
          <RiArrowRightUpFill className="ml-3" size={18} />
        </button>
      </Link>
    </div>
  );
}
