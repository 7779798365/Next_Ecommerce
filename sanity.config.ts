import { visionTool } from "@sanity/vision";
import { Config } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { StudioNavbar } from "@/custom-components/StudioNavbar/StudioNavbar";

export const config: Config = {
  name: "default",
  title: "Buy Now",
  basePath: "/studio",

  projectId: "jeug1nrf",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
