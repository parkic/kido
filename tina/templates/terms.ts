

import type { TinaField } from "tinacms";
export function termsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Meta Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "page_title",
      label: "Page Title",
    },
    {
      type: "string",
      name: "last_updated",
      label: "Last Updated",
    },
    {
      type: "rich-text",
      name: "terms_text",
      label: "Content",
    }
   
  ] as TinaField[];
}