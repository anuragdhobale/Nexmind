/* =========================================================
   NEXMIND - MAIN JAVASCRIPT
   Works safely across all NexMind pages
   ========================================================= */


/* =========================================================
   1. PAGE LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("NexMind JavaScript loaded successfully.");

    initCounters();
    initCourseFilter();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initBackToTop();
    initFAQ();
    initNavbarScroll();
    initNewsletter();
    initCourseButtons();

});


/* =========================================================
   2. ANIMATED COUNTERS
   Works on Home / Dashboard / Statistics
   ========================================================= */

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (counters.length === 0) {
        return;
    }

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        if (isNaN(target)) {
            return;
        }

        let current = 0;

        const duration = 1500;

        const steps = 60;

        const increment = target / steps;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current);

                setTimeout(updateCounter, duration / steps);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}


/* =========================================================
   3. COURSE SEARCH + FILTER
   Works only on Courses page
   ========================================================= */

function initCourseFilter() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-buttons button"
        );

    const courseItems =
        document.querySelectorAll(
            ".course-item"
        );

    const searchInput =
        document.getElementById(
            "courseSearch"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    const resetButton =
        document.getElementById(
            "resetCourses"
        );


    // If this is not the Courses page,
    // stop here.

    if (
        filterButtons.length === 0 ||
        courseItems.length === 0
    ) {

        return;

    }


    console.log("Course filtering initialized.");


    function filterCourses() {

        const activeButton =
            document.querySelector(
                ".filter-buttons button.active"
            );


        const selectedCategory =
            activeButton
                ? activeButton.dataset.filter
                : "all";


        const searchText =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let visibleCourses = 0;


        courseItems.forEach(course => {

            const courseText =
                course.innerText.toLowerCase();


            const categoryMatch =
                selectedCategory === "all" ||
                course.classList.contains(
                    selectedCategory
                );


            const searchMatch =
                courseText.includes(
                    searchText
                );


            if (
                categoryMatch &&
                searchMatch
            ) {

                course.style.display = "block";

                visibleCourses++;

                // Re-trigger animation

                course.classList.remove(
                    "course-show"
                );

                void course.offsetWidth;

                course.classList.add(
                    "course-show"
                );

            } else {

                course.style.display = "none";

            }

        });


        // No results

        if (noResults) {

            if (visibleCourses === 0) {

                noResults.style.display =
                    "block";

            } else {

                noResults.style.display =
                    "none";

            }

        }

    }


    /* -----------------------------------------
       CATEGORY BUTTONS
    ----------------------------------------- */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                filterCourses();

            }
        );

    });


    /* -----------------------------------------
       SEARCH
    ----------------------------------------- */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterCourses
        );

    }


    /* -----------------------------------------
       RESET
    ----------------------------------------- */

    if (resetButton) {

        resetButton.addEventListener(
            "click",
            () => {

                if (searchInput) {

                    searchInput.value = "";

                }


                filterButtons.forEach(
                    button => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                if (filterButtons.length > 0) {

                    filterButtons[0]
                        .classList.add(
                            "active"
                        );

                }


                filterCourses();

            }
        );

    }


    // Run once when page opens

    filterCourses();

}


/* =========================================================
   4. MOBILE NAVBAR
   Works if hamburger menu exists
   ========================================================= */

function initMobileMenu() {

    const menuButton =
        document.querySelector(
            ".menu-toggle"
        );

    const navMenu =
        document.querySelector(
            "nav ul"
        );


    if (!menuButton || !navMenu) {

        return;

    }


    menuButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );


    // Close menu after clicking a link

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

                menuButton.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================================
   5. SCROLL REVEAL
   Adds animation when sections appear
   ========================================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal, .course-item, .why-card, .tech-card"
        );


    if (elements.length === 0) {

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(element => {

        element.classList.add(
            "reveal"
        );

        observer.observe(element);

    });

}


/* =========================================================
   6. SMOOTH SCROLL
   For #section links
   ========================================================= */

function initSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });

}


/* =========================================================
   7. BACK TO TOP BUTTON
   Works if #backToTop exists
   ========================================================= */

function initBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) {

        return;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   8. FAQ ACCORDION
   Works if .faq-question exists
   ========================================================= */

function initFAQ() {

    const questions =
        document.querySelectorAll(
            ".faq-question"
        );


    if (questions.length === 0) {

        return;

    }


    questions.forEach(question => {

        question.addEventListener(
            "click",
            () => {

                const answer =
                    question.nextElementSibling;


                const parent =
                    question.parentElement;


                // Close other FAQs

                document
                    .querySelectorAll(
                        ".faq-item.active"
                    )
                    .forEach(item => {

                        if (item !== parent) {

                            item.classList.remove(
                                "active"
                            );

                        }

                    });


                parent.classList.toggle(
                    "active"
                );


                if (answer) {

                    if (
                        parent.classList.contains(
                            "active"
                        )
                    ) {

                        answer.style.maxHeight =
                            answer.scrollHeight +
                            "px";

                    } else {

                        answer.style.maxHeight =
                            "0px";

                    }

                }

            }
        );

    });

}


/* =========================================================
   9. NAVBAR ON SCROLL
   Works on every page
   ========================================================= */

function initNavbarScroll() {

    const header =
        document.querySelector(
            "header"
        );


    if (!header) {

        return;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 50) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================================
   10. NEWSLETTER
   Frontend validation only
   ========================================================= */

function initNewsletter() {

    const form =
        document.querySelector(
            ".newsletter form"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const input =
                form.querySelector(
                    "input[type='email']"
                );


            if (!input) {

                return;

            }


            const email =
                input.value.trim();


            if (email === "") {

                alert(
                    "Please enter your email."
                );

                return;

            }


            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                alert(
                    "Please enter a valid email."
                );

                return;

            }


            alert(
                "Thank you for subscribing to NexMind!"
            );


            input.value = "";

        }
    );

}


/* =========================================================
   11. COURSE BUTTONS
   Temporary frontend behavior
   ========================================================= */
function initCourseButtons() {

    const buttons =
        document.querySelectorAll(
            ".view-course"
        );

    const modal =
        document.getElementById(
            "courseModal"
        );

    const closeButton =
        document.getElementById(
            "modalClose"
        );


    // Not on Courses page

    if (
        buttons.length === 0 ||
        !modal
    ) {

        return;

    }


    const modalIcon =
        document.getElementById(
            "modalIcon"
        );

    const modalLevel =
        document.getElementById(
            "modalLevel"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );

    const modalRating =
        document.getElementById(
            "modalRating"
        );

    const modalStudents =
        document.getElementById(
            "modalStudents"
        );

    const modalDuration =
        document.getElementById(
            "modalDuration"
        );

    const modalSkills =
        document.getElementById(
            "modalSkills"
        );


    // Course data

    const courses = {

        python: {

            icon: "🐍",

            level: "Beginner",

            title: "Python For AI",

            description:
                "Learn Python from scratch and build practical AI applications using industry-standard tools.",

            rating: "4.9",

            students: "15K",

            duration: "8 Weeks",

            skills: [
                "Python Fundamentals",
                "NumPy & Pandas",
                "APIs & Data Handling",
                "AI Projects"
            ]

        },


        ml: {

            icon: "🧠",

            level: "Intermediate",

            title: "Machine Learning",

            description:
                "Master machine learning algorithms and build predictive models using real-world datasets.",

            rating: "4.8",

            students: "12K",

            duration: "12 Weeks",

            skills: [
                "Regression",
                "Classification",
                "Clustering",
                "Model Evaluation"
            ]

        },


        genai: {

            icon: "🤖",

            level: "Advanced",

            title: "Generative AI",

            description:
                "Learn LLMs, Prompt Engineering, RAG, LangChain and modern AI application development.",

            rating: "5.0",

            students: "9K",

            duration: "10 Weeks",

            skills: [
                "Large Language Models",
                "Prompt Engineering",
                "RAG",
                "AI Agents"
            ]

        },


        datascience: {

            icon: "📊",

            level: "Beginner",

            title: "Data Science",

            description:
                "Learn statistics, exploratory data analysis, visualization and machine learning.",

            rating: "4.8",

            students: "11K",

            duration: "14 Weeks",

            skills: [
                "Statistics",
                "Exploratory Data Analysis",
                "Data Visualization",
                "Machine Learning"
            ]

        }

    };


    // Open modal

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const courseId =
                    button.dataset.course;


                const course =
                    courses[courseId];


                if (!course) {

                    return;

                }


                modalIcon.innerText =
                    course.icon;

                modalLevel.innerText =
                    course.level;

                modalTitle.innerText =
                    course.title;

                modalDescription.innerText =
                    course.description;

                modalRating.innerText =
                    course.rating;

                modalStudents.innerText =
                    course.students;

                modalDuration.innerText =
                    course.duration;


                modalSkills.innerHTML = "";


                course.skills.forEach(skill => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.innerHTML = `
                        <i class="fa-solid fa-check"></i>
                        ${skill}
                    `;

                    modalSkills.appendChild(
                        li
                    );

                });


                modal.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    // Close button

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    // Click outside modal

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    // Escape key

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );


    function closeModal() {

        modal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   12. ACTIVE NAVIGATION
   Automatically highlights current page
   ========================================================= */

function setActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navLinks =
        document.querySelectorAll(
            "nav ul li a"
        );


    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");


        if (!linkPage) {

            return;

        }


        if (
            linkPage === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


setActiveNavigation();


/* =========================================================
   13. PREVENT EMPTY # LINKS FROM JUMPING
   ========================================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            // Only prevent if it's
            // actually an empty placeholder

            const href =
                link.getAttribute(
                    "href"
                );

            if (href === "#") {

                event.preventDefault();

            }

        }
    );

});


/* =========================================================
   NEXMIND JS END
   ========================================================= */

console.log(
    "NexMind JavaScript initialized."
);  


