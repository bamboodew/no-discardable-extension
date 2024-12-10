// Track the extension state
let isEnabled = false;

// Function to disable discardable property
async function disableDiscardableForAllTabs() {
    try {
        const tabs = await chrome.tabs.query({}); // Query all tabs
        for (const tab of tabs) {
            if (tab.id !== chrome.tabs.TAB_ID_NONE) {
                // Set autoDiscardable based on extension state
                chrome.tabs.update(tab.id, { autoDiscardable: !isEnabled });
            }
        }
        // Save state to storage
        chrome.storage.local.set({ isEnabled: isEnabled });
    } catch (error) {
        console.error('Error managing tab discarding:', error);
    }
}

// Function to update icon
function updateIcon() {
    const iconPath = isEnabled ? 'icon48_red.png' : 'icon48_black.png';
    chrome.action.setIcon({
        path: {
            48: iconPath
        }
    });
}

// Handle extension button click
chrome.action.onClicked.addListener(async () => {
    isEnabled = !isEnabled; // Toggle state
    updateIcon();
    await disableDiscardableForAllTabs();
    console.log(isEnabled ? "Tab discarding disabled" : "Tab discarding enabled");
});

// Initialize extension state
chrome.runtime.onInstalled.addListener(async () => {
    // Load saved state or default to false
    const data = await chrome.storage.local.get('isEnabled');
    isEnabled = data.isEnabled || false;
    updateIcon();
    console.log("Extension installed - Current state:", isEnabled);
});

// Handle new tabs
chrome.tabs.onCreated.addListener((tab) => {
    if (tab.id !== chrome.tabs.TAB_ID_NONE && isEnabled) {
        chrome.tabs.update(tab.id, { autoDiscardable: false });
    }
});

// Handle tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tabId !== chrome.tabs.TAB_ID_NONE && isEnabled) {
        chrome.tabs.update(tabId, { autoDiscardable: false });
    }
});