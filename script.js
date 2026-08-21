function calculateMarks() {

    // Get student details
    let name = document.getElementById("studentName").value;
    let registerNo = document.getElementById("registerNo").value;

    // Get subject marks
    let tamil = Number(document.getElementById("tamil").value);
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let social = Number(document.getElementById("social").value);

    // Check student details
    if (name === "" || registerNo === "") {
        alert("Please enter student name and register number.");
        return;
    }

    // Store all marks in an array
    let marks = [tamil, english, maths, science, social];

    // Check marks
    for (let mark of marks) {
        if (mark < 0 || mark > 100 || isNaN(mark)) {
            alert("Please enter marks between 0 and 100.");
            return;
        }
    }

    // Calculate total
    let total = tamil + english + maths + science + social;

    // Calculate average
    let average = total / 5;

    // Calculate percentage
    let percentage = (total / 500) * 100;

    // Calculate grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Check pass or fail
    let passed = marks.every(function(mark) {
        return mark >= 35;
    });

    let result;

    if (passed) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }

    // Display result
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultRegister").textContent = registerNo;
    document.getElementById("totalMarks").textContent = total;
    document.getElementById("average").textContent = average.toFixed(2);
    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("grade").textContent = grade;

    let status = document.getElementById("status");

    status.textContent = result;

    if (passed) {
        status.className = "pass";
    }
    else {
        status.className = "fail";
    }

    // Show result section
    document.getElementById("result").style.display = "block";
}