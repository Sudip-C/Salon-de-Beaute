let products=JSON.parse(localStorage.getItem("cart"))
let bag=[]
displaycard(products)

function displaycard(arr) {
        document.querySelector("#Products").innerHTML = ""
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
               
                let search=bag.find((element)=>element.id==selected);

                if(search===undefined){
                    bag.push({
                        id:selected,
                        item:1,
                        
                    })
                }else{
                    search.item+=1
                }
                // console.log(bag)
                update(selected)
             })

             let quantity=document.createElement("span")
             quantity.innerText="0"

            let decrease=document.createElement("button")
           decrease.innerText="-"
           decrease.addEventListener("click",()=>{
                let selected=element.id
               
                let search=bag.find((element)=>element.id==selected);

                if(search.item===0){
                    return
                }else{
                    search.item-=1
                }
                // console.log(bag)
                update(selected)
             })
           

           let remove=document.createElement("button")
              remove.innerText="Remove"
              remove.addEventListener("click",()=>{
                products.splice(index,1)
                 localStorage.setItem("cart",JSON.stringify(products))
        displaycard(products)
              })
            div.append(Img, Title, Price ,increase,quantity,decrease,remove)
            document.querySelector('#Products').append(div)
        });
    }
    function update(id){
        let search=bag.find((x)=>x.id===id)
        console.log(search.item)

        document.querySelector("span").innerText=search.item
    }
