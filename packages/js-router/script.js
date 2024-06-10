window.onload = () => {
  const navLinks = document.querySelectorAll("a.route");
  const backButton = document.querySelector("#backButton");

  for (let link of navLinks) {
    link.addEventListener("click", push);
  }

  backButton.addEventListener("click", back);
};

const push = e => {
  e.preventDefault();
  const {
    target: { href, id, textContent },
  } = e;
  document.title = id;
  window.history.pushState({ id }, "", href);
  // window.history.replaceState({ id }, "", href);

  /*

  - history.back()
  - history.forward()
  - history.go(n)
    - history.go(2) - forward 2
    - history.go(-3) - back 3

  */
};

const back = e => {
  e.preventDefault();

  // window.history.go(-1);
  window.history.back();
};
