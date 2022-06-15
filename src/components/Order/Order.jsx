import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import CheckMark from '../../img/check-mark.png';
import Cake from '../../img/order-cake.png';
import Button from './../aditional/Button/Button';
import styles from './Order.module.scss';

const Order = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('RESULT', data);
    alert(JSON.stringify(data));
    reset();
    setIsChecked(false);
  };

  console.log(errors);

  const getInputNumbersValue = (input) => {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };

  const onPhoneInput = (e) => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '',
      selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      //Rus
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';

      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      // notRus
      formattedInputValue = input.value = '+' + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e) => {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  };

  const onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  const productImageRegister = register('phoneNumber', { required: 'Введите Телефон' });

  return (
    <div className={styles.order}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <div className={styles.body}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            {...register('name', { required: 'Введите Имя', maxLength: 20 })}
            type="text"
            placeholder="Имя"
            className={errors?.name && styles.error}
          />
          {errors?.name && <span className={styles.error}>{errors.name.message}</span>}

          <input
            {...productImageRegister}
            type="phoneNumber"
            placeholder="Телефон"
            onKeyDown={onPhoneKeyDown}
            onPaste={onPhonePaste}
            onChange={(e) => {
              productImageRegister.onChange(e);
              onPhoneInput(e);
            }}
            className={errors?.phoneNumber && styles.error}
          />
          {errors?.phoneNumber && (
            <span className={styles.error}>{errors.phoneNumber.message}</span>
          )}

          <input
            {...register('email', {
              required: 'Введите E-mail',
              pattern: {
                value:
                  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                message: 'Пожалуйста введите валидный e-mail',
              },
            })}
            type="email"
            placeholder="E-mail"
            className={errors?.email && styles.error}
          />
          {errors?.email && <span className={styles.error}>{errors.email.message}</span>}

          <Controller
            name="check"
            control={control}
            rules={{ required: 'Требуется соглашение' }}
            render={({ field }) => (
              <label {...field} className={styles.checkboxWrapp}>
                <input
                  className={styles.inputCheckbox}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                {!isChecked ? (
                  <span className={styles.checkbox}></span>
                ) : (
                  <img className={styles.checked} src={CheckMark} alt="CheckMark" />
                )}
                <p className={styles.checkBoxText}>
                  Я согласен(-на) на обработку моих персональных данных{' '}
                </p>
                {errors?.check && <span className={styles.error}>{errors.check.message}</span>}
              </label>
            )}
          />

          <Button />
        </form>

        <img className={styles.cake} src={Cake} alt="Cake" />
      </div>
    </div>
  );
};

export default Order;
