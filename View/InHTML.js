class InHTML{
    DeleteIfExist(IDElement){
        let DivExist = document.querySelectorAll(IDElement).length > 0
        if(DivExist){
            IDElement = IDElement.replace("#","")
            let element = document.getElementById(IDElement);
            element.remove()
        }
    }
    CheckIfExist(IDElement){
        let DivExist = document.querySelectorAll(IDElement).length > 0
        return DivExist
    }
    AddElement(type, id_place="", id="", classname="", text="",f = ()=>{}, src=""){
        const place = document.getElementById(id_place)
        const el = document.createElement(type)
        el.innerHTML = text
        el.className = classname
        el.id = id
        el.src = src
        el.addEventListener("click", () =>{
            f()
        })
        place.appendChild(el)
    }
    AddBtn(id_place="", id="", classname="", text="",f = ()=>{}){
        const place = document.getElementById(id_place)
        const el = document.createElement("button")
        el.innerHTML = text
        el.className = classname
        el.id = id
        el.addEventListener("click", () =>{
            f()
        })
        place.appendChild(el)
    }
    AddText(id_place="", id="", classname="", text=""){
        const place = document.getElementById(id_place)
        const el = document.createElement("p")
        el.innerHTML = text
        el.className = classname
        el.id = id
        place.appendChild(el)
    }
    AddInput(type, id_place="", id="", classname="", checked=false, text="",f = ()=>{}){
        const place = document.getElementById(id_place)
        const el = document.createElement("input")
        el.type = type
        el.innerHTML = text 
        el.className = classname
        el.id = id
        el.addEventListener("click", () =>{
            f()
        })
        el.checked = checked
        place.appendChild(el)
    }

}