var st= document.getElementById("Tab");
var score=document.getElementById("point");
var i=24;
var j=24;
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
function move(event,i,j){
  var d=event.key;
  switch (d) {
    case "z":
      j=j-1;
      break;
    case "d":
      i=i+1;
      break;
    case "q":
      i=i-1;
      break;
    case "s":
      j=j+1;
      break;
    default:
      break;
  }
}
function fin(i,j){
  if(i>49||j>49||i<0||j<0){
    return true;
  }
  else{
    return false;
  }
}

function Play(){
  var snake= new LinkedList();
  snake.p=st.rows[i].cells[j];
  snake.p.innerHTML="SH";
  snake.p.className="snakehead";
  while(fin(i,j)==false){
  score.innerHTML="Score="+snake.Taille();
  
  move();
  snake=st.rows[i].cells[j];
  }
}
document.addEventListener("keydown", move);
