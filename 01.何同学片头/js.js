window.onload = function () {
  var myAuto = document.getElementById('audio');
  startPlay(myAuto)
  stopPlay(myAuto)
}

function startPlay(myAuto) {
  myAuto.currentTime = 25
  myAuto.play();
}

function stopPlay(myAuto) {
  // myAuto.ontimeupdate = () => {
  // if (myAuto.currentTime >= 33) {
  //   myAuto.pause()
  //   return false
  // }

  let timer = null
  setTimeout(() => {
    console.log('5s后打印');
    timer = setInterval(() => {
      if (myAuto.volume >= 0.05) {
        myAuto.volume = (myAuto.volume - 0.1).toFixed(2)
        console.log('递减音量');
      } else {
        myAuto.volume = 0
        clearInterval(timer)
        myAuto.pause()
        console.log('结束');
      }
    }, 300)
  }, 5000)
  // }
}
