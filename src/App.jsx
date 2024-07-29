import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LandingPage/>
  //   },
  //   {
  //     path: "/blog-post",
  //     element: <BlogPost/>
  //   },
    
  // ]);
  
  return (
    
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </>
    
  )
}

export default App
