// history tab function

const historyButton = document.getElementById("show-history-section");
const donateButton = document.getElementById("show-donation-section");

historyButton.addEventListener("click", function (event) {
    event.preventDefault();
  historyButton.classList.add(
    "bg-[#B4F461]",
    "w-32",
    "h-10",
    "rounded-md",
    "text-black",
    "font-bold"
  );

  donateButton.classList.remove(
    "bg-[#B4F461]",
    "w-32",
    "h-10",
    "rounded-md",
    "text-black",
    "font-bold"
  );
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById('transition-section').classList.remove('hidden')
});

donateButton.addEventListener("click", function (event) {
    event.preventDefault();
  donateButton.classList.add(
    "bg-[#B4F461]",
    "w-32",
    "h-10",
    "rounded-md",
    "text-black",
    "font-bold"
  );
  historyButton.classList.remove(
    "bg-[#B4F461]",
    "w-32",
    "h-10",
    "rounded-md",
    "text-black",
    "font-bold"
  );
  document.getElementById("donate-section").classList.remove("hidden");
  document.getElementById('transition-section').classList.add('hidden')
});
