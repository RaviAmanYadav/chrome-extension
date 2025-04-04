console.log("I am the backend script");

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: "https://www.google.com",
  });
});
