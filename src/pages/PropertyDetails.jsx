import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProperties } from "../services/api";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProperties().then((data) => {
      const found = data.find((p) => p.id === parseInt(id));
      setProperty(found);
    });
  }, [id]);

  if (!property) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <Carousel showThumbs={false} className="rounded overflow-hidden">
        <div>
          <img src={property.thumbnail} alt={property.title} />
        </div>
        <div>
          <img src="https://source.unsplash.com/600x400/?home" alt="alt1" />
        </div>
        <div>
          <img src="https://source.unsplash.com/600x400/?interior" alt="alt2" />
        </div>
      </Carousel>

      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-500 font-bold text-lg mt-2">₹{property.price}</p>
      <p className="mt-2">{property.description}</p>
      <p className="mt-1 text-sm">
        Area: {property.area} | BHK: {property.bhk}
      </p>
      <p className="mt-1 text-sm">Type: {property.type}</p>
      <p className="mt-1 text-sm">Amenities: {property.amenities.join(", ")}</p>

      <MapContainer
        center={[12.97, 77.59]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-64 w-full mt-6 rounded"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[12.97, 77.59]} />
      </MapContainer>

      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => setShowForm(true)}
      >
        Enquire Now
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-lg font-bold mb-2">Enquiry Form</h2>
            <input className="border p-2 w-full mb-2" placeholder="Your Name" />
            <input className="border p-2 w-full mb-2" placeholder="Email" />
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Message"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button
              className="text-red-500 ml-4"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
