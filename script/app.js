// Interview Part
const interviewButtons = document.querySelectorAll(".btn-interview");

interviewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".job-card");
    card.setAttribute("data-category", "interviewed");

    const changeText = card.querySelector(".status-tag");
    if (changeText) changeText.innerText = "Interview";

    // Interview Count update
    const interviewCountElement = document.getElementById("interviewCount");
    let currentCount = parseInt(interviewCountElement.innerText);
    interviewCountElement.innerText = currentCount + 1;
  });
});

// Rejected Part
const rejectedItem = document.querySelectorAll(".btn-rejected");

rejectedItem.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".job-card");
    card.setAttribute("data-category", "rejected");

    const rejectedText = card.querySelector(".status-tag");

    if (rejectedText) rejectedText.innerText = "Rejected";

    // Rejected Count update
    const rejectedCountElement = document.getElementById("rejectedCount");
    let rejectCount = parseInt(rejectedCountElement.innerText);
    rejectedCountElement.innerText = rejectCount + 1;
  });
});

// Filter Method
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterButtons.forEach((b) => b.classList.remove("btn-active"));
    this.classList.add("btn-active");

    const filterValue = this.innerText.toLowerCase();
    const allJobCards = document.querySelectorAll(".job-card");

    allJobCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all") {
        card.style.display = "block";
      } else if (
        filterValue === "interview" &&
        cardCategory === "interviewed"
      ) {
        card.style.display = "block";
      } else if (filterValue === "rejected" && cardCategory === "rejected") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function updateTotalCount() {
  const allCards = document.querySelectorAll(".job-card");
  const totalCountElement = document.getElementById("totalCount");
  if (totalCountElement) {
    totalCountElement.innerText = allCards.length;
  }
}

updateTotalCount();

document.addEventListener("click", function (event) {
  if (event.target.closest(".btn-delete")) {
    const card = event.target.closest(".job-card");

    if (card) {
      card.remove();
      updateTotalCount();
    }
  }
});

// সব কার্ড ডিলিট হয়ে গেলে 'Empty State' দেখানোর ফাংশন
function checkEmptyState() {
  const container = document.getElementById("jobContainer");
  const emptyState = document.getElementById("emptyState");

  if (container.querySelectorAll(".job-card").length === 0) {
    emptyState.classList.remove("hidden");
  }
}

let interviewCount = 0;
let rejectedCount = 0;

const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");

const jobStatus = {}; // id অনুযায়ী status রাখবো

document.addEventListener("click", function (e) {
  // ======================
  // INTERVIEW BUTTON
  // ======================
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
    }

    jobStatus[id] = "interview";

    // status text change
    statusTag.innerText = "Interview";
    statusTag.className =
      "status-tag bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded uppercase";

    updateUI();
  }

  // ======================
  // REJECTED BUTTON
  // ======================
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
    }

    jobStatus[id] = "rejected";

    statusTag.innerText = "Rejected";
    statusTag.className =
      "status-tag bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded uppercase";

    updateUI();
  }

  // ======================
  // DELETE BUTTON
  // ======================
  if (e.target.closest(".btn-delete")) {
    const card = e.target.closest(".job-card");
    const id = card.querySelector(".btn-interview").dataset.id;

    if (jobStatus[id] === "interview") {
      interviewCount--;
    }

    if (jobStatus[id] === "rejected") {
      rejectedCount--;
    }

    delete jobStatus[id];

    card.remove();
    updateUI();
  }
});

function updateUI() {
  interviewCountEl.innerText = interviewCount;
  rejectedCountEl.innerText = rejectedCount;
}
