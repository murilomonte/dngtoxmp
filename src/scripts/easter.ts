export function easter() {
  const images = [
    "/dngtoxmp/images/capybara/capy01.png",
    "/dngtoxmp/images/capybara/capy02.png",
    "/dngtoxmp/images/capybara/capy03.png",
    "/dngtoxmp/images/capybara/capy04.png",
    "/dngtoxmp/images/capybara/capy05.png",
  ];


  const capybaraImg = document.querySelector<HTMLImageElement>("#capybaraImg")!;

  capybaraImg.addEventListener("click", () => {
    capybaraImg.src = images[(Math.floor(Math.random() * images.length))];
  });
}
