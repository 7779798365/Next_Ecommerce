import { ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "jeug1nrf",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-07-30",
};

export const client = createClient(clientConfig);
