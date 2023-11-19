import { useState, useRef } from 'react';
import { FeedbackButtons } from './FeedbackButton/FeedbackButton';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  const totalFeedback = useRef(0);
  const percentagePositive = useRef(0);

  const handleGood = () => {
    setGood(Good + 1);
    countTotalFeedback();
    countPercentagePositive();
  };

  const handleNeutral = () => {
    setNeutral(Neutral + 1);
    countTotalFeedback();
    countPercentagePositive();
  };

  const handleBad = () => {
    setBad(Bad + 1);
    countTotalFeedback();
    countPercentagePositive();
  };

  const countTotalFeedback = () => {
    totalFeedback.current = Good + Neutral + Bad;
  };
  const countPercentagePositive = () => {
    percentagePositive.current = Math.round(
      (Good / totalFeedback.current) * 100
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <FeedbackButtons label={'Good'} onFeedback={handleGood} />
          <FeedbackButtons label={'Neutral'} onFeedback={handleNeutral} />
          <FeedbackButtons label={'Bad'} onFeedback={handleBad} />
        </div>
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={Good}
          neutral={Neutral}
          bad={Bad}
          total={totalFeedback.current}
          positivePercentage={percentagePositive.current}
        />
      </Section>
    </div>
  );
};
