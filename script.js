const ears = document.getElementById('no-ears')
const eyes = document.getElementById("no-eyes")
const img_con = document.querySelector('.img-con')

ears.classList.add('hide')
img_con.addEventListener(('click'),function () {
    eyes.classList.toggle("hide")
    ears.classList.toggle("hide")

})