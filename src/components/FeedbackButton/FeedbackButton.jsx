import css from './FeedbackButton.module.css';
import PropTypes from 'prop-types';

export const FeedbackButtons = ({ label, onFeedback }) => (
  <div className={css.buttons}>
    <button className={css.btn} onClick={() => onFeedback()}>
      {label}
    </button>
  </div>
);

FeedbackButtons.propTypes = {
  label: PropTypes.string.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
