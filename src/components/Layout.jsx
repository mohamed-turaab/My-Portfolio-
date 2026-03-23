import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_16%),linear-gradient(180deg,#19191c_0%,#0f1012_38%,#070709_100%)]">
      <Header />
      <main className="pb-16 pt-6 md:pt-10">
        <div className="space-y-6 md:space-y-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
