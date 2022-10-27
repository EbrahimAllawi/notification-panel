console.log('starting notification panel')
var curtain = document.getElementById('curtain')
var hand = document.getElementById('hand')
var frontCurtain = document.getElementById('test')
var overlayCurtain = document.getElementById('overlayCurtain')

var m = 0
var mousedownFrontCurtain = false
var marginTopCurtain = 0
var topMousePosition = 0

var mouseDirection = ''


function mouseDown(e) {
    mousedownFrontCurtain = true
    // overlayCurtain.style.display = 'block'
    console.log('down')

}

function mouseUp(e) {
    mousedownFrontCurtain = false
    var curtainTop = Number(getComputedStyle(curtain).top.split('p')[0])
    // if(curtainTop <= -150) {
    // }
    
    if(curtainTop >= -150) {
        curtain.style.top = '0px'
        
    }
    if(curtainTop < -150) {
        overlayCurtain.style.display = 'none'
        curtain.style.top = '-300px'

    }
    console.log('up')

}

function mouseMove(e) {
    var curtainTop = Number(getComputedStyle(curtain).top.split('p')[0])

    marginTopCurtain= e.clientY

    if(mousedownFrontCurtain) {
        if(topMousePosition < e.clientY) {
            // mouseDirection = 'top to bottom'
            if(curtainTop == -300) {
                overlayCurtain.style.display = 'block'
            }
            curtainTop+=15
            if(curtainTop <= 0) {
                console.log(curtainTop)
                curtain.style.top = `${curtainTop}px`
            }
            
        }
        
        if(topMousePosition > e.clientY) {
            // mouseDirection = 'bottom to top'
            if(curtainTop == -300) {
                overlayCurtain.style.display = 'none'
                // mousedownFrontCurtain = false
            }
            curtainTop-=15
            if(curtainTop >= -300) {
                console.log(curtainTop)
                curtain.style.top = `${curtainTop}px`
            }


        }

        topMousePosition = e.clientY
    }
}


    
hand.addEventListener('mouseup', (e) => {
    var curtainTop = Number(getComputedStyle(curtain).top.split('p')[0])

    if(curtainTop >= -150) {
        curtain.style.top = '0px'

    }
    if(curtainTop < -150) {
        curtain.style.top = '-300px'

    }
    mouseUp(e)
})
hand.addEventListener('mousedown', (e) => {
    mouseDown(e)
})
hand.addEventListener('mousedown', (e) => {
    mouseDown(e)
})

hand.addEventListener('mousemove', (e) => {
    mouseMove(e)
})
curtain.addEventListener('mousemove', (e) => {
    mouseMove(e)
})
curtain.addEventListener('mouseup', (e) => {
    mouseUp(e)
})

overlayCurtain.addEventListener('mousemove', (e) => {
    mouseMove(e)
})
overlayCurtain.addEventListener('mouseup', (e) => {
    // var curtainTop = Number(getComputedStyle(curtain).top.split('p')[0])


    mouseUp(e)
})
overlayCurtain.addEventListener('mousedown', (e) => {
    mouseDown(e)
})


// touch    

hand.addEventListener('touchstart', (e) => {
    mouseDown(e)
})
hand.addEventListener('touchend', (e) => {
    mouseUp(e)
})


hand.addEventListener('touchmove', (e) => {
    // e.touches[0].clientY
    var curtainTop = Number(getComputedStyle(curtain).top.split('p')[0])
    // console.log(detectLeftButton(e))
    // console.log('move')
    marginTopCurtain= e.touches[0].clientY

    if(mousedownFrontCurtain) {
        // console.log(m)
        if(topMousePosition < e.touches[0].clientY) {
            if(curtainTop == -300) {
                overlayCurtain.style.display = 'block'
            }
            curtainTop+=10
            if(curtainTop <= 0) {
                console.log(curtainTop)
                mouseDirection = 'top to bottom'
                curtain.style.top = `${curtainTop}px`
            }
            
        }
        
        if(topMousePosition > e.touches[0].clientY) {
            if(curtainTop == -300) {
                overlayCurtain.style.display = 'none'
            }
            curtainTop-=10
            if(curtainTop >= -300) {
                console.log(curtainTop)
                mouseDirection = 'bottom to top'
                curtain.style.top = `${curtainTop}px`
            }
        }

        topMousePosition = e.touches[0].clientY
    }
})




