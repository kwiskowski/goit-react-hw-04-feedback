import css from './FeedbackButton.module.css';
import PropTypes from 'prop-types';

export const FeedbackButtons = ({ options, onFeedback }) => (
  <div className={css.buttons}>
    {options.map(option => (
      <button
        className={css.btn}
        key={option}
        onClick={() => onFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
