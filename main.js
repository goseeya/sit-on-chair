document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('about').addEventListener('mouseover', function(){
    document.getElementsByClassName('list1')[0].style.display = 'block';
  });

  document.getElementById('about').addEventListener('mouseout', function(){
    document.getElementsByClassName('list1')[0].style.display = 'none';
  });

  document.getElementById('img-left').addEventListener('mouseover', function(){
    document.getElementsByClassName('clair-mar')[0].style.display = 'none';
  });

  document.getElementById('img-left').addEventListener('mouseout', function(){
    document.getElementsByClassName('clair-mar')[0].style.display = 'block';
  });

  document.getElementById('img-centre').addEventListener('mouseover', function(){
    document.getElementsByClassName('clair-mar')[1].style.display = 'none';
  });

  document.getElementById('img-centre').addEventListener('mouseout', function(){
    document.getElementsByClassName('clair-mar')[1].style.display = 'block';
  });



var index = 0;
var firstarr = document.getElementById("left-arrow");
var secondarr = document.getElementById("right-arrow");
var array = document.getElementsByClassName('slider');
var vis = array[0].firstElementChild;
vis.classList.add("visible");
firstarr.addEventListener("click", event1);
function event1(){
for (i = 0; i < array[0].children.length; i++) {
  if(array[0].children[i].classList = "visible"){
    array[0].children[i].classList.remove('visible')
  }
}
  array[0].children[index].classList.add('visible')
    index = index - 1;
    if(index<0){
      index = 0;
    }
}
secondarr.addEventListener("click", event2);
function event2(){

  for (i = 0; i < array[0].children.length; i++) {
    if(array[0].children[i].classList = "visible"){
      array[0].children[i].classList.remove('visible')
    }
  }
    array[0].children[index].classList.add('visible')
      index = index + 1;
      if(index>=array[0].children.length){
        index = index - 1;
      }
}




document.getElementsByClassName('list_arrow')[0].addEventListener('click', function(){
  if(document.getElementsByClassName('list_panel')[0].style.display === 'none'){
  document.getElementsByClassName('list_panel')[0].style.display = 'block';
}else{
  document.getElementsByClassName('list_panel')[0].style.display = 'none';
}
});

document.getElementsByClassName('list_arrow')[1].addEventListener('click', function(){
  if(document.getElementsByClassName('list_panel')[1].style.display === 'none'){
  document.getElementsByClassName('list_panel')[1].style.display = 'block';
}else{
  document.getElementsByClassName('list_panel')[1].style.display = 'none';
}
});

document.getElementsByClassName('list_arrow')[2].addEventListener('click', function(){
  if(document.getElementsByClassName('list_panel')[2].style.display === 'none'){
  document.getElementsByClassName('list_panel')[2].style.display = 'block';
}else{
  document.getElementsByClassName('list_panel')[2].style.display = 'none';
}
});
var suma = 0;

var array1 = document.getElementsByClassName('list_panel')[0].children;

for (var i = 0; i < array1.length; i++) {
  document.getElementsByClassName('list_panel')[0].children[i].addEventListener('click', function(){
    document.getElementById('rodzaj').innerText = this.innerText;
    document.getElementById('rodzaj').style.color = 'gray';
    document.getElementsByClassName('title')[0].innerText=document.getElementById('rodzaj').innerText;
    if(document.getElementsByClassName('title')[0].innerText==='Selena'){
          document.getElementsByClassName('value')[0].innerText=300
          suma = 300;
    } else if(document.getElementsByClassName('title')[0].innerText==='Margarita'){
          document.getElementsByClassName('value')[0].innerText=400;
          suma = 400;
        } else if(document.getElementsByClassName('title')[0].innerText==='Clair'){
              document.getElementsByClassName('value')[0].innerText=200;
              suma = 200;
            }
            document.getElementsByClassName('sum')[0].firstElementChild.innerText = suma;
  })
};



var array2 = document.getElementsByClassName('list_panel')[1].children;
for (var i = 0; i < array2.length; i++) {
  document.getElementsByClassName('list_panel')[1].children[i].addEventListener('click', function(){
    document.getElementById('kolor').innerText = this.innerText;
    document.getElementById('kolor').style.color = 'gray';
  })
};

var array3 = document.getElementsByClassName('list_panel')[2].children;
for (var i = 0; i < array3.length; i++) {
  document.getElementsByClassName('list_panel')[2].children[i].addEventListener('click', function(){
    document.getElementById('material').innerText = this.innerText;
    document.getElementById('material').style.color = 'gray';
    document.getElementsByClassName('pattern')[0].innerText = document.getElementById('material').innerText;
    if(document.getElementsByClassName('pattern')[0].innerText==='Tkanina'){
      document.getElementsByClassName('value')[2].innerText = 100;
      suma = suma + 100;
    } else if(document.getElementsByClassName('pattern')[0].innerText==='Skóra'){
      document.getElementsByClassName('value')[2].innerText = 300;
      suma = suma + 300;
    }
    document.getElementsByClassName('sum')[0].firstElementChild.innerText = suma;
  })
};

document.getElementById('transport').addEventListener('change', function(){
  if(document.getElementsByClassName('value')[3].innerText != 80){
  document.getElementsByClassName('transport')[0].innerText='Transport';
  document.getElementsByClassName('value')[3].innerText = 80;
  suma = suma + 80;
} else {
  document.getElementsByClassName('value')[3].innerText = 0;
  suma = suma - 80;
}
document.getElementsByClassName('sum')[0].firstElementChild.innerText = suma;

});





});
