<html>
  
  <head>
    <link rel="stylesheet" href="stylesheet.css" />
  </head>
  <body>
    <header>
      <table class="headerTable">
        <tr>
          <td class="hfOpt" id="aboutMe">معرفی</td>
          <td class="hfOpt" id="skills">مهارت‌ها</td>
          <td class="hfOpt" id="achievements">افتخارات</td>
          <td class="hfOpt" id="contactMe">ارتباط با من</td>
        </tr>
      </table>
    </header>
    <?php
    if (isset($_GET['fname']) && isset($_GET['lname']) && isset($_GET['email']) && isset($_GET['message'])) {
      $fname = $_GET['fname'];
      $lname = $_GET['lname'];
      $email = $_GET['email'];
      $message = $_GET['message'];
      $data = $fname."\n".$lname."\n".$email."\n".$message;
      $filesNum = count(glob("./*.txt")) + 1;
      $currentFileName = ($filesNum).".txt";
      $toBeWrittenIn = fopen($currentFileName, "w");
      fwrite($toBeWrittenIn, $data);
      fclose($toBeWrittenIn);
    }
  ?>
    <div id="content"></div>
    <footer>
      <table class="footerTable">
        <tr>
          <td class="hfOpt" style="cursor: text">ایمیل: mani.ebra@gmail.com</td>
          <td class="hfOpt">
            <a href="https://github.com/maniebra/">GitHub</a>
          </td>
        </tr>
      </table>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
