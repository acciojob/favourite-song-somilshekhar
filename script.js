window.onload = function () {
  const link = document.getElementById("songLink");
  if (!link || !link.href || link.href.trim() === "") {
    alert("Invalid or empty song link!");
  } else {
    console.log("Anchor tag validated successfully");
  }
};
