import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: 20px;
`
export const FlexRow = styled.div`
  display: flex;
`
const slowTransition = 'opacity 0.3s linear, visibility;'
const noTransition = 'opacity 0s linear, visibility;'

export const SmoothContainer = styled.div`
  & > *:first-child {
    display: ${({ visible }) => visible ? 'block' : 'none'};
    height: ${({ visible }) => visible ? 'initial' : '0'};
    opacity: ${({ visible }) => visible ? '1' : '0'};
    transition: ${({ visible }) => visible ? slowTransition : noTransition};
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  }
`
