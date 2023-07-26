


let products=JSON.parse(localStorage.getItem("cart"))
let bag=JSON.parse(localStorage.getItem("data"))||[]
displaycard(products)

function displaycard(arr){
    document.querySelector("#Products").innerHTML=""
    arr.forEach((element,index) => {

        let div = document.createElement("div")

        let Img = document.createElement("img")
        Img.setAttribute("src", element.avatar)

        let Title = document.createElement("h3")
        Title.innerText = element.title
       
        let Price = document.createElement("p")
        Price.innerText = element.price

        let increase=document.createElement("button")
         increase.innerText="+"
         increase.addEventListener("click",()=>{
            let selected=element.id
           
            let search=bag.find((x)=>x.id==selected);

            if(search===undefined){
                bag.push({
                    id:selected,
                    item:1,
                    
                })
            }else{
                search.item+=1
            }
            localStorage.setItem("data",JSON.stringify(bag))
            update(selected)
         })

         let quantity=document.createElement("span")
         quantity.innerText="0"

        let decrease=document.createElement("button")
       decrease.innerText="-"
       decrease.addEventListener("click",()=>{
            let selected=element.id
           
            let search=bag.find((y)=>y.id==selected);
            
            if(search===undefined){
                return
            }
            if(search.item===0){
                return
            }else{
                search.item-=1
            }
            
            localStorage.setItem("data",JSON.stringify(bag))
            update(selected)
         })
       

       let remove=document.createElement("button")
          remove.innerText="Remove"
          remove.addEventListener("click",()=>{
            bag.splice(index,1)
            products.splice(index,1)
             localStorage.setItem("data",JSON.stringify(bag))
             localStorage.setItem("cart",JSON.stringify(products))
    displaycard(bag)
    displaycard(products)
    totalPrice()
    calculation()
          })

        div.append(Img, Title, Price ,increase,quantity,decrease,remove)
        document.querySelector('#Products').append(div)
        
    });
}
    function update(id){
        let search=bag.find((z)=>z.id===id)

        document.querySelector("span").innerText=search.item
        calculation()
    }
     function calculation(){
        totalproduct=document.querySelector(".tp>#pro")
    total=bag.map((x)=>x.item).reduce((x,y)=>x+y,0)

    totalproduct.innerText= "TOTAL PRODUCT:-"+total
    totalPrice()
     }

     let  totalPrice =()=>{
if(bag.length!==0){
    let amount= bag.map((x)=>{
        let {item,id}=x;
        let search=products.find((y)=>y.id===id)||[];
        return item* search.price
    }).reduce((x,y)=>x+y,0)

document.querySelector("#price").innerText="TOTAL:"+amount
}else return
     }
totalPrice()