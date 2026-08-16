/* =========================================
   NEXMIND CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        /* Stop page refresh */

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value;

        const message =
            document.getElementById("contactMessage").value.trim();


        /* Basic validation */

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }


        /* Show success message */

        formSuccess.style.display = "flex";


        /* Reset form */

        contactForm.reset();


        /* Hide success message after 5 seconds */

        setTimeout(() => {

            formSuccess.style.display = "none";

        }, 5000);

    });

}