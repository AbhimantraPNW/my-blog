import { Asset } from "@/types/contentfulTypes";

export const findAsset = (id: string, assets: Asset[]) => {
  return assets.find((asset: any) => asset.sys.id === id);
};
