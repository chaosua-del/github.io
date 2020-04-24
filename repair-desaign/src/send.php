<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'] || 'Нет';

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->CharSet = 'utf-8';
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'd.yuhymenko2@gmail.com';                     // SMTP username
    $mail->Password   = 'La29100071';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('d.yuhymenko2@gmail.com', 'Mailer');
    $mail->addAddress('d.yuhymenko3@gmail.com', 'Joe User');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New request';
    $mail->Body    = "Имя пользователя: ${userName},
     Его телефон: ${userPhone},
      Его почта: ${userEmail},
      Вопрос: (если есть) - ${userQuestion}";


    if($mail->send()) {
    // echo 'Форма отправлена';
    echo json_encode(["message" =>  "Форма отправлена"]);
    }
    else {
        echo "Не отправлено, Ошибка: {$mail->ErrorInfo}";
    }
   
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
