document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save");
    const paragraphsInput = document.getElementById("paragraphs");

    saveButton.addEventListener("click", function() {
        const numParagraphs = paragraphsInput.value;
        chrome.storage.sync.set({ "numParagraphs": numParagraphs }, function() {
            console.log("Number of paragraphs saved:", numParagraphs);
        });
    });

    // Retrieve the previously saved value
    chrome.storage.sync.get("numParagraphs", function(data) {
        if (data.numParagraphs !== undefined) {
            paragraphsInput.value = data.numParagraphs;
        }
    });
});