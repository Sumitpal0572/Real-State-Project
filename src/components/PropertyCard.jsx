import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((p) => p.id === property.id);

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={property.thumbnail}
        alt={property.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="font-bold text-lg mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.brand}</p>
      <p className="text-blue-600 font-bold">₹{property.price}</p>
      <div className="flex justify-between mt-2">
        <Link
          to={`/property/${property.id}`}
          className="text-white bg-blue-500 px-3 py-1 rounded"
        >
          View Details
        </Link>
        <button onClick={() => dispatch(toggleFavorite(property))}>
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
