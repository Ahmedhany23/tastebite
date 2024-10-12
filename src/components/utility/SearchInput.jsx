import { useEffect } from "react";

export default function SearchInput({ searchQuery, setSearchQuery, count }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the query based on user input
  };

  // Initialize the search query from localStorage on component mount
  useEffect(() => {
    const storedQuery = window.localStorage.getItem('state');
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }
  }, [setSearchQuery]);

  // Update localStorage whenever searchQuery changes
  useEffect(() => {
    window.localStorage.setItem('state', searchQuery);
  }, [searchQuery]);

  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange} 
        className="border-b-2 border-b-black w-full outline-none pb-1 text-lg"
      />
      {count && <p className="absolute top-0 right-10">({count} Recipes)</p>}
    </div>
  );
}
