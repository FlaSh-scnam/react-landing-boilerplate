import React, { ReactElement, useState } from 'react'
import styled from "styled-components"
import { Container } from '../Styled/Layout';
import { cssBreakPoint } from '../../styles/constant'

interface ListProps {
  contents: {
    id: string,
    title: string,
    description: string,
  }[]
}

const List = styled.div`
  font-family: NotoSansKR;
  padding: 1.5rem;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  display: flex;
  justify-content: space-between;
  & .title {
    display: flex;
  }
  & .number {
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.54px;
    color: var(--cornflower);
    margin-right: 1rem;
  }
`
const Detail = styled.div`
  padding: 2rem 4rem;
  background-color: var(--pale-lilac);
  line-height: 1.5;
  letter-spacing: -0.8px;
  font-size: 16px;
  font-family: NotoSansKR;
  color: var(--greyish-brown);
  display: none;
  & p:nth-child(2) {
    color: var(--cornflower);
    margin-top: 1.5rem;
  }
`
const FaqList = ({ contents }: ListProps) => {
  const handleClick = (e: React.MouseEvent): void =>  {
    const clicked = e.target as HTMLElement
  }
  return(
    contents.map((item, index)=>
      <div key={item.id}>
        <List className="list" onClick={handleClick} id={item.id}>
          <div className="title">
            <span className="number">Q{index + 1}</span>
            <span>{item.title}</span>
          </div>
          <div>
            <img src="./static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
          </div>
        </List>
        <Detail>
          <p>
            {item.description}<br/>
          </p>
          <p>
            <a href="https://biz.lever.me/signup" className="lever-signup">회원가입 하러가기</a>
          </p>
        </Detail>
      </div>
    )
  )
}

export default FaqList