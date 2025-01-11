// Handles quote selection and randomisation
class QuoteManager {
  constructor(quotes) {
    this.allQuotes = quotes
    this.unusedQuotes = [...quotes]
    this.reset()
  }

  reset() {
    this.unusedQuotes = [...this.allQuotes]
    this.shuffle(this.unusedQuotes)
  }

  getNext() {
    if (this.unusedQuotes.length === 0) {
      this.reset()
    }
    return this.unusedQuotes.pop()
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }
}

export default QuoteManager