
let interviewCount = 0;
let rejectedCount = 0;
const jobStatus = {};

const interviewCountEl = document.getElementById("interviewCount");

const rejectedCountEl = document.getElementById("rejectedCount");

const totalCountElement = document.getElementById("totalCount");

// Funtion update
function updateUI() {
  const allCards = document.querySelectorAll(".job-card");

  interviewCountEl.innerText = interviewCount;
  rejectedCountEl.innerText = rejectedCount;
  totalCountElement.innerText = allCards.length;

  // empty state check
  const emptyState = document.getElementById("emptyState");

  if (allCards.length === 0) {
    emptyState.classList.remove("hidden");
  }
   else {
    emptyState.classList.add("hidden");
  }
}

// Interview Button
document.addEventListener("click", function (e) {

  if (e.target.closest(".btn-interview")) {

    const button = e.target.closest(".btn-interview");

    const id = button.dataset.id;

    const card = button.closest(".job-card");

    const statusTag = card.querySelector(".status-tag");

    if (jobStatus[id] === "rejected") {
      rejectedCount--;
    }

    if (jobStatus[id] !== "interview") {

      interviewCount++;

      jobStatus[id] = "interview";

      card.setAttribute("data-category", "interviewed");

      statusTag.innerText = "Interview";
      statusTag.className = "status-tag bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded uppercase";
      updateUI();
    }
  }

// Rejected Button
  if (e.target.closest(".btn-rejected")) {
    const button = e.target.closest(".btn-rejected");
    const id = button.dataset.id;
    const card = button.closest(".job-card");
    const statusTag = card.querySelector(".status-tag");

    if (jobStatus[id] === "interview") {
      interviewCount--;
    }

    if (jobStatus[id] !== "rejected") {
      rejectedCount++;
      jobStatus[id] = "rejected";
      card.setAttribute("data-category", "rejected");

      statusTag.innerText = "Rejected";
      statusTag.className = "status-tag bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded uppercase";
      updateUI();
    }
  }

  // Delete button
  if (e.target.closest(".btn-delete")) {
    const card = e.target.closest(".job-card");
    const id = card.querySelector(".btn-interview").dataset.id;

    if (jobStatus[id] === "interview") interviewCount--;
    if (jobStatus[id] === "rejected") rejectedCount--;

    delete jobStatus[id];
    card.remove();
    updateUI();
  }
});

// Filter method
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {

  btn.addEventListener("click", function () {
    filterButtons.forEach((b) =>
      b.classList.remove("btn-active", "btn-primary"),
    );
    this.classList.add("btn-active", "btn-primary");

    const filterValue = this.innerText.toLowerCase();
    const allJobCards = document.querySelectorAll(".job-card");

    allJobCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all") {
        card.style.display = "block";

      } else if (
        filterValue === "interview" &&
        cardCategory === "interviewed"
      )
      {
        card.style.display = "block";
      } 
      else if (filterValue === "rejected" && cardCategory === "rejected") {
        card.style.display = "block";

      } else {
        card.style.display = "none";
      }
    });
  });
});
updateUI();

// No Job 

allJobCards.forEach((card) => {
  const cardCategory = card.getAttribute("data-category");

  if (filterValue === "all") {
    card.style.display = "block";
  } else if (filterValue === "interview" && cardCategory === "interviewed") {
    card.style.display = "block";
  } else if (filterValue === "rejected" && cardCategory === "rejected") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

// 👉 Visible card check
const visibleCards = [...allJobCards].filter(
  (card) => card.style.display !== "none",
);

const emptyState = document.getElementById("emptyState");

if (visibleCards.length === 0) {
  emptyState.classList.remove("hidden");
} else {
  emptyState.classList.add("hidden");
}
