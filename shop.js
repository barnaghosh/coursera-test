let btn=document.querySelectorAll("button");
document.addEventListener("DOMContentLoaded",getItem)
let clr=document.querySelector("tbody");
let a=1;
btn.forEach(i=>{
    i.addEventListener("click",function(){
        let price=i.previousElementSibling;
        console.log(price.innerHTML)
        let product=price.previousElementSibling;
        console.log(product.innerHTML)
        let table=document.querySelector("tbody");
        let tr=document.createElement("tr");
        
        tr.innerHTML=`
        <td>${product.innerHTML}</td>
        <td>${price.innerHTML}</td>
        <td><button href="#" class="btn-sm btn-primary">Remove</button></td>`
        
        
        console.log(tr)
        table.appendChild(tr);
        a++;
        let arr=[product.innerHTML,price.innerHTML]
        localAdd(arr);
    })
})

clr.addEventListener("click",clear);
function clear(e){
    console.log(e.target)
    if(e.target.hasAttribute("href")){
        let ele=e.target.parentElement.parentElement;
        console.log(ele);
        
         ele.remove();
         removeFromLS(ele);
        // removeFromLS(ele);
    }
}
function localAdd(task){
    let cart;
    if(localStorage.getItem("cart")===null){
        cart=[]
    }
    else{
        cart=JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(task);
    localStorage.setItem("cart",JSON.stringify(cart));
}
function getItem(){
    let cart;
    if(localStorage.getItem("cart")===null){
        cart=[]
    }
    else{
        cart=JSON.parse(localStorage.getItem('cart'));
    }
    cart.forEach(i=>{
       
        let table=document.querySelector("tbody");
        let tr=document.createElement("tr");
        
        tr.innerHTML=`
        <td>${i[0]}</td>
        <td>${i[1]}</td>
        <td><button href="#" class="btn-sm btn-primary">Remove</button></td>`
        
        
        console.log(tr)
        table.appendChild(tr);
    })
}
function removeFromLS(taskItem){
    let cart;
    if(localStorage.getItem("cart")===null){
        cart=[]
    }
    else{
        cart=JSON.parse(localStorage.getItem('cart'));
    }
    var b=0;
    let li=taskItem;
    li.removeChild(li.lastChild);
    console.log(li);
    let f=li.children[0].innerHTML;
    console.log(f);
    let l=li.children[1].innerHTML;
    console.log(l);
    let arr2=[f,l];
    console.log(arr2)
    cart.forEach((task,index)=>{
        console.log(task)
        if((f==task[0]) &&(l==task[1]) &&(b==0)){
            console.log("hi");
            cart.splice(index,1);
            b=1;
        }
    });
    localStorage.setItem("cart",JSON.stringify(cart));
}