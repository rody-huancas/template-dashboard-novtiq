import { useEffect } from "react";

interface Props {
  key     : string;
  modifier: "ctrl" | "meta";
  action  : () => void;
}

const useKeyboardShortcut = ({ key, modifier, action }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isModifierKey = isMac ? e.metaKey : e.ctrlKey;

      if (isModifierKey && e.key === key) {
        e.preventDefault();
        e.stopPropagation();
        action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, modifier, action]);
};

export default useKeyboardShortcut;
