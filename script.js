const noteArea = document.getElementById("noteArea");
const preview = document.getElementById("preview");

// Load saved note from localStorage
window.addEventListener("load", () => {
    const savedNote = localStorage.getItem("note");
    if (savedNote !== null) {
        noteArea.value = savedNote;
        updatePreview();
    }
});

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

// Ensure preview updates on page load
updatePreview();
