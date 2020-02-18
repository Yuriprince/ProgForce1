import styled from 'styled-components';
import React from "react";

const Flex = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Paragraph = styled.p`
  list-style-type: none;
  font-size: 14px;
  letter-spacing: 0px;
  color: #464646;

  font-size: 14px;
  flex-grow: 1;
  max-width: 375px;

  @media (max-width: 1000px) {
    padding: 0;
    width: inherit;
  }
`;

const Paragraph1 = styled(Paragraph)`
  justify-content: flex-start;
  padding-right: 20px;
`;

const Paragraph2 = styled(Paragraph)`
  justify-content: flex-end;
  padding-left: 20px;

  @media all and (max-width: 1000px) {
    padding-top: 20px;
  }
`;

const ParagraphAboutCompany = () => {
  return (
    <Flex>
      <Paragraph1>
        Компания "Пиксель Плюс" существует более 6 лет,
        за это время мы принимали
        участие в разработке более чем 700 сайтов,
        поэтому можем уверенно называть
        себя профессионалами. 
        На данный момент наш коллектив состоит 
        из более чем 30 сотрудников, работающих 
        в двух офисах, которые
        расположены в Москве и Зеленограде.
      </Paragraph1>

      <Paragraph2>
        Одним из основных направлений работ 
        нашей компании является 
        поисковое продвижение сайтов, 
        на данный момент
        мы работаем с более чем 150 
        постоянными клиентами по более чем 11 000 
        поисковым запросам. При этом в работе основной 
        акцент мы делаем на 
        качестве работ, а также применяем собственные у
        никальные разработки в области 
        в области SEO продвижения. На данный момент отдел SEO 
        состоит из 9 человек, 
        преимущественно работающих в нашем московском офисе 
        под руководством ведущего специалиста.
      </Paragraph2>
    </Flex>
  );
}

export default ParagraphAboutCompany;