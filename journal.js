function saveEntry() {
    const entry = document.getElementById('journalEntry').value;
    if (entry.trim() === "") {
        alert("Please write something in the journal.");
        return;
    }
    localStorage.setItem('journal', entry);
    alert("Your journal entry has been saved!");
}
