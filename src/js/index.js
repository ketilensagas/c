import 'styles.css'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

/*const video = document.querySelector('#video')
const button = document.querySelector('#btn-play')

document.querySelector('.fa-pause').sytle.display = 'none'

/*const play = (event) => {
    if (video.paused) {
        document.querySelector('.fa-play').sytle.display = 'none'
        document.querySelector('.fa-pause').sytle.display = 'block'
        video.play()
    } else {
        document.querySelector('.fa-play').sytle.display = 'block'
        document.querySelector('.fa-pause').sytle.display = 'none'
        video.pause()
    }
}

button.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('timeupdate', () => {
    let current = (video.currentTime / video.duration) * 100
    if (video.ended) {
        document.querySelector('.fa-play').sytle.display = 'block'
        document.querySelector('.fa-pause').sytle.display = 'none'
    }
    document.querySelector('.inner').sytle.width = '${ current }%'
})*/