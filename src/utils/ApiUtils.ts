interface IFetchApi {
  url: string;
}

export const fetchApi = async ({ url }: IFetchApi) => {
  try {
    const response = await fetch(url);

    console.log(response, '<res');

    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
