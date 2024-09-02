import { useState, useEffect, useCallback } from 'react';

// Define a generic type for the fetch function
type FetchFunction<T> = (params: any) => Promise<T>;

// Define the hook
function useFetchData<T>(fetchFunction: FetchFunction<T>, params: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchFunction(params);
      setData(result);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetchData;
