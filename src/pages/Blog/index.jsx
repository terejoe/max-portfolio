import { useState } from "react";
import BlogModal from "../../components/BlogModal";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";


export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="blog" className="w-full bg-[#191932]">
      <div className="mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2">
        <div className="md:pl-32 pl-4">
          <p className="md:text-8xl text-4xl text-[#51516A] monument-extended mb-2">
            My Blog
          </p>
        </div>

        <BlogList/>

        <div className="mt-8 md:mx-32 mx-4">
          <button
            onClick={openModal}
            className="text-[#1469FF] border-2 px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm"
          >
            View All Blogs
          </button>
        </div>

        <BlogModal isClose={closeModal} isOpen={isModalOpen} />

        <Footer/>

      </div>
    </div>
  );
}
