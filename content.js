const paragraphs= [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Neque egestas congue quisque egestas diam in arcu cursus. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet cursus sit amet dictum sit. Ornare arcu dui vivamus arcu felis bibendum ut. Nisi lacus sed viverra tellus in hac habitasse. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus a pellentesque sit amet porttitor eget. Eget dolor morbi non arcu risus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Quisque id diam vel quam. Leo vel fringilla est ullamcorper eget. Eros donec ac odio tempor orci dapibus ultrices in iaculis.",
    "Nunc lobortis mattis aliquam faucibus purus in massa. Donec adipiscing tristique risus nec feugiat in. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate ut pharetra sit amet aliquam id. Mattis ullamcorper velit sed ullamcorper morbi. Sem et tortor consequat id porta nibh venenatis cras sed. Ac placerat vestibulum lectus mauris ultrices. Morbi quis commodo odio aenean sed adipiscing. Odio aenean sed adipiscing diam donec. Convallis aenean et tortor at risus viverra.",
    "Sed odio morbi quis commodo odio aenean sed adipiscing. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Est ante in nibh mauris. Vulputate odio ut enim blandit volutpat maecenas. Aliquet enim tortor at auctor urna. Pretium quam vulputate dignissim suspendisse in est ante in. Amet est placerat in egestas erat imperdiet sed. Congue quisque egestas diam in arcu cursus euismod quis. Dui id ornare arcu odio ut. Vitae semper quis lectus nulla. Consectetur a erat nam at lectus urna. Leo a diam sollicitudin tempor id eu nisl nunc. Et malesuada fames ac turpis egestas. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Eleifend mi in nulla posuere. Integer malesuada nunc vel risus commodo viverra.",
    "Elit eget gravida cum sociis natoque penatibus et magnis. Pretium aenean pharetra magna ac placerat vestibulum. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Velit laoreet id donec ultrices. Viverra accumsan in nisl nisi scelerisque. Nibh cras pulvinar mattis nunc sed blandit libero. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Eget magna fermentum iaculis eu. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Vulputate sapien nec sagittis aliquam malesuada. Gravida arcu ac tortor dignissim convallis aenean et. Sit amet consectetur adipiscing elit. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Amet purus gravida quis blandit turpis cursus in hac. Tempus iaculis urna id volutpat lacus laoreet. Nibh tellus molestie nunc non blandit massa. Mauris a diam maecenas sed enim.",
    "Cursus turpis massa tincidunt dui. Mi in nulla posuere sollicitudin. Eu augue ut lectus arcu bibendum at varius vel pharetra. Diam maecenas ultricies mi eget mauris pharetra. Gravida in fermentum et sollicitudin ac. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Nunc sed augue lacus viverra vitae congue eu. Dictum non consectetur a erat nam. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Eget est lorem ipsum dolor sit amet. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.",
    "Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Morbi leo urna molestie at elementum. Urna duis convallis convallis tellus id. In est ante in nibh. Consequat interdum varius sit amet mattis vulputate. Quam id leo in vitae turpis massa sed elementum tempus. Ut venenatis tellus in metus vulputate eu. Morbi quis commodo odio aenean sed adipiscing diam donec. Sed velit dignissim sodales ut eu sem. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Morbi leo urna molestie at elementum eu facilisis sed. Vestibulum mattis ullamcorper velit sed. Mauris in aliquam sem fringilla ut morbi tincidunt. Massa id neque aliquam vestibulum morbi. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Scelerisque felis imperdiet proin fermentum.",
    "Commodo ullamcorper a lacus vestibulum sed arcu non. Mi proin sed libero enim sed faucibus. Id faucibus nisl tincidunt eget nullam. Eget mauris pharetra et ultrices neque ornare aenean. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Tristique magna sit amet purus gravida quis blandit turpis cursus. Amet purus gravida quis blandit. Habitant morbi tristique senectus et netus. Enim ut sem viverra aliquet eget sit amet. Amet dictum sit amet justo donec enim diam vulputate ut. Amet commodo nulla facilisi nullam. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Id velit ut tortor pretium viverra suspendisse potenti. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nulla facilisi cras fermentum odio eu. Interdum velit euismod in pellentesque massa. Lorem sed risus ultricies tristique nulla.",
    "Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Aliquet enim tortor at auctor urna nunc id cursus metus. Malesuada fames ac turpis egestas sed. Ac ut consequat semper viverra nam libero justo laoreet. Tortor id aliquet lectus proin nibh nisl. Metus vulputate eu scelerisque felis imperdiet. Erat pellentesque adipiscing commodo elit. Sit amet est placerat in egestas erat imperdiet sed euismod. Ac turpis egestas integer eget. Ut tortor pretium viverra suspendisse potenti nullam ac. Ultricies lacus sed turpis tincidunt id aliquet risus.",
    "Scelerisque purus semper eget duis at. Vestibulum rhoncus est pellentesque elit. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Nisl tincidunt eget nullam non nisi est sit. Amet porttitor eget dolor morbi non arcu risus. Sit amet porttitor eget dolor morbi non. Tortor at auctor urna nunc. Netus et malesuada fames ac turpis egestas. Justo eget magna fermentum iaculis eu non. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    "Amet consectetur adipiscing elit ut aliquam. Amet tellus cras adipiscing enim eu turpis egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Viverra nam libero justo laoreet sit amet cursus sit amet. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Senectus et netus et malesuada. Aliquam nulla facilisi cras fermentum odio eu. Eget nunc lobortis mattis aliquam faucibus. Ornare lectus sit amet est placerat in. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Vitae auctor eu augue ut lectus. Sed nisi lacus sed viverra tellus. Est placerat in egestas erat imperdiet sed euismod nisi. Accumsan in nisl nisi scelerisque eu ultrices vitae. Leo urna molestie at elementum. Feugiat nisl pretium fusce id velit. Aliquet lectus proin nibh nisl. Scelerisque viverra mauris in aliquam. Ullamcorper velit sed ullamcorper morbi. Ullamcorper dignissim cras tincidunt lobortis."
]

function fillInputWithLoremIpsum(input, numParagraphs, textProps) {
    const startPos = input.selectionStart;
    const endPos = input.selectionEnd;
    const currentValue = input.value;
    let newParagraphs = '';
    if(numParagraphs === 0) {
       newParagraphs =  'Lorem Ipsum';
    }
    else {
    const paragraphSeparator = "\n\n";
    newParagraphs = paragraphs.slice(0, numParagraphs).join(paragraphSeparator);
    }

    const newValue = currentValue.substring(0, startPos) + newParagraphs + currentValue.substring(endPos, currentValue.length);

    input.value = newValue;

    // Set cursor position
    input.setSelectionRange(startPos + newParagraphs.length, startPos + newParagraphs.length);

    // Trigger input event
    const inputEvent = new Event("input", { bubbles: true, cancelable: true });
    input.dispatchEvent(inputEvent);
}

function handleFireAction(){
    const focusedInput = document.activeElement;
    if(!focusedInput) {
        console.log("No input is focused");
        return;
    }
    if (focusedInput && focusedInput.tagName === "INPUT"){
        fillInputWithLoremIpsum(focusedInput, 0);
    }
    else if( focusedInput && focusedInput.tagName === "TEXTAREA") {
        chrome.storage.sync.get("numParagraphs", function(data) {
            const numParagraphs = data.numParagraphs || 2; // Default to 2 if not set
            fillInputWithLoremIpsum(focusedInput, numParagraphs);
        });
    }
}
// Listen for "keydown" event to trigger when "Command + shift + L" or "Ctrl + shift + L" is pressed
document.addEventListener("keydown", function(event) {
    // Check if the "L" key is pressed along with the "Command" key (MetaKey) on macOS or "Ctrl" key on other platforms
    if ((event.metaKey || event.ctrlKey)&&(event.shiftKey) && event.key === "l") {
      handleFireAction();
    }
});

// Listen for context menu click event to trigger when "Fill with Lorem Ipsum" is selected
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "fillLoremIpsum") {
      handleFireAction();
    }
});
