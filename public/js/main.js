const form = document.getElementById("image-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.getElementById("image").src = "";

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

    const imageUrl = data.image_url;

    document.getElementById("image").src = imageUrl;
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

// Show Spinner
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

// Hide Spinner
function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
