import {
  useState,
  createContext,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

const SearchContext = createContext(
  {} as {
    state: string;
    dispatch: Dispatch<SetStateAction<string>>;
  }
);
export function useSearchContext() {
  return useContext(SearchContext);
}

export default function SearchContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider
      value={{ state: searchValue, dispatch: setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  );
}
