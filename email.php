 <?php
                require 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


                /* USER CREDENTIALS
                /  Fill in the variables below with your SendGrid
                /  username and password.
                ====================================================*/
                $sg_username = "mmylesmeng365";
                $sg_password = "Major?1015";


                /* CREATE THE SENDGRID MAIL OBJECT
                ====================================================*/
                $sendgrid = new SendGrid($sg_username, $sg_password);
                $mail = new SendGrid\Email();
                $mail->
                setFrom("mylesmeng@gmail.com")->
                addTo("mylesmeng@gmail.com")->
                setSubject("Handihealth Account created ")->
                setText("Hi KCS! 有一个顾客发来留言")->
                setHtml("<table style=\"border: solid 1px #000; background-color: #666; font-family: verdana, tahoma, sans-serif; color: #fff;\">
<tr> <td> <h2>Hi !</h2> <p>有一个顾客发来留言</p>
 <br> Cheers <br> KCS BBQ
</td> </tr> </table>");
//<p> <img src=\"http://handihealth.org/wp-content/uploads/2013/02/Header-RGB1.jpg\" alt=\"HandiHealth!\" /> </p>
                $response = $sendgrid->send($mail);

//                $token = ltrim($_SERVER["QUERY_STRING"], 'sptoken=');
//                $url = 'https://api.stormpath.com/emailVerificationTokens?sptoken=' . $token;
//                //https://api.stormpath.com/emailVerificationTokens?sptoken=4mrOjHDWdybREQmfTL00px
//                //open connection
//                $ch = curl_init();
//                //set the url, number of POST vars, POST data
//                curl_setopt($ch, CURLOPT_URL, $url);
//                //execute post
//                $result = curl_exec($ch);
//                //close connection
//                curl_close($ch);



                ?>