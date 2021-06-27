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


    await page.goto('http://www.amazon.es');/* The URL is chosen */
    await page.screenshot({path:'amazon1.jpg'}); /* Photo */
    await page.click('[data-cel-widget=sp-cc-accept]'); /* Click to accept cookies using id */
    await page.type('#twotabsearchtextbox','ordenadores portatiles')/* First choose the id and then write the content that is found after the comma */

    await page.click('.nav-search-submit input');/* Click on the indicated id to start the search */
    await page.waitForSelector('[data-component-type=s-search-result]');/* We wait for the component to appear indicating that the search has been carried out */
    await page.waitForTimeout(2000);/* Wait 2s */
    
    await page.screenshot({path:'amazon3.jpg'});/* Photo */

    /* We search and store in an array the elements that have the selector indicated in the querySelectorAll of elements */
    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('[data-component-type=s-search-result] h2 a');

        const links = [];
        for(let element of elements){
            links.push(element.href);
        }
        return links;
    });
    /* Print by console the number of links obtained */
    console.log(enlaces.length);

    /* Beginning of iteration */
    const elementos =[];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.waitForSelector('#productTitle');/* Waiting for the indicated selector */
        await page.screenshot({path:'amazon4.jpg'});/* Photo */

        
        const elemento = await page.evaluate(() => {
            const tmp = {};
            /* First the data that tmp, title and availability will have are declared and then with the document.querySelector the selector is chosen
            and with the .inneText the text inside the selector */
            tmp.title = document.querySelector('#productTitle').innerText;
            tmp.availability = document.querySelector('#availability').innerText;
            return tmp;
        });
        elementos.push(elemento);
    }
    /* Print by console the information of each element of the array elements */
    console.log(elementos);

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