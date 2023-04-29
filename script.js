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
  var snake= new LinkedList();
  snake.p=st.rows[i].cells[j];
  snake.p.innerHTML="SH";
  snake.p.className="snakehead";
    setInterval(function() {
      var np=move(i,j,d);
      var pr=snake.p;
      i=np[0];
      j=np[1];
      if(fin(i,j)==true){
        clearInterval;
      }
      else{
        snake.p=st.rows[i].cells[j];
        snake.p.innerHTML="SH";
        snake.p.className="snakehead";
        pr.innerHTML=null;
        pr.classList.remove("snakehead");
      }

    }, 2000);
    score.innerHTML="Score="+snake.Taille();
}
document.addEventListener("keydown", function(event) {
  var key = event.key;
  if (key == "z" || key == "q" || key == "s" || key == "d") {
    d = key;
  }

});