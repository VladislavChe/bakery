import styles from './Button.module.scss';

const Button = ({ isSending }) => {
  return (
    <div className={`${styles.btn} ${isSending ? styles[`btn--sending`] : ''}`}>
      <button type="submit">
        {isSending ? (
          <img src={require('../../../img/sending.gif')} alt="sending-icon" />
        ) : (
          'Заказать'
        )}
      </button>
    </div>
  );
};

export default Button;
