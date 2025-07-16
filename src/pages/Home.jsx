import React, { useEffect, useState } from "react";
import { fetchProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import PropertyFilter from "../components/PropertyFilter";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ min: "", max: "" });

  useEffect(() => {
    fetchProperties().then(setProperties);
  }, []);

  const filtered = properties.filter((p) => {
    return (
      (!filters.min || p.price >= filters.min) &&
      (!filters.max || p.price <= filters.max)
    );
  });

  return (
    <div>
      <PropertyFilter filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
