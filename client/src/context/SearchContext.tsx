import { createContext, useState, ReactNode, FC } from "react";

interface SearchData {
  [key: string]: string;
}

interface SearchContextProps {
  searchData: SearchData | null;
  setSearchData: (data: SearchData | null) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchData, setSearchData] = useState<SearchData | null>(null);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
