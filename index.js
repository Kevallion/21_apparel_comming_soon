let isEmail = false;

email.addEventListener("input", (e) => {
  mail = e.target.value;
  if (mail.length > 0) {
    if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      isEmail = true;
      form.classList.remove("wrong");
    } else {
      form.classList.add("wrong");
    }
  } else {
    form.classList.remove("wrong");
  }
});
