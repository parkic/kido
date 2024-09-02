

import type { TinaField } from "tinacms";
export function kindergartenLPFields() {
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
      name: "values_section",
      label: "Values Section",
      fields: [
        {
          type: "rich-text",
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
          name: "values",
          label: "Values",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}`}
            },
          },
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
              type: "image",
              name: "image",
              label: "Image",
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
                  type: "string",
                  name: "title",
                  label: "Title",
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                },
              ]
            }
          ]
        }
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
      name: "pricing_section",
      label: "Pricing Section",
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
        },
        {
          type: "image",
          name: "section_image",
          label: "Section Image",
        },
        {
          type: "object",
          name: "monthly_card",
          label: "Monthly Card",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "main_price",
              label: "Main Price",
            },
            {
              type: "string",
              name: "second_price",
              label: "Second Price",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea"
              }
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
                  type: "string",
                  name: "title",
                  label: "Title",
                },
              ]
            },
            {
              type: "string",
              name: "button_text",
              label: "Button Text",
            }
          ]
        },
        {
          type: "object",
          name: "yearly_card",
          label: "Yearly Card",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "main_price",
              label: "Main Price",
            },
            {
              type: "string",
              name: "second_price",
              label: "Second Price",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea"
              }
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
                  type: "string",
                  name: "title",
                  label: "Title",
                },
              ]
            },
            {
              type: "string",
              name: "button_text",
              label: "Button Text",
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "mid_page_cta",
      label: "Mid Page CTA - Orange section",
      fields: [
        {
          type: "string",
          name: "above_text",
          label: "Above Text",
        },
        {
          type: "rich-text",
          name: "content",
          label: "Main Text",
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
      ],
    },
    {
      type: "object",
      name: "features_section",
      label: "Features Section",
      fields: [
        {
          type: "rich-text",
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
      ],
    },
    {
      type: "object",
      name: "video_section",
      label: "Video Section",
      fields: [
        {
          type: "rich-text",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "video_url",
          label: "Video URL",
        },
        {
          type: "string",
          name: "video_button",
          label: "Button Text",
        }
      ],
    },
    
    {
      type: "object",
      name: "bottom_cta",
      label: "Bottom Page CTA - Black Box",
      fields: [
        {
          type: "rich-text",
          name: "content",
          label: "Main Text",
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
      ],
    },
   
  ] as TinaField[];
}