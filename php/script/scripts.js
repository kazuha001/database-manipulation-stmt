
document.getElementById("destroy").addEventListener("submit", function(event){
    event.preventDefault()

    const formData = new FormData(this)

        fetch("dataDestroyer.php", {
            method: 'POST',
            body: formData
        })

        alert("Sucessfully Deleted!!!")
        
            window.location.reload()
        
            

})
