import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import textToSpeech from '../services/text-to-speech'

const playButtonColor = '#1A478B'

const Container = styled.div`
  font-size: 20px;
  flex: 1 0 30px;
`

const PlayButton = styled.a`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: inline-block;
  border: 2px solid ${playButtonColor};
  border-radius: 10px;
`

const PlayButtonArrow = styled.span`
  width: 0;
  height: 0;
  margin-left: 6px;
  margin-bottom: 4px;
  display: inline-block;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid ${playButtonColor};
`

const ResultAudio = ({ title, lang }) => {
  if (textToSpeech.isLanguageAvailable(lang)) {
    const playAudio = () => textToSpeech.play({ text: title, lang: lang })
    return (
      <Container>
        <PlayButton onClick={playAudio}><PlayButtonArrow /></PlayButton>
      </Container>
    )
  }

  return (
    <Container />
  )
}

ResultAudio.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
}

export default ResultAudio
