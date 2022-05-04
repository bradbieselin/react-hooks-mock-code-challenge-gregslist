import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleSelectedListing, selectedListing, updateListings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} selectedListing={selectedListing} handleSelectedListing={handleSelectedListing} updateListings={updateListings} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
