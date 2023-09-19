
import imageUrlBuilder  from "@sanity/image-url";

import sanityClient from "@sanity/client";



const client = sanityClient({
    projectId: "99uv5tcf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;