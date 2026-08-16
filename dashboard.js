/* =========================================
   NEXMIND - STUDENT DASHBOARD
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const dashboardMenu =
    document.getElementById("dashboardMenu");

const dashboardNav =
    document.querySelector(".dashboard-nav-links");


if (dashboardMenu && dashboardNav) {

    dashboardMenu.addEventListener(
        "click",
        () => {

            dashboardNav.classList.toggle(
                "mobile-open"
            );

        }
    );

}


/* =========================================
   PROFILE CLICK
========================================= */

const dashboardProfile =
    document.querySelector(".dashboard-profile");


if (dashboardProfile) {

    dashboardProfile.addEventListener(
        "click",
        () => {

            alert(
                "Profile settings will be available soon."
            );

        }
    );

}


/* =========================================
   LOAD SAVED PROGRESS
========================================= */

function getCourseProgress(
    course,
    defaultProgress
) {

    const savedProgress =
        localStorage.getItem(
            `nexmind_${course}_progress`
        );


    if (savedProgress !== null) {

        return Number(savedProgress);

    }


    return defaultProgress;

}


/* =========================================
   COURSE DATA
========================================= */

const dashboardCourses = [

    {
        name: "Python for AI",
        key: "python",
        defaultProgress: 78,
        page: "python-course.html"
    },

    {
        name: "Machine Learning",
        key: "ml",
        defaultProgress: 42,
        page: "ml-course.html"
    },

    {
        name: "Data Science",
        key: "data-science",
        defaultProgress: 20,
        page: "data-science-course.html"
    },

    {
        name: "Generative AI",
        key: "genai",
        defaultProgress: 5,
        page: "genai-course.html"
    }

];


/* =========================================
   UPDATE COURSE PROGRESS
========================================= */

function updateDashboardProgress() {

    const courseCards =
        document.querySelectorAll(
            ".dashboard-course-card"
        );


    dashboardCourses.forEach(
        (course, index) => {

            const progress =
                getCourseProgress(
                    course.key,
                    course.defaultProgress
                );


            const card =
                courseCards[index];


            if (!card) {

                return;

            }


            const progressBar =
                card.querySelector(
                    ".mini-progress span"
                );


            const progressText =
                card.querySelector(
                    ".course-card-footer span"
                );


            if (progressBar) {

                progressBar.style.width =
                    `${progress}%`;

            }


            if (progressText) {

                progressText.textContent =
                    `${progress}% complete`;

            }

        }
    );

}


/* =========================================
   CALCULATE OVERALL PROGRESS
========================================= */

function calculateOverallProgress() {

    let total = 0;


    dashboardCourses.forEach(
        course => {

            total += getCourseProgress(
                course.key,
                course.defaultProgress
            );

        }
    );


    return Math.round(
        total / dashboardCourses.length
    );

}


/* =========================================
   UPDATE OVERALL PROGRESS
========================================= */

function updateOverallProgress() {

    const overall =
        calculateOverallProgress();


    const statCards =
        document.querySelectorAll(
            ".dashboard-stat-card"
        );


    /*
        Second stat card =
        Overall Progress
    */

    if (statCards[1]) {

        const number =
            statCards[1].querySelector(
                "strong"
            );


        if (number) {

            number.textContent =
                `${overall}%`;

        }

    }

}


/* =========================================
   UPDATE CONTINUE LEARNING
========================================= */

function updateContinueLearning() {

    const pythonProgress =
        getCourseProgress(
            "python",
            78
        );


    const continueCard =
        document.querySelector(
            ".continue-learning-card"
        );


    if (!continueCard) {

        return;

    }


    const progressBar =
        continueCard.querySelector(
            ".dashboard-progress span"
        );


    const progressText =
        continueCard.querySelector(
            ".continue-course-top strong"
        );


    const lessonText =
        continueCard.querySelector(
            ".continue-bottom small"
        );


    if (progressBar) {

        progressBar.style.width =
            `${pythonProgress}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${pythonProgress}%`;

    }


    if (lessonText) {

        const lesson =
            Math.max(
                1,
                Math.ceil(
                    pythonProgress / 100 * 7
                )
            );


        lessonText.textContent =
            `Lesson ${lesson} of 7`;

    }

}


/* =========================================
   SAVE COURSE
========================================= */

const courseLinks =
    document.querySelectorAll(
        ".dashboard-course-card a"
    );


courseLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const card =
                    link.closest(
                        ".dashboard-course-card"
                    );


                if (!card) {

                    return;

                }


                const index =
                    Array.from(
                        document.querySelectorAll(
                            ".dashboard-course-card"
                        )
                    ).indexOf(card);


                const course =
                    dashboardCourses[index];


                if (course) {

                    localStorage.setItem(
                        "nexmind_last_course",
                        course.key
                    );

                }

            }
        );

    }
);


/* =========================================
   LAST COURSE
========================================= */

function updateLastCourse() {

    const lastCourse =
        localStorage.getItem(
            "nexmind_last_course"
        );


    if (!lastCourse) {

        return;

    }


    const course =
        dashboardCourses.find(
            item =>
                item.key === lastCourse
        );


    if (!course) {

        return;

    }


    const continueButton =
        document.querySelector(
            ".continue-btn"
        );


    if (continueButton) {

        continueButton.href =
            course.page;

    }

}


/* =========================================
   INITIALIZE DASHBOARD
========================================= */

updateDashboardProgress();

updateOverallProgress();

updateContinueLearning();

updateLastCourse();