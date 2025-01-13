import { survivalQuotes } from './survival'
import { scienceQuotes } from './science'
import { religionQuotes } from './religion'
import { sportQuotes } from './sport'
import { mentalModelQuotes } from './mental_models'
import { outsiderQuotes } from './outsiders'
import { literatureQuotes } from './literature'
import { modernPragmatistQuotes } from './modern_pragmatists'
import { historicalQuotes } from './historical'
import { indigenousQuotes } from './indigenous'
import { comedyQuotes } from './comedy'
import { medicalQuotes } from './medical'
import { systemsQuotes } from './systems'
import { epistemologyQuotes } from './epistemology'
import { businessQuotes } from './business'
import { buddhismQuotes } from './buddhism'
import { taoismQuotes } from './taoism'
import { artistQuotes } from './artists'
import { engineerQuotes } from './engineers'
import { ancientQuotes } from './ancient'

// Add categories to each quote array
const addCategory = (quotes, category) => quotes.map(quote => ({ ...quote, category }))

const allQuotes = [
  ...addCategory(survivalQuotes, "Survival"),
  ...addCategory(scienceQuotes, "Science"),
  ...addCategory(religionQuotes, "Religion"),
  ...addCategory(sportQuotes, "Sport Psychology"),
  ...addCategory(mentalModelQuotes, "Mental Models"),
  ...addCategory(outsiderQuotes, "Outsider Wisdom"),
  ...addCategory(literatureQuotes, "Literature"),
  ...addCategory(modernPragmatistQuotes, "Modern Pragmatism"),
  ...addCategory(historicalQuotes, "Historical Wisdom"),
  ...addCategory(indigenousQuotes, "Indigenous Wisdom"),
  ...addCategory(comedyQuotes, "Comedy"),
  ...addCategory(medicalQuotes, "Medical"),
  ...addCategory(systemsQuotes, "System Thinking"),
  ...addCategory(epistemologyQuotes, "Epistemology"),
  ...addCategory(businessQuotes, "Business"),
  ...addCategory(buddhismQuotes, "Buddhism"),
  ...addCategory(taoismQuotes, "Taoism"),
  ...addCategory(artistQuotes, "Art"),
  ...addCategory(engineerQuotes, "Engineering"),
  ...addCategory(ancientQuotes, "Ancient Wisdom")
]

export default allQuotes