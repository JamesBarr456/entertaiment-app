"use client";
import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T>(
  url: string,
  options?: RequestInit,
): UseFetchResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Asegúrate de que la respuesta sea un array
        const result: T[] = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error"));
        setData([]); // Asegúrate de que se devuelva un array vacío en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
