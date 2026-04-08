import React from "react";
import { Download, Globe, ShoppingBag, AppWindow } from "lucide-react";
import { Button } from "./Button";
import {
  getLemonSqueezyCheckoutUrl,
  type ProductStoreId,
} from "../helpers/storefront";

interface ProductStoreActionsProps {
  productId: ProductStoreId;
  itchUrl?: string;
  microsoftStoreUrl?: string;
  webAppUrl?: string;
  webAppLabel?: string;
  microsoftStoreLabel?: string;
  directLabel?: string;
  itchLabel?: string;
}

export function ProductStoreActions({
  productId,
  itchUrl,
  microsoftStoreUrl,
  webAppUrl,
  webAppLabel = "Launch Web App",
  microsoftStoreLabel = "Get on Microsoft Store",
  directLabel = "Buy Direct",
  itchLabel = "Get on itch.io",
}: ProductStoreActionsProps) {
  const lemonSqueezyUrl = getLemonSqueezyCheckoutUrl(productId);
  const primarySource = webAppUrl
    ? "webapp"
    : microsoftStoreUrl
      ? "microsoft"
      : lemonSqueezyUrl
        ? "direct"
        : itchUrl
          ? "itch"
          : null;

  return (
    <>
      {webAppUrl ? (
        <Button asChild variant="primary">
          <a href={webAppUrl} target="_blank" rel="noopener noreferrer">
            <Globe size={16} /> {webAppLabel}
          </a>
        </Button>
      ) : null}

      {microsoftStoreUrl ? (
        <Button
          asChild
          variant={primarySource === "microsoft" ? "primary" : "outline"}
        >
          <a
            href={microsoftStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppWindow size={16} /> {microsoftStoreLabel}
          </a>
        </Button>
      ) : null}

      {lemonSqueezyUrl ? (
        <Button
          asChild
          variant={primarySource === "direct" ? "primary" : "outline"}
        >
          <a className="lemonsqueezy-button" href={lemonSqueezyUrl}>
            <ShoppingBag size={16} /> {directLabel}
          </a>
        </Button>
      ) : null}

      {itchUrl ? (
        <Button asChild variant={primarySource === "itch" ? "primary" : "outline"}>
          <a href={itchUrl} target="_blank" rel="noopener noreferrer">
            <Download size={16} /> {itchLabel}
          </a>
        </Button>
      ) : null}
    </>
  );
}
