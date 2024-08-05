import { useEffect, useRef, useState } from 'react'
import { GET_ARTICLES } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

export default function BlogModal({isOpen, isClose}) {
  if(!isOpen) return <></>;

  const [searchBlog, setSearchBlog] = useState('');
  const modalRef = useRef(null)

  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { pageSize: 5, page: 1 }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const filteredBlogs = data.user.posts.nodes.filter(post =>
    post.title.toLowerCase().includes(searchBlog.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) =>{
      if(modalRef.current && !modalRef.current.contains(event.target)){
        isClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isClose])
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div ref={modalRef} className='bg-[#191932] fixed w-[350px] md:w-[550px] border-gray-600 border-2 rounded-md h-[250px] overflow-y-auto swiper'>
        <div className='justify-center items-center'>
          <div className='p-4'>
            
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchBlog}
                onChange={(e) => setSearchBlog(e.target.value)}
                placeholder="Search..."
                className="w-full px-10 py-2 mb-4 rounded-lg text-left h-12 focus:outline-none bg-inherit text-gray-400"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.5-1.5l4.35 4.35z"></path>
                </svg>
              </div>
            </div>

            {/* Blog Items */}

            <ul className='overflow-y-auto'>
              {filteredBlogs.map((blog) => (
                  
                <li key={blog.slug} className='monument-extended text-lg text-white truncate border-b border-gray-400 py-1 mb-1'><Link to = {`/blog-post/${blog.id}`}>{blog.title}</Link></li>
                  
              ))}
            </ul>

          </div>
          
          
        </div>
      </div>

    </div>
  )
}
