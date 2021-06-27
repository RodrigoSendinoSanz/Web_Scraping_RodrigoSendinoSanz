const puppeteer  = require('puppeteer');
/* Comandos para instalar  puppeteer :
    -npm install puppeteer
*/

/* Para ejecutar 
    - USAR node nombredelarchivo.js en la carpeta en la que se encuantra este archivo
    - En Visual Studio  RUN-START DEBUGGING -NODE.JS
*/

(async () => {

    const browser = await puppeteer.launch({headless:false });/*Con  headless:true no se veria el navegador y solo mostraria los resultados*/
    const page = await browser.newPage();/* Abre el buscador */

    /* Resolucion ordenador */
    await page.setViewport({
        width: 2048,
        height: 1536
        });


    await page.goto('http://www.amazon.es');/* Se elige la URL */
    await page.screenshot({path:'amazon1.jpg'}); /*Foto */
    await page.click('[data-cel-widget=sp-cc-accept]');/* Se hace click para aceptar las cookies usando el id*/
    await page.type('#twotabsearchtextbox','ordenadores portatiles')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
    await page.screenshot({path:'amazon2.jpg'});/*Foto */

    await page.click('.nav-search-submit input');/* Hace un click en el id indicado para iniciar la busqueda*/
    await page.waitForSelector('[data-component-type=s-search-result]');/* Se espera a que aparezca el componente que indique que la busqueda ha sido efectuada*/
    await page.waitForTimeout(2000);/*  Espera 2s*/
    
    await page.screenshot({path:'amazon3.jpg'});/*Foto */

    /* Buscamos y guardamos en un array los elementos que tienen el selector indicado en el querySelectorAll de elements */
    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('[data-component-type=s-search-result] h2 a');

        const links = [];
        for(let element of elements){
            links.push(element.href);
        }
        return links;
    });
    /* Imprime por consola la cantidad de enlaces obtenidos */
    console.log(enlaces.length);

    /* Comienzo de la iteracion */
    const elementos =[];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.waitForSelector('#productTitle');/* Se espera a el selector indicado */
        await page.screenshot({path:'amazon4.jpg'});/* Foto */

        
        const elemento = await page.evaluate(() => {
            const tmp = {};
            /* Primero se declaran los datos que va atener tmp, title y availability y luego con el document.querySelector se elige el selector
             y con el .inneText se recoje el texto que hay dentro del selector*/
            tmp.title = document.querySelector('#productTitle').innerText;
            tmp.availability = document.querySelector('#availability').innerText;
            return tmp;
        });
        elementos.push(elemento);
    }
  /* Imprime por consola la informacion de cada elemento del array elementos */
    console.log(elementos);

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