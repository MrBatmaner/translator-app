// First, we must import the schema creator

// Then import schema types from any plugins that might expose them


// We import object and document schemas
import restaurant from "./restaurant";
import category from './category'
import dish from "./dish";
import featured from "./featured";

export const schemaTypes = [dish, restaurant, category, featured]

