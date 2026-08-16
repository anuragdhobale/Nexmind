/* =========================================
   NEXMIND - CERTIFICATE
========================================= */


/* =========================================
   STUDENT INFORMATION
========================================= */

const studentName =
    localStorage.getItem("nexmind_student_name")
    || "Student Name";


const courseName =
    localStorage.getItem("nexmind_certificate_course")
    || "Python for AI";


/* =========================================
   GENERATE CERTIFICATE ID
========================================= */

let certificateId =
    localStorage.getItem(
        "nexmind_certificate_id"
    );


if (!certificateId) {

    const randomNumber =
        Math.floor(
            100000 + Math.random() * 900000
        );

    certificateId =
        `NXM-2026-${randomNumber}`;

    localStorage.setItem(
        "nexmind_certificate_id",
        certificateId
    );

}


/* =========================================
   COMPLETION DATE
========================================= */

const completionDate =
    localStorage.getItem(
        "nexmind_completion_date"
    )
    || new Date().toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );


/* =========================================
   UPDATE CERTIFICATE
========================================= */

const studentNameElement =
    document.getElementById(
        "studentName"
    );


const courseNameElement =
    document.getElementById(
        "courseName"
    );


const certificateIdElement =
    document.getElementById(
        "certificateId"
    );


const completionDateElement =
    document.getElementById(
        "completionDate"
    );


if (studentNameElement) {

    studentNameElement.textContent =
        studentName;

}


if (courseNameElement) {

    courseNameElement.textContent =
        courseName;

}


if (certificateIdElement) {

    certificateIdElement.textContent =
        certificateId;

}


if (completionDateElement) {

    completionDateElement.textContent =
        completionDate;

}


/* =========================================
   PRINT CERTIFICATE
========================================= */

const printButton =
    document.getElementById(
        "printCertificate"
    );


if (printButton) {

    printButton.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}


/* =========================================
   DOWNLOAD CERTIFICATE
========================================= */

const downloadButton =
    document.getElementById(
        "downloadCertificate"
    );


if (downloadButton) {

    downloadButton.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}