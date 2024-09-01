import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";

const site = lume();

site.use(jsx_preact());

site.copy([".css", ".svg"])

export default site;
