const paymentMethods = document.querySelector(".title");
const arrowDown = document.querySelector(".btn-down");

const handleClick = () => {
  const height = paymentMethods.nextElementSibling.scrollHeight;
  console.log(height);

  arrowDown.classList.toggle("active-header");

  if (arrowDown.classList.contains("active-header")) {
    paymentMethods.nextElementSibling.style.maxHeight = `${height}px`;
  } else {
    paymentMethods.nextElementSibling.style.maxHeight = "0px";
  }
};

paymentMethods.addEventListener("click", handleClick);
