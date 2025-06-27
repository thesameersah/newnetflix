// ===== PAGE PROTECTION SCRIPT =====
document.addEventListener("DOMContentLoaded", function () {
  // Disable right-click menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable keyboard shortcuts (F12, Ctrl+Shift+I, etc.)
  document.addEventListener("keydown", function (e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U") ||
      (e.ctrlKey && e.key === "S") ||
      (e.metaKey && e.key === "s")
    ) {
      e.preventDefault();
      showProtectionMessage();
    }
  });

  // Prevent image dragging
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });

  // Anti-debugging technique (checks if devtools is open)
  function checkDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (heightThreshold || widthThreshold) {
      document.body.innerHTML =
        '<div style="padding:20px;text-align:center;font-family:Arial;"><h2>Developer Tools Detected</h2><p>This page is protected against inspection</p></div>';
      window.location.reload();
    }
  }

  // Run periodically
  setInterval(checkDevTools, 1000);

  // Protection message
  function showProtectionMessage() {
    const msg = document.createElement("div");
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.backgroundColor = "#e50914";
    msg.style.color = "white";
    msg.style.padding = "10px 20px";
    msg.style.borderRadius = "5px";
    msg.style.zIndex = "99999";
    msg.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    msg.style.animation = "fadeIn 0.3s ease-in-out";
    msg.textContent = "This action is not allowed";

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.animation = "fadeOut 0.3s ease-in-out";
      setTimeout(() => msg.remove(), 300);
    }, 2000);
  }

  // Add CSS for animations
  const style = document.createElement("style");
  style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(10px); }
        }
    `;
  document.head.appendChild(style);
});

// Prevent iframe embedding (optional)
if (window.location !== window.parent.location) {
  window.top.location = window.location;
}

// Disable text selection (optional)
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
