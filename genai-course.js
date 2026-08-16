/* =========================================
   NEXMIND - GENERATIVE AI COURSE
========================================= */


/* =========================================
   LESSON DATA
========================================= */

const lessons = [

    {
        title: "Generative AI Fundamentals",

        intro:
            "Generative AI refers to artificial intelligence systems that can create new content such as text, images, audio and code.",

        content: `

            <div class="theory-section">

                <h3>What is Generative AI?</h3>

                <p>
                    Generative AI is a branch of artificial intelligence
                    focused on creating new content from patterns learned
                    from existing data.
                </p>

                <p>
                    Modern generative AI systems can generate natural
                    language, write code, summarize documents, create
                    images and assist with many creative and analytical tasks.
                </p>

            </div>


            <div class="theory-section">

                <h3>What Can Generative AI Do?</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-message"></i>

                        <h4>Text Generation</h4>

                        <p>
                            Generate explanations, summaries
                            and conversations.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-code"></i>

                        <h4>Code Generation</h4>

                        <p>
                            Assist developers with writing
                            and understanding code.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-image"></i>

                        <h4>Content Creation</h4>

                        <p>
                            Generate images and other
                            creative content.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Your First Generative AI Request</h3>

                <div class="code-box">

<pre><code>prompt = """
Explain machine learning
in simple words for a beginner.
"""

response = model.generate(prompt)

print(response)</code></pre>

                </div>

                <p class="code-explanation">

                    A prompt provides instructions to a generative
                    AI model describing what you want it to produce.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Generative AI creates new content.</li>

                        <li>It can work with text, images, code and more.</li>

                        <li>Prompts provide instructions to AI models.</li>

                        <li>Generative AI is used across many industries.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Large Language Models",

        intro:
            "Large Language Models are AI models trained on large amounts of text that can understand and generate human-like language.",

        content: `

            <div class="theory-section">

                <h3>What is an LLM?</h3>

                <p>
                    A Large Language Model, or LLM, is a machine learning
                    model designed to process and generate natural language.
                </p>

                <p>
                    LLMs learn statistical patterns from large collections
                    of text and use those patterns to generate responses
                    based on a given input.
                </p>

            </div>


            <div class="theory-section">

                <h3>How Does an LLM Work?</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-file-lines"></i>

                        <h4>Training Data</h4>

                        <p>
                            Models learn patterns from
                            large datasets.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-brain"></i>

                        <h4>Neural Network</h4>

                        <p>
                            Deep learning architectures
                            process language patterns.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-comment-dots"></i>

                        <h4>Generation</h4>

                        <p>
                            The model generates a response
                            based on the input context.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Simple LLM Interaction</h3>

                <div class="code-box">

<pre><code>prompt = "What is artificial intelligence?"

response = model.generate(prompt)

print(response)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>LLMs work with natural language.</li>

                        <li>They learn patterns from large datasets.</li>

                        <li>Deep learning powers modern LLMs.</li>

                        <li>LLMs can generate context-aware responses.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Prompt Engineering",

        intro:
            "Prompt engineering is the practice of designing clear and effective instructions to guide generative AI models.",

        content: `

            <div class="theory-section">

                <h3>What is Prompt Engineering?</h3>

                <p>
                    A prompt is the instruction or input provided to
                    a generative AI model.
                </p>

                <p>
                    Prompt engineering focuses on writing prompts that
                    clearly communicate the task, context, constraints
                    and desired output.
                </p>

            </div>


            <div class="theory-section">

                <h3>Elements of a Good Prompt</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-bullseye"></i>

                        <h4>Clear Task</h4>

                        <p>
                            Clearly explain what the model
                            needs to accomplish.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-circle-info"></i>

                        <h4>Context</h4>

                        <p>
                            Provide relevant background
                            information.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-list-check"></i>

                        <h4>Output Format</h4>

                        <p>
                            Specify how the final response
                            should be structured.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Example Prompt</h3>

                <div class="code-box">

<pre><code>prompt = """
You are an AI tutor.

Explain Machine Learning
to a beginner in simple language.

Give:
1. Definition
2. Example
3. Real-world application
"""</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Good prompts are clear and specific.</li>

                        <li>Context helps models understand the task.</li>

                        <li>Output format can be explicitly specified.</li>

                        <li>Better prompts often produce more useful results.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Embeddings",

        intro:
            "Embeddings convert text and other information into numerical vectors that capture semantic relationships.",

        content: `

            <div class="theory-section">

                <h3>What are Embeddings?</h3>

                <p>
                    An embedding is a numerical representation of data.
                    Text, images or other information can be converted
                    into vectors that capture meaningful relationships.
                </p>

                <p>
                    Similar pieces of information tend to have vectors
                    that are closer together in the embedding space.
                </p>

            </div>


            <div class="theory-section">

                <h3>Why Embeddings Matter</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-language"></i>

                        <h4>Meaning</h4>

                        <p>
                            Represent semantic information
                            numerically.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h4>Search</h4>

                        <p>
                            Find information based on meaning,
                            not only keywords.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-link"></i>

                        <h4>Similarity</h4>

                        <p>
                            Compare how similar two pieces
                            of information are.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Embedding Example</h3>

                <div class="code-box">

<pre><code>text = "Machine learning is AI"

vector = embedding_model.embed(text)

print(vector)</code></pre>

                </div>

                <p class="code-explanation">

                    The text is transformed into a numerical vector
                    that can be compared with other vectors.

                </p>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Embeddings represent information as vectors.</li>

                        <li>They capture semantic relationships.</li>

                        <li>Similar meanings can have similar vectors.</li>

                        <li>Embeddings are important for modern AI search systems.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Vector Databases",

        intro:
            "Vector databases store and search numerical embeddings efficiently, making them useful for semantic search and AI applications.",

        content: `

            <div class="theory-section">

                <h3>What is a Vector Database?</h3>

                <p>
                    A vector database is a specialized database designed
                    to store and retrieve vector representations efficiently.
                </p>

                <p>
                    Instead of searching only for exact keywords, vector
                    databases can find information that is semantically
                    similar to a query.
                </p>

            </div>


            <div class="theory-section">

                <h3>How Vector Search Works</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-file"></i>

                        <h4>1. Store</h4>

                        <p>
                            Convert documents into embeddings
                            and store them.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h4>2. Search</h4>

                        <p>
                            Convert a user query into
                            an embedding.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-ranking-star"></i>

                        <h4>3. Retrieve</h4>

                        <p>
                            Return the most similar
                            stored vectors.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Conceptual Example</h3>

                <div class="code-box">

<pre><code>query_vector = embed(
    "What is machine learning?"
)

results = vector_db.search(
    query_vector,
    top_k=3
)

print(results)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>Vector databases store embeddings.</li>

                        <li>They support semantic similarity search.</li>

                        <li>Queries can retrieve related information.</li>

                        <li>They are commonly used in RAG systems.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "Retrieval-Augmented Generation",

        intro:
            "RAG combines information retrieval with generative AI so models can use relevant external knowledge when generating responses.",

        content: `

            <div class="theory-section">

                <h3>What is RAG?</h3>

                <p>
                    Retrieval-Augmented Generation, or RAG, is an
                    architecture where relevant information is retrieved
                    from an external knowledge source and provided to
                    a generative AI model.
                </p>

                <p>
                    This allows applications to answer questions using
                    specific documents or knowledge bases rather than
                    relying only on information learned during model training.
                </p>

            </div>


            <div class="theory-section">

                <h3>RAG Pipeline</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h4>1. Retrieve</h4>

                        <p>
                            Find relevant information
                            from a knowledge source.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-file-lines"></i>

                        <h4>2. Context</h4>

                        <p>
                            Add the retrieved information
                            to the model input.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-wand-magic-sparkles"></i>

                        <h4>3. Generate</h4>

                        <p>
                            Generate an answer using
                            the retrieved context.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Conceptual RAG Flow</h3>

                <div class="code-box">

<pre><code>query = "Explain our company policy"

documents = vector_db.search(
    embed(query),
    top_k=3
)

prompt = build_prompt(
    query,
    documents
)

answer = model.generate(prompt)

print(answer)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-lightbulb"></i>
                </div>

                <div>

                    <h3>Key Takeaways</h3>

                    <ul>

                        <li>RAG combines retrieval and generation.</li>

                        <li>Relevant external information can be added to the prompt.</li>

                        <li>Vector search is commonly used for retrieval.</li>

                        <li>RAG is useful for document-based AI applications.</li>

                    </ul>

                </div>

            </div>

        `
    },


    {
        title: "AI Agents & GenAI Project",

        intro:
            "AI agents combine language models with tools, memory and decision-making workflows to accomplish multi-step tasks.",

        content: `

            <div class="theory-section">

                <h3>What is an AI Agent?</h3>

                <p>
                    An AI agent is a software system that can use an
                    AI model to reason about a task, choose actions,
                    interact with tools and work toward a goal.
                </p>

                <p>
                    Instead of simply generating one response, an agent
                    can perform multiple steps and use external tools
                    when needed.
                </p>

            </div>


            <div class="theory-section">

                <h3>Agent Components</h3>

                <div class="benefit-grid">

                    <div class="benefit-card">

                        <i class="fa-solid fa-brain"></i>

                        <h4>AI Model</h4>

                        <p>
                            Provides reasoning and language
                            capabilities.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-screwdriver-wrench"></i>

                        <h4>Tools</h4>

                        <p>
                            Allow the agent to interact
                            with external systems.
                        </p>

                    </div>


                    <div class="benefit-card">

                        <i class="fa-solid fa-memory"></i>

                        <h4>Memory</h4>

                        <p>
                            Helps maintain useful context
                            across interactions.
                        </p>

                    </div>

                </div>

            </div>


            <div class="theory-section">

                <h3>Final GenAI Project</h3>

                <p>
                    Build a document-based AI assistant using a
                    language model, embeddings, vector search and
                    retrieval-augmented generation.
                </p>

                <div class="code-box">

<pre><code>question = "What does the document say?"

context = retrieve_documents(
    question
)

answer = generate_answer(
    question,
    context
)

print(answer)</code></pre>

                </div>

            </div>


            <div class="takeaway-box">

                <div class="takeaway-icon">
                    <i class="fa-solid fa-trophy"></i>
                </div>

                <div>

                    <h3>Course Complete!</h3>

                    <ul>

                        <li>You learned Generative AI fundamentals.</li>

                        <li>You learned how LLMs work conceptually.</li>

                        <li>You learned prompt engineering and embeddings.</li>

                        <li>You learned vector databases and RAG.</li>

                        <li>You explored AI agents and GenAI projects.</li>

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


    /* Remove previous lesson content */

    const oldSections =
        lessonContent.querySelectorAll(
            ".theory-section, .takeaway-box"
        );


    oldSections.forEach(
        section => {

            section.remove();

        }
    );


    /* Insert selected lesson */

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
                    "🎉 Congratulations! You completed the Generative AI course!"
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