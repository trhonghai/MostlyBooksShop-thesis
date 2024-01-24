import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className=" flex flex-col min-h-screen bg-gray-200">
      <Header />
      <div className="flex-1 align-center m-6 ">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
