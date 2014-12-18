 <?php
                require 'vendor/autoload.php';

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
                addTo("ian@freshehr.com")->
                addTo("mylesmeng@gmail.com")->
                setSubject("Handihealth Account created ")->
                setText("Hi Ian, An user has created an account by Stormpath database, please check api.stormpath.com")->
                setHtml("<table style=\"border: solid 1px #000; background-color: #666; font-family: verdana, tahoma, sans-serif; color: #fff;\">
<tr> <td> <h2>Hi Ian,</h2> <p>An user has created an account, please check.</p>
 <br> Cheers <br> HandiHealth CIC
<p> <img src=\"http://handihealth.org/wp-content/uploads/2013/02/Header-RGB1.jpg\" alt=\"HandiHealth!\" /> </p></td> </tr> </table>");

                $response = $sendgrid->send($mail);

                $token = ltrim($_SERVER["QUERY_STRING"], 'sptoken=');
                $url = 'https://api.stormpath.com/emailVerificationTokens?sptoken=' . $token;
                //https://api.stormpath.com/emailVerificationTokens?sptoken=4mrOjHDWdybREQmfTL00px
                //open connection
                $ch = curl_init();
                //set the url, number of POST vars, POST data
                curl_setopt($ch, CURLOPT_URL, $url);
                //execute post
                $result = curl_exec($ch);
                //close connection
                curl_close($ch);



                ?>