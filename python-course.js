/* =========================================
   NEXMIND - PYTHON FOR AI
   COURSE INTERACTION
========================================= */


/* =========================================
   LESSON DATA
========================================= */

const lessons = [

    {
        title: "Python Fundamentals",

        intro:
            "Python is one of the most popular programming languages used in AI, machine learning and data science.",

        content: `
            <div class="theory-section">

                <h3>What is Python?</h3>

                <p>
                    Python is a high-level, general-purpose programming
                    language known for its simple syntax and readability.
                </p>

                <p>
                    In Artificial Intelligence, Python is widely used because
                    it provides powerful libraries for data analysis,
                    machine learning, deep learning and automation.
                </p>

            </div>


            <div class="theory-section">

                <h3>Why Python for AI?</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-code"></i>

                        <h4>Simple Syntax</h4>

                        <p>
                            Easy to learn and write.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-cubes"></i>

                        <h4>Powerful Libraries</h4>

                        <p>
                            NumPy, Pandas, Scikit-learn
                            and many more.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-brain"></i>

                        <h4>AI Ready</h4>

                        <p>
                            Excellent ecosystem for
                            machine learning and AI.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Your First Python Program</h3>

                <div class="code-box">

<pre><code>print("Hello, NexMind!")

name = "AI Learner"

print("Welcome", name)</code></pre>

                </div>

                <p class="code-explanation">

                    The <strong>print()</strong> function displays
                    information on the screen.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">

                    <i class="fa-solid fa-lightbulb"></i>

                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Python is beginner-friendly.</li>

                        <li>Python is widely used in AI.</li>

                        <li>Libraries make AI development easier.</li>

                        <li>Practice is the best way to learn.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "Variables & Data Types",

        intro:
            "Variables allow Python programs to store and work with information.",

        content: `
            <div class="theory-section">

                <h3>What is a Variable?</h3>

                <p>
                    A variable is a name used to store a value in memory.
                    We can change the value of a variable whenever we need.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common Data Types</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-hashtag"></i>

                        <h4>Integer</h4>

                        <p>
                            Used for whole numbers such as 10, 25 and 100.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-font"></i>

                        <h4>String</h4>

                        <p>
                            Used for text such as names and messages.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-toggle-on"></i>

                        <h4>Boolean</h4>

                        <p>
                            Represents True or False values.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Python Example</h3>

                <div class="code-box">

<pre><code>name = "Rohit"
age = 25
is_student = True

print(name)
print(age)
print(is_student)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Variables store information.</li>

                        <li>Python automatically detects data types.</li>

                        <li>Strings store text.</li>

                        <li>Booleans store True or False.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "Functions & Modules",

        intro:
            "Functions help you organize reusable code, while modules allow you to use functionality created by others.",

        content: `
            <div class="theory-section">

                <h3>What is a Function?</h3>

                <p>
                    A function is a reusable block of code designed
                    to perform a particular task.
                </p>

            </div>


            <div class="theory-section">

                <h3>Creating a Function</h3>

                <div class="code-box">

<pre><code>def greet(name):

    print("Hello", name)


greet("AI Learner")</code></pre>

                </div>

                <p class="code-explanation">

                    The <strong>def</strong> keyword is used to create
                    a function in Python.

                </p>

            </div>


            <div class="theory-section">

                <h3>Why Functions Matter in AI</h3>

                <p>
                    AI applications contain many repeated operations.
                    Functions help developers keep their code organized,
                    reusable and easier to maintain.
                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Functions make code reusable.</li>

                        <li>Functions improve code organization.</li>

                        <li>Modules provide reusable functionality.</li>

                        <li>Large AI projects depend heavily on modular code.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "NumPy",

        intro:
            "NumPy is a fundamental Python library for numerical computing and forms the foundation of many data science workflows.",

        content: `
            <div class="theory-section">

                <h3>What is NumPy?</h3>

                <p>
                    NumPy stands for Numerical Python. It provides powerful
                    tools for working with numbers, arrays and mathematical
                    operations.
                </p>

            </div>


            <div class="theory-section">

                <h3>NumPy Array</h3>

                <div class="code-box">

<pre><code>import numpy as np

numbers = np.array([10, 20, 30, 40])

print(numbers)

print(numbers.mean())</code></pre>

                </div>

            </div>


            <div class="theory-section">

                <h3>Why NumPy is Important</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-table-cells"></i>

                        <h4>Arrays</h4>

                        <p>
                            Efficiently store numerical data.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-calculator"></i>

                        <h4>Mathematics</h4>

                        <p>
                            Perform fast mathematical operations.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-bolt"></i>

                        <h4>Performance</h4>

                        <p>
                            Optimized numerical computation.
                        </p>

                    </div>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>NumPy is used for numerical computing.</li>

                        <li>Arrays are its core data structure.</li>

                        <li>NumPy is heavily used in data science.</li>

                        <li>Many AI libraries depend on NumPy.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "Pandas",

        intro:
            "Pandas makes it easier to load, clean, explore and analyze structured datasets.",

        content: `
            <div class="theory-section">

                <h3>What is Pandas?</h3>

                <p>
                    Pandas is a Python library designed for data manipulation
                    and analysis.
                </p>

                <p>
                    It provides useful structures such as DataFrames,
                    which make working with tables of data much easier.
                </p>

            </div>


            <div class="theory-section">

                <h3>Creating a DataFrame</h3>

                <div class="code-box">

<pre><code>import pandas as pd

data = {
    "Name": ["A", "B", "C"],
    "Score": [85, 90, 78]
}

df = pd.DataFrame(data)

print(df)</code></pre>

                </div>

            </div>


            <div class="theory-section">

                <h3>What Can Pandas Do?</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-file-import"></i>

                        <h4>Load Data</h4>

                        <p>
                            Read CSV, Excel and other datasets.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-filter"></i>

                        <h4>Clean Data</h4>

                        <p>
                            Handle missing and incorrect values.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-simple"></i>

                        <h4>Analyze</h4>

                        <p>
                            Explore patterns and statistics.
                        </p>

                    </div>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Pandas is essential for data analysis.</li>

                        <li>DataFrames represent tabular data.</li>

                        <li>Pandas can clean and transform datasets.</li>

                        <li>It is widely used before machine learning.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "APIs & Data Handling",

        intro:
            "Real AI applications often need data from external services. APIs allow Python applications to communicate with those services.",

        content: `
            <div class="theory-section">

                <h3>What is an API?</h3>

                <p>
                    API stands for Application Programming Interface.
                    It allows two different software systems to
                    communicate with each other.
                </p>

            </div>


            <div class="theory-section">

                <h3>Example API Request</h3>

                <div class="code-box">

<pre><code>import requests

response = requests.get(
    "https://api.example.com/data"
)

data = response.json()

print(data)</code></pre>

                </div>

            </div>


            <div class="theory-section">

                <h3>APIs in AI</h3>

                <p>
                    AI applications use APIs to retrieve weather data,
                    financial information, maps, user information,
                    language models and many other external services.
                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>APIs allow applications to communicate.</li>

                        <li>Python can send HTTP requests.</li>

                        <li>APIs provide real-world data.</li>

                        <li>Modern AI applications often depend on APIs.</li>

                    </ul>

                </div>

            </div>
        `
    },


    {
        title: "Python AI Project",

        intro:
            "Now it is time to combine your Python skills and build a practical AI-focused project.",

        content: `
            <div class="theory-section">

                <h3>Your Final Project</h3>

                <p>
                    Build a simple AI data analysis application that
                    loads a dataset, cleans the data, performs analysis
                    and presents useful insights.
                </p>

            </div>


            <div class="theory-section">

                <h3>Project Workflow</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-database"></i>

                        <h4>1. Load Data</h4>

                        <p>
                            Import a real dataset using Pandas.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-broom"></i>

                        <h4>2. Clean Data</h4>

                        <p>
                            Remove missing and incorrect values.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <h4>3. Analyze</h4>

                        <p>
                            Find patterns and useful insights.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Project Example</h3>

                <div class="code-box">

<pre><code>import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())

print(df.describe())</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-trophy"></i>
                </div>

                <div>

                    <h3>Course Complete!</h3>

                    <ul>

                        <li>You learned Python fundamentals.</li>

                        <li>You learned NumPy and Pandas.</li>

                        <li>You learned how APIs work.</li>

                        <li>You are ready to build Python projects.</li>

                    </ul>

                </div>

            </div>
        `
    }

];


/* =========================================
   GET HTML ELEMENTS
========================================= */

const lessonButtons =
    document.querySelectorAll(".lesson");

const lessonTitle =
    document.getElementById("lessonTitle");

const lessonIntro =
    document.getElementById("lessonIntro");

const lessonContent =
    document.querySelector(".lesson-content");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const previousButton =
    document.getElementById("previousLesson");

const nextButton =
    document.getElementById("nextLesson");

const saveCourse =
    document.getElementById("saveCourse");


/* =========================================
   CURRENT LESSON
========================================= */

let currentLesson = 0;


/* =========================================
   COMPLETED LESSONS
========================================= */

let completedLessons =
    JSON.parse(
        localStorage.getItem(
            "nexmind_python_completed"
        )
    ) || [];

/* =========================================
   LOAD LESSON
========================================= */

function loadLesson(index) {

    /* Safety check */

    if (
        index < 0 ||
        index >= lessons.length
    ) {

        return;

    }


    /* Update current lesson */

    currentLesson = index;


    /* Get selected lesson */

    const lesson =
        lessons[index];


    /* Update lesson number */

    const lessonNumber =
        document.querySelector(".lesson-label");

    if (lessonNumber) {

        lessonNumber.textContent =
            `LESSON ${String(index + 1).padStart(2, "0")}`;

    }


    /* Update title */

    lessonTitle.textContent =
        lesson.title;


    /* Update introduction */

    lessonIntro.textContent =
        lesson.intro;


    /* Remove old lesson sections */

    const oldSections =
        lessonContent.querySelectorAll(
            ".theory-section, .takeaway-box"
        );

    oldSections.forEach(section => {

        section.remove();

    });


    /* Add new content */

    lessonIntro.insertAdjacentHTML(
        "afterend",
        lesson.content
    );


    /* Update active lesson */

    lessonButtons.forEach(
        (button, buttonIndex) => {

            button.classList.toggle(
                "active",
                buttonIndex === index
            );

        }
    );


    /* Update progress */

    updateProgress();


    /* Update navigation */

    updateNavigation();


    /* Scroll lesson to top */

    window.scrollTo({

        top:
            document.querySelector(
                ".learning-layout"
            ).offsetTop - 30,

        behavior: "smooth"

    });

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const completed =
        completedLessons.length;

    const percentage =
        Math.round(
            (completed / lessons.length) * 100
        );


    progressBar.style.width =
        `${percentage}%`;


    progressText.textContent =
        `${percentage}%`;

}


/* =========================================
   COMPLETE CURRENT LESSON
========================================= */

function completeCurrentLesson() {

    if (
        !completedLessons.includes(
            currentLesson
        )
    ) {

        completedLessons.push(
            currentLesson
        );

    }


    /* =========================================
       SAVE PYTHON PROGRESS FOR DASHBOARD
    ========================================= */

    const progress =
        Math.round(
            (completedLessons.length / lessons.length) * 100
        );


    localStorage.setItem(
        "nexmind_python_progress",
        progress
    );


    /* Save completed lessons */

    localStorage.setItem(
        "nexmind_python_completed",
        JSON.stringify(
            completedLessons
        )
    );


    updateLessonLocks();

    updateProgress();

}



/* =========================================
   UNLOCK LESSONS
========================================= */

function updateLessonLocks() {

    lessonButtons.forEach(
        (button, index) => {

            const icon =
                button.querySelector("i");


            /* First lesson always unlocked */

            const unlocked =
                index === 0 ||
                completedLessons.includes(
                    index - 1
                );


            if (unlocked) {

                button.disabled = false;

                if (
                    completedLessons.includes(index)
                ) {

                    icon.className =
                        "fa-solid fa-check";

                }

                else {

                    icon.className =
                        index === currentLesson
                            ? "fa-solid fa-play"
                            : "fa-solid fa-lock-open";

                }

            }

            else {

                button.disabled = true;

                icon.className =
                    "fa-solid fa-lock";

            }

        }
    );

}


/* =========================================
   NAVIGATION
========================================= */

function updateNavigation() {

    previousButton.disabled =
        currentLesson === 0;


    if (
        currentLesson ===
        lessons.length - 1
    ) {

        nextButton.innerHTML = `
            Complete Course
            <i class="fa-solid fa-check"></i>
        `;

    }

    else {

        nextButton.innerHTML = `
            Next Lesson
            <i class="fa-solid fa-arrow-right"></i>
        `;

    }

}


/* =========================================
   LESSON BUTTON CLICK
========================================= */

lessonButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                if (
                    button.disabled
                ) {

                    return;

                }

                loadLesson(index);

            }
        );

    }
);


/* =========================================
   NEXT LESSON
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            /* Complete current lesson */

            completeCurrentLesson();


            /* If not last lesson */

            if (
                currentLesson <
                lessons.length - 1
            ) {

                loadLesson(
                    currentLesson + 1
                );

            }

            else {

                alert(
                    "🎉 Congratulations! You completed the Python for AI course!"
                );

            }

        }
    );

}


/* =========================================
   PREVIOUS LESSON
========================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (
                currentLesson > 0
            ) {

                loadLesson(
                    currentLesson - 1
                );

            }

        }
    );

}


/* =========================================
   SAVE COURSE
========================================= */

if (saveCourse) {

    saveCourse.addEventListener(
        "click",
        () => {

            saveCourse.innerHTML = `
                <i class="fa-solid fa-bookmark"></i>
                Course Saved
            `;

            saveCourse.style.color =
                "#00d9ff";

        }
    );

}


/* =========================================
   INITIALIZE
========================================= */

updateLessonLocks();

updateProgress();

updateNavigation();

loadLesson(0);