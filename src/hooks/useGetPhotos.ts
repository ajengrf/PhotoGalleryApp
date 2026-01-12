import { useCallback } from 'react';
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

  console.log('data', data);
  console.log({
    isFetching,
    isFetchingNextPage,
  });

  const listPhotos = data?.pages.flatMap(page => page) ?? null;

  console.log(listPhotos, '<listPhotos');
  console.log({ isError, isFetchNextPageError });

  const isErrorOnInitialLoad = !data && isError;
  const isInitialLoad = isFetching && !data;
  console.log('isErrorOnInitialLoad', isErrorOnInitialLoad);
  console.log('isInitialLoad', isInitialLoad);
  console.log('isError', isError);

  const handleFetchNextPage = useCallback(() => {
    console.log('handleFetchNextPage', {
      hasNextPage,
      isFetchNextPageError,
      isFetchingNextPage,
      isErrorOnInitialLoad,
      isInitialLoad,
    });
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
