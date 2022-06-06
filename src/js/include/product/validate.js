const selector = document.querySelector("input[type='tel']");
const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(selector);

const modalPreviewInputs = document.querySelectorAll(".form-input");
const modalPreviewForm = document.querySelector(".buyOneClick-content");
const formApproval = document.getElementById("approval");

modalPreviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  modalPreviewInputs.forEach((input) => input.classList.add("input-valid"));
});

new JustValidate(".buyOneClick-content", {
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
    modalPreviewInputs.forEach((input) => input.classList.remove("input-valid"));
  },
});


