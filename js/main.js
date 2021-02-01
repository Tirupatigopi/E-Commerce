fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
    displayData(data)
})

function displayData(info){
    var bodyElement=document.querySelector("body");
    var row=document.createElement("section")
    row.classList.add("row","justify-content-center");
    bodyElement.append(row)
    
    info.mobiles.map(value=>{
        var column=document.createElement("article")
        column.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(column)


        //card
        var card=document.createElement("div");
        card.classList.add("card","mt-3")


        //card-body
        var cardBody=document.createElement("div");
        cardBody.classList.add("card-body")

        //Image
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive");
        imageElement.alt=value.name;
        imageElement.alt=value.originalprice;
        imageElement.alt=value.price;
        imageElement.alt=value.cat;

        //Name
        var name=document.createElement("h2");
        name.textContent=value.name;
        name.classList.add("text-center", "text-success")

        //originalprice
        var originalprice=document.createElement("p");
        originalprice.textContent="₹"+value.originalprice+"/-";
        originalprice.classList.add("text-center", "text-primary")

        //price
        var price=document.createElement("p");
        price.textContent="₹"+value.price+"/-";
        price.classList.add("text-center", "text-secondary")

        //add to cart
        var cartadd=document.createElement("div");
        cartadd.classList.add("d-grid","gap-2");

        var cart=document.createElement("button");
        cart.classList.add("btn","btn-block","btn-info");
        cart.textContent="Add To Cart";
        cartadd.append(cart)

        //buy now
        var cartdd=document.createElement("div");
        cartdd.classList.add("d-grid","gap-2");

        var cat=document.createElement("button");
        cat.classList.add("btn","btn-block","btn-success");
        cat.textContent="Buy Now";
        cartdd.append(cat);
        cardBody.append(imageElement);

        cardBody.append(name);
        cardBody.append(originalprice);
        cardBody.append(price);
        cardBody.append(cartadd);<br>
        cardBody.append(cartdd);


        card.append(cardBody);
        column.append(card);
        
    })
}``