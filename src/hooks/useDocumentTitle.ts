import { useRef, useEffect } from 'react';

type UseDocumentTitleOptions = {
  preserveTitleOnUnmount?: boolean;
};

const useDocumentTitle = (title: string, { preserveTitleOnUnmount = true }: UseDocumentTitleOptions = {}): void => {
  const defaultTitle = useRef<string | null>(null);

  useEffect(() => {
    defaultTitle.current = document.title;

    document.title = title;

    return () => {
      if (!preserveTitleOnUnmount && defaultTitle.current) {
        document.title = defaultTitle.current;
      }
    };
  }, [title, preserveTitleOnUnmount]);
}

export default useDocumentTitle;