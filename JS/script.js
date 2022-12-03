{
    const info = () => {
        console.log("To jest moja kolejna strona internetowa")
    }
    const toggleBackgroundHeader = () => {
        const naglowek = document.querySelector(".naglowek");
        naglowek.classList.toggle("blue");
    }
    const init = () => {
        const przycisk = document.querySelector(".przycisk");
        przycisk.addEventListener("click", toggleBackgroundHeader);
        info();
    }
    init();
}