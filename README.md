# Ultimatum Engine

An AI-powered old-school text adventure RPG game engine, made only in frontend (JS/HTML/CSS).

⚠ DISCLAIMER: This is a technical demonstration made to see to what extent the capabilities of a frontend-only application can be used to create an interactive and immersive game experience. It's messy and may break easily if you start tinkering with it. It's also not very polished (a nice way of saying it's full of shitty code), so be warned.

## Features and tech stack

- **Pure frontend Implementation, no backend required**: Built with JavaScript, HTML, and CSS
- **AI-Powered Narrative System**: Utilizes the Google Gemini API for AI-driven gameplay
- **Google Authentication**: Secure user login system using Firebase APIs
- **Save/Load Functionality**
- **Terminal-Style retro interface using jQuery Terminal**: (https://terminal.jcubic.pl)
- **Basic audio system** (background music support)
- **Responsive Design**:

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
- A code editor
- Some basic frontend development knowledge (possibily more than mine)
- Firebase account for authentication
- Google Cloud API key

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

3. Have fun!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request and/or using the issue tracker.

## License

This project is open source and available under the MIT License.

