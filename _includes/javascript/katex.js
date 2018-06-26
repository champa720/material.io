<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css">
<script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>

<script>

  document.querySelectorAll("script[type='math/tex']").forEach(function(el) {
      el.outerHTML = katex.renderToString(el.textContent, { displayMode: false });
  });

  document.querySelectorAll("script[type='math/tex; mode=display']").forEach(function(el) {
      el.outerHTML = katex.renderToString(el.textContent.replace(/%.*/g, ''), { displayMode: true });
  });
</script>
