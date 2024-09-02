

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
      name: "hero_section",
      label: "Hero Section",
      fields: [
        {
          type: "image",
          name: "hero_image",
          label: "Hero Image",
        },
        {
          type: "rich-text",
          name: "cover_title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "image",
          name: 'reviews_image',
          label: 'Reviews Image'
        },
        {
          type: "string",
          name: 'reviews_text',
          label: 'Reviews Text'
        },
       
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
    },
    {
      type: "object",
      name: "care_is_at_our_core",
      label: "Care is at our core",
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
          type: "object",
          name: "cards",
          label: "Cards",
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
              name: "icon",
              label: "Icon",
              previewSrc: (src: string) => src
            }
          ]
        },
        {
          type: "object",
          name: "images",
          label: "Images",
          list: true,
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
              previewSrc: (src: string) => src
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "peace_of_mind",
      label: "Peace of Mind",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
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
      ]
    },
    {
      type: "object",
      name: "our_promise",
      label: "Our Promise",
      fields: [
        {
          type: "string",
          name: "above_title",
          label: "Above Title",
        },
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
          type: "object",
          name: 'images',
          label: 'Images',
          list: true,
          fields: [
            {
              type: 'image',
              name: 'image',
              label: 'Image',
              previewSrc: (src: string) => src
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "bottom_cta",
      label: "Bottom CTA",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
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