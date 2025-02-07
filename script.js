const noteArea = document.getElementById("noteArea");
const preview = document.getElementById("preview");

// Load saved note from localStorage
noteArea.value = localStorage.getItem("note") || "";

// Auto-save the note on input change
noteArea.addEventListener("input", () => {
    localStorage.setItem("note", noteArea.value);
    updatePreview();
});

// Function to update preview with clickable links
function updatePreview() {
    let text = noteArea.value;
    let linkedText = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    preview.innerHTML = linkedText;
}

// Initial update
updatePreview();
