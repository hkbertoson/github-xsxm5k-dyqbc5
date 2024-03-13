/// <reference types="astro/client" />

type CloudflareBindings = {
  KV: KVNamespace;
};

type Runtime =
  import('@astrojs/cloudflare').AdvancedRuntime<CloudflareBindings>;

declare namespace App {
  interface Locals extends Runtime {}
}
