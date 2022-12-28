document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('create-activity-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildActivities(e.target.new_activity_description.value)
        form.reset()
    })

    function buildActivities(activity){
       let li = document.createElement('li')
       let btn = document.createElement('button')
       btn.addEventListener('click', handleDelete)
       btn.textContent = ' delete'
       li.textContent = `${activity} `    
       li.appendChild(btn)
       document.querySelector('#activities').appendChild(li)
    }
});

function handleDelete(e){
    e.target.parentNode.remove()
}

 