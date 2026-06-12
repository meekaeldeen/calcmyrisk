// === Variable Declarations ===
const maxRiskInput = document.getElementById("maxRisk");
const entryPriceInput = document.getElementById("entryPrice");
const stopLossPriceInput = document.getElementById("stopLossPrice");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

const fixedRiskInput = document.getElementById("fixedRiskInput");
const riskTableBody = document.getElementById("riskTableBody");

const themeBtn = document.getElementById("toggleThemeBtn");
const icon = themeBtn.querySelector("i");

const stopLosses = [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00];

// === Load Saved Inputs on Page Load ===
window.addEventListener("DOMContentLoaded", () => {
  // Theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Risk Inputs
  const savedMaxRisk = localStorage.getItem("maxRisk");
  if (savedMaxRisk !== null) {
    maxRiskInput.value = savedMaxRisk;
  }

  const savedFixedRisk = localStorage.getItem("fixedRisk");
  if (savedFixedRisk !== null) {
    fixedRiskInput.value = savedFixedRisk;
    updateRiskTable();
  }
});

// === Main Calculator Logic ===
calculateBtn.addEventListener("click", function () {
  const maxRisk = parseFloat(maxRiskInput.value);
  const entryPrice = parseFloat(entryPriceInput.value);
  const stopLossPrice = parseFloat(stopLossPriceInput.value);

  if (isNaN(maxRisk) || isNaN(entryPrice) || isNaN(stopLossPrice)) {
    resultDiv.textContent = "Please fill in all fields.";
    return;
  }

  const stopAmount = Math.abs(entryPrice - stopLossPrice);
  if (stopAmount === 0) {
    resultDiv.textContent = "Stop loss cannot be zero.";
    return;
  }

  const shares = Math.floor(maxRisk / stopAmount);
  const positionSize = shares * entryPrice;

  resultDiv.textContent = `Buy ${shares} shares. Position size: $${positionSize.toFixed(2)}.`;
});

// === Update Fixed Risk Table ===
function updateRiskTable() {
  const fixedRisk = parseFloat(fixedRiskInput.value);
  if (isNaN(fixedRisk) || fixedRisk <= 0) return;

  riskTableBody.innerHTML = "";

  stopLosses.forEach(stop => {
    const shares = Math.floor(fixedRisk / stop);
    const row = document.createElement("tr");
    row.innerHTML = `<td>$${stop.toFixed(2)}</td><td>${shares}</td>`;
    riskTableBody.appendChild(row);
  });
}

// Trigger update initially
updateRiskTable();

// Save input changes to localStorage
maxRiskInput.addEventListener("input", () => {
  localStorage.setItem("maxRisk", maxRiskInput.value);
});

fixedRiskInput.addEventListener("input", () => {
  localStorage.setItem("fixedRisk", fixedRiskInput.value);
  updateRiskTable();
});

// === Theme Toggle ===
themeBtn.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
