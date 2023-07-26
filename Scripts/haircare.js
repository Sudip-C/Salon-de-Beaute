
    let url = "https://636bd1987f47ef51e13b4348.mockapi.io/Products"
    let bag = []
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            bag = data
            console.log(data)
            displaycard(data)
        })

        function search(){
        let ser=document.querySelector("input").value
        let newdata=bag.filter(function(el){
            return el.title.toLowerCase().includes(ser.toLowerCase())
        })
        displaycard(newdata)
    }


    function displaycard(arr) {
        document.querySelector("#body").innerHTML = ""
        arr.forEach((element) => {
            let div = document.createElement("div")

            let Img = document.createElement("img")
            Img.setAttribute("src", element.avatar)
            let Title = document.createElement("h3")
            Title.innerText = "Product"
            let desc = document.createElement("p")
            desc.innerText = element.description.slice(0,20)+"..."
            let cat = document.createElement("p")
            cat.innerText = element.category
            let Price = document.createElement("p")
            Price.innerText = element.price
            let btn = document.createElement("button")
            btn.innerText = "ADD TO BAG"
            btn.addEventListener("click",()=>{
                addData("cart",element)
            })

            div.append(Img, Title, desc, cat, Price, btn)
            document.querySelector('#body').append(div)
        });
    }
    function addData(key,value){
       let Data=JSON.parse(localStorage.getItem(key))||[]
       Data.push(value)
       localStorage.setItem(key,JSON.stringify(Data))
     }



