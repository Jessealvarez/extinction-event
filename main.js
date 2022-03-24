//================================first list================================
let items = document.querySelectorAll('.feature1 li');
 

for (let i = 0; i < items.length; i++){
    let selection = items[i];
    selection.addEventListener('click', function(){
        console.log("testing!")
        if(selection.style.textDecoration === 'line-through'){
            selection.style.textDecoration = 'none';
        } else {
            selection.style.textDecoration = 'line-through'
        }
    })
}

//================================second list================================
let fadeit = document.querySelectorAll('.feature2 li');


for (let i = 0; i < fadeit.length; i++){
    let selection = fadeit[i];
    selection.addEventListener('click', function(){
        console.log("testing!")
        if(selection.style.opacity === '0'){
            selection.style.opacity = '1';
        } else {
            selection.style.opacity = '0'
        }
    })
}

//================================third list================================
let fadeit2 = document.querySelectorAll('.feature3 img');

for (let i = 0; i < fadeit2.length; i++){
    let selection = fadeit2[i];
    selection.addEventListener('click', function(){
        console.log("testing!")
        if(selection.style.width !== '0px'){
            selection.style.width = '0px';
        }
    })
}

//================================meteor================================
let meteorbutton = document.querySelector('#destroy-all');


meteorbutton.addEventListener('click',function(){
    linethru();
    seethru();
    collapseitall();
})


function linethru(){
for (let i = 0; i < items.length; i++){
    let selection = items[i];
        //if(selection.style.textDecoration === 'none'){
            selection.style.textDecoration = 'line-through';
        //}
    }
}

function seethru(){
    for (let i = 0; i < fadeit.length; i++){
        let selection = fadeit[i];
            //if(selection.style.opacity === '0'){
                selection.style.opacity = '.01';
            //}
        }
}

function collapseitall(){
    for (let i = 0; i < fadeit2.length; i++){
        let selection = fadeit2[i];
            if(selection.style.width !== '0px'){
                selection.style.width = '0px';
            }
        
    }
}