# No Tab Discarding Extension for Edge

# Edge 浏览器禁用标签页丢弃扩展

A browser extension that prevents Microsoft Edge from automatically discarding inactive tabs to save memory.

一个浏览器扩展，用于阻止 Microsoft Edge 自动丢弃非活动标签页以节省内存。

## Features

## 功能特点

- Toggle tab discarding prevention with a single click
- Visual feedback through icon colors:
  - Black icon: Tab discarding is allowed (default)
  - Red icon: Tab discarding is prevented
- Automatically applies to all open tabs and new tabs
- Settings persist across browser restarts

- 一键切换标签页丢弃预防功能
- 通过图标颜色提供视觉反馈：
  - 黑色图标：允许标签页丢弃（默认状态）
  - 红色图标：阻止标签页丢弃
- 自动应用于所有打开的标签页和新标签页
- 设置在浏览器重启后仍然保持

## Installation

## 安装方法

1. Clone this repository or download the source code
2. Open Microsoft Edge and navigate to `edge://extensions/`
3. Enable "Developer mode" in the left sidebar
4. Click "Load unpacked" and select the extension directory

1. 克隆此仓库或下载源代码
2. 打开 Microsoft Edge 并访问 `edge://extensions/`
3. 在左侧边栏启用"开发人员模式"
4. 点击"加载解压缩的扩展"并选择扩展目录

## Usage

## 使用方法

1. Click the extension icon in the toolbar to toggle tab discarding prevention
   - Black icon means tab discarding is allowed (default state)
   - Red icon means tab discarding is prevented
2. The setting will automatically apply to all current and new tabs
3. Your preference is saved and will persist even after browser restart

1. 点击工具栏中的扩展图标来切换标签页丢弃预防功能
   - 黑色图标表示允许标签页丢弃（默认状态）
   - 红色图标表示阻止标签页丢弃
2. 设置将自动应用于所有当前和新的标签页
3. 您的偏好设置会被保存，即使在浏览器重启后也会保持

## Files

## 文件说明

- `manifest.json`: Extension configuration / 扩展配置
- `background.js`: Core functionality implementation / 核心功能实现
- `icon48_black.png`: Default icon (tab discarding allowed) / 默认图标（允许标签页丢弃）
- `icon48_red.png`: Active icon (tab discarding prevented) / 激活图标（阻止标签页丢弃）
- `icon128.png`: Large icon for extension store / 扩展商店用大图标

## License

## 许可证

MIT License / MIT 许可证
