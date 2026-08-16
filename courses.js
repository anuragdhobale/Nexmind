/* =========================================
   COURSE PAGE CONNECTIONS
========================================= */

document.querySelectorAll(".view-course").forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const course = this.dataset.course;

        const coursePages = {
            python: "python-course.html",
            ml: "ml-course.html",
            "data-science": "data-science-course.html",
            genai: "genai-course.html"
        };

        if (coursePages[course]) {
            window.location.href = coursePages[course];
        }

    });

});