# DialogFlow Agent Demo - CAFY Assistant

A complete React application that demonstrates integration with DialogFlow agents through a modern, responsive interface.

## Features

- **Responsive Design**: Mobile-first approach with full responsive support
- **Modern UI**: Clean, accessible interface with smooth animations
- **DialogFlow Ready**: Structured for easy DialogFlow integration
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Optimized for fast loading and smooth interactions

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd dialogflow-agent-demo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## DialogFlow Integration

To integrate with your actual DialogFlow agent:

1. Replace the demo chat logic in `src/components/pages/ChatbotDemo/ChatbotDemo.js`
2. Use your DialogFlow agent's embed URL or implement the DialogFlow SDK
3. Your agent URL format: `https://console.dialogflow.com/api-client/demo/embedded/YOUR-AGENT-ID`

### Example Integration

```javascript
// In ChatbotDemo.js, replace the setTimeout simulation with:
const sendToDialogFlow = async (message) => {
	// Implement your DialogFlow integration here
	// Using REST API, SDK, or iframe communication
};
```

## Customization

### Colors

The app uses CSS custom properties defined in `src/index.css`. Current color scheme:

- Primary: `#4f6ed4`
- Primary Dark: `#263b7f`
- Mint: `#cce9e4`
- Peach: `#ffb3a8`
- Coral: `#de6957`

## Project Structure

```

```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Built with ❤️ using React and modern web technologies.
