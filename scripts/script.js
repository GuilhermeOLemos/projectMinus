//$('#btn').on('click', colorMode)


var whatClick = 0

//  function colorMode() {
//     const dark = () => {
//         document.body.style.setProperty('--colorBgDefault', '#1e1e1e')
//     }
//     const light = () => {
//         document.body.style.setProperty('--colorBgDefault', '#e1e1e1')
//     }
    
//     if (whatClick === 0) {
//         whatClick++
//         dark()
//     }
//     else if (whatClick === 1){
//         whatClick--
//         light()
//     }
// }
// 
// $('#box').click(function check() {
//     console.log($(this.checked))
//     if ($(this.checked) == true) {
//         console.log(true)
//     }
//     else {

//         console.log(false)
//     }
// })

// const darkMode = () => {
//     document.body.style.setProperty('--colorBgDefault', '#1e1e1e')
// }
// const lightMode = () => {
//     document.body.style.setProperty('--colorBgDefault', '#e1e1e1')
// }
//

function darkMode() {
    document.body.style.setProperty('--colorBgDefault', '#1e1e1e')
}
function lightMode() {
    document.body.style.setProperty('--colorBgDefault', '#e1e1e1')
}
