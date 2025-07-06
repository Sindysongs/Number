// Load existing numbers from localStorage
let numbers = JSON.parse(localStorage.getItem("numbers")) || [];

// Update the list on page load
updateList();

function submitNumber() {
  const input = document.getElementById("numberInput");
  const message = document.getElementById("message");
  const num = input.value.trim();

  if (!num) {
    message.textContent = "Please enter a number.";
    message.className = "";
    return;
  }

  if (numbers.includes(num)) {
    message.textContent = `⚠️ ${num} has already been entered!`;
    message.className = "duplicate";
  } else {
    numbers.push(num);
    localStorage.setItem("numbers", JSON.stringify(numbers));
    message.textContent = `✅ ${num} added successfully.`;
    message.className = "success";
    updateList();
  }

  input.value = "";
}

function updateList() {
  const list = document.getElementById("numberList");
  list.innerHTML = "";
  numbers.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = n;
    list.appendChild(li);
  });
}
