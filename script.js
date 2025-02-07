// Get DOM elements
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Regular expression for detecting URLs
const urlRegex = /https?:\/\/[^\s]+/g;

// Load saved notes from localStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesList.innerHTML = '';  // Clear existing notes
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <span>${convertUrlsToLinks(note)}</span>
    `;
    notesList.appendChild(noteElement);
  });
}

// Convert URLs in the note text to clickable links
function convertUrlsToLinks(text) {
  return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);
}

// Save note to localStorage whenever the content of the textarea changes
function autoSaveNote() {
  const note = noteInput.value.trim();
  if (note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes[0] = note;  // Always save the first note, like Shrib.com
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
  }
}

// Event listener to automatically save notes when typing
noteInput.addEventListener('input', autoSaveNote);

// Load notes when the page loads
window.onload = loadNotes;
