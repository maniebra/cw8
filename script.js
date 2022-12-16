const about = `<div>
<h2 style="text-align: center">معرفی</h2>
</div>
<div>
<table style="padding-right: 50px">
  <tr>
    <td>نام:</td>
    <td style="padding-right: 20px"></td>
    <td>مانی ابراهیمی</td>
    <td style="padding-right: 20px"></td>
    <td><img src="https://quera.org/media/CACHE/images/public/avatars/aea4db8a53e54195afff69246c95e943/01f9e007b9d8c268986147a3ef52cb59.jpg" style="border-radius:10px;"></td>
  </tr>
  <tr>
    <td>بیوگرافی:</td>
    <td style="padding-right: 20px"></td>
    <td>
      متولد اصفهان، تحصیل کرده در رشته ریاضی و ورودی 1401 مهندسی
      کامپیوتر دانشگاه صنعتی شریف
    </td>
  </tr>
  <tr>
    <td>سابقه تحصیلی:</td>
    <td style="padding-right: 20px"></td>
    <td>
      فارغ‌التحصیل رشته ریاضی فیزیک با معدل کل دیپلم 19.57 از دبیرستان
      شهید اژه‌ای 1 در اصفهان
    </td>
  </tr>
</table>
</div>`;

const skills = `<h2 style="text-align: center">مهارت‌ها</h2><li>
برنامه نویسی در زبان‌های C++, C, Python, C#, Kotlin, JavaScript, PHP
</li>
<li>سابقه برنامه‌نویسی موبایل و دستکتاپ</li>
<li>ایجاد و مدیریت دیتابیس‌های SQL و MongoDB</li>`;

const achievements = `<h2 style="text-align: center">افتخارات</h2><li>تحصیل در دانشگاه صنعتی شریف</li>
<li>گواهی 2 دوره از کوئرا کالج با امتیاز Perfect</li>`;

const contactMe = `<h2 style="text-align: center">تماس با من</h2><form action="/index.php">
<input name="fname" placeholder="نام" />
<input name="lname" placeholder="نام خانوادگی" />
<input name="email" placeholder="ایمیل" />
<br /><br />
<textarea name="message" placeholder="پیام..."></textarea>
<br /><br />
<input id="submit" type="submit" value="ثبت">
</form>`;

document.getElementById("aboutMe").addEventListener("click", () => {
  document.getElementById("content").innerHTML = about;
});

document.getElementById("contactMe").addEventListener("click", () => {
  document.getElementById("content").innerHTML = contactMe;
  document.getElementById("submit").addEventListener("click", () => {
    sub();
  });
});
document.getElementById("achievements").addEventListener("click", () => {
  document.getElementById("content").innerHTML = achievements;
});

document.getElementById("skills").addEventListener("click", () => {
  document.getElementById("content").innerHTML = skills;
});
var sub = () => {
  let subIt = confirm("آیا از ثبت اطلاعات خود مطمئنید؟");
  if (subIt) {
    alert("پیام شما ثبت شد!");
  } else {
    document.getElementById("content").innerHTML = contactMe;
  }
};
