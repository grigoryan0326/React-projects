export function toCapitalized(word) {
  if (!word) return ""
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
