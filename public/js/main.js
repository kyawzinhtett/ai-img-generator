const form = document.getElementById("image-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const size = document.getElementById("size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }

  generateImageRequest(prompt, size);
});

async function generateImageRequest(prompt, size) {
  try {
    showSpinner();

    const response = await fetch("/openai/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("The image could not be generated");
    }

    const data = await response.json();
    removeSpinner();

    console.log(data);
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
