// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("description").textContent = "The paragraph text has been updated!";
  });
  
  // Modify CSS styles
  document.getElementById("change-color-btn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "teal" ? "crimson" : "teal";
  });
  
  // Add and remove elements
  const itemList = document.getElementById("item-list");
  
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(li);
  });
  
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    if (itemList.lastChild) {
      itemList.removeChild(itemList.lastChild);
    }
  });
  