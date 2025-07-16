import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "../components/PropertyCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Favorite Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
