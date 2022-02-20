import React from 'react';
import { Collapse, Grid } from 'antd';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

import styles from '../css/Faq.module.scss';

const faqs = [
  {
    question: 'How can I buy a robos?',
    answer: "Robos sold out in under a minute! They can still be bought on secondary markets",
  },
  {
    question: 'Do I own the robos after purchasing?',
    answer: 'Yes, full intellectual properties are given to the buyer.',
  },
  {
    question: "Which chain is it on?",
    answer: "This 2,500 Robos live on Solana. I chose Solana because the mint price will be relatively cheap. It wouldn't make sense to pay gas fees that are higher than the mint fee on Ethereum. Another reason why I chose Solana is because I'm bullish on it."
  }
]

function Faq() {
  const isMobile = Grid.useBreakpoint().xs;
  const firstHalf = faqs.slice(0, Math.ceil(faqs.length/2));
  const secondHalf = faqs.slice(Math.floor(faqs.length/2) + 1);

  const toCollapse = (faqArr: Array<{question: string, answer: React.ReactNode}>) => <div className={styles.item}><Collapse defaultActiveKey="How can I buy a robos?" ghost expandIcon={({isActive}) => {
    return <div className={styles.icon}>{isActive ? <MinusOutlined/> : <PlusOutlined/>}</div>;
  }}>
  {faqArr.map(faq => <Collapse.Panel className={styles.panel} key={faq.question} header={<b className={styles.question}>{faq.question}</b>}>
    <div className={styles.answer}>
      {faq.answer}
    </div>
  </Collapse.Panel>)}
  </Collapse>
  </div>;

  return (
    <div className={styles.container}>
      
      <div className={styles.description}>
      <h1 className='row'>FAQ</h1>
  
      {isMobile ? toCollapse(faqs) : <>
          {toCollapse(firstHalf)}
          {toCollapse(secondHalf)}
        </>}
      </div>
      
    </div>
  );
}

export default Faq;
