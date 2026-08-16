/* =========================================
   NEXMIND - DATA SCIENCE COURSE
========================================= */


/* =========================================
   LESSON DATA
========================================= */

const lessons = [

    {
        title: "Data Science Fundamentals",

        intro:
            "Data Science combines statistics, programming and domain knowledge to extract useful insights from data.",

        content: `

            <div class="theory-section">

                <h3>What is Data Science?</h3>

                <p>
                    Data Science is an interdisciplinary field that uses
                    statistics, programming, analytical techniques and
                    domain knowledge to extract meaningful information
                    from data.
                </p>

                <p>
                    A data scientist works with raw information, cleans it,
                    explores it and uses analysis to answer real-world
                    questions.
                </p>

            </div>


            <div class="theory-section">

                <h3>Data Science Process</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-database"></i>

                        <h4>Data Collection</h4>

                        <p>
                            Gather data from databases, APIs,
                            files and other sources.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-broom"></i>

                        <h4>Data Cleaning</h4>

                        <p>
                            Fix missing, duplicate and
                            inconsistent data.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-simple"></i>

                        <h4>Data Analysis</h4>

                        <p>
                            Discover patterns and generate
                            useful insights.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Your First Data Analysis</h3>

                <div class="code-box">

<pre><code>import pandas as pd

data = pd.read_csv("students.csv")

print(data.head())

print(data.describe())</code></pre>

                </div>

                <p class="code-explanation">

                    Pandas can load a dataset and provide
                    useful statistical summaries.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Data Science extracts insights from data.</li>

                        <li>Statistics is an important part of Data Science.</li>

                        <li>Python is widely used for data analysis.</li>

                        <li>Data cleaning is an essential step.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Statistics",

        intro:
            "Statistics provides the mathematical foundation needed to understand data, identify patterns and make informed decisions.",

        content: `

            <div class="theory-section">

                <h3>Why Statistics Matters</h3>

                <p>
                    Statistics helps us summarize datasets, measure
                    variability and understand relationships between
                    different variables.
                </p>

                <p>
                    Data scientists use statistical concepts to make
                    reliable conclusions from collected information.
                </p>

            </div>


            <div class="theory-section">

                <h3>Important Statistical Concepts</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-calculator"></i>

                        <h4>Mean</h4>

                        <p>
                            The average value of a dataset.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-column"></i>

                        <h4>Variance</h4>

                        <p>
                            Measures how far values vary
                            from the mean.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <h4>Standard Deviation</h4>

                        <p>
                            Measures the typical spread
                            of values around the mean.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Python Example</h3>

                <div class="code-box">

<pre><code>import statistics

numbers = [10, 20, 30, 40, 50]

mean = statistics.mean(numbers)

print("Mean:", mean)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Statistics helps summarize data.</li>

                        <li>Mean represents the average.</li>

                        <li>Variance measures data spread.</li>

                        <li>Standard deviation describes typical variation.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "SQL & Databases",

        intro:
            "SQL allows data scientists to retrieve, filter and analyze structured data stored in relational databases.",

        content: `

            <div class="theory-section">

                <h3>What is SQL?</h3>

                <p>
                    SQL stands for Structured Query Language.
                    It is used to communicate with relational databases.
                </p>

                <p>
                    Data scientists frequently use SQL to retrieve
                    the exact information they need before performing
                    analysis.
                </p>

            </div>


            <div class="theory-section">

                <h3>Basic SQL Query</h3>

                <div class="code-box">

<pre><code>SELECT name, salary
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;</code></pre>

                </div>

                <p class="code-explanation">

                    This query selects employees whose salary
                    is greater than 50,000 and sorts them
                    from highest to lowest salary.

                </p>

            </div>


            <div class="theory-section">

                <h3>Important SQL Operations</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-filter"></i>

                        <h4>SELECT</h4>

                        <p>
                            Retrieve information from a table.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-filter-circle-dollar"></i>

                        <h4>WHERE</h4>

                        <p>
                            Filter rows based on conditions.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-layer-group"></i>

                        <h4>GROUP BY</h4>

                        <p>
                            Group records for analysis.
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

                        <li>SQL is essential for working with databases.</li>

                        <li>SELECT retrieves data.</li>

                        <li>WHERE filters data.</li>

                        <li>GROUP BY helps summarize information.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Exploratory Data Analysis",

        intro:
            "Exploratory Data Analysis helps you understand a dataset before building models or making important conclusions.",

        content: `

            <div class="theory-section">

                <h3>What is EDA?</h3>

                <p>
                    Exploratory Data Analysis, or EDA, is the process
                    of investigating a dataset to understand its
                    structure, distributions, relationships and anomalies.
                </p>

                <p>
                    EDA helps identify problems and interesting patterns
                    before deeper analysis or machine learning.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common EDA Steps</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-table"></i>

                        <h4>Inspect Data</h4>

                        <p>
                            Understand rows, columns and data types.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h4>Find Patterns</h4>

                        <p>
                            Look for relationships and trends.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-triangle-exclamation"></i>

                        <h4>Find Anomalies</h4>

                        <p>
                            Detect missing values and unusual observations.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>EDA with Pandas</h3>

                <div class="code-box">

<pre><code>print(data.shape)

print(data.info())

print(data.describe())

print(data.isnull().sum())</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>EDA helps understand a dataset.</li>

                        <li>It identifies patterns and anomalies.</li>

                        <li>Missing values should be investigated.</li>

                        <li>EDA should happen before modeling.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Data Visualization",

        intro:
            "Data visualization turns numbers into understandable charts and helps communicate patterns clearly.",

        content: `

            <div class="theory-section">

                <h3>Why Visualization?</h3>

                <p>
                    Large datasets can be difficult to understand
                    by looking at raw numbers alone.
                </p>

                <p>
                    Charts and graphs make trends, relationships
                    and comparisons easier to identify.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common Charts</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-column"></i>

                        <h4>Bar Chart</h4>

                        <p>
                            Compare categories or groups.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <h4>Line Chart</h4>

                        <p>
                            Show trends over time.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-pie"></i>

                        <h4>Pie Chart</h4>

                        <p>
                            Show proportions of a whole.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Python Visualization Example</h3>

                <div class="code-box">

<pre><code>import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar"]
sales = [120, 180, 150]

plt.plot(months, sales)

plt.title("Monthly Sales")

plt.show()</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Visualization makes data easier to understand.</li>

                        <li>Bar charts compare categories.</li>

                        <li>Line charts show trends.</li>

                        <li>Good visualizations communicate insights clearly.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Feature Engineering",

        intro:
            "Feature engineering transforms raw information into useful input variables that can improve analysis and machine learning models.",

        content: `

            <div class="theory-section">

                <h3>What is Feature Engineering?</h3>

                <p>
                    Features are the input variables used by a model.
                    Feature engineering creates or transforms these
                    variables so that they contain useful information.
                </p>

                <p>
                    Good features can help models learn patterns more
                    effectively.
                </p>

            </div>


            <div class="theory-section">

                <h3>Feature Engineering Techniques</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-plus"></i>

                        <h4>Create Features</h4>

                        <p>
                            Combine existing variables into new features.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-arrows-left-right"></i>

                        <h4>Transform Features</h4>

                        <p>
                            Apply useful mathematical transformations.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-filter"></i>

                        <h4>Select Features</h4>

                        <p>
                            Keep the most useful variables.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Example</h3>

                <div class="code-box">

<pre><code>data["total_spending"] =
    data["food"] +
    data["travel"] +
    data["shopping"]

print(data["total_spending"])</code></pre>

                </div>

                <p class="code-explanation">

                    Here multiple existing columns are combined
                    to create a new feature called total_spending.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Features are inputs used for analysis or modeling.</li>

                        <li>New features can be created from existing data.</li>

                        <li>Useful features can improve model performance.</li>

                        <li>Feature selection can reduce unnecessary information.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Data Science Project",

        intro:
            "Now combine everything you have learned to build a complete data science project from raw data to meaningful insights.",

        content: `

            <div class="theory-section">

                <h3>Your Final Project</h3>

                <p>
                    Build a complete data science project where you
                    collect or obtain a dataset, clean it, explore it,
                    visualize important patterns and communicate your
                    findings.
                </p>

            </div>


            <div class="theory-section">

                <h3>Project Workflow</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-database"></i>

                        <h4>1. Collect Data</h4>

                        <p>
                            Find a useful real-world dataset.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-broom"></i>

                        <h4>2. Clean Data</h4>

                        <p>
                            Handle missing and incorrect values.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <h4>3. Analyze Data</h4>

                        <p>
                            Discover trends and meaningful patterns.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Project Example</h3>

                <div class="code-box">

<pre><code>import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("sales.csv")

print(data.head())

print(data.describe())

data.plot(
    x="month",
    y="sales"
)

plt.show()</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-trophy"></i>
                </div>

                <div>

                    <h3>Course Complete!</h3>

                    <ul>

                        <li>You learned Data Science fundamentals.</li>

                        <li>You learned statistics and SQL.</li>

                        <li>You learned EDA and visualization.</li>

                        <li>You learned feature engineering.</li>

                        <li>You are ready to build Data Science projects.</li>

                    </ul>

                </div>

            </div>

        `
    }

];


/* =========================================
   HTML ELEMENTS
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

let completedLessons = [];


/* =========================================
   LOAD LESSON
========================================= */

function loadLesson(index) {

    if (
        index < 0 ||
        index >= lessons.length
    ) {

        return;

    }


    currentLesson = index;


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


    /* Remove old lesson content */

    const oldSections =
        lessonContent.querySelectorAll(
            ".theory-section, .takeaway-box"
        );


    oldSections.forEach(
        section => {

            section.remove();

        }
    );


    /* Insert new lesson content */

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


    updateProgress();

    updateNavigation();


    /* Scroll to lesson */

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
   COMPLETE LESSON
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


            const unlocked =
                index === 0 ||
                completedLessons.includes(
                    index - 1
                );


            if (unlocked) {

                button.disabled = false;


                if (
                    completedLessons.includes(
                        index
                    )
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
   LESSON BUTTONS
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

            completeCurrentLesson();


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
                    "🎉 Congratulations! You completed the Data Science course!"
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