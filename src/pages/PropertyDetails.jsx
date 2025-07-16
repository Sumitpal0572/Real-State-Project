import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProperties } from "../services/api";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchProperties().then((data) => {
      const found = data.find((p) => p.id === parseInt(id));
      setProperty(found);
    });
  }, [id]);

  if (!property) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <img
        src={property.thumbnail}
        alt={property.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.description}</p>
      <p className="text-blue-500 font-bold text-lg mt-2">₹{property.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
        Enquire Now
      </button>
    </div>
  );
};

export default PropertyDetails;
