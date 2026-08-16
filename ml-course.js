/* =========================================
   NEXMIND - MACHINE LEARNING COURSE
========================================= */


/* =========================================
   LESSON DATA
========================================= */

const lessons = [

    {
        title: "ML Fundamentals",

        intro:
            "Machine Learning allows computers to learn patterns from data and use those patterns to make predictions.",

        content: `

            <div class="theory-section">

                <h3>What is Machine Learning?</h3>

                <p>
                    Machine Learning is a branch of Artificial Intelligence
                    that enables computers to learn patterns from data without
                    being explicitly programmed for every possible situation.
                </p>

                <p>
                    Instead of writing every rule manually, we provide data
                    to an algorithm and allow it to discover useful patterns.
                </p>

            </div>


            <div class="theory-section">

                <h3>Types of Machine Learning</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-chalkboard-user"></i>

                        <h4>Supervised Learning</h4>

                        <p>
                            Learns from labeled data to make predictions.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-magnifying-glass-chart"></i>

                        <h4>Unsupervised Learning</h4>

                        <p>
                            Finds hidden patterns in unlabeled data.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-robot"></i>

                        <h4>Reinforcement Learning</h4>

                        <p>
                            Learns through rewards and penalties.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Your First ML Model</h3>

                <div class="code-box">

<pre><code>from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>

                </div>

                <p class="code-explanation">

                    The model learns relationships from training data
                    and uses those relationships to make predictions.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Machine Learning learns patterns from data.</li>

                        <li>Supervised learning uses labeled data.</li>

                        <li>Unsupervised learning finds hidden patterns.</li>

                        <li>Models can be trained to make predictions.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Data Preprocessing",

        intro:
            "Good machine learning models depend on good-quality data. Data preprocessing prepares raw data for machine learning.",

        content: `

            <div class="theory-section">

                <h3>What is Data Preprocessing?</h3>

                <p>
                    Real-world datasets often contain missing values,
                    duplicate records, incorrect formats and inconsistent
                    information.
                </p>

                <p>
                    Data preprocessing transforms this raw information
                    into a clean format that machine learning algorithms
                    can understand.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common Preprocessing Steps</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-broom"></i>

                        <h4>Clean Data</h4>

                        <p>
                            Handle missing values and duplicates.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-scale-balanced"></i>

                        <h4>Scale Features</h4>

                        <p>
                            Bring numerical features to comparable ranges.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-code-branch"></i>

                        <h4>Encode Data</h4>

                        <p>
                            Convert categorical values into numerical form.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Example</h3>

                <div class="code-box">

<pre><code>from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)

print(X_scaled)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Raw data usually needs preparation.</li>

                        <li>Missing values should be handled carefully.</li>

                        <li>Features can be scaled.</li>

                        <li>Categorical data can be encoded.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Regression",

        intro:
            "Regression algorithms predict continuous numerical values such as prices, temperatures and sales.",

        content: `

            <div class="theory-section">

                <h3>What is Regression?</h3>

                <p>
                    Regression is a supervised learning technique used
                    when the target value is numerical and continuous.
                </p>

                <p>
                    For example, a model can predict house prices based
                    on area, number of rooms and location-related features.
                </p>

            </div>


            <div class="theory-section">

                <h3>Linear Regression</h3>

                <p>
                    Linear Regression attempts to find a relationship
                    between input features and a continuous target.
                </p>

                <div class="code-box">

<pre><code>from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)

predictions = model.predict(X_test)

print(predictions)</code></pre>

                </div>

            </div>


            <div class="theory-section">

                <h3>Regression Applications</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-house"></i>

                        <h4>House Prices</h4>

                        <p>
                            Estimate property prices.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <h4>Sales Forecasting</h4>

                        <p>
                            Predict future sales values.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-temperature-half"></i>

                        <h4>Prediction</h4>

                        <p>
                            Predict continuous measurements.
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

                        <li>Regression predicts numerical values.</li>

                        <li>Linear Regression is a common starting algorithm.</li>

                        <li>Training data teaches the model relationships.</li>

                        <li>The trained model can predict new values.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Classification",

        intro:
            "Classification algorithms predict categories or classes, making them useful for problems such as spam detection and disease prediction.",

        content: `

            <div class="theory-section">

                <h3>What is Classification?</h3>

                <p>
                    Classification is a supervised learning problem where
                    the model predicts a category rather than a continuous
                    numerical value.
                </p>

                <p>
                    Examples include predicting whether an email is spam
                    or whether a customer will leave a service.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common Classification Algorithms</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-diagram-project"></i>

                        <h4>Decision Tree</h4>

                        <p>
                            Makes decisions using a tree-like structure.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-vector-square"></i>

                        <h4>SVM</h4>

                        <p>
                            Finds boundaries between different classes.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-users"></i>

                        <h4>KNN</h4>

                        <p>
                            Uses nearby examples to determine a class.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Classification Example</h3>

                <div class="code-box">

<pre><code>from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Classification predicts categories.</li>

                        <li>It is a supervised learning technique.</li>

                        <li>Decision Trees are popular classification models.</li>

                        <li>Classification is widely used in real applications.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Decision Trees",

        intro:
            "Decision Trees use a sequence of decisions to arrive at a prediction and are easy to understand and visualize.",

        content: `

            <div class="theory-section">

                <h3>What is a Decision Tree?</h3>

                <p>
                    A Decision Tree is a machine learning algorithm that
                    makes predictions by repeatedly splitting data based
                    on feature values.
                </p>

                <p>
                    The resulting structure looks similar to a tree,
                    with decision nodes, branches and final leaf nodes.
                </p>

            </div>


            <div class="theory-section">

                <h3>Decision Tree Example</h3>

                <div class="code-box">

<pre><code>from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier(
    max_depth=4
)

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>

                </div>

            </div>


            <div class="theory-section">

                <h3>Why Use Decision Trees?</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-eye"></i>

                        <h4>Easy to Understand</h4>

                        <p>
                            Decisions can be visualized clearly.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-database"></i>

                        <h4>Flexible Data</h4>

                        <p>
                            Can work with different feature types.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-layer-group"></i>

                        <h4>Ensembles</h4>

                        <p>
                            Forms the foundation of Random Forests.
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

                        <li>Decision Trees use sequential decisions.</li>

                        <li>They can be used for classification and regression.</li>

                        <li>Tree depth affects model complexity.</li>

                        <li>Random Forests combine many decision trees.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Model Evaluation",

        intro:
            "A model is useful only when we can measure how well it performs on data it has not seen before.",

        content: `

            <div class="theory-section">

                <h3>Why Evaluate a Model?</h3>

                <p>
                    A machine learning model may perform very well on
                    training data but poorly on new data. Evaluation
                    helps us understand whether the model generalizes.
                </p>

            </div>


            <div class="theory-section">

                <h3>Common Metrics</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-bullseye"></i>

                        <h4>Accuracy</h4>

                        <p>
                            Measures the proportion of correct predictions.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-crosshairs"></i>

                        <h4>Precision</h4>

                        <p>
                            Measures how many predicted positives are correct.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-chart-simple"></i>

                        <h4>Recall</h4>

                        <p>
                            Measures how many actual positives were found.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Evaluation Example</h3>

                <div class="code-box">

<pre><code>from sklearn.metrics import accuracy_score

predictions = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    predictions
)

print("Accuracy:", accuracy)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Evaluation measures model performance.</li>

                        <li>Accuracy is useful for many classification tasks.</li>

                        <li>Precision and recall provide additional insight.</li>

                        <li>Testing should use unseen data.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "ML Prediction Project",

        intro:
            "Now combine your Machine Learning knowledge into a practical prediction project.",

        content: `

            <div class="theory-section">

                <h3>Your Final Project</h3>

                <p>
                    Build a machine learning application that loads a dataset,
                    prepares the data, trains a model, evaluates its performance
                    and makes predictions on new data.
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

                        <i class="fa-solid fa-gears"></i>

                        <h4>2. Prepare Data</h4>

                        <p>
                            Clean and transform the dataset.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-brain"></i>

                        <h4>3. Train Model</h4>

                        <p>
                            Train a machine learning algorithm.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Project Example</h3>

                <div class="code-box">

<pre><code>from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

X_train, X_test, y_train, y_test = \
    train_test_split(X, y, test_size=0.2)

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-trophy"></i>
                </div>

                <div>

                    <h3>Course Complete!</h3>

                    <ul>

                        <li>You learned Machine Learning fundamentals.</li>

                        <li>You learned data preprocessing.</li>

                        <li>You learned regression and classification.</li>

                        <li>You learned model evaluation.</li>

                        <li>You are ready to build ML projects.</li>

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


    /* Lesson number */

    const lessonNumber =
        document.querySelector(".lesson-label");

    if (lessonNumber) {

        lessonNumber.textContent =
            `LESSON ${String(index + 1).padStart(2, "0")}`;

    }


    /* Title */

    lessonTitle.textContent =
        lesson.title;


    /* Introduction */

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


    /* Insert new lesson */

    lessonIntro.insertAdjacentHTML(
        "afterend",
        lesson.content
    );


    /* Active lesson */

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


    /* Scroll */

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
                    "🎉 Congratulations! You completed the Machine Learning course!"
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