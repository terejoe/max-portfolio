import Navbar from "./Navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeftLong, FaCirclePlay, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_ARTICLE } from "../graphql/queries";
import parse from 'html-react-parser';
import "./BlogPost.css"
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
import Contact from "./Contact";

export default function BlogPost() {
  const { blogId } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_ARTICLE, {
    variables: { id: `${blogId}` },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  // console.log("html", data.post.content.html)
  // console.log(blogId)

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${data.post.title}&url=${data.post.url}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${data.post.url}`;
 

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#191932]">
        <div className="pt-28 md:px-40 px-6">
          <div className="md:flex justify-between">
            <Link to="/">
              <button className="text-[#1469FF] border px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm">
                <FaArrowLeftLong className="mr-4 mt-0.5 inline" size={18} />
                Back Home
              </button>
            </Link>

            <div className="flex md:gap-10 gap-4 my-4 px-1">
              <div className="flex">
                <p className="text-white mr-3 text-sm">Listen:</p>
                <FaCirclePlay size={20} className="fill-[#1469FF] cursor-pointer" />
                <p className="text-[#1469FF] ml-2 text-sm">{`${data.post.readTimeInMinutes}.00`}</p>
              </div>
              <div className="flex">
                <p className="text-white text-sm mr-3">Share this post:</p>
                <ul className="flex">
                  <li className="mr-3 bg-blue-600 w-[23px] h-[23px] items-center justify-center flex rounded-full">
                    <a href={linkedInShareUrl}>
                      <FaLinkedinIn size={13} className="fill-white" />
                    </a>
                  </li>

                  <li className="bg-blue-600 w-[23px] h-[23px] items-center justify-center flex rounded-full">
                    <a href={twitterShareUrl}>
                      <FaXTwitter size={13} className="fill-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <img src={data.post.coverImage.url} alt='Blog Image' className='h-96 w-full'/>

            <div className="text-[#ffffff] blog-post pb-10"> 
              {parse(data.post.content.html)}
            </div>

          </div>

        </div>

        <Contact/>

        <div className="w-full bg-[#191932]">
          <div className="mx-auto flex flex-col pt-10 pb-10 justify-center w-full h-full px-2">
            <div className="md:pl-32 pl-4">
              <p className="md:text-8xl text-4xl text-[#51516A] monument-extended mb-2">
                My other articles
              </p>
            </div>

            <BlogList/>
          </div>
        </div>

        <Footer/>

      </div>
    </>
  );
}
