class InHTML{
    DeleteIfExist(IDElement){
        let DivExist = document.querySelectorAll(IDElement).length > 0
        console.log(DivExist)
        if(DivExist){
            IDElement = IDElement.replace("#","")
            let element = document.getElementById(IDElement);
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