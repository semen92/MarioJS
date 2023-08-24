const  player=document.getElementById('player')
const vrag=document.getElementById('vrag')
const btn = document.querySelector('.start')
let istart = false
const activejump=() => {
    if (istart) {
        console.dir(player.classList.contains('active'))

    }  
    const startGane=() => {
        istart=true
        console.log('START');

    }
    const EndGane=() => {
        istart=false
        console.log('end');

    }
    document.addEventListener('keyup', activejump)
    btn.addEventListener('click ')

}