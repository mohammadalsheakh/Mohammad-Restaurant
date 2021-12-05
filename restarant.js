let contact = document.getElementById(`contact`)
let home = document.getElementById(`home`)
let dishes = document.getElementById(`dishes`)
document.onscroll = () =>{
    console.log(window.scrollY);
}
contact.onclick = () =>{
    window.scrollTo({
        top: 1599,
        behavior: "smooth"

    })
}
home.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
}
dishes.onclick = () => {
    window.scrollTo({
        top: 300,
        behavior : "smooth"
    })
}