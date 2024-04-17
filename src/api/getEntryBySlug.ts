
import { ContentfulResponse } from "@/types/contentfulTypes";
import { appConfig } from "@/utils/config";

const { accessToken, baseUrl, environtmentId, spaceId } = appConfig;

export const getEntryBySlug = async (
  slug: string,
): Promise<ContentfulResponse> => {
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=pateraBlog&fields.slug=${slug}`,
    {
      next: { revalidate: 10 },
    },
  );

  return res.json();
};
  