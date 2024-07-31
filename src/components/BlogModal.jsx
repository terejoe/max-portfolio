import { useEffect, useRef } from 'react'
import { GET_ARTICLES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function BlogModal({isOpen, isClose}) {
  if(!isOpen) return <></>;

  const modalRef = useRef(null)

  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { pageSize: 5, page: 1 }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;


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
      <div ref={modalRef} className='bg-[#191932] fixed w-[350px] md:w-[550px] border-gray-600 border-2 rounded-md'>
        <div className='justify-center items-center'>
          <div className='p-4'>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
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
              {data.user.posts.nodes.map((blog,i) => (
                  <li key={i} className='monument-extended text-lg text-white truncate border-b border-gray-400 py-1 mb-1'>{blog.title}</li>
              ))}
            </ul>

          </div>
          
          
        </div>
      </div>

    </div>
  )
}
