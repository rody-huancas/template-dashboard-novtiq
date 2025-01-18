import { cn } from "@/utils/general.util";
import { Email } from "./types";
import { MdStar, MdStarBorder } from "react-icons/md";

interface Props {
  emails: Email[];
  onStarEmail: (id: number) => void;
}

export const inboxCategories = [
  { name: "Destacado", color: "bg-emerald-100 text-emerald-700" },
  { name: "Social", color: "bg-blue-100 text-blue-700" },
  { name: "Trabajo", color: "bg-orange-100 text-orange-700" },
  { name: "Amigos", color: "bg-pink-100 text-pink-700" },
];

export const InboxEmailList = ({ emails, onStarEmail }: Props) => {
  if (emails.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No hay mensajes de correo electrónico para mostrar en esta carpeta
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 bg-white rounded-lg shadow">
      {emails.map((email) => (
        <div
          key={email.id}
          className="flex items-center px-4 py-4 hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex items-center gap-4 flex-1">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded"
            />
            <button
              onClick={() => onStarEmail(email.id)}
              className={cn(
                "text-gray-400 hover:text-yellow-400",
                email.starred && "text-yellow-400"
              )}
            >
              { email.starred ? ( <MdStar className="w-5 h-5" /> ) : ( <MdStarBorder className="w-5 h-5" /> )}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-900 truncate">
                  {email.sender}
                </p>
                <span
                  className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    inboxCategories.find((c) => c.name === email.category)?.color
                  )}
                >
                  {email.category}
                </span>
              </div>
              <p className="text-gray-500 truncate">{email.subject}</p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {email.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
