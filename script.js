function submit() {


    document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const interest = document.querySelector('select[name="interest"]').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('interest', interest);
    });
}

submit();
