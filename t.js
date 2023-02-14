// setInterval(function() {
// 	console.log('!');
// }, 3000)

// let i = 100
// setInterval(() => console.log(i--), 1000


// let i = 10;

// let timerId = setInterval(function() {
// 	console.log(i--);
	
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 100;
	
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);
// });

// let start = document.querySelector('#start');
// let timerId;

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	timerId = setInterval(function() {
// 		console.log(i++)
// 	}, 1000);
//     clearInterval(timerId);
// });



// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');


// start.addEventListener('click', function func(){
// 	let i = 100;
	
// let	timerId = setInterval(function() {
// 		console.log(i--)
//         if(i == 0){
//             clearInterval(timerId);
//             }
// 	}, 100);
//     this.removeEventListener('click', func)
//     stop.addEventListener('click', function() {
//         clearInterval(timerId);
//     });    
// });


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId
// start.addEventListener('click', function() {
// 	 timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	 timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	 timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// })

// let elem = document.querySelector('#elem');
// let timerId;
// timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
//     if(elem.value == 0){
//         clearInterval(timerId);
//     }
// }, 1000);



// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		for(let i = 0; i>= 100; i++){
//             this.value = Number(elem.value + i)
//         }
// 	}, 1000);
// });


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this;
// 	setInterval(function() {
// 		self.value = +(elem.value) + 1;
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     let self = this
//     setInterval(() => self.value = +(elem.value) + 1, 1000)
// })

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this
// 	setInterval(function() {
// 		self.value--;
// 	}, 1000);
// });

// let stop = document.querySelector(`#stop`)
// let a = document.querySelector(`a`)

// stop.addEventListener(`click`, ()=>{
//     setInterval(() => a.style.fontSize += `10px`, 1000)
// })

// let stop = document.querySelector(`#stop`)
// let a = document.querySelector(`a`)
// stop.addEventListener(`click`, ()=>{
//     setInterval(function(){
        
//      a.textContent++;
        
//     }, 1000)
// })

// let stop = document.querySelector(`#stop`)
// let a = document.querySelector(`a`)
// let timerId
// stop.addEventListener(`click`, ()=>{
//   timerId = setInterval(function(){
//      a.textContent = a--
//      if (a = 0){
//         clearInterval(timerId);
//      }
//     }, 1000)
// })
// console.log(a)

// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`click`, ()=>{
//     setInterval(()=> elem.value = +elem.value * +elem.value, 1000)
// })

// let elem = document.querySelector(`#elem`)
// let a = document.querySelector(`a`)
//     elem.addEventListener(`blur`, ()=>{
//     let timerId = setInterval(function(){     
//            a.textContent = a.textContent - 1;   
//         if (a.textContent == 0){
//             clearInterval(timerId);
//              }
//     }, 1000)
//         })

// let elem = document.querySelector(`#elem`)
// let start = document.querySelector(`#start`)
// let a = document.querySelector(`a`)
//     start.addEventListener(`click`, ()=>{
//         a.textContent = elem.value   
//     let timerId = setInterval(function(){     
//            a.textContent = a.textContent - 1;   
//         if (a.textContent == 0){
//             clearInterval(timerId);
//              }
//     }, 1000)
//         })


// let p = document.querySelector(`p`)
// let start = document.querySelector(`#start`)
// let stop = document.querySelector(`#stop`)
// let Timer
// start.addEventListener(`click`, ()=>{
//     Timer = setInterval(function(){
//         p.textContent = +p.textContent + 1
//     }, 1000)
// })
// stop.addEventListener(click, ()=>{
//     clearInterval(Timer);
// })

// let p = document.querySelector(`p`)
// setInterval(function(){
//     if(p.style.color == `red`){
//             p.style.color="green"
//     }else{
//         p.style.color = red
//     }
// }, 1000)


// let p = document.querySelector(`p`)
// setInterval(()=>{
//     let d = new Date();
//     let s = d.getSeconds();
//     let m = d.getMinutes();
//     let h = d.getHours();
//     p.textContent = h + ":" + m + ":"  + s;
// },)