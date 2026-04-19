# ✨ CodeFlow Studio - Modern Online Text Editor

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-14+-green.svg)
![Express](https://img.shields.io/badge/express-4.x-lightgrey.svg)
![License](https://img.shields.io/badge/license-MIT-purple.svg)

> 🚀 A beautiful, modern, and feature-rich online code editor with syntax highlighting, multi-file support, and real-time auto-save.

## 🌟 Features

### 🎨 Beautiful Interface
- Glassmorphism design with animated particle background
- Smooth animations and transitions
- Modern gradient color scheme
- Fully responsive layout

### 💻 Powerful Editor
- Syntax Highlighting for 15+ programming languages
- Dracula theme with vibrant colors
- Auto-closing tags and brackets
- Line numbers and matching brackets
- Tab indentation support

### 📁 File Management
- Create, save, delete, and switch between multiple files
- Automatic file type detection based on extension
- Visual file icons for different file types
- Local storage persistence

### ⚡ Smart Features
- Auto-save every 2 seconds
- Keyboard shortcuts (Ctrl+S to save, Ctrl+N for new file)
- Line and character counter
- Download files to your computer

### 🎯 Language Support

| Language | Extension | Icon |
|----------|-----------|------|
| JavaScript | .js | 🟨 |
| HTML | .html | 🌐 |
| CSS | .css | 🎨 |
| Python | .py | 🐍 |
| Java | .java | ☕ |
| C++ | .cpp | ⚙️ |
| C# | .cs | 🔷 |
| PHP | .php | 🐘 |
| Ruby | .rb | 💎 |
| Go | .go | 🚀 |
| JSON | .json | 📦 |
| XML | .xml | 📄 |
| Markdown | .md | 📝 |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
   git clone https://github.com/amt278/code-editor.git
   cd code-editor

2. Install dependencies
   npm install express

3. Run the server
   node server.js

4. Open your browser
   http://localhost:3000

## 📁 Project Structure
``` bash
code-editor/
│
├── server.js              # Express server with API endpoints
├── index.html            # Modern landing page
├── editor.html           # Full-featured code editor
├── package.json          # Project dependencies
└── README.md            # Documentation
```

## 🎮 Usage Guide

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + S | Save current file |
| Ctrl + N | Create new file |
| Tab | Insert 4 spaces |

## 🔧 API Endpoints
``` http
GET    /api/data     // Get all saved names
POST   /api/data     // Add a new name
DELETE /api/delete   // Remove a name
```

## 🛠️ Built With

- Express.js - Backend web framework
- CodeMirror - Professional syntax highlighting
- Node.js - JavaScript runtime
- HTML5/CSS3 - Modern animations

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- CodeMirror for the amazing editor
- Express.js for the robust backend
- Dracula Theme for the beautiful colors

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ and lots of ☕