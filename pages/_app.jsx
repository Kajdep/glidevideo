import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.glidevideo.com";

export default function AppHead() {
  const { pathname } = useLocation();
  const canonicalUrl = `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
