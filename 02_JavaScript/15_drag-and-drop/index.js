const items = document.querySelectorAll(".item")
const sections = document.querySelectorAll(".section")
const trashSection = document.querySelector(".trashSection")
const trashIcon = document.querySelector(".trash")

function trashHover(action) {
    if (action === "in") {
        trashSection.classList.add("hover")
        trashIcon.style.fill = "#FCBF49"
    } else if (action === "out") {
        trashSection.classList.remove("hover")
        trashIcon.style.fill = "#e85d04"
    }
}

items.forEach(item => {
    item.addEventListener("dragstart", event => {
        item.classList.add("dragging")
        event.dataTransfer.setData("id", item.id)
    })

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" 
    })
    section.addEventListener("drop", event => {
        const id = event.dataTransfer.getData("id")
        const item = document.getElementById(id)
        section.appendChild(item)
    })
});

trashSection.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move" 
    trashHover("in")
})
trashSection.addEventListener("dragleave", event => {
    event.preventDefault()
    trashHover("out")
})
trashSection.addEventListener("drop", event => {
    const id = event.dataTransfer.getData("id")
    const item = document.getElementById(id)
    item.remove()
    trashHover("out")
})