import React from 'react';
import { Collapse, Grid } from 'antd';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

import styles from '../css/Faq.module.scss';

const faqs = [
  {
    question: 'What is Chippies?',
    answer: "Chippies is an AI tool that distributes analytics on every project using Sentimental Analysis as well as including a full organization tool for your transactions in the Solana ecosystem",
  },
  {
    question: 'When is the mint date?',
    answer: 'TBA',
  },
  {
    question: "What is the mint price and supply?",
    answer: "1.25 sol, 1234 Chippies supply"
  },
  {
    question: "Where do funds go?",
    answer: "Funds and royalties will be distributed back to our project bank, which will go towards phase 2 of our generative adversarial network project as well as our tokenomics plans. Money will be spent on accelerating our hardware systems and infrastructures for larger Deep Learning models"
  },
  {
    question: "Who is behind it?",
    answer: "Our team consists of an entrepreneur in Solana blockchain, a Product Manager, an artist, and 5 enthusiastic engineers at top tech companies"
  },
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
