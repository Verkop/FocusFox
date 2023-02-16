chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
      if (id) {
        chrome.action.disable(id)
      }
    })
  })
})
