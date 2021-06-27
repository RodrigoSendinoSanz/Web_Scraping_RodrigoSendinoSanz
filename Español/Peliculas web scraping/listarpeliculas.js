const puppeteer  = require('puppeteer');
/* Comandos para instalar  puppeteer :
    -npm install puppeteer
*/

/* Para ejecutar 
    - USAR node nombredelarchivo.js en la carpeta en la que se encuantra este archivo
    - En Visual Studio  RUN-START DEBUGGING -NODE.JS
*/
(async () => {

    let movieUrl = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';/* Se elige la URL */

    let browser = await puppeteer.launch({headless:false});/*Con  headless:true no se veria el navegador y solo mostraria los resultados*/

    let page = await browser.newPage();/* Abre el buscador */

    /* Ajuste de las dimensiones de la pagina */
    await page.setViewport({
        width: 2048,
        height: 1536
        });


    await page.goto(movieUrl,{waitUntil: 'networkidle2'});/* Espera la carga de pagina */

    /*  Cuenta la cantidad de elementos que tienen el selector elegido*/
    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('[class="titleColumn"] a');/* Selector elegido */
        /* Estos se guardan en un array y se listan con un for */
        const links = [];
        for(let element of elements){
            links.push(element.href);
        }
        return links;
    });
    
    /* En esta parte creamos un array en el cual le pasaremos los enlaces para iterarlos y guarde cada elemento en un elemento unico dentro del array elementos*/
    const elementos =[];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.screenshot({path:'pelicula1.jpg'});/* Guarda una "foto" de la pagina */

        /* La constante elemento engloba dentro de si misma los elemento que queremos obtener de la pagina*/
        const elemento = await page.evaluate(() => {
            const peli = {};
            /*Si no funciona cambiar el selector segun el tipode pagina que se muestre [data-testid="hero-title-block__title"] y [data-testid="hero-title-block__aggregate-rating__score"]  */
            /* Primero se declaran los datos que va atener peli, datos y puntuacion y luego con el document.querySelector se elige el selector
             y con el .inneText se recoje el texto que hay dentro del selector*/
            peli.datos = document.querySelector('[class="title_wrapper"]').innerText;
            peli.puntuacion = document.querySelector('[class="ratings_wrapper"]').innerText;
        
    
            return{
                peli
            }
        });
        elementos.push(elemento);
    }
   /* Imprime por consola la informacion de cada elemento del array elementos */
    console.log(elementos);


     debugger;
    await browser.close();/* Cierra el navegador */

})();

/* Codigo creado por:
8 888888888o.      ,o888888o.     8 888888888o.      8 888888888o.    8 8888     ,o888888o.        ,o888888o.     
8 8888    `88.  . 8888     `88.   8 8888    `^888.   8 8888    `88.   8 8888    8888     `88.   . 8888     `88.   
8 8888     `88 ,8 8888       `8b  8 8888        `88. 8 8888     `88   8 8888 ,8 8888       `8. ,8 8888       `8b  
8 8888     ,88 88 8888        `8b 8 8888         `88 8 8888     ,88   8 8888 88 8888           88 8888        `8b 
8 8888.   ,88' 88 8888         88 8 8888          88 8 8888.   ,88'   8 8888 88 8888           88 8888         88 
8 888888888P'  88 8888         88 8 8888          88 8 888888888P'    8 8888 88 8888           88 8888         88 
8 8888`8b      88 8888        ,8P 8 8888         ,88 8 8888`8b        8 8888 88 8888   8888888 88 8888        ,8P 
8 8888 `8b.    `8 8888       ,8P  8 8888        ,88' 8 8888 `8b.      8 8888 `8 8888       .8' `8 8888       ,8P  
8 8888   `8b.   ` 8888     ,88'   8 8888    ,o88P'   8 8888   `8b.    8 8888    8888     ,88'   ` 8888     ,88'   
8 8888     `88.    `8888888P'     8 888888888P'      8 8888     `88.  8 8888     `8888888P'        `8888888P'     
                                                                                                                  
   d888888o.   8 8888888888   b.             8 8 888888888o.       8 8888 b.             8     ,o888888o.         
 .`8888:' `88. 8 8888         888o.          8 8 8888    `^888.    8 8888 888o.          8  . 8888     `88.       
 8.`8888.   Y8 8 8888         Y88888o.       8 8 8888        `88.  8 8888 Y88888o.       8 ,8 8888       `8b      
 `8.`8888.     8 8888         .`Y888888o.    8 8 8888         `88  8 8888 .`Y888888o.    8 88 8888        `8b     
  `8.`8888.    8 888888888888 8o. `Y888888o. 8 8 8888          88  8 8888 8o. `Y888888o. 8 88 8888         88     
   `8.`8888.   8 8888         8`Y8o. `Y88888o8 8 8888          88  8 8888 8`Y8o. `Y88888o8 88 8888         88     
    `8.`8888.  8 8888         8   `Y8o. `Y8888 8 8888         ,88  8 8888 8   `Y8o. `Y8888 88 8888        ,8P     
8b   `8.`8888. 8 8888         8      `Y8o. `Y8 8 8888        ,88'  8 8888 8      `Y8o. `Y8 `8 8888       ,8P      
`8b.  ;8.`8888 8 8888         8         `Y8o.` 8 8888    ,o88P'    8 8888 8         `Y8o.`  ` 8888     ,88'       
 `Y8888P ,88P' 8 888888888888 8            `Yo 8 888888888P'       8 8888 8            `Yo     `8888888P'         
                                                                                                                  
                       d888888o.           .8.          b.             8  8888888888',8888'                       
                     .`8888:' `88.        .888.         888o.          8         ,8',8888'                        
                     8.`8888.   Y8       :88888.        Y88888o.       8        ,8',8888'                         
                     `8.`8888.          . `88888.       .`Y888888o.    8       ,8',8888'                          
                      `8.`8888.        .8. `88888.      8o. `Y888888o. 8      ,8',8888'                           
                       `8.`8888.      .8`8. `88888.     8`Y8o. `Y88888o8     ,8',8888'                            
                        `8.`8888.    .8' `8. `88888.    8   `Y8o. `Y8888    ,8',8888'                             
                    8b   `8.`8888.  .8'   `8. `88888.   8      `Y8o. `Y8   ,8',8888'                              
                    `8b.  ;8.`8888 .888888888. `88888.  8         `Y8o.`  ,8',8888'                               
                     `Y8888P ,88P'.8'       `8. `88888. 8            `Yo ,8',8888888888888        
 */