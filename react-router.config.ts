import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // async prerender() {
  //   return ["/", "/about", "/contacts"] 
  // } //HTML and payloads are generated at build time
} satisfies Config;
