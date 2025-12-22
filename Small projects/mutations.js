function mutation(array) {
  let firstElement = array[0].toLowerCase();
  let secondElement = array[1].toLowerCase();

  for (let char of secondElement) {
    if (!firstElement.includes(char)) {
      return false;
    }
  }
  return true;
}
