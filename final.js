// JavaScript to handle the modal functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all episode items
  const episodeItems = document.querySelectorAll(".apple-episode-item");
  const videoModal = document.querySelector(".papaya-video-modal");
  const videoPlayer = document.querySelector(".blackberry-video-player");
  const closeModal = document.querySelector(".guava-close-modal");
  const videoTitle = document.querySelector(".lime-video-title");
  const videoDescription = document.querySelector(".date-video-description");
  const seasonEpisode = document.querySelector(".grapefruit-season-episode");
  const videoDate = document.querySelector(".cantaloupe-video-date");

  // Episode data (you could also fetch this from an API)
  const episodeData = {
    1: {
      title: "The Beginning",
      description:
        "Our journey begins with an unexpected discovery that changes everything.",
      date: "Sep 15, 2023",
      rating: "8.7",
    },
    2: {
      title: "The Plot Thickens",
      description:
        "Secrets are revealed as the team digs deeper into the mystery.",
      date: "Sep 22, 2023",
      rating: "9.1",
    },
    3: {
      title: "Point of No Return",
      description:
        "The team faces their greatest challenge yet with no turning back.",
      date: "Sep 29, 2023",
      rating: "9.5",
    },
  };

  // Add click event to each episode item
  episodeItems.forEach((item) => {
    item.addEventListener("click", function () {
      const episodeNum = this.getAttribute("data-episode");
      const videoSrc = this.getAttribute("data-video");

      // Set video source
      videoPlayer.src = videoSrc;

      // Update modal info
      videoTitle.textContent = episodeData[episodeNum].title;
      videoDescription.textContent = episodeData[episodeNum].description;
      seasonEpisode.textContent = `S1 • E${episodeNum}`;
      videoDate.textContent = episodeData[episodeNum].date;

      // Show modal
      videoModal.classList.add("active");

      // Play video (some browsers require user interaction first)
      videoPlayer.play().catch((e) => console.log("Autoplay prevented:", e));
    });
  });

  // Close modal
  closeModal.addEventListener("click", function () {
    videoModal.classList.remove("active");
    videoPlayer.pause();
  });

  // Close modal when clicking on overlay
  document
    .querySelector(".blueberry-modal-overlay")
    .addEventListener("click", function () {
      videoModal.classList.remove("active");
      videoPlayer.pause();
    });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoModal.classList.contains("active")) {
      videoModal.classList.remove("active");
      videoPlayer.pause();
    }
  });
});

//     Use a 1920x1080 (16:9) YouTube video

// Add this JavaScript to handle resize:

function adjustVideo() {
  const wrapper = document.querySelector(".video-wrapper");
  const aspectRatio = 16 / 9;
  const windowRatio = window.innerWidth / window.innerHeight;

  if (windowRatio > aspectRatio) {
    wrapper.style.width = "177.77vh";
    wrapper.style.height = "100vh";
  } else {
    wrapper.style.width = "100vw";
    wrapper.style.height = "56.25vw"; /* 100/16*9 */
  }
}

window.addEventListener("resize", adjustVideo);
adjustVideo();

// Add this for perfect responsive behavior
function adjustVideo() {
  const wrapper = document.querySelector(".video-wrapper");
  const aspectRatio = 16 / 9;
  const windowRatio = window.innerWidth / window.innerHeight;

  if (windowRatio > aspectRatio) {
    wrapper.style.width = "177.77vh";
    wrapper.style.height = "100vh";
  } else {
    wrapper.style.width = "100vw";
    wrapper.style.height = "56.25vw";
  }
}

window.addEventListener("load", adjustVideo);
window.addEventListener("resize", adjustVideo);

async function openBlobModal(title, videoUrl) {
  try {
    // Fetch the video as blob
    const response = await fetch(videoUrl);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);

    // Call your existing openModal with blobURL instead of real URL
    openModal(title, blobURL);

    // Optional: Revoke the blob URL after modal closes to free memory
    // You need to add logic to revoke when modal is closed
  } catch (error) {
    console.error("Failed to load video blob:", error);
    alert("Sorry, failed to load the video.");
  }
}



// add github by

  // Completely disable right-click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  // Block key shortcuts
  document.addEventListener("keydown", function (e) {
    // Block F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+A, Ctrl+X
    if (e.ctrlKey) {
      const blockedKeys = ["u", "s", "c", "a", "x"];
      if (blockedKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
        return false;
      }
    }

    // Block Ctrl+Shift+I, Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase())) {
      e.preventDefault();
      return false;
    }
  });

  // Disable drag events
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
    return false;
  });

  // Disable copy and cut events
  document.addEventListener("copy", function (e) {
    e.preventDefault();
    return false;
  });
  document.addEventListener("cut", function (e) {
    e.preventDefault();
    return false;
  });

  // Disable text selection
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
    return false;
  });


