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
      <select
        className="border p-2"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Flat">Flat</option>
        <option value="Plot">Plot</option>
      </select>
      <select
        className="border p-2"
        value={filters.bhk}
        onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
      >
        <option value="">All BHKs</option>
        <option value="1BHK">1BHK</option>
        <option value="2BHK">2BHK</option>
        <option value="3BHK">3BHK</option>
        <option value="4BHK">4BHK</option>
      </select>
    </div>
  );
};

export default PropertyFilter;
