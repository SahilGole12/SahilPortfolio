(function () {
    const controlButtons = document.querySelectorAll(".control");
    const themeButton = document.querySelector(".theme-btn");

    controlButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Check if there is an element with the "active-btn" class before removing it
            const activeBtn = document.querySelector(".active-btn");
            if (activeBtn) {
                activeBtn.classList.remove("active-btn");
            }

            // Check if there is an element with the "active" class before removing it
            const activeElement = document.querySelector(".active");
            if (activeElement) {
                activeElement.classList.remove("active");
            }

            // Add "active-btn" class to the clicked button
            this.classList.add("active-btn");

            // Add "active" class to the corresponding element
            const targetElement = document.getElementById(button.dataset.id);
            if (targetElement) {
                targetElement.classList.add("active");
            }
        });
    });

    themeButton.addEventListener("click", () => {
        // Toggle the "light-mode" class on the body element
        document.body.classList.toggle("light-mode");
    });
})();




function SendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sg1201333@gmail.com",
        Password : "533CC16B00CE520831A6AF699F99E18ABA41",
        To : 'sg1201333@gmail.com',
        From : "sg1201333@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );    
}

form.addEventListener("submit",(e) => {

    e.preventDefault();

    SendEmail()
});