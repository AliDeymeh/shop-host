document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // اطلاعات وارد شده توسط کاربر را بگیرید
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  // ایجاد یک شیء JSON با اطلاعات
  const formData = {
    name: name,
    password: password,
  };

  // ارسال درخواست به سرور
  fetch("/your-server-endpoint", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // پردازش پاسخ سرور در اینجا
      console.log(data);
    })
    .catch((error) => {
      console.error("خطا در ارسال درخواست:", error);
    });
});
