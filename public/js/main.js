const form = document.getElementById("image-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const size = document.getElementById("size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }

  console.log(prompt, size);
});
