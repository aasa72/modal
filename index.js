const closeBtn = document.getElementById("close-modal")
const openBtn = document.getElementById("open-modal")
const overlay = document.getElementById("overlay")
const openSection = document.getElementById("open-section")


openBtn.addEventListener("click", function() {
  overlay.style.display = "block"
  openSection.style.display = "none"
})

closeBtn.addEventListener("click", function() {
  overlay.style.display = "none"
  openSection.style.display ="block"
})

