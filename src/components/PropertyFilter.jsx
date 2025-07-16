import React from "react";

const PropertyFilter = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 flex-wrap p-4">
      <input
        type="number"
        placeholder="Min Budget"
        className="border p-2"
        value={filters.min}
        onChange={(e) => setFilters({ ...filters, min: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Budget"
        className="border p-2"
        value={filters.max}
        onChange={(e) => setFilters({ ...filters, max: e.target.value })}
      />
    </div>
  );
};

export default PropertyFilter;
