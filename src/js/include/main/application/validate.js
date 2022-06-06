const selector = document.querySelector("input[type='tel']");
const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(selector);

const applicationInputs = document.querySelectorAll(".application-input");
const applicationForm = document.querySelector(".application-form");
const formApproval = document.getElementById("approval");

applicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  applicationInputs.forEach((input) => input.classList.add("input-valid"));
});

new JustValidate(".application-form", {
  colorWrong: "#ff6972",
  rules: {
    name: {
      required: true,
      minLength: 3,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    email: {
      required: true,
      email: true,
    },
    approval: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Обязательное поле",
      minLength: "Минимальная длина имени 3 символа",
    },
    tel: {
      required: "Обязательное поле",
      function: "Введите телефон корректно",
    },
    email: {
      required: "Обязательное поле",
      email: "Введите E-mail корректно",
    },
    approval: {
      required: "Обязательное поле",
    },
  },
  submitHandler: function (form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          new GraphModal().open('thanks');
        }
      }
    };

    xhr.open("POST", "../php/mail.php", true);
    xhr.send(formData);

    form.reset();
    applicationInputs.forEach((input) => input.classList.remove("input-valid"));
  },
});


