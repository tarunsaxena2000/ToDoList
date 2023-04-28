submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo",JSON.stringify([titlec,descc]))
   let s = document.getElementById('show')
     s.innerHTML = `<h3>${titlec}</h4> <p>${descc}</P>`
    title.value=""
    desc.value=""
    
  })
  
  deletebtn.addEventListener("click", (e) => {
   localStorage.removeItem("todo")
     todo.innerHTML=""
  })
  
  
  