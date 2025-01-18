export interface Email {
  id      : number;
  sender  : string;
  subject : string;
  category: "Primary" | "Work" | "Friends" | "Social";
  time    : string;
  starred : boolean;
  type    : "inbox" | "sent" | "draft" | "spam" | "important" | "bin";
}

export interface Category {
  name : string;
  color: string;
}
