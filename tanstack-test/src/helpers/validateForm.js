export function validateForm(firstName, lastName, age) {
  if (!firstName.trim() || !lastName.trim() || !age || age < 18) return false
  return true
}
