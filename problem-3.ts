function countWordOccurrences(sentence: string, word: string) {
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();

  const arrayOfWords = lowerSentence.split(/\s+/);
  const result = arrayOfWords.filter((words) => words === lowerWord).length;
  return result;
}
