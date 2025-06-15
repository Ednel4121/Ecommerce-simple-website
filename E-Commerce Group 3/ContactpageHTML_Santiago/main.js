// Kunin lahat ng element na may class na "input"
const inputs = document.querySelectorAll(".input");

// Function na maglalagay ng "focus" class sa parent kapag naka-focus ang input
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// Function na mag-aalis ng "focus" class sa parent kapag nawala ang focus at walang laman ang input
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Maglagay ng event listener sa bawat input para sa focus at blur events
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
