const form=document.getElementById('contactform')
const success=document.getElementById('success')
form.addEventListener('submit',function(e){
    e.preventDefault()
    success.style.display='block'
    form.reset();
    setTimeout(() => {success.style.display='none'

    },5000)
})