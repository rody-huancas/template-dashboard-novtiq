import { HTMLAttributes } from "react";
import { cn } from "@/utils/general.util";

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (args: Props) => {
  const { currentPage, totalPages, onPageChange, className, ...props } = args;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center flex-wrap gap-2 sm:gap-3",
        className
      )}
      {...props}
    >
      <button
        className="px-3 py-1 border rounded disabled:opacity-50 text-sm sm:text-base"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={cn(
              "px-3 py-1 border rounded text-sm sm:text-base",
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-gray-100"
            )}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="px-3 py-1 border rounded disabled:opacity-50 text-sm sm:text-base"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Sig
      </button>
    </div>
  );
};

export default Pagination;
