import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '24c9fb3a837222d68eab6c535dbd3bb2fba745dd', queries,  });
export default client;
  