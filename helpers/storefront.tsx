declare const __PUBLIC_CONFIG__: Record<string, string>;

export type ProductStoreId =
  | "glideblend"
  | "glidecaps"
  | "glideconvert"
  | "glidelooper"
  | "glideprep"
  | "glideshorts"
  | "glideaudio";

const publicConfig =
  typeof __PUBLIC_CONFIG__ !== "undefined" ? __PUBLIC_CONFIG__ : {};

const checkoutConfigKeys: Record<ProductStoreId, string> = {
  glideblend: "PUBLIC_LEMONSQUEEZY_GLIDEBLEND_URL",
  glidecaps: "PUBLIC_LEMONSQUEEZY_GLIDECAPS_URL",
  glideconvert: "PUBLIC_LEMONSQUEEZY_GLIDECONVERT_URL",
  glidelooper: "PUBLIC_LEMONSQUEEZY_GLIDELOOPER_URL",
  glideprep: "PUBLIC_LEMONSQUEEZY_GLIDEPREP_URL",
  glideshorts: "PUBLIC_LEMONSQUEEZY_GLIDESHORTS_URL",
  glideaudio: "PUBLIC_LEMONSQUEEZY_GLIDEAUDIO_URL",
};

export function getLemonSqueezyCheckoutUrl(productId: ProductStoreId) {
  const checkoutUrl = publicConfig[checkoutConfigKeys[productId]];
  return checkoutUrl?.trim() || undefined;
}
