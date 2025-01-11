import { survivalQuotes } from './categories/survival'
import { scienceQuotes } from './categories/science'
import { buddhismQuotes } from './categories/religion/buddhism'
import { taoismQuotes } from './categories/religion/taoism'
import { sportQuotes } from './categories/sport'
import { mentalModelQuotes } from './categories/mental_models'
import { outsiderQuotes } from './categories/outsiders'
import { literatureQuotes } from './categories/literature'
import { pragmatistQuotes } from './categories/modern_pragmatists'
import { historicalQuotes } from './categories/historical'
import { indigenousQuotes } from './categories/indigenous'
import { comedyQuotes } from './categories/comedy'

const allQuotes = [
  ...survivalQuotes,
  ...scienceQuotes,
  ...buddhismQuotes,
  ...taoismQuotes,
  ...sportQuotes,
  ...mentalModelQuotes,
  ...outsiderQuotes,
  ...literatureQuotes,
  ...pragmatistQuotes,
  ...historicalQuotes,
  ...indigenousQuotes,
  ...comedyQuotes
]

export default allQuotes