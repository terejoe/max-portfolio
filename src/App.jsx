import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./hooks/ScrollToTop";
import LoadingPage from "./components/LoadingPage";


const LandingPage = React.lazy(() => import("./pages/LandingPage")); 
const BlogPost = React.lazy(() => import("./pages/BlogPost"));

function App() {

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog-post/:blogId" element={<BlogPost />} />
        </Routes>
      </Suspense>

    </>
  );
}

export default App;
