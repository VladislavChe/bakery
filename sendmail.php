<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  
  //Server settings
  $mail->Host       = 'phpmailer.vladislav-che.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'bhx20198@phpmailer.vladislav-che.ru'; // Логин на почте
  $mail->Password   = '.MH-j+G8Kn02'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  //Письмо Админу
  //От кого письмо
  $mail->setFrom('bhx20198@phpmailer.vladislav-che.ru', 'Bakery');
  //Кому отправить
  $mail->addAddress('cheremisin0610@gmail.com', 'Admin'); //Добавить получателя
  //Тема письма
  $mail->Subject = 'Письмо с сайта Bakery!';

  //Тело письма
  $body = '<h1>Поступила заявка на оформление заказа</h1>';

  if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['phoneNumber']))) {
    $body.='<p><strong>Телефон:</strong> '.$_POST['phoneNumber'].'</p>';
  }
  if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
  }

  $mail->Body = $body;

  //Отправка
  if(!$mail->send()) {
    $message = 'Ошибка';
  }else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
