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

    /* Montar  el servidor usando la extension de visual studio Live Server 
    Name: Live Server https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    */

    await page.goto('http://127.0.0.1:5500/testformulario.html');/* Se elige la URL */

    await page.screenshot({path:'test1.jpg'});/* Foto */
    await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#nombre','Pablo')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000); /*  Espera 2s*/
     page.type('#apellidos','Lopez')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000); /*  Espera 2s*/
     page.type('#email','pablolopez@gmail.com')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
      await page.waitForTimeout(2000);/*  Espera 2s*/ 
     page.type('#direccion','Calle Roma,22')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
      await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#telefono','135-25-45-78')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#empresainput','LAN.SL')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#cita','28/04/2022')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.click('#check1')/* Hace un click en el id indicado */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.click('#radio2')/* Hace un click en el id indicado */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#url','https://www.google.com/')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     page.type('#text','Esto es un test')/* Primero elige el id y luego escribe el contenido que se encuantra despues de la coma */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     await page.screenshot({path:'test2.jpg'});/* Foto */
     page.click('#botonenviar')/* Hace un click en el id indicado */
     await page.waitForTimeout(2000);/*  Espera 2s*/
     await page.screenshot({path:'test3.jpg'});/* Foto */

     await page.waitForTimeout(5000);/* Espera 5s */
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