// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.CF_PAGES_BRANCH || process.env.GITHUB_BRANCH || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get these from tina.io and set them in your Cloudflare Pages environment variables
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // COLLECTION 1: Standard Markdown (.md)
      {
        name: "post",
        label: "Posts (MD)",
        path: "src/content/posts",
        match: {
          include: "**/*.md"
        },
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "new-post"}`;
            }
          },
          router: ({ document }) => {
            const postSlug = document.slug || document._sys.filename;
            return `/posts/${postSlug}`;
          }
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "author", label: "Author", required: true },
          { type: "datetime", name: "pubDatetime", label: "Publish Date", required: true },
          { type: "datetime", name: "modDatetime", label: "Modified Date" },
          { type: "string", name: "slug", label: "Slug Override (Optional)" },
          { type: "boolean", name: "featured", label: "Featured Post" },
          { type: "boolean", name: "draft", label: "Draft" },
          { type: "string", name: "tags", label: "Tags", list: true, required: true },
          { type: "string", name: "description", label: "Description", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      // COLLECTION 2: MDX Format (.mdx)
      {
        name: "post_mdx",
        label: "Posts (MDX)",
        path: "src/content/posts",
        match: {
          include: "**/*.mdx"
        },
        format: "mdx",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "new-post"}`;
            }
          },
          router: ({ document }) => {
            const postSlug = document.slug || document._sys.filename;
            return `/posts/${postSlug}`;
          }
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "author", label: "Author", required: true },
          { type: "datetime", name: "pubDatetime", label: "Publish Date", required: true },
          { type: "datetime", name: "modDatetime", label: "Modified Date" },
          { type: "string", name: "slug", label: "Slug Override (Optional)" },
          { type: "boolean", name: "featured", label: "Featured Post" },
          { type: "boolean", name: "draft", label: "Draft" },
          { type: "string", name: "tags", label: "Tags", list: true, required: true },
          { type: "string", name: "description", label: "Description", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
