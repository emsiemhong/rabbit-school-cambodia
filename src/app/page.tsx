"use client";

import Footer from "@/components/ui/footer";
// import GetInvolved from "@/lib/git-involved/page";
import DonatePage from "@/lib/Donate/page";
import Navbar from "@/components/ui/navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* Main Page Content */}
      {/* <GetInvolved /> */}

      <DonatePage />
      <Footer />
    </>
  );
}

export default App;
