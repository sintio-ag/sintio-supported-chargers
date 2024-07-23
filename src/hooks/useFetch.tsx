/**
 * Custom hook for performing a fetch request.
 *
 * This hook simplifies the process of fetching data from a given URL and managing
 * the loading state and errors. It uses the native fetch API to perform the request.
 *
 * @template T The type of data expected to be returned by the fetch request.
 * @param {string} url The URL to fetch data from.
 * @returns {Object} An object containing the following properties:
 *  - data: The data fetched from the provided URL. It's of type `T` or `null` if no data has been fetched.
 *  - isLoading: A boolean indicating whether the request is currently loading.
 *  - error: A string containing an error message if an error occurred during the fetch operation, or `null` if no error occurred.
 */

import { useState, useEffect } from "react";

const useFetch = <T,>(
  url: string,
): { data: T | null; isLoading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`${response.status} Data could not be fetched.`);
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
