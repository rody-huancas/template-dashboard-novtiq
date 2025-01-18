import { MdSearch, MdGridView, MdHelpOutline, MdDelete } from "react-icons/md";

export const InboxHeader = () => {
  return (
    <div className="h-16 border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="w-96">
        <div className="relative">
          <MdSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
          <MdGridView className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
          <MdHelpOutline className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
          <MdDelete className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
