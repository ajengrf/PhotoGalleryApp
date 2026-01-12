import { useInfiniteQuery } from '@tanstack/react-query';

import { GET_PHOTOS_URL } from '../../constants/apiUrls';
import { GET_PHOTOS_QUERY_KEY } from '../../constants/queryKeys';
import { Photo } from '../../types/photo';

import { fetchApi } from '../../utils/ApiUtils';

interface IFetchPhotos {
  pageParam: number;
  limit?: number;
}

export const useGetPhotosQuery = () => {
  return useInfiniteQuery({
    queryKey: [GET_PHOTOS_QUERY_KEY],
    queryFn: fetchPhotos,
    initialPageParam: 1,
    getNextPageParam: getNextPageParam,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

const fetchPhotos = async ({
  pageParam = 1,
  limit = 20,
}: IFetchPhotos): Promise<Photo[]> => {
  const key = `${GET_PHOTOS_URL}?page=${pageParam}&limit=${limit}`;
  const response = await fetchApi({ url: key });

  return response;
};

const getNextPageParam = (
  lastPage: Photo[],
  allPages: Photo[][],
  lastPageParam: number,
) => {
  if (lastPage.length === 0) {
    return undefined;
  }

  return lastPageParam + 1;
};
