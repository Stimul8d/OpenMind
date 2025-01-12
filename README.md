# OpenMind

A distraction-free space for meaningful insights. No empty platitudes, no Instagram philosophy - just wisdom that actually helps.

## Core Features

- Clean, minimalist interface
- Floating background animations
- Curated quotes from diverse sources
- Category-based filtering
- Mobile-first design

## Tech Stack

- React 18 + Vite
- Tailwind CSS for styling
- Framer Motion for transitions
- GitHub Pages for deployment

## Project Structure

```
src/
├── components/
│   ├── FloatingShapes.jsx  # Background animation
│   ├── Header.jsx          # Site title
│   ├── QuoteContainer.jsx  # Quote display & cycling
├── data/
│   └── quotes/
│       ├── categories/     # Quote collections
│       │   ├── comedy.js
│       │   ├── epistemology.js
│       │   ├── historical.js
│       │   ├── indigenous.js
│       │   ├── literature.js
│       │   ├── medical.js
│       │   ├── mental_models.js
│       │   ├── modern_pragmatists.js
│       │   ├── outsiders.js
│       │   ├── religion/
│       │   ├── science.js
│       │   ├── sport.js
│       │   ├── survival.js
│       │   └── systems.js
│       └── index.js        # Quote aggregation
├── utils/
│   └── quoteManager.js     # Quote selection logic
├── App.jsx                 # Main app wrapper
└── main.jsx               # Entry point
```

## Running Locally

```bash
# Clone the repository
git clone git@github.com:stimul8d/OpenMind.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Quote Categories

Our quotes come from several key areas:

1. Philosophical & Scientific
   - Epistemology
   - Mental Models
   - Scientific Method
   - Systems Thinking

2. Historical & Cultural
   - Indigenous Wisdom
   - Historical Figures
   - Religious Texts (secular perspective)
   - Cultural Insights

3. Modern & Practical
   - Medical Knowledge
   - Sports Psychology
   - Survival Stories
   - Modern Pragmatists

4. Creative & Alternative
   - Comedy & Humour
   - Literature
   - Outsider Perspectives
   - Alternative Viewpoints

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

Requirements:
- Must be properly attributed
- Should help with real problems
- Needs clear context
- No mystical/religious requirements
- Verifiable source where possible

### Code Contributions

Priority areas:
- Quote categorisation improvements
- Mobile optimisation
- Accessibility enhancements
- Performance tweaks

## Performance Considerations

The app is intentionally lightweight:
- No heavy frameworks
- Minimal dependencies
- Static hosting
- Client-side only

## Browser Support

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT - Use it however you want.

## Roadmap

Planned features:
1. Search functionality
2. Quote sharing
3. Category filtering
4. Dark/light themes
5. Offline support

## Contact

Issues and PRs welcome via GitHub.
