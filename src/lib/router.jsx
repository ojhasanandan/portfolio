import { createContext, useContext, useEffect, useState, useCallback } from "react";

// A very small History-API router: paths for pages, hashes for sections,
// and one query parameter (?for=) that carries the reading lens.
const Ctx = createContext(null);
const read = () => ({
  path: window.location.pathname.replace(/\/+$/, "") || "/",
  hash: window.location.hash.slice(1),
  lens: new URLSearchParams(window.location.search).get("for") || "all",
  key: Math.random(),
});

export function Router({ children }) {
  const [loc, setLoc] = useState(read);
  useEffect(() => {
    const on = () => setLoc(read());
    window.addEventListener("popstate", on);
    return () => window.removeEventListener("popstate", on);
  }, []);

  const withLens = useCallback(
    (to, lens = loc.lens) => {
      const [path, hash] = to.split("#");
      return (path || "/") + (lens && lens !== "all" ? `?for=${lens}` : "") + (hash ? `#${hash}` : "");
    },
    [loc.lens],
  );
  const navigate = useCallback(
    (to) => {
      window.history.pushState({}, "", withLens(to));
      setLoc(read());
    },
    [withLens],
  );
  const setLens = useCallback((lens) => {
    const url = window.location.pathname + (lens !== "all" ? `?for=${lens}` : "") + window.location.hash;
    window.history.replaceState({}, "", url);
    setLoc((l) => ({ ...l, lens }));
  }, []);

  return <Ctx.Provider value={{ loc, navigate, setLens, withLens }}>{children}</Ctx.Provider>;
}

export const useRouter = () => useContext(Ctx);

export function scrollToId(id, smooth = true) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: smooth && !reduce ? "smooth" : "auto", block: "start" });
  return true;
}

// Internal link. Keeps the lens in the URL and scrolls to hashes without a reload.
export function Link({ to, children, onClick, ...rest }) {
  const { loc, navigate, withLens } = useRouter();
  const external = /^(https?:|mailto:)/.test(to) || to.endsWith(".pdf");
  if (external) {
    const newTab = !to.startsWith("mailto:");
    return (
      <a href={to} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  const click = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const [path, hash] = to.split("#");
    if ((path || "/") === loc.path && hash) {
      window.history.pushState({}, "", withLens(to));
      scrollToId(hash);
    } else navigate(to);
  };
  return (
    <a href={withLens(to)} onClick={click} {...rest}>
      {children}
    </a>
  );
}
