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
  const defaultTablePage = "table1.html";

  // Attach an event listener to the form submission
  const reservationForm = document.getElementById("reservationForm");
  reservationForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get the reservation details from the form
      const date = document.getElementById("date").value;
      const diners = document.getElementById("diners").value;
      const time = document.getElementById("time").value;

      if (!date) {
          alert("Please select a date.");
          return;
      }

      // Save reservation details to localStorage
      localStorage.setItem("selected-date", date);
      localStorage.setItem("number-of-diners", diners);
      localStorage.setItem("selected-time", time);

      // Redirect to the corresponding table page or the default page
      const tablePage = branchTableMap[branch] || defaultTablePage;
      window.location.href = tablePage;
  });

  // Back button functionality
  const backButton = document.getElementById("backModalBtn");
  backButton.addEventListener("click", () => {
      window.location.href = "index.html#targetSection";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reservationForm = document.getElementById("reservationForm");

  // Attach an event listener to the form submission
  reservationForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get the selected values from the form
      const diners = document.getElementById("diners").value;
      const time = document.getElementById("time").value;
      const selectedDate = document.getElementById("date").value; // Get the selected date

      // Save the values to sessionStorage
      sessionStorage.setItem("number-of-diners", diners);
      sessionStorage.setItem("selected-time", time);
      sessionStorage.setItem("reservation-date", selectedDate);

      // Redirect to the table page
      window.location.href = `table1.html?date=${selectedDate}`; // Pass date as query parameter
  });
});
