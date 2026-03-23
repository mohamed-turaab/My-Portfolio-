import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <Layout>
      <AboutPage />
      <ServicesPage />
      <TestimonialPage />
      <ContactPage />
    </Layout>
  );
}

export default App;
