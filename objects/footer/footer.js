const faceIcon = document.querySelector('#face-icon')
const instaIcon = document.querySelector('#insta-icon')

instaIcon.addEventListener('mouseover', function () {
    this.setAttribute('src', '/images/Icons/instagram-after.png')
})

instaIcon.addEventListener('mouseout', function () {
    this.setAttribute('src', '/images/Icons/instagram-before.png')
})

faceIcon.addEventListener('mouseover', function () {
    this.setAttribute('src', '/images/Icons/facebook-after.png')
})

faceIcon.addEventListener('mouseout', function () {
    this.setAttribute('src', '/images/Icons/facebook-before.png')
})