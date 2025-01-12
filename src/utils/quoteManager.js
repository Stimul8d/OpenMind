class QuoteManager {
  static instance = null;
  static quotes = null;

  constructor(quotes) {
    if (QuoteManager.instance) {
      return QuoteManager.instance;
    }

    if (quotes !== QuoteManager.quotes) {
      this.allQuotes = this.shuffle([...quotes]);
      this.currentIndex = 0;
      QuoteManager.quotes = quotes;
    }

    QuoteManager.instance = this;
  }

  getNext() {
    const quote = this.allQuotes[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.allQuotes.length;
    return quote;
  }

  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

export default QuoteManager;