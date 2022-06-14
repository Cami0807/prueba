const controllers = {
    index: (req, res) => {
        return res.render('index');
    },
    menu: (req, res) => {
        return res.render('menu.ejs');
    },
list: (req, res)=> {
    let menu = [
        {
            id: 1,
            nombre: "Carpaccio fresco",
            precio: "U$S 65.5",
            imagen: /images/menu.jpg,
            detalle: "Entrada Carpaccio de salmón con cítricos"
        },
        {
            id: 2,
            nombre: "Risotto de berenjena",
            precio: "U$S 47.00",
            imagen: /images/Risotto-berenjena-queso-cabra.jpg,
            detalle: "Risotto de berenjena y queso de cabra"
        },
        {
            id: 3,
            nombre: "Mousse de arroz",
            precio: "U$S 27.50",
            imagen: /images/Mousse-de-arroz-con-leche.jpg,
            detalle: "Mousse de arroz con leche y aroma de azahar"  
        }, 
    
        {
            id: 4,
            nombre: "Espárragos blancos",
            precio: "U$S 37.50",
            imagen: /images/esparragos.png,
            detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico"  
        },
        ]

    return res.render('detalleMenu', {menu: menu});
},

};

module.exports = controllers;
