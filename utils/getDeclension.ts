export const getDeclension = (number: number, words: [string, string, string]) => {
    const absNumber = Math.abs(number) % 100;
    const lastDigit = absNumber % 10;
    if (absNumber > 10 && absNumber < 20) return words[2];
    if (lastDigit > 1 && lastDigit < 5) return words[1];
    if (lastDigit === 1) return words[0];
    return words[2];
  };