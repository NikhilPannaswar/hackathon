const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));

main()
    .then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
}

app.listen(8080, ()=>{
    console.log("app is listening on port 8080");
})


// app.get("/", (req, res)=>{
//     res.send("Hi, I am root");
// })

app.get("/", (req, res)=>{
    res.render("login.ejs");
})
app.get("/home", (req, res)=>{
    res.render("home.ejs");
})

app.get("/login", (req, res)=>{
    res.render("login.ejs");
})

app.get("/cart", (req, res)=>{
    res.render("cart.ejs");
})

// app.post('/cart', async (req, res) => {
//     try {
//         const { productId, name, quantity, price } = req.body;
//         const cartItem = new Cart({ productId, name, quantity, price });
//         await cartItem.save();
//         res.status(200).send({ message: 'Item added to cart successfully', cartItem });
//     } catch (err) {
//         res.status(500).send({ error: 'Failed to add item to cart' });
//     }
// });