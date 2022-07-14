import styles from './Button.module.scss';

const Button = ({ isSending }) => {
  return (
    <>
      <button
        className={`${styles.btn} ${isSending ? styles[`btn--sending`] : ''}`}
        type="submit"
        disabled={isSending && true}>
        {isSending ? (
          <img src={require('../../../img/sending.gif')} alt="sending-icon" />
        ) : (
          'Заказать'
        )}
      </button>
    </>
  );
};

export default Button;
