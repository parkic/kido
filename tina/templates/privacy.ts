

import type { TinaField } from "tinacms";
export function privacyFields() {
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Page Title",
    },
    {
      type: "string",
      name: "last_updated",
      label: "Last Updated",
    },
    {
      type: "rich-text",
      name: "privacy_text",
      label: "Content",
    }
   
  ] as TinaField[];
}