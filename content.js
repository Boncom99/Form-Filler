const randomNames = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Emily Davis",
    // Add more random names as needed
];
const loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Neque egestas congue quisque egestas diam in arcu cursus. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet cursus sit amet dictum sit. Ornare arcu dui vivamus arcu felis bibendum ut. Nisi lacus sed viverra tellus in hac habitasse. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus a pellentesque sit amet porttitor eget. Eget dolor morbi non arcu risus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Quisque id diam vel quam. Leo vel fringilla est ullamcorper eget. Eros donec ac odio tempor orci dapibus ultrices in iaculis."
const randomTexts = [
    "Lorem ipsum",
    "Dolor sit",
    "Consectetur adipiscing",
    "Sed do",
    "Eiusmod tempor",
    "Ut labore",
    "Dolore magna",
    "Ut enim",
    "Minim veniam",
    "Quis nostrud",
    "Exercitation ullamco",
    "Laboris nisi",
    "Ut aliquip",
    "Ex ea",
    "Commodo consequat",
    "Duis aute",
    "Irure dolor",
    "Reprehenderit in",
    "Voluptate velit",
    "Esse cillum",
    "Fugiat nulla",
    "Pariatur Excepteur",
    "Sint occaecat",
    "Cupidatat non",
    "Proident sunt",
    "Culpa qui",
    "Officia deserunt",
    "Mollit anim",
    "Id est",
    "Laborum consectetur",
    // Add more two-word phrases as needed
];
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomDate() {
    // Get current date
    var currentDate = new Date();

    // Calculate date two months ago
    var twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    // Calculate time range in milliseconds
    var timeRange = currentDate.getTime() - twoMonthsAgo.getTime();

    // Generate random timestamp within the time range
    var randomTimestamp = twoMonthsAgo.getTime() + Math.random() * timeRange;

    // Create a new Date object using the random timestamp
    var randomDate = new Date(randomTimestamp);

    return randomDate;
}
async function handleFireAction() {
    const inputs = document.querySelectorAll('input, textarea, select');
     for (const input of inputs) {
         const tagName = input.tagName.toLowerCase();
         if(!tagName){
             continue;
         }
         if (tagName === 'textarea'){
             input.value = loremIpsum;
         }
         else if (tagName === 'select'){
                const options = input.options;
                const randomIndex = Math.floor(Math.random() * options.length);
                options[randomIndex].selected = true;
         }
        else if (tagName === 'input') {
            const type = input.type.toLowerCase();
            switch (type) {
                case 'checkbox':
                    input.checked =  Math.random() > 0.5;
                    //special event "click"
                    const inputEvent1 = new Event(`click`, { bubbles: true, cancelable: false});
                    input.dispatchEvent(inputEvent1);
                    continue;
                case 'color':
                    input.value = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`;
                    break;
                case 'number':
                    input.value = Math.floor(Math.random() * 1000);
                    break;
                case 'date':
                    input.value = (getRandomDate()).toISOString().split('T')[0];
                    break;
                case 'select':
                    const options = input.options;
                    const randomIndex = Math.floor(Math.random() * options.length);
                    options[randomIndex].selected = true;
                    break;
                case 'email':
                    input.value = `${getRandomItem(randomNames)}@example.com`
                    break;
                case 'radio':
                    input.checked =  Math.random() > 0.7;
                    const inputEvent2 = new Event(`click`, { bubbles: true, cancelable: false});
                    input.dispatchEvent(inputEvent2);
                    continue;
                case 'text':
                    if(input.autocomplete){
                        //its a select
                        break;
                    }
                    input.value = getRandomItem(randomTexts);
                    break;
                case 'file':
                    break;
                default:
                    input.value = 'Lorem ipsum';
            }

        }
         const inputEvent = new Event(`input`, { bubbles: true, cancelable: false});
         input.dispatchEvent(inputEvent);
    }

}
// Listen for "keydown" event to trigger when "Command + shift + L" or "Ctrl + shift + L" is pressed
document.addEventListener("keydown", function(event) {
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
