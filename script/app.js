// Interview Part
const interviewButtons = document.querySelectorAll(".btn-interview");

interviewButtons.forEach((button) => {
  button.addEventListener("click", function () {

    const card = this.closest(".job-card");
    card.setAttribute("data-category", "interviewed");

    const changeText = card.querySelector(".status-tag");
    if (changeText) changeText.innerText = "Interview";

    // Interview Count update
    const interviewCountElement = document.getElementById("interview-count");
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
    const rejectedCountElement = document.getElementById("rejected-count");
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
      } 
      else if (filterValue === "rejected" && cardCategory === "rejected") {
        card.style.display = "block";

      } else {
        card.style.display = "none";
      }
    });
  });
});



function updateTotalCount() {
    const allCards = document.querySelectorAll('.job-card');
    const totalCountElement = document.getElementById('total-count');
    if (totalCountElement) {
        totalCountElement.innerText = allCards.length;
    }
}


updateTotalCount();

document.addEventListener('click', function(event) {
   
    if (event.target.closest('.btn-delete')) {
        const card = event.target.closest('.job-card');
    
        if (card) {
            card.remove();
            updateTotalCount();
        }
    }
});
