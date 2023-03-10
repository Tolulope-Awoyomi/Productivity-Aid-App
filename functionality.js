document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('create-activity-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildActivities(e.target.new_activity_description.value)
        form.reset()
    })
});

function buildActivities(activity){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'delete' 
    li.textContent = `${activity} `    
    li.appendChild(btn)
    let img = document.createElement("img");
    img.src = "rb_okay.png";
    li.appendChild(img)
    document.querySelector('#activities').appendChild(li)
 }

function handleDelete(e){
    e.target.parentNode.remove()
}



function timer () {
    let timer = document.getElementById("timer")
    let parsedNumber = parseInt(timer.innerText);
    console.log (parsedNumber)
    timer.innerText = parsedNumber +=1
  }
  
  let minus = document.getElementById("minus")
  
  minus.addEventListener("click", function () {
  let timer = document.getElementById("timer")
    let parsedNumber = parseInt(timer.innerText);
    console.log (parsedNumber)
    timer.innerText = parsedNumber -=1
  })
  
  plus.addEventListener("click", function () {
      let timer = document.getElementById("timer")
      let parsedNumber = parseInt(timer.innerText);
      console.log (parsedNumber)
      timer.innerText = parsedNumber +=1
      })
  
  const pause = document.getElementById("pause");
  let minusButton = document.getElementById("minus");
  let plusButton = document.getElementById("plus");
  let startButton = document.getElementById("start");

  let start = document.getElementById("start")
  start.addEventListener("click", function(event){
    if (event.target.id === "restart") {
        setInterval(timer, 1000);
        event.target.id = "start"
        event.target.textContent = "restart timer"}
    
    else {
        intervalID = setInterval(timer, 1000);
        setTimeout(intervalID);
        event.target.id = "resume"
        event.target.textContent = "restart timer"
    }
})
    
  
  pause.addEventListener("click", function(event) {
      if (event.target.id === "resume") {
          intervalID = setInterval(timer, 1000);
          minusButton.removeAttribute("disabled")
          plusButton.removeAttribute("disabled")
          startButton.removeAttribute("disabled")
          event.target.id = "pause"
          event.target.textContent = "pause timer"
      }
      else {
          clearInterval(intervalID);
          minusButton.setAttribute("disabled", true)
          plusButton.setAttribute("disabled", true)
          startButton.setAttribute("disabled", true)
          event.target.id = "resume"
          event.target.textContent = "resume timer"
      }
   });


   const notes = document.querySelector('.notes')
   const notesInput = document.querySelector('#note-input')
   const submit = document.querySelector('#submit')

   const notes_arr = [];
   const displayNotes = () => {
    let list = '<ul>';
    notes_arr.forEach(notes => {
        list += `<li> ${notes} </li>`;
    })
    list += '</ul>';
    notes.innerHTML = list;
   }


   submit.onclick = function (event) {
    event.preventDefault();
    console.log(notesInput.value)
    const content = notesInput.value;
    console.log(notes)
    if(content.length > 0) {
        const p = document.createElement('p')
        p.textContent = content
        notes.append(p)
        notesInput.value = ' ';
    }
   }


const timerButtons = document.getElementById('timerButtons')
timerButtons.addEventListener("mouseover", (event) => {
    event.target.style.color = "red"
    setTimeout(() => {
        event.target.style.color = "";
    }, 600);
}, false);


function fetchActivities() {
    fetch('http://www.boredapi.com/api/activity')
    .then (function (response) {
        return response.json();
    })
    .then (function (activity) {
        const container = document.querySelector('#activity_recommendation_container')
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.addEventListener('click', handleDelete)
        btn.textContent = 'x' 
        li.textContent = `${activity.activity}   `    
        li.appendChild(btn)
        container.appendChild(li)

    })
    .catch (function (error) {
        alert('Oops activities missing')
        const container = document.querySelector('#activity_recommendation_container')
        container.append(error.message)
    })
}
let suggest = document.getElementById("suggest")
suggest.addEventListener('click', function () {
    fetchActivities();
})


