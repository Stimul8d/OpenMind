# OpenMind

A distraction-free space for meaningful insights. No empty platitudes, no Instagram philosophy - just wisdom that actually helps.

## Why?

Finding genuine wisdom is harder than it should be. This project cuts through the noise by collecting insights that:
- Actually solve real problems
- Work regardless of your beliefs
- Have stood the test of time
- Combat anxiety, depression and existential worry

## Running Locally

```bash
# Clone the repository
git clone git@github.com:stimul8d/OpenMind.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Quote.jsx           # Quote display component
│   ├── QuoteContainer.jsx  # Manages quote cycling
│   └── Logo.jsx           # Site branding
├── data/
│   └── quotes/
│       ├── categories/    # Quote sources
│       │   ├── survival.js
│       │   ├── science.js
│       │   ├── religion/
│       │   │   ├── buddhism.js
│       │   │   └── taoism.js
│       │   └── ... more categories
│       └── index.js      # Combines sources
├── utils/
│   └── quoteManager.js   # Quote selection logic
├── App.jsx
└── main.jsx
```

## Categories

Drawing from multiple sources:

1. Philosophy & Thought
   - Ancient Stoics
   - Eastern Philosophy
   - Modern Thinkers
   - Outsiders & Critics

2. Science & Method
   - Physicists
   - Biologists
   - Systems Thinkers
   - Medical Insights

3. Experience & Survival
   - Mountain Climbers
   - War Survivors
   - Crisis Leaders
   - Emergency Responders

4. Creative & Arts
   - Writers
   - Musicians
   - Comedians
   - Film & Theatre

## Contributing

### Adding Quotes

Add quotes to `src/data/quotes/categories/`. Each quote needs:

```javascript
{
  text: "The actual quote",
  source: "Who said it",
  context: "Why it matters/when it was said",
  tags: ["relevant", "tags"]
}
```

Guidelines:
- Must be properly attributed
- Should help with real problems
- Needs clear context
- No mystical/religious requirements

### Code Contributions

Focus areas:
- Better quote categorisation
- Improved transitions
- Thoughtful colour schemes
- Mobile optimisation

## Tech Stack

- React + Vite
- Framer Motion for transitions
- Tailwind CSS
- GitHub Pages

## License

MIT - do what you want with it.