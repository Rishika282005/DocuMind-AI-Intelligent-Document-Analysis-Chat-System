import {
  FaFileUpload,
  FaSearch,
  FaComments,
  FaChartBar
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">

      <h2 className="text-3xl font-bold mb-10">

        DocuMind AI

      </h2>

      <nav className="space-y-5">

        <button className="flex items-center gap-3 hover:text-blue-400">
          <FaFileUpload />
          Upload
        </button>

        <button className="flex items-center gap-3 hover:text-blue-400">
          <FaSearch />
          Search
        </button>

        <button className="flex items-center gap-3 hover:text-blue-400">
          <FaComments />
          Chat
        </button>

        <button className="flex items-center gap-3 hover:text-blue-400">
          <FaChartBar />
          Metrics
        </button>

      </nav>

    </aside>

  );

}