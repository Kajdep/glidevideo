import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { GlobalContextProviders } from "./components/_globalContextProviders";
import Page_0 from "./pages/_index.tsx";
import PageLayout_0 from "./pages/_index.pageLayout.tsx";
import Page_1 from "./pages/glideprep.tsx";
import PageLayout_1 from "./pages/glideprep.pageLayout.tsx";
import Page_2 from "./pages/glideblend.tsx";
import PageLayout_2 from "./pages/glideblend.pageLayout.tsx";
import Page_3 from "./pages/glidelooper.tsx";
import PageLayout_3 from "./pages/glidelooper.pageLayout.tsx";
import Page_4 from "./pages/glideshorts.tsx";
import PageLayout_4 from "./pages/glideshorts.pageLayout.tsx";
import Page_5 from "./pages/glideconvert.tsx";
import PageLayout_5 from "./pages/glideconvert.pageLayout.tsx";
import Page_6 from "./pages/glidecaps.tsx";
import PageLayout_6 from "./pages/glidecaps.pageLayout.tsx";
import Page_7 from "./pages/glideaudio.tsx";
import PageLayout_7 from "./pages/glideaudio.pageLayout.tsx";

if (!window.requestIdleCallback) {
  window.requestIdleCallback = (cb) => {
    setTimeout(cb, 1);
  };
}

import "./base.css";

const fileNameToRoute = new Map([["./pages/_index.tsx","/"],["./pages/glideprep.tsx","/glideprep"],["./pages/glideblend.tsx","/glideblend"],["./pages/glidelooper.tsx","/glidelooper"],["./pages/glideshorts.tsx","/glideshorts"],["./pages/glideconvert.tsx","/glideconvert"],["./pages/glidecaps.tsx","/glidecaps"],["./pages/glideaudio.tsx","/glideaudio"]]);
const fileNameToComponent = new Map([
    ["./pages/_index.tsx", Page_0],
["./pages/glideprep.tsx", Page_1],
["./pages/glideblend.tsx", Page_2],
["./pages/glidelooper.tsx", Page_3],
["./pages/glideshorts.tsx", Page_4],
["./pages/glideconvert.tsx", Page_5],
["./pages/glidecaps.tsx", Page_6],
["./pages/glideaudio.tsx", Page_7],
  ]);

function makePageRoute(filename: string) {
  const Component = fileNameToComponent.get(filename);
  return <Component />;
}

function toElement({
  trie,
  fileNameToRoute,
  makePageRoute,
}: {
  trie: LayoutTrie;
  fileNameToRoute: Map<string, string>;
  makePageRoute: (filename: string) => React.ReactNode;
}) {
  return [
    ...trie.topLevel.map((filename) => (
      <Route
        key={fileNameToRoute.get(filename)}
        path={fileNameToRoute.get(filename)}
        element={makePageRoute(filename)}
      />
    )),
    ...Array.from(trie.trie.entries()).map(([Component, child], index) => (
      <Route
        key={index}
        element={
          <Component>
            <Outlet />
          </Component>
        }
      >
        {toElement({ trie: child, fileNameToRoute, makePageRoute })}
      </Route>
    )),
  ];
}

type LayoutTrieNode = Map<
  React.ComponentType<{ children: React.ReactNode }>,
  LayoutTrie
>;
type LayoutTrie = { topLevel: string[]; trie: LayoutTrieNode };
function buildLayoutTrie(layouts: {
  [fileName: string]: React.ComponentType<{ children: React.ReactNode }>[];
}): LayoutTrie {
  const result: LayoutTrie = { topLevel: [], trie: new Map() };
  Object.entries(layouts).forEach(([fileName, components]) => {
    let cur: LayoutTrie = result;
    for (const component of components) {
      if (!cur.trie.has(component)) {
        cur.trie.set(component, {
          topLevel: [],
          trie: new Map(),
        });
      }
      cur = cur.trie.get(component)!;
    }
    cur.topLevel.push(fileName);
  });
  return result;
}

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Go back to the <a href="/" style={{ color: 'blue' }}>home page</a>.</p>
    </div>
  );
}

import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, search, hash } = useLocation();
  const navType = useNavigationType(); // "PUSH" | "REPLACE" | "POP"

  useEffect(() => {
    // Back/forward: keep browser-like behavior
    if (navType === "POP") return;

    // Hash links: let the browser scroll to the anchor
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search, hash, navType]);

  return null;
}

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
  }
}

function LemonSqueezyInitializer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.createLemonSqueezy?.();
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <LemonSqueezyInitializer />
      <GlobalContextProviders>
        <Routes>
          {toElement({ trie: buildLayoutTrie({
"./pages/_index.tsx": PageLayout_0,
"./pages/glideprep.tsx": PageLayout_1,
"./pages/glideblend.tsx": PageLayout_2,
"./pages/glidelooper.tsx": PageLayout_3,
"./pages/glideshorts.tsx": PageLayout_4,
"./pages/glideconvert.tsx": PageLayout_5,
"./pages/glidecaps.tsx": PageLayout_6,
"./pages/glideaudio.tsx": PageLayout_7,
}), fileNameToRoute, makePageRoute })} 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProviders>
    </BrowserRouter>
  );
}
