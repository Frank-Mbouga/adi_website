import SideBar from "@/components/SideBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex gap-8">
      <SideBar />
      <section>{children}</section>
    </section>
  );
};

export default DashboardLayout;
