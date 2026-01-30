export function easter() {
  const images = [
    "/images/capybara/capy01.png",
    "/images/capybara/capy02.png",
    "/images/capybara/capy03.png",
    "/images/capybara/capy04.png",
    "/images/capybara/capy05.png",
  ];


  const capybaraImg = document.querySelector<HTMLImageElement>("#capybaraImg")!;

  capybaraImg.addEventListener("click", () => {
    capybaraImg.src = images[(Math.floor(Math.random() * images.length))];
  });
}
