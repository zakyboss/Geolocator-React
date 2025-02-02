import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function App() {
  const { position, error, isLoading, countClicks } = useGeolocation();

  const { lat, lng } = position;

  return (
    <div>
      <button onClick={useGeolocation} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
