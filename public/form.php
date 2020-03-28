<?php 
  $product = $_POST['PRODUCT'];
  $user_name = $_POST['USER_NAME'];
  $email = $_POST['EMAIL'];
  $materia = $_POST['MATERIA'];
  $phone = $_POST['PHONE'];
  $description = $_POST['DESCRIPTION'];

  $product = htmlspecialchars($product);
  $user_name = htmlspecialchars($user_name);
  $email = htmlspecialchars($email);
  $materia = htmlspecialchars($materia);
  $phone = htmlspecialchars($phone);
  $description = htmlspecialchars($description);

  $product = urldecode($product);
  $user_name = urldecode($user_name);
  $email = urldecode($email);
  $materia = urldecode($materia);
  $phone = urldecode($phone);
  $description = urldecode($description);

  $product = trim($product);
  $user_name = trim($user_name);
  $email = trim($email);
  $materia = trim($materia);
  $phone = trim($phone);
  $description = trim($description);

  $vaildDate = "Имя ".$user_name." Email: ".$email;

  if (
    mail("gamefoxmail@gmail.com",
    "Заказ с сайта", 
    "Имя: ".$user_name." E-mail: ".$email." Заказ: ".$product." Материал: ".$materia." Телефон: ".$phone ." Описание: ".$description, 
    "От: Сайт \r\n")
    ){
    echo "сообщение успешно отправлено";
    echo $vaildDate;
  } else {
    echo "при отправке сообщения возникли ошибки";
  };


