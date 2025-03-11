import { motion } from "framer-motion";
import './index.css';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10">
        <motion.h1 
          className="text-4xl font-bold text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join the Movement for a Greener New York
        </motion.h1>
        <p className="text-lg text-gray-700 mt-4">
          Educating and empowering communities to combat climate change.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
          Get Involved
        </button>
      </section>

      {/* Climate Change Info Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-green-700 text-center">Why Climate Action Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Rising Temperatures</h3>
            <p className="text-gray-600">New York is experiencing record-breaking heat waves and extreme weather.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Sea Level Rise</h3>
            <p className="text-gray-600">Coastal areas, including NYC, are at risk due to rising sea levels.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Take Action</h3>
            <p className="text-gray-600">Join local initiatives to make a difference in your community.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-4 mt-10">
        <p>&copy; 2025 Climate NY | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;