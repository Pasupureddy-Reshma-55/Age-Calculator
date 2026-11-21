const input = document.getElementById("date of month");

const Result = document.getElementById("result");

const Years = document.getElementById("years");

const Months = document.getElementById("months");

const Days = document.getElementById("days");

const Totaldays = document.getElementById("total-days");


Result.addEventListener("click", function () {

    let birthDate = new Date(input.value);

    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    let day = today.getDate() - birthDate.getDate();


    if (day < 0) {
        month--;
        day = day + 30;
    }

    if (month < 0) {
        age--;
        month = month + 12;
    }


    let totalDays = Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24)
    );


    Years.textContent = age + " Years";

    Months.textContent = month + " Months";

    Days.textContent = day + " Days";

    Totaldays.textContent = totalDays + " Total Days";

});