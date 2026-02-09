$(document).ready(function () {
    $("#btnCalculate").click(function () {
        // 1. Get the values from the inputs
        // parseFloat converts the text string into a decimal number
        var rate = parseFloat($("#hourlyRate").val());
        var hours = parseFloat($("#hoursNeeded").val());
        var errorMsg = $("#error-message");

        // 2. Validation: Check if it's a positive number
        if (isNaN(hours) || hours <= 0) {
            errorMsg.show(); // Show the red text
            $("#totalCost").val(""); // Clear previous total
        } else {
            errorMsg.hide(); // Hide the red text

            // 3. Simple Calculation
            var total = rate * hours;

            // 4. Output the result formatted to 2 decimal places
            $("#totalCost").val(total.toFixed(2));
        }
    });
});
