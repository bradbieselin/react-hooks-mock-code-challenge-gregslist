import React, { useState } from "react";

function ListingCard({ listing, handleSelectedListing, selectedListing, updateListings }) {

  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick(e) {
    setIsFavorite(!isFavorite);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${selectedListing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listing)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
    })
    .then(res => res.json())
    .then(updateListings())
  }

  function handleSelect() {
    handleSelectedListing(listing);
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => { 
          handleDelete(); 
          handleSelect();
          } }>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
