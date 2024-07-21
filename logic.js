
let y = document.querySelectorAll('.Products')
let i =0;
y[0].querySelectorAll('aside').forEach(element=>{
    element.setAttribute('id',`${i}`);
    i++;
    element.addEventListener('mouseenter',function(){
        // Flash(this.id);
    })
})


// function Flash(id){
//     let x = document.getElementById(id);
//     let div = document.createElement('div');
//     div.style.position = 'absolute'
//     div.style.left = '0'
//     div.style.top = '0'
//     div.innerText = '90% OFF';
//     div.style.padding = '5px'
//     div.style.transform = 'translateY(90deg)';
//     // div.style.rotate = '-90deg'
//     div.style.backgroundColor = 'red';
//     x.appendChild(div);
// }