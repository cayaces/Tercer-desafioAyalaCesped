const express = require("express")

const app = express()

const PORT = 8080


const deliProductos = [
    {
        nombre: "snapy",
        precio: 25000,
        stock: 50,
        categoria: "juguetes",
        imagen: "imagen/imagen",
        id: 1
    },
    {
        nombre: "huevo",
        precio: 1000,
        stock: 30,
        categoria: "juguetes",
        imagen: "imagen/imagen",
        id: 4
    },
    {
        nombre: "lubricante",
        precio: 10000,
        stock: 10,
        categoria: "cosmeticos",
        imagen: "imagen/imagen",
        id: 2
    },
    {
        nombre: "aceite de masaje",
        precio: 5000,
        stock: 40,
        categoria: "cosmeticos",
        imagen: "imagen/imagen",
        id: 5
    },
    {
        nombre: "baby doll",
        precio: 25000,
        stock: 20,
        categoria: "lenceria",
        imagen: "imagen/imagen",
        id: 3
    },
    {
        nombre: "transparente negro",
        precio: 35000,
        stock: 50,
        categoria: "lenceria",
        imagen: "imagen/imagen",
        id: 6
    }
]

app.get("/", (req, res) => {
    res.send(deliProductos)
})

//productos
app.get("/deliProductos", (req, res) => {
    const limit = req.query.limit || deliProductos.length;
    res.json(deliProductos.slice(0, limit));
})

//id
app.get("/deliProductos/:id", (req, res) => {
    let idProducto = parseInt(req.params.id);
    let producto = deliProductos.find(u => u.id === idProducto)

    if (!producto) return res.send({ error: 'Producto no encontrado.' })
    res.send({ producto })
})


//categoria
app.get("/categoria", (req, res) => {
    const categoria = req.query.categoria;

    if (!categoria) {
        return res.send({ error: "Debes buscar una categoria." })
    }
    const categoriaFiltrada = deliProductos.filter(producto => producto.categoria === categoria)
    if (categoriaFiltrada.length === 0) {
        return res.send({ error: "No se encontro en esta categoria." })

    }
    res.send({ deliProductos: categoriaFiltrada })
})




app.listen(PORT, () => {
    console.log(`Server escuchando en ${PORT}`)
})
