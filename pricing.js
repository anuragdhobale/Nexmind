/* =========================================
   NEXMIND PRICING
   MONTHLY / YEARLY TOGGLE
========================================= */

const billingButtons =
    document.querySelectorAll(".billing-option");

const priceValues =
    document.querySelectorAll(".price-value");

const pricePeriods =
    document.querySelectorAll(".price-period");


billingButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* Remove active */

        billingButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Add active */

        button.classList.add("active");


        /* Get selected plan */

        const selectedPlan =
            button.dataset.plan;


        /* Change prices */

        priceValues.forEach(price => {

            const newPrice =
                price.dataset[selectedPlan];

            if (newPrice) {

                price.textContent =
                    newPrice;

            }

        });


        /* Change period */

        pricePeriods.forEach(period => {

            if (selectedPlan === "yearly") {

                period.textContent =
                    "/ month";

            } else {

                period.textContent =
                    "/ month";

            }

        });

    });

});

/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;


        /* Close other FAQs */

        document
            .querySelectorAll(".faq-item")
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    item
                        .querySelector(".faq-answer")
                        .style.maxHeight = null;

                }

            });


        /* Open / close current FAQ */

        currentItem.classList.toggle("active");


        const answer =
            currentItem.querySelector(".faq-answer");


        if (currentItem.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});