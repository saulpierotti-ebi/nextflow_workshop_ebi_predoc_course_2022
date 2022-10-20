const mediaMatcher = window.matchMedia('(prefers-color-scheme: dark)');
function onColorSchemeUpdate() {
  let link = document.getElementById('faviconLink');
  link.href = mediaMatcher.matches ? '/assets/favicon.white.png' : '/favicon.ico';
}

mediaMatcher.addEventListener("change", onColorSchemeUpdate);
onColorSchemeUpdate();
