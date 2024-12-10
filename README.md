# No Tab Discarding Extension for Edge

A browser extension that prevents Microsoft Edge from automatically discarding inactive tabs to save memory.

## Features

- Toggle tab discarding prevention with a single click
- Visual feedback through icon colors:
  - Black icon: Tab discarding is allowed (default)
  - Red icon: Tab discarding is prevented
- Automatically applies to all open tabs and new tabs
- Settings persist across browser restarts

## Installation

1. Clone this repository or download the source code
2. Open Microsoft Edge and navigate to `edge://extensions/`
3. Enable "Developer mode" in the left sidebar
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in the toolbar to toggle tab discarding prevention
   - Black icon means tab discarding is allowed (default state)
   - Red icon means tab discarding is prevented
2. The setting will automatically apply to all current and new tabs
3. Your preference is saved and will persist even after browser restart

## Files

- `manifest.json`: Extension configuration
- `background.js`: Core functionality implementation
- `icon48_black.png`: Default icon (tab discarding allowed)
- `icon48_red.png`: Active icon (tab discarding prevented)
- `icon128.png`: Large icon for extension store

## License

MIT License
