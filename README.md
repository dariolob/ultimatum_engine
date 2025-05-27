# Ultimatum Engine

An AI-powered old-school text adventure RPG game engine, made only in frontend (JS/HTML/CSS).

## Features

- **Pure Frontend Implementation**: Built with JavaScript, HTML, and CSS
- **Google Authentication**: Secure user login system using Firebase
- **Character Creation System**: Basic character creation with name and gender selection (can be expanded to include classes, etc)
- **Save/Load Functionality**: 
- **Terminal-Style Interface**:
- **Audio System** (background music support):
- **Responsive Design**:

## Technical Stack

- **Frontend Framework**: jQuery + jQuery.terminal
- **Authentication**: Firebase Authentication
- **Analytics**: Firebase Analytics
- **Data Storage**: Local Storage for session persistence
- **External APIs**: Google Cloud (Gemini API) for AI interactions

No backend required for this project. Everything is handled in the frontend and runs in the user's browser.

## Project Structure

```plaintext
├── index.html          # Main application entry point
├── style.css          # Overall styling
├── terminal-config.js # Terminal emulation settings and game logic
├── firebase.js       # Firebase configuration and auth handling
├── privacy.js        # Privacy policy modal functionality
└── README.md         # Documentation
```

## Getting Started

### Prerequisites

- Modern web browser
- Firebase account for authentication
- Google Cloud API key (for Gemini AI integration)

### Configuration

1. Set up Firebase:
   - Replace the Firebase configuration in `firebase.js` with your credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       // ... other Firebase config
   };
   ```

2. Configure API Keys:
   - Add your Gemini API key in `terminal-config.js`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ultimatum_engine.git
```

2. Open `index.html` in your web browser or deploy to a web server.

## Usage

1. **Login**: Use the Google authentication to log in
2. **Character Creation**: Create your character with a name and gender
3. **Game Commands**:
   - Type 'start' to begin the adventure
   - Type 'help' for available commands
4. **Save/Load**:
   - Use the SAVE button to export your game progress
   - Use the LOAD button to import a saved game file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue.

        