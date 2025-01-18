import { useState } from "react";
/* Components */
import { Email } from "@/components/modules/inbox/types";
import { InboxHeader } from "@/components/modules/inbox/InboxHeader";
import { InboxSidebar } from "@/components/modules/inbox/inboxSidebar";
import { InboxEmailList } from "@/components/modules/inbox/InboxEmailList";
/* Data */
import { inboxData } from "@/data/inboxData";

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState("inbox");
  const [emails, setEmails] = useState<Email[]>(inboxData);

  const handleStarEmail = (id: number) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  const getFilteredEmails = () => {
    const filters: Record<string, (email: Email) => boolean> = {
      inbox    : (email) => email.type === "inbox",
      starred  : (email) => email.starred,
      sent     : (email) => email.type === "sent",
      draft    : (email) => email.type === "draft",
      spam     : (email) => email.type === "spam",
      important: (email) => email.type === "important",
      bin      : (email) => email.type === "bin",
    };

    return filters[activeTab] ? emails.filter(filters[activeTab]) : emails;
  };

  return (
    <div className="bg-gray-50 flex overflow-y-scroll custom-scrollbar">
      <InboxSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1">
        <InboxHeader />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <InboxEmailList
            emails={getFilteredEmails()}
            onStarEmail={handleStarEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
