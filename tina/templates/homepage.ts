

import type { TinaField } from "tinacms";
export function homepageFields() {
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
      label: "Title",
    },
    {
      type: "object",
      name: "banner",
      label: "Banner",
      fields: [
        {
          type: "string",
          name: "banner_text",
          label: "Text",
        },
        {
          type: "image",
          name: "icon",
          label: "Icon",
          previewSrc: (src: string) => src
        }
      ]
    },
    {
      type: "object",
      name: "features",
      label: "Features",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "image",
          name: "icon",
          label: "Icon",
          previewSrc: (src: string) => src
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          previewSrc: (src: string) => src
        },
      ]
    },
    {
      type: "object",
      name: "section_below_cards",
      label: "Section Below Cards",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          previewSrc: (src: string) => src
        },
      ]
    },
    {
      type: "object",
      name: "action_cards",
      label: "Action Cards",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          previewSrc: (src: string) => src
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "button_url",
          label: "Button URL",
        }
      ]
    }
   
  ] as TinaField[];
}