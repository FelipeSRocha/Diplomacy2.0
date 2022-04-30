class AddElement{

    AddElement(type, id_place="", id="", classname="", text="",f = ()=>{}, src=""){
        let place = document.getElementById(id_place)
        let el = document.createElement(type)
        el.innerHTML = text
        el.className = classname
        el.id = id
        el.src = src
        el.addEventListener("click", () =>{
            f()
        })
        place.appendChild(el)

    }
}