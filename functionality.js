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
        document.getElementById("activities").appendChild(activity)
    }
});