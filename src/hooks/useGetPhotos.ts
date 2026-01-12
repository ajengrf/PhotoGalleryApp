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

  return {
    data: listPhotos,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isFetchingNextPage,
    isFetchNextPageError,
  };
};
