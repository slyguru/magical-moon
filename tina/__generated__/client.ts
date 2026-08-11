import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9661be49bebcead5423d063fbbbe4a55462c8ef4', queries,  });
export default client;
  