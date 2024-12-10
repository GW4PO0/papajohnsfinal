document.addEventListener("DOMContentLoaded", () => {
    // Get the date picker input, tables, and reservation details display
    const dateInput = document.getElementById("reservation-date");
    const reservationDateDisplay = document.getElementById("reservation-date-display");
    const numberOfDinersDisplay = document.getElementById("number-of-diners");
    const selectedTimeDisplay = document.getElementById("selected-time");

    const tables = document.querySelectorAll(".table1, .table2, .table3, .table4, .table5, .table6, .table7, .table8, .table9, .table10, .rectab1, .rectab2, .rectab3, .rectab4, .rectab5, .rectab6, .rectab7");
    const confirmButton = document.querySelector(".confirm-btn");

    let selectedTable = null; // Variable to track the selected table
    let selectedDate = sessionStorage.getItem("reservation-date") || dateInput.value; // Get the initial date from sessionStorage or default

    // Get modal elements for the first modal
    const modal = document.getElementById("confirmation-modal");
    const closeModalButton = document.querySelector(".close-btn");
    const confirmReservationButton = document.getElementById("confirm-reservation");
    const cancelReservationButton = document.getElementById("cancel-reservation");

    // Get elements for the second modal
    const finalModal = document.getElementById("final-confirmation-modal");
    const finalOkButton = document.getElementById("final-ok");

    // Set the input date to the stored date value or today's date
    dateInput.value = selectedDate || new Date().toISOString().split('T')[0]; // Default to today's date if no stored date

    // Function to load table reservation status for the selected date
    const loadReservations = (date) => {
        tables.forEach((table, index) => {
            const isReserved = sessionStorage.getItem(`table2-${date}-table-${index}`);
            if (isReserved === "reserved") {
                table.style.backgroundColor = "#65482f";
                table.style.pointerEvents = "none"; // Disable further interaction
            } else {
                table.style.backgroundColor = "white"; // Reset to default
                table.style.pointerEvents = "auto"; // Re-enable interaction
            }
        });
    };
    // Function to save reservation for the selected date
    const saveReservation = (date, index) => {
        sessionStorage.setItem(`table2-${date}-table-${index}`, "reserved");
    };
    // Function to open a modal
    const openModal = (modalElement) => {
        modalElement.style.display = "block";
    };

    // Function to close a modal
    const closeModal = (modalElement) => {
        modalElement.style.display = "none";
    };

    // Event listener for selecting a table
    tables.forEach((table, index) => {
        table.addEventListener("click", () => {
            // If a table is already selected, reset its color
            if (selectedTable && selectedTable !== table) {
                selectedTable.style.backgroundColor = "white"; // Reset previously selected table
            }

            // Set the clicked table as the selected table
            selectedTable = table;

            // Change the selected table's color to lightbrown
            table.style.backgroundColor = "#f18f3b";
        });
    });

    // Event listener for the confirm button
    confirmButton.addEventListener("click", () => {
        if (!selectedDate) {
            alert("Please select a date before confirming a reservation.");
            return;
        }

        if (selectedTable) {
            // Update modal details with reservation details
            document.getElementById("modal-date").textContent = reservationDateDisplay.textContent;
            document.getElementById("modal-people").textContent = numberOfDinersDisplay.textContent;
            document.getElementById("modal-time").textContent = selectedTimeDisplay.textContent;

            openModal(modal); // Open the first confirmation modal
        } else {
            alert("Please select a table before confirming.");
        }
    });

    // Handle Confirm button inside the first modal
    confirmReservationButton.addEventListener("click", () => {
        selectedTable.style.backgroundColor = "#65482f";
        selectedTable.style.pointerEvents = "none"; // Disable further interaction

        // Save the reservation to sessionStorage
        const tableIndex = Array.from(tables).indexOf(selectedTable);
        saveReservation(selectedDate, tableIndex);

        selectedTable = null; // Clear the selectedTable variable

        closeModal(modal); // Close the first modal
        openModal(finalModal); // Open the second modal
    });

    // Handle Cancel button inside the first modal
    cancelReservationButton.addEventListener("click", () => {
        selectedTable.style.backgroundColor = "white"; // Reset color
        selectedTable = null; // Clear the selectedTable variable
        closeModal(modal); // Close the modal
    });

    // Handle Close button on the first modal
    closeModalButton.addEventListener("click", () => {
        closeModal(modal);
    });

    // Close the first modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });

    // Handle OK button in the final confirmation modal
    finalOkButton.addEventListener("click", () => {
        closeModal(finalModal);
        window.location.href = "index.html"; // Redirect to index.html
    });

    // Close the final modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === finalModal) {
            closeModal(finalModal);
            window.location.href = "index.html";
        }
    });

    // Event listener for the date picker change
    dateInput.addEventListener("change", (event) => {
        selectedDate = event.target.value; // Update the selected date
        sessionStorage.setItem("reservation-date", selectedDate); // Save selected date to sessionStorage
        loadReservations(selectedDate); // Load reservations for the new date
        reservationDateDisplay.textContent = selectedDate; // Update the reservation date display
    });

    // Load the reservation details from sessionStorage
    const loadReservationDetails = () => {
        const numberOfDiners = sessionStorage.getItem("number-of-diners") || "Not Specified";
        const selectedTime = sessionStorage.getItem("selected-time") || "Not Specified";

        numberOfDinersDisplay.textContent = numberOfDiners;
        selectedTimeDisplay.textContent = selectedTime;
    };

    // Display the reservation details on page load
    loadReservationDetails();

    // Set the initial date and load reservations for it
    loadReservations(selectedDate);
    reservationDateDisplay.textContent = selectedDate;
});
