const languageMappings = {
  ca: 'ca-es',
  zh: 'zh-cn',
  da: 'da-dk',
  nl: 'nl-nl',
  en: 'en-gb',
  fi: 'fi-fi',
  fr: 'fr-fr',
  de: 'de-de',
  it: 'it-it',
  ja: 'ja-jp',
  ko: 'ko-kr',
  nb: 'nb-no',
  pl: 'pl-pl',
  pt: 'pt-pt',
  ru: 'ru-ru',
  es: 'es-es',
  sv: 'sv-se'
}

function isLanguageAvailable (lang) {
  return !!languageMappings[lang]
}

function play ({ text, lang }) {
  const params = {
    key: 'ed10cf8e50fb44d99aa70d7d3061226f',
    src: text,
    hl: languageMappings[lang],
    f: '16khz_16bit_stereo'
  }

  const query = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  new Audio(`https://api.voicerss.org/?${query}`).play()
}

export default {
  isLanguageAvailable,
  play
}
