import React, { ReactElement } from 'react'
import styled from "styled-components"
import { cssBreakPoint } from '../../styles/constant'
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const Wrapper = styled.div`
  text-align: center;
`
const H1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -2.5px;
  color: var(--black);
  margin: 0;
`
const P = styled.p`
  margin-top: 0.5rem;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: -0.9px;
  color: var(--greyish-brown);
`
const Span = styled.span`
  @media (max-width: ${cssBreakPoint.tablet}) {
    display: block;
  }
`
const IntroduceTitle = (): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0)
  return(
    <Wrapper {...animation}>
      <H1>레버 서비스 소개</H1>
      <P>디지털 마케팅의 어려움을 잘 알고 있는 레버<br/>
        <Span>AI 알고리즘+마케팅 전문가로&nbsp;</Span><Span>여러분의 어려움을 해결해드립니다.</Span>
      </P>
    </Wrapper>
  )
}

export default IntroduceTitle