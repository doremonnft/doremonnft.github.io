import React from 'react';
import { Collapse, Grid } from 'antd';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

import styles from '../css/Faq.module.scss';

const faqs = [
  {
    question: 'Supply?',
    answer: "1234",
  },
  {
    question: 'Mint price?',
    answer: 'Undecided',
  },
  {
    question: "Which chain?",
    answer: "Solana"
  }
]

function Faq() {
  const isMobile = Grid.useBreakpoint().xs;
  const firstHalf = faqs.slice(0, Math.ceil(faqs.length / 2));
  const secondHalf = faqs.slice(Math.floor(faqs.length / 2) + 1);

  const toCollapse = (faqArr: Array<{ question: string, answer: React.ReactNode }>) => <div className={styles.item}><Collapse ghost expandIcon={({ isActive }) => {
    return <div className={styles.icon}>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>;
  }}>
    {faqArr.map(faq => <Collapse.Panel className={styles.panel} key={faq.question} header={<b className={styles.question}>{faq.question}</b>}>
      <div className={styles.answer}>
        {faq.answer}
      </div>
    </Collapse.Panel>)}
  </Collapse>
  </div>;

  return (
    <div className={styles.top}>
      <h1 className={styles.title}>FAQ</h1>

      <div className={styles.container}>

        <div className={styles.description}>

          {isMobile ? toCollapse(faqs) : <>
            {toCollapse(firstHalf)}
            {toCollapse(secondHalf)}
          </>}
        </div>

      </div>
    </div>
  );
}

export default Faq;
