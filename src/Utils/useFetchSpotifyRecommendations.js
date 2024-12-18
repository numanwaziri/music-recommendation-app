import { useState, useEffect } from "react";
import { getRecommendations } from "../API_Config/spotifyApiClient.js";
import useSessionStorageState from "./useSessionStorageState.js";

// Custom hook to fetch Spotify recommendations
export const useFetchSpotifyRecommendations = (searchParams, shouldFetch) => {
  const [tracks, setTracks] = useSessionStorageState("trackData", []); // Holds the fetched track data
  const [loading, setLoading] = useSessionStorageState("loading", false); // Indicates loading state
  const [error, setError] = useSessionStorageState("error", null); // Holds error messages, if any

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      setError(null);

      try {
        const recommendations = await getRecommendations(searchParams); // Fetch data from API
        setTracks(recommendations);
      } catch (err) {
        setError("Failed to fetch tracks. Please try again.", err);
      } finally {
        setLoading(false); // Always set loading to false after fetching
      }
    };

    if (shouldFetch) {
      fetchTracks(); // Trigger fetch when shouldFetch is true
    }
  }, [shouldFetch]);

  return { tracks, loading, error, setTracks, setError }; // Return track data, loading state, and error state
};
