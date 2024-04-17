"use client";

import { getEntryBySlug } from "@/api/getEntryBySlug";
import { Badge } from "@/components/ui/badge";
import { findAsset } from "@/utils/findAsset";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { format } from "date-fns";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntryBySlug(params.slug);

  if (!blog.items.length) {
    notFound();
  }

  const assetId = blog.items[0].fields.thumbnail.sys.id;
  const assets = blog.includes.Asset;
  const image = findAsset(assetId, assets);

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="my-2 font-semibold text-2xl md:text-xl">{children}</h2>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        return (
          <h6 className="mb-2 mt-2 text-gray-500 md:mb-2 md:ml-7 md:mt-2 md:text-sm">
            {children}
          </h6>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <React.Fragment>
            <p className="text-lg font-light">{children}</p>
            <br /> {/* Add a <br /> element after each paragraph */}
          </React.Fragment>
        );
      },
      [BLOCKS.HR]: (text) => (
        <hr className="mb-4 border-black md:mb-4 md:ml-7 md:w-[36%]" />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const assetId = node.data.target.sys.id;
        const assets = blog.includes.Asset;
        const asset = assets.find((item) => item.sys.id === assetId);

        if (!asset) {
          return null;
        }

        const url = `https:${asset.fields.file.url}`;
        const title = asset.fields.title;

        return (
          <div className="md:ml-7 md:h-[500px]">
            <img
              src={url}
              alt={title}
              className="relative h-[380px] w-[300px] md:w-[400px] md:h-[500px]"
            />
          </div>
        );
      },
    },
  };

  console.log(blog);
  return (
    <main className="container mx-auto max-w-6xl px-4">
      {/* Header */}
      <section>
        <Badge variant="outline" className="mt-5 rounded-sm bg-yellow-500">
          {blog.items[0].fields.category}
        </Badge>
        <h1 className="my-2 text-lg font-semibold md:text-xl">
          {blog.items[0].fields.title}
        </h1>
        <div className="flex justify-between">
          <p className="text-sm font-light">
            {format(new Date(blog.items[0].fields.createdAt), "dd MMMM yyyy")} -{" "}
            {blog.items[0].fields.author}
          </p>
          <div className="mb-3 flex gap-1">
            <FacebookShareButton url={"http://localhost:3000"}>
              <FacebookIcon size={25} round />
            </FacebookShareButton>
            <WhatsappShareButton url={"http://localhost:3000"}>
              <WhatsappIcon size={25} round />
            </WhatsappShareButton>
            <TwitterShareButton url={"http://localhost:3000"}>
              <TwitterIcon size={25} round />
            </TwitterShareButton>
          </div>
        </div>

        <div className="relative h-[200px] w-full md:h-[400px]">
          <Image
            src={`https:${image?.fields.file.url}`}
            alt="thumbnail"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section>
        {documentToReactComponents(
          blog.items[0].fields.content,
          RICHTEXT_OPTIONS,
        )}
      </section>
    </main>
  );
};

export default BlogDetail;
