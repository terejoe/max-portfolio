import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  
  return (
    
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog-post/:blogId" element={<BlogPost />} />
      </Routes>
    </>
    
  )
}

export default App
