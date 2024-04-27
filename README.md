# IFN666---Assessment-2---Web-Programming-Assignment

# GitHub Portfolio Application

## Purpose

The GitHub Portfolio application is designed to showcase software development projects from a GitHub user's repository. It provides a clean and interactive way to display detailed information about each project, including technologies used, project details, and links to live demonstrations or additional resources.

## How to Contribute

Contributions to the GitHub Portfolio application are welcome! Here's how you can contribute:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page.
2. **Clone the Fork**: `git clone https://github.com/your_username/github-portfolio.git`
3. **Create a New Branch**: `git checkout -b your-new-branch-name`
4. **Make Your Changes**: Implement the changes as you see fit.
5. **Commit Your Changes**: `git commit -am 'Add some feature'`
6. **Push to the Branch**: `git push origin your-new-branch-name`
7. **Submit a Pull Request**: Open a new pull request from your forked repository on GitHub.

Please make sure your code adheres to the existing style of the project to ensure consistency.

## Features

- Dynamic Repository Display: Fetches and displays repositories directly from GitHub using the GitHub API.
- Search Functionality: Allows users to filter repositories based on the programming language used.
- Responsive Design: Adapts gracefully to different device screens to ensure a seamless user experience across desktops, tablets, and mobiles.
- Error Handling: Gracefully handles and displays errors related to API requests or other issues.
- Secure: Implements environment variables to manage sensitive data like API keys.

## Dependencies

The project is built using React.js and utilizes several key dependencies:

- **React Router**: For handling in-app routing.
- **Reactstrap**: For Bootstrap-based components that are easy to use within React.
- **Font Awesome**: For icons used across the application.
- **Bootstrap**: For responsive layout and styling.
- **Dotenv**: To load environment variables from a `.env` file.

To install these dependencies, run:

- npm install

This command will install all the necessary packages listed in the package.json file, setting up the environment for development and production.

# Application Architecture

The application uses a typical React SPA architecture structured as follows:

- src: Contains all the source files.
- components: Reusable components such as headers, footers, and custom cards.
- hooks: Custom React hooks for fetching data.
- pages: Components that represent full pages (e.g., Home, About).
- context: Context API files for state management across components.
- assets: Static assets like images and stylesheets.
- public: Contains the index.html and other public assets.

It has several key components:

- App.js: The main component that routes to different parts of the application.
- Layout.js: Manages the layout and navigation of the application.
- Home.js, About.js, Resume.js, Portfolio.js: Individual pages within the application.
- ReposContext.js: Provides a React context for state management across components.
- GitHubAPI.js: Handles API requests to GitHub.
- fetchYoutubeVideos.js: Manages requests to the YouTube API for related video content.

## Reporting Issues

To report issues or suggest enhancements, please use the Issues section of this GitHub repository. Be sure to describe the issue or feature request in detail, and where applicable, include screenshots or code snippets that demonstrate the problem or improvement.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
