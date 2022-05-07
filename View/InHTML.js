class InHTML{
    DeleteIfExist(IDElement){
        const DivExist = document.querySelectorAll(IDElement).length > 0
        if(DivExist){
            const element = document.getElementById(IDElement);
            element.remove()
        }
    }
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