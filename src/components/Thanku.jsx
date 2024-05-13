import React from 'react'
import './Thanku.css'

export default function Thanku() {
    // var confettiShower = [];
    // var numConfettis = 300;
    // var container = document.getElementById("thankyou-container");
    // var colors = ["#FFB1A3", "#FF6E6F", "#77B8C0", "#FFC862"];

    // class Confetti {
    //   constructor(x, y, w, h, c) {
    //     this.w = Math.floor(Math.random() * 10 + 5);
    //     this.h = this.w * 1.2;
    //     // this.h = Math.floor(Math.random() * (this.w * 1.4) + 2);
    //     this.x = Math.floor(Math.random() * 100);
    //     this.y = Math.floor(Math.random() * 100);
    //     this.c = colors[Math.floor(Math.random() * colors.length)];
    //   }
    //   create() {
    //     var newConfetti =
    //       '<div class="thankyou" style="bottom:' +
    //       this.y +
    //       "%; left:" +
    //       this.x +
    //       "%;width:" +
    //       this.w +
    //       "px; height:" +
    //       this.h +
    //       'px;"><div class="rotate"><div class="askew" style="background-color:' +
    //       this.c +
    //       '"></div></div></div>';
    //     // container.innerHTML += newConfetti;
    //   }
    // }

    // function animateConfetti() {
    //   for (var i = 1; i <= numConfettis; i++) {
    //     var confetti = new Confetti();
    //     confetti.create();
    //   }
    //   var confettis = document.querySelectorAll(".thankyou");
    //   for (var i = 0; i < confettis.length; i++) {
    //     var opacity = Math.random() + 0.1;
    //     var animated = confettis[i].animate(
    //       [
    //         { transform: "translate3d(0,0,0)", opacity: opacity },
    //         { transform: "translate3d(20vw,100vh,0)", opacity: 1 },
    //       ],
    //       {
    //         duration: Math.random() * 3000 + 3000,
    //         iterations: Infinity,
    //         delay: -(Math.random() * 5000),
    //       }
    //     );
    //     confettiShower.push(animated);
    //   }
    // }
    // animateConfetti();

  return (
    <div>
      <header id="thankyou-container" className=''>
        <div class="container">
          <div class="content">
            <h1>Thank you for Applying. Great to have you on board, Wait for our call </h1>
          </div>
        </div>
      </header>
    </div>
  );
}
