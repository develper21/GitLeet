<h1 align="center">
  <img src="assets/octocode.png" alt="GitLeet - Sync your LeetCode & GFG solutions to GitHub" width="200">
  <br>
  GitLeet
</h1>

<h4 align="center">Automatically sync your LeetCode & GeeksforGeeks solutions to GitHub. Build your portfolio while you code.</h4>

<p align="center">
  <a href="#license">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/chrome-v88+-googlechrome.svg?style=flat-square&logo=google-chrome&logoColor=white" alt="Chrome">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/platform-LeetCode%20%7C%20GeeksforGeeks-orange.svg?style=flat-square" alt="Platforms">
  </a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#installation">Installation</a>
</p>

---

## 🚀 Introduction

**GitLeet v2.0** is a premier browser extension designed for developers who want to showcase their problem-solving skills without the hassle of manual tracking. It seamlessly integrates your **LeetCode** and **GeeksforGeeks** submissions directly into a personal **GitHub** repository.

**🆕 Manifest V3 Compatible**: Fully updated to work with the latest Chrome extension standards for enhanced security and performance.

In today's competitive tech landscape, your GitHub profile is your resume. GitLeet ensures every problem you solve contributes to your activity graph, building a robust portfolio of algorithms and data structures automatically.

## ✨ Key Features

*   **Automatic Syncing**: Instantly pushes your code to GitHub when you pass all test cases.
*   **Dual Platform Support**: Works flawlessly with both **LeetCode** and **GeeksforGeeks**.
*   **Set & Forget**: Once configured, it runs in the background. Focus on solving problems, not managing files.
*   **Smart Organization**: Automatically organizes problems by difficulty and category in your repository.
*   **Performance**: Lightning-fast execution using modern browser APIs (<400ms overhead).

## 🛠 How It Works

1.  **Solve**: Complete a problem on LeetCode or GeeksforGeeks.
2.  **Verify**: Ensure all test cases pass.
3.  **Sync**: GitLeet detects the success and automatically commits your solution (code + problem description) to your linked GitHub repository.

## 📦 Getting Started

### Installation

> **Note**: GitLeet v2.0 is now Manifest V3 compatible and works with modern Chrome browsers.

1.  **Clone** this repository to your local machine.
    ```bash
    git clone https://github.com/yourusername/GitLeet.git
    ```
2.  Open your browser (Chrome/Brave/Edge) and navigate to `chrome://extensions`.
3.  Enable **Developer Mode** (toggle in the top right corner).
4.  Click **Load Unpacked**.
5.  Select the `GitLeet` folder you just cloned.
6.  Install dependencies:
    ```bash
    cd GitLeet
    npm install
    ```

### Configuration

1.  Click the GitLeet extension icon in your browser toolbar.
2.  Select **"Authorize with GitHub"** to link your account.
3.  Choose to create a **new repository** (e.g., `my-leetcode-solutions`) or link an **existing one**.
4.  That's it! Start coding on LeetCode or GFG, and watch your GitHub activity grow.

## 🤝 Contributing

We welcome contributions to make GitLeet even better!

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

### Local Development Setup

To modify the extension code:

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Use standard npm commands:
    ```bash
    npm run lint       # Check for style issues
    npm run format     # Auto-format code
    ```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <sub>Built with ❤️ for the developer community.</sub>
</p>
