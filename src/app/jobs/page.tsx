"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
export default function JobsPage() {
  return (
    <>
      <Navbar />

      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <motion.h1
          className="text-4xl font-bold text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Coming Soon...
        </motion.h1>
      </section>
      <>
        <Footer />
      </>
    </>
  );
}
