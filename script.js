var st= document.getElementById("Tab");
var score=document.getElementById("point");
var i=24;
var j=24;
var d="z";
class Node{
    constructor(T){
        this.T=T;
        this.next=null;
    }
}

class LinkedList {
  constructor() {
    this.p = null;
  }
  Ajout(T){
    var q=new Node(T);
    if(this.p==null){
        this.p=q;
    }
    else{
        q.next=this.p;
        this.p=q;
    }
  }
  Supp(){
    var q=this.p;
    if(q== null || q.next==null){
      q=null;
    }
    else{
    while(q.next.next != null){
      q=q.next;
    }
    q.next=null;
  }
  }
  finListe(){
    var q=this.p;
    while(q.next!=null){
      q=q.next;
    }
    return(q);
  }
  Taille(){
    var q=this.p;
    var c=0;
    while(q!=null){
        c++;
        q=q.next;
    }
    return c;
  }
  
}
function move(i,j,d){

  switch (d) {
    case "z":
      i=i-1;
      break;
    case "d":
      j=j+1;
      break;
    case "q":
      j=j-1;
      break;
    case "s":
      i=i+1;
      break;
    default:
      break;
  }
  return [i,j];
}
function fin(i,j){
  if(i>49||j>49||i<0||j<0){
    return true;
  }
  else{
    return false;
  }
}

function Play(i,j){
  var timer =1000;
  var snake= new LinkedList();
  snake.Ajout(st.rows[i].cells[j]);
  snake.p.T.innerHTML="SH";
  snake.p.T.classList.add("snakehead");
  var p=Point();
    var intervalID=setInterval(function() {
      var np=move(i,j,d);
      i=np[0];
      j=np[1];
      if(fin(i,j)==true){
        score.innerHTML="Score="+snake.Taille();
        clearInterval(intervalID);
        return;
      }
      else{
        snake.Ajout(st.rows[i].cells[j])
        snake.p.T.innerHTML="SH";
        if(p==snake.p.T){
        snake.p.T.classList.remove("Point");
        }
        snake.p.T.classList.add("snakehead");
        var f=snake.p.next;
        f.T.innerHTML="SB";
        f.T.classList.remove("snakehead");
        f.T.classList.add("snake");
        if(snake.Taille()>2 && p!=snake.p.T){
          var tail=snake.finListe();
          tail.T.innerHTML="";
          tail.T.classList.remove("snake");
          snake.Supp();
        }
        else{
          if(p==snake.p.T){
            p=Point();
          }
        }
      }
      
    }, timer);
}
function random(){
  var randomInt = Math.floor(Math.random() * 50);
  return(randomInt);
}
function Point(){
  do{
    var x=random();
    var y=random();
  var p=st.rows[x].cells[y];
  }while(p.innerHTML =="SH" || p.innerHTML =="SB" || x==23);
  p.classList.add("Point");
  p.innerHTML="P";
  return p;
}
document.addEventListener("keydown", function(event) {
  var key = event.key;
  if (key == "z" || key == "q" || key == "s" || key == "d") {
    d = key;
  }

});