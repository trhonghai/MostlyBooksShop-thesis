import { Children } from "react";

import Sidebar from "~/components/Admin/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="">
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}

export default AdminLayout;
