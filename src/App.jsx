import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/blog-post",
      element: <BlogPost/>
    },
    
  ]);
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
