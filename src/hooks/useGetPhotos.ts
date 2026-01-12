import { useCallback, useMemo } from 'react';

import { useGetPhotosQuery } from './queryHooks/useGetPhotosQuery';

export const useGetPhotos = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isFetchingNextPage,
    isFetchNextPageError,
  } = useGetPhotosQuery();

  const listPhotos = useMemo(
    () => data?.pages.flatMap(page => page) ?? null,
    [data],
  );

  const isErrorOnInitialLoad = !listPhotos && isError;
  const isInitialLoad = isFetching && !listPhotos;

  const handleFetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage({ cancelRefetch: false });
    } else if (isErrorOnInitialLoad) {
      fetchNextPage({ cancelRefetch: false });
    }
  }, [hasNextPage, isErrorOnInitialLoad, isFetchingNextPage]);

  return {
    data: listPhotos,
    fetchNextPage: handleFetchNextPage,
    hasNextPage,
    isError,
    isErrorOnInitialLoad,
    isFetching,
    isFetchingNextPage,
    isFetchNextPageError,
    isInitialLoad,
  };
};
