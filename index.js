let pointer = document.getElementById("point")
let pageviews = document.getElementById("pageviews")
let price = document.getElementById("price")
let toggle = document.getElementById("toggle-div")
let discount = document.getElementById("check")
let dollar = 16
let z = 3



pointer.addEventListener("input", () => {
    if(pointer.value > 0 && pointer.value < 20) {
        pageviews.innerText = "10K PAGEVIEWS"
        dollar = 8.00
        price.innerText = "$" + dollar + ".00"
        z = 1
    } else if(pointer.value > 20 && pointer.value < 45) {
        pageviews.innerText = "50K PAGEVIEWS"
        dollar = 12.00
        price.innerText = "$" + dollar + ".00"
        z = 2
    } else if(pointer.value > 45 && pointer.value < 70){
        pageviews.innerText = "100K PAGEVIEWS"
        dollar = 16.00
        price.innerText = "$" + dollar + ".00"
        z = 3
    } else if (pointer.value > 70 && pointer.value < 90){
        pageviews.innerText = "500K PAGEVIEWS"
        dollar = 24.00
        price.innerText = "$" + dollar + ".00"
        z = 4
    } else if (pointer.value > 90 && pointer.value < 102){
        pageviews.innerText = "1M PAGEVIEWS"
        dollar = 36.00
        price.innerText = "$" + dollar + ".00"
        z = 5
    }

    if(!discount.checked && pointer.value > 0 && pointer.value < 20){
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
        z = 1
    } else if(!discount.checked && pointer.value > 20 && pointer.value < 45) {
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
        z = 2
    } else if(!discount.checked && pointer.value > 45 && pointer.value < 70){
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
        z = 3
    } else if (!discount.checked && pointer.value > 70 && pointer.value < 90){
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
        z = 4
    } else if (!discount.checked && pointer.value > 90 && pointer.value < 100){
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
        z = 5
    }

   
    

})


toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")

    if(discount.checked) {
        dollar = dollar - dollar * 25 / 100 
        price.innerText = "$" + dollar + ".00"
    } else if(z === 1) {
        dollar = 8
        price.innerText = "$" + dollar + ".00"
    } else if(z === 2) {
        dollar = 12
        price.innerText = "$" + dollar + ".00"
    } else if(z === 3) {
        dollar = 16
        price.innerText = "$" + dollar + ".00"
    } else if(z === 4) {
        dollar = 24
        price.innerText = "$" + dollar + ".00"
    } else if(z === 5) {
        dollar = 36
        price.innerText = "$" + dollar + ".00"
    }
    
    
})







