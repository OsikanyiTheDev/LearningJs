function maskEmail(email) {
  const index = email.indexOf('@');

  // If no '@' or email is too short (e.g., "a@b.com"), return as-is
  if (index <= 1) {
    return email;
  }

  const firstCharacter = email[0];
  const star = '*';
  const no_of_stars = star.repeat(index - 2);
  const domain_name = email.slice(index - 1);
  const hashed_email = firstCharacter + no_of_stars + domain_name;

  return hashed_email;
}