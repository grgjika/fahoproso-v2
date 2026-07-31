"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

type AddressResult = {
  x: number;
  y: number;
  label: string;
};

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false }
);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PropertyLocation({ value, onChange }: Props) {
  const [position, setPosition] = useState<[number, number]>([
    42.9634, -85.6681,
  ]);

  const [results, setResults] = useState<AddressResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function locateAddress() {
    if (!value.trim()) {
      setError("Please enter a property address.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const { OpenStreetMapProvider } = await import(
        "leaflet-geosearch"
      );

      const provider = new OpenStreetMapProvider();

      const searchResults = await provider.search({
        query: value,
      });

      if (searchResults.length === 0) {
        setError(
          "Address not found. Try including the city, state, and ZIP code."
        );
        return;
      }

      const formattedResults: AddressResult[] = searchResults
        .slice(0, 5)
        .map((result) => ({
          x: result.x,
          y: result.y,
          label: result.label,
        }));

      setResults(formattedResults);
    } catch (error) {
      console.error("Address search error:", error);
      setError("Unable to locate the address. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function selectAddress(result: AddressResult) {
    setPosition([result.y, result.x]);
    onChange(result.label);
    setResults([]);
    setError("");
  }

  function handleAddressChange(newValue: string) {
    onChange(newValue);
    setResults([]);
    setError("");
  }

  return (
    <div className="space-y-3">
      <input
        id="propertyAddress"
        name="propertyAddress"
        type="text"
        value={value}
        onChange={(event) =>
          handleAddressChange(event.target.value)
        }
        placeholder="123 Main Street, Grand Rapids, MI 49503"
        autoComplete="street-address"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="button"
        onClick={locateAddress}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {loading ? "Searching..." : "Find Address"}
      </button>

      {error && (
        <p className="text-sm text-red-600" aria-live="polite">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="overflow-hidden rounded-lg border border-slate-300 bg-white">
          <p className="border-b border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Select the correct address:
          </p>

          <div className="divide-y divide-slate-200">
            {results.map((result, index) => (
              <button
                key={`${result.x}-${result.y}-${index}`}
                type="button"
                onClick={() => selectAddress(result)}
                className="block w-full px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {result.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-0 overflow-hidden rounded-xl border border-slate-300 bg-white h-64">
        <MapContainer
          key={`${position[0]}-${position[1]}`}
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} />
        </MapContainer>
      </div>
    </div>
  );
}