const puppeteer  = require('puppeteer');
/* Commands to install puppeteer:
     -npm install puppeteer
*/

/* To execute
     - USE node filename.js in the folder where this file is located
     - In Visual Studio RUN-START DEBUGGING -NODE.JS
*/
(async () => {

    const browser = await puppeteer.launch({headless:false });/* With headless: true the browser would not be seen and it would only show the results */
    const page = await browser.newPage();/* Open the search engine */
    
    /* Computer resolution */
    await page.setViewport({
    width: 2048,
    height: 1536
    });

    /* Montar  el servidor usando la extension de visual studio Live Server 
    Name: Live Server https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    */

    await page.goto('http://127.0.0.1:5500/testformulario.html');/* The URL is chosen */

    await page.screenshot({path:'test1.jpg'});/* Photo */
    await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#nombre','Pablo')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000); /* Wait 2s */
     page.type('#apellidos','Lopez')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000); /* Wait 2s */
     page.type('#email','pablolopez@gmail.com')/* First choose the id and then write the content that is found after the comma */
      await page.waitForTimeout(2000);//* Wait 2s */
     page.type('#direccion','Calle Roma,22')/* First choose the id and then write the content that is found after the comma */
      await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#telefono','135-25-45-78')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#empresainput','LAN.SL')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#cita','28/04/2022')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.click('#check1')/* Click on the indicated id */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.click('#radio2')/* Click on the indicated id */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#url','https://www.google.com/')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000);/* Wait 2s */
     page.type('#text','Esto es un test')/* First choose the id and then write the content that is found after the comma */
     await page.waitForTimeout(2000);/* Wait 2s */
     await page.screenshot({path:'test2.jpg'});/* Photo */
     page.click('#botonenviar')/* Click on the indicated id */
     await page.waitForTimeout(2000);/* Wait 2s */
     await page.screenshot({path:'test3.jpg'});/* Photo */

     await page.waitForTimeout(5000);/* Wait 2s */
    await browser.close();/* Close the browser */
})();

/* Code created by:
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