import { useQuery } from "@apollo/client";
import BlogCard from "./BlogCard";
import { GET_ARTICLES } from "../graphql/queries";


export default function BlogList() {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { pageSize: 5, page: 1 }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  
  return (
    <div className="flex md:ml-32 ml-2 flex-row overflow-x-auto swiper pb-2 gap-4">
      {data.user.posts.nodes.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} text={blog.content.text} blogId={blog.id}/>
      ))}
           
    </div>
  );
}
