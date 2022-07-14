import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as CheckMark } from '../../img/check mark.svg';
import { ReactComponent as Ok } from '../../img/ok.svg';
import Cake from '../../img/order-cake.png';
import Modal from '../aditional/Modal/Modal';
import Button from './../aditional/Button/Button';
import styles from './Order.module.scss';

const Order = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const form = React.useRef();

  const async_func = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Sending...');
      }, 2000);
    });
  };

  const onSubmit = async (data) => {
    console.log('RESULT', data);

    setIsSending(true);
    console.log('Start');

    const result = await async_func();
    console.log(result);

    console.log('End');
    setShowModal(true);
    setIsChecked(false);
    reset();
    setIsSending(false);

    // const form = document.getElementById('form');

    // let formData = new FormData(form);
    // setIsSending(true);
    // let response = await fetch('../../sendmail.php', {
    //   method: 'POST',
    //   body: formData,
    // });
    // if (response.ok) {
    //   let result = await response.json();
    //   setShowModal(true);
    //   setIsChecked(false);
    //   reset();
    //   setIsSending(false);
    // } else {
    //   alert('Ошибка');
    // }
  };

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

  const phoneNumberRegister = register('phoneNumber', {
    required: 'Введите Телефон *',
    minLength: 17,
    message: 'Пожалуйста введите валидный Телефон *',
  });

  const inputClassName = (name) => {
    return errors?.[name]
      ? styles.error
      : getValues(name) && !errors?.[name]
      ? styles.correct
      : null;
  };

  return (
    <div className={styles.order}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <div className={styles.body}>
        <form
          ref={form}
          action="#"
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} ${isSending && styles.sending}`}>
          <label htmlFor="name">
            <input
              {...register('name', {
                required: 'Введите Имя *',
                minLength: 2,
                pattern: {
                  value: /^\S+$/,
                  message: 'Пожалуйста введите валидное Имя *',
                },
              })}
              type="text"
              id="name"
              placeholder="Имя"
              name="name"
              className={inputClassName('name')}
            />
            {getValues('name') && !errors?.name ? <Ok className={styles.ok} /> : null}
            {/* {errors?.name && <span className={styles.errorMsg}>{errors.name.message}</span>} */}
          </label>

          <label htmlFor="phoneNumber">
            <input
              {...phoneNumberRegister}
              id="phoneNumber"
              type="phoneNumber"
              placeholder="Телефон"
              name="phoneNumber"
              onKeyDown={onPhoneKeyDown}
              onPaste={onPhonePaste}
              onChange={(e) => {
                phoneNumberRegister.onChange(e);
                onPhoneInput(e);
              }}
              className={inputClassName('phoneNumber')}
            />
            {getValues('phoneNumber') && !errors?.phoneNumber ? <Ok className={styles.ok} /> : null}
            {/* {errors?.phoneNumber && (
              <span className={styles.errorMsg}>{errors.phoneNumber.message}</span>
            )} */}
          </label>

          <label htmlFor="email">
            <input
              {...register('email', {
                required: 'Введите E-mail *',
                pattern: {
                  value:
                    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                  message: 'Пожалуйста введите валидный e-mail',
                },
              })}
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className={`${styles.inputEmail} ${inputClassName('email')}`}
            />
            {getValues('email') && !errors?.email ? <Ok className={styles.ok} /> : null}
            {/* {errors?.email && <span className={styles.errorMsg}>{errors.email.message}</span>} */}
          </label>

          <Controller
            name="check"
            control={control}
            rules={{ required: 'Требуется соглашение *' }}
            render={({ field }) => (
              <label {...field} className={styles.CheckboxLabel}>
                <input
                  className={styles.inputCheckbox}
                  type="checkbox"
                  name="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <div className={styles.checkboxWrapp}>
                  {!isChecked ? (
                    <span className={styles.checkbox} />
                  ) : (
                    <CheckMark className={styles.checked} />
                  )}
                  <p
                    className={`${styles.checkBoxText} ${
                      errors?.check && styles.errorCheckBoxText
                    }`}>
                    Я согласен(-на) на обработку моих персональных данных <span>*</span>
                  </p>
                </div>

                {/* {errors?.check && <span className={styles.errorMsg}>{errors.check.message}</span>} */}
              </label>
            )}
          />

          <Button isSending={isSending} />
        </form>
        <div className={styles.cake}>
          <img className={styles.cake__img} src={Cake} alt="Cake" />
          <img
            className={styles.cake__bg}
            src={require('../../img/blotter.png')}
            alt="background"
          />
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Order;
