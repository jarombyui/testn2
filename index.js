// ESTE ES UN ARCHIVO DE PRUEBA
//COMENTARIO 2

//SUBIR PROYECTO A GIT HUB

///repositorio local
// git init
// git add .
// git commit -m "first commit"
// gir remote add origin 'url del reposotorio'
// git push -u origin master

//para subir nuevos cambios a un repositorio

// git add .
// git commit -m "secod commit"
// git push origin master

////////EJERCICIOS CON SQL

// EJERCICIOS: Base de datos bike 
//1.- Necesito una lista de todos los clientes con cuentas de Gmail porque hay una nueva aplicación de Google que puede interactuar con ellos a través de su correo electrónico. Nos gustaría contactarlos e invitarlos a usarlo.

/*SELECT * FROM customerWHERE email LIKE '%@gmail.com'; */

//2.- La marca "Haro" llamó y quiere descontar el precio de todas sus bicicletas en un 20%. Por favor, dame el nombre de las bicicletas de Haro (brand_id 2) y muestra el precio original y luego una columna con el precio de venta con un encabezado de columna legible (un nombre apropiado).

/*SELECT * FROM product WHERE product_name LIKE '%Haro%'; */

//3.- Necesitamos ver el número y la fecha del pedido de todos los pedidos en la tienda "Santa Cruz Bikes" (store_id 1), pero no queremos ver los pedidos realizados por Mireya Copeland, cuyo staff_id es 2. Solo los pedidos de Fabiola, Genna y Virgie ( todos los demás que trabajan allí ).

/*SELECT cust_order_id, order_date, store_id, staff_id FROM cust_order WHERE store_id=1 AND staff_id !=2; */

//4.- Necesitaremos eliminar todas nuestras bicicletas con "frames" específicos y las que son para mujeres. Estas no se están vendiendo bien y los exhibiremos en nuestra venta anual en la acera. Busque todos los nombres de productos de bicicletas con "Frame" o "Frameset" en el nombre o con la palabra "Women's".

/*SELECT * FROM product WHERE product_name LIKE "%frame%" OR product_name LIKE "%frameset%" OR product_name LIKE "%women's"; */

/*Segunda forma con exresiones regulares:

SELECT * FROM product WHERE product_name REGEXP "frame|frameset|women's"; */

//5.- Necesitamos todos los nombres de productos de bicicletas que comienzan con A-H y cuyo precio de lista sea superior a $299,99 o exactamente $299,99. Ordenarlos por nombre de producto. Necesitamos hacer un inventario de esas bicicletas.

/*SELECT * FROM product WHERE (product_name BETWEEN "A%" AND "I%") AND list_price >= 299.99 ORDER BY product_name;

Ascendiente:
SELECT * FROM product WHERE (product_name BETWEEN "A%" AND "I%") AND list_price >= 299.99 ORDER BY product_name ASC;

Descendiente:
SELECT * FROM product WHERE (product_name BETWEEN "A%" AND "I%") AND list_price >= 299.99 ORDER BY product_name DESC; */