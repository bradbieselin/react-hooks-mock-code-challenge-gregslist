import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState({});
  const [search, setSearch] = useState("");
  const [selectedListingId, setSelectedListingId] = useState(null);
  const [filteredListings, setFilteredListings] = useState([...listings]);

  //Fetch our data and save into listings state variable
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleSelectedListing(listing) {
    setSelectedListing(listing);
    setSelectedListingId(listing.id);
  }

  function updateListings() {
    const update = listings.filter(listing => listing.id !== selectedListingId)
    setListings(update);
  }

  function onSearchChange(text) {
    setSearch(text)
  }

  function onSearchSubmit() {
    let filtered = [...listings].filter((listing) => listing.description.includes(search))
    setListings(filtered);
  }

  

  return (
    <div className="app">
      <Header search={search} onSearchChange={onSearchChange} onSearchSubmit={onSearchSubmit} />
      <ListingsContainer listings={listings} selectedListing={selectedListing} handleSelectedListing={handleSelectedListing} updateListings={updateListings} onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
