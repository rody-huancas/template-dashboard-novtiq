import { InboxSidebarTab } from "./InboxSidebarTab";
import { inboxCategories } from "./InboxEmailList";
import { InboxCategoryLevel } from "./InboxCategoryLevel";
import { MdAdd, MdInbox, MdStar, MdSend, MdEditDocument, MdWarning, MdBookmark, MdDelete } from "react-icons/md";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const InboxSidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const tabs = [
    { id: "inbox", icon: MdInbox, label: "Inbox", count: 1253 },
    { id: "starred", icon: MdStar, label: "Favoritos", count: 245 },
    { id: "sent", icon: MdSend, label: "Enviados", count: 24532 },
    { id: "draft", icon: MdEditDocument, label: "Borrador", count: 9 },
    { id: "spam", icon: MdWarning, label: "Spam", count: 14 },
    { id: "important", icon: MdBookmark, label: "Importante", count: 18 },
    { id: "bin", icon: MdDelete, label: "Papelera", count: 9 },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 mb-6">
        <MdAdd size={20} />
        <span>Redactar</span>
      </button>

      <div className="space-y-1">
        {tabs.map((tab) => (
          <InboxSidebarTab
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            count={tab.count}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="px-3 text-sm font-medium text-gray-500 mb-2">Labels</h3>
        <div className="space-y-1">
          {inboxCategories.map((category) => (
            <InboxCategoryLevel key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};
