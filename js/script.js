// Set Initial Count
let count = 0;

// Select Value and Buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click',function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        // Apply Conditional Formatting According to value of count

        // Set color to green if count > 0
        if (count > 0) {
            value.style.color = "green";
        }

        // Set color to red if count < 0
        if (count < 0) {
            value.style.color = "red";
        }

        // Set color to black if count equals 0
        if (count == 0) {
            value.style.color = "black";
        }

        value.textContent = count;
    });
});