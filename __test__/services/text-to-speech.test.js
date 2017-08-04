import textToSpeech from '../../src/services/text-to-speech'

test('isLanguageAvailable for known language returns true', () => {
  const actual = textToSpeech.isLanguageAvailable('en')
  expect(actual).toBe(true)
})

test('isLanguageAvailable for unknown language returns false', () => {
  const actual = textToSpeech.isLanguageAvailable('xxx')
  expect(actual).toBe(false)
})
