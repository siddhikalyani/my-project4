// Create container
const container = document.createElement("div");
container.style.maxWidth = "500px";
container.style.margin = "50px auto";
container.style.padding = "20px";
container.style.background = "#fff";
container.style.borderRadius = "12px";
container.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.1)";
container.style.fontFamily = "Arial, sans-serif";

// Title
const heading = document.createElement("h2");
heading.textContent = "Live Character Counter";
heading.style.textAlign = "center";
container.appendChild(heading);

// Textarea
const textarea = document.createElement("textarea");
textarea.style.width = "100%";
textarea.style.height = "120px";
textarea.style.padding = "10px";
textarea.style.fontSize = "16px";
textarea.style.borderRadius = "8px";
textarea.style.border = "1px solid #ccc";
textarea.style.resize = "none";
textarea.placeholder = "Type something...";
container.appendChild(textarea);

// Counter wrapper
const counter = document.createElement("div");
counter.style.marginTop = "10px";
counter.style.fontSize = "14px";
counter.style.color = "#333";
counter.style.textAlign = "right";

// Label
const label = document.createTextNode("Characters: ");
counter.appendChild(label);

// Counter value
const charCount = document.createElement("span");
charCount.id = "charCount";
charCount.textContent = "0";
counter.appendChild(charCount);

container.appendChild(counter);

// Append container to body
document.body.appendChild(container);

// Update character count on typing
textarea.addEventListener("input", function () {
  charCount.textContent = textarea.value.length;
});
