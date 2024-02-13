chrome.contextMenus.create({
    id: "LoremIpsumInput",
    title: "Fill with Lorem Ipsum",
    contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "LoremIpsumInput") {
        chrome.tabs.sendMessage(tab.id, { action: "fillLoremIpsum" });
    }
});
