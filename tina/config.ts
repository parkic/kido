import { defineConfig } from "tinacms";
import { homepageFields } from "./templates/homepage";
import { pricingFields } from "./templates/pricing";
import { termsFields } from "./templates/terms";
import { privacyFields } from "./templates/privacy";
import { parentsLPFields } from "./templates/parentsLP";
import { kindergartenLPFields } from "./templates/kindergartenLPFields";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "./assets/images",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'homepage',
            label: 'Homepage',
            fields: homepageFields()
          },
          {
            name: 'pricing',
            label: 'Pricing',
            fields: pricingFields()
          },
          {
            name: 'terms',
            label: 'Terms',
            fields: termsFields()
          },
          {
            name: 'privacy',
            label: 'Privacy',
            fields: privacyFields()
          },
          {
            name: 'parentsLP',
            label: 'Parents Landing Page',
            fields: parentsLPFields()
          },
          {
            name: 'kindergartenLP',
            label: 'Kindergarten Landing Page',
            fields: kindergartenLPFields()
          },
        ]
      },
    ],
  },
});
