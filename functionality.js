document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('create-activity-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newActivityDescription = document.getElementById("new-activity-description")
        const newActivity = document.createElement('li')
        newActivity.innerText = newActivityDescription.value
        myActivities(newActivity)
    })

    function myActivities(activity){
        const activity = document.getElementById("activities").appendChild(activity)
        const p = document.createElement('p')
        const btn = document.createElement('button')
        btn.addEventListener('click', handleDelete)
        btn.textContent = 'x'
        p.textContent = `${activity}`
        p.appendChild(btn)
        console.log(p)
        document.querySelector("activities").appendChild(p)
    }
});