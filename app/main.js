document.getElementById("fn-pagination").addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        document.querySelector("div.nextButton.next").click();
    } else {
        document.querySelector("div.prevButton.prev").click();
    }
});

document.getElementById("cboxContent").addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        document.getElementById("cboxNext").click();
    } else {
        document.getElementById("cboxPrevious").click();
    }
});