import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import ResultName from './result-name'
import ResultAudio from './result-audio'
import ResultLink from './result-link'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`

const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Audios = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Links = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const LoadingContainer = styled.div`
  padding-left: 60px;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type='cylon' color='#444' height={80} width={120} delay={250} />
    </LoadingContainer>
  )
}

const NoResults = () => {
  return (
    <Container>
      No result for the selected language.
    </Container>
  )
}

const Results = ({ langLinks, loading }) => {
  if (loading) {
    return <Loading />
  }

  if (langLinks.length < 1) {
    return null
  }

  const validLinks = langLinks.filter(l => l)

  if (validLinks.length === 0) {
    return <NoResults />
  }

  return (
    <Container>
      <Names>
        {
          validLinks.map(link => <ResultName key={link.url} lang={link.autonym} />)
        }
      </Names>
      <Audios>
        {
          validLinks.map(link => <ResultAudio key={link.url} title={link.title} lang={link.lang} />)
        }
      </Audios>
      <Links>
        {
          validLinks.map(link => <ResultLink key={link.url} title={link.title} url={link.url} />)
        }
      </Links>
    </Container>
  )
}

Results.propTypes = {
  langLinks: PropTypes.arrayOf(PropTypes.shape({
    autonym: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  })).isRequired,
  loading: PropTypes.bool.isRequired
}

export default Results
