// Track the extension state
let isEnabled = false;

// Function to apply discardable setting to a specific tab
async function updateTabDiscardable(tabId) {
    try {
        if (tabId !== chrome.tabs.TAB_ID_NONE) {
            await chrome.tabs.update(tabId, { autoDiscardable: !isEnabled });
            console.log(`Updated tab ${tabId} - autoDiscardable: ${!isEnabled}`);
        }
    } catch (error) {
        console.error(`Error updating tab ${tabId}:`, error);
    }
}

// Function to handle all tabs in all windows
async function updateAllTabs() {
    try {
        // Get all windows
        const windows = await chrome.windows.getAll();
        
        // For each window, get and update all tabs
        for (const window of windows) {
            const tabs = await chrome.tabs.query({ windowId: window.id });
            for (const tab of tabs) {
                await updateTabDiscardable(tab.id);
            }
        }
        
        // Save state to storage
        await chrome.storage.local.set({ isEnabled: isEnabled });
        console.log('State saved:', isEnabled);
    } catch (error) {
        console.error('Error updating all tabs:', error);
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
    await updateAllTabs();
    console.log(isEnabled ? "Tab discarding disabled" : "Tab discarding enabled");
});

// Initialize extension state
chrome.runtime.onInstalled.addListener(async () => {
    try {
        // Load saved state or default to false
        const data = await chrome.storage.local.get('isEnabled');
        isEnabled = data.isEnabled || false;
        updateIcon();
        await updateAllTabs(); // Apply state to all existing tabs
        console.log("Extension installed - Current state:", isEnabled);
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Handle new tabs
chrome.tabs.onCreated.addListener(async (tab) => {
    try {
        if (tab.id !== chrome.tabs.TAB_ID_NONE) {
            await updateTabDiscardable(tab.id);
            console.log('New tab created and updated:', tab.id);
        }
    } catch (error) {
        console.error('Error handling new tab:', error);
    }
});

// Handle tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    try {
        // Only update if the tab is complete to avoid race conditions
        if (changeInfo.status === 'complete') {
            await updateTabDiscardable(tabId);
            console.log('Tab updated:', tabId);
        }
    } catch (error) {
        console.error('Error handling tab update:', error);
    }
});

// Handle window creation
chrome.windows.onCreated.addListener(async (window) => {
    try {
        const tabs = await chrome.tabs.query({ windowId: window.id });
        for (const tab of tabs) {
            await updateTabDiscardable(tab.id);
        }
        console.log('New window tabs updated');
    } catch (error) {
        console.error('Error handling new window:', error);
    }
});