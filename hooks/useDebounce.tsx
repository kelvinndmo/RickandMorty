import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const useDebouncedSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [text, setInputText] = useState("");

  const updateSearchText = useCallback(
    debounce((value) => setSearchText(value), 300),
    []
  );

  const onSearch = useCallback(
    (value: string | number) => updateSearchText(value),
    [updateSearchText]
  );

  useEffect(() => {
    onSearch(text);
  }, [onSearch, text]);

  return {
    searchText,
    text,
    setInputText,
  };
};

export default useDebouncedSearch;
