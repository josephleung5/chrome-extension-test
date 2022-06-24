chrome.storage.onChanged.addListener(function (changes, namespace) {
  let changedValue;
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    changedValue = newValue
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "user-is-logged-in", name: changedValue});
  });
});
