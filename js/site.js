(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  const applyThemeColor = (theme) => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#111210" : "#fbfaf7");
  };

  if (!root.dataset.theme) {
    let saved;
    try { saved = localStorage.getItem("theme"); } catch {}
    const theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.dataset.theme = theme;
    applyThemeColor(theme);
  }

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    applyThemeColor(next);
    window.dispatchEvent(new CustomEvent("site-theme-change", { detail: { theme: next } }));
  });
})();
