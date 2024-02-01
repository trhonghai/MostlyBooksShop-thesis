import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className=" flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-1 align-center">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
