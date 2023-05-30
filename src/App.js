import HeroPage from "./pages/HeroPage/HeroPage";
import FeaturesPage from "./pages/FeaturesPage";
import OperationsPage from "./pages/OperationsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import SignUpPage from "./pages/SignUpPage";
import FooterPage from "./pages/FooterPage";

function App() {
  return (
    <div>
      <div className="header w-full">
        <HeroPage />
      </div>

      <div className="features w-full ">
        <hr />
        <FeaturesPage />
      </div>
      <div className="operations w-full ">
        <hr />
        <OperationsPage />
      </div>
      <div className="testimonial w-full">
        <hr />
        <TestimonialsPage />
      </div>
      <div className="signup w-full">
        <hr />
        <SignUpPage />
      </div>
      <div className="footer w-full">
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
