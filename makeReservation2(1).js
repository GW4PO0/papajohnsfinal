document.addEventListener("DOMContentLoaded", () => {
  // Get the branch name from the URL query string
  const params = new URLSearchParams(window.location.search);
  const branch = params.get("branch");

  // Map branches to their respective table HTML files
  const branchTableMap = {
    Talamban: "table1.html",
    Consolacion: "table2.html",
    Banilad: "table3.html",
  };

  // Default table page if branch is invalid or not provided
  const defaultTablePage = "table2.html";

  // Attach an event listener to the form submission
  const reservationForm = document.getElementById("reservationForm");
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Save reservation details to sessionStorage
    const numberOfDiners = document.getElementById("diners").value;
    const selectedDate = document.getElementById("date").value;
    const selectedTime = document.getElementById("time").value;

    sessionStorage.setItem("number-of-diners", numberOfDiners);
    sessionStorage.setItem("reservation-date", selectedDate);
    sessionStorage.setItem("selected-time", selectedTime);

    // Redirect to the corresponding table page or the default page
    const tablePage = branchTableMap[branch] || defaultTablePage;
    window.location.href = tablePage;
  });
});

document.getElementById("backModalBtn").addEventListener("click", () => {
  window.location.href = "index.html#targetSection"; 
});
