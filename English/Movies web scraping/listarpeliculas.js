const puppeteer  = require('puppeteer');
/* Commands to install puppeteer:
     -npm install puppeteer
*/

/* To execute
     - USE node filename.js in the folder where this file is located
     - In Visual Studio RUN-START DEBUGGING -NODE.JS
*/
(async () => {

    let movieUrl = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';/* The URL is chosen */

    let browser = await puppeteer.launch({headless:false});/* With headless: true the browser would not be seen and it would only show the results */

    let page = await browser.newPage();/* Open the search engine */
    /* Computer resolution */
    await page.setViewport({
        width: 2048,
        height: 1536
        });


    await page.goto(movieUrl,{waitUntil: 'networkidle2'});/* Wait for page load */

    /* Counts the number of elements that have the chosen selector */
    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('[class="titleColumn"] a');/* Selector chosen */
        /* These are stored in an array and listed with a for */
        const links = [];
        for(let element of elements){
            links.push(element.href);
        }
        return links;
    });
    
    /* In this part we create an array in which we will pass the links to iterate them and save each element in a unique element within the elements array */
    const elementos =[];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.screenshot({path:'pelicula1.jpg'});/* Save a "photo" of the page */

        /* The constant element includes within itself the elements that we want to obtain from the page */
        const elemento = await page.evaluate(() => {
            const peli = {};
            /* If it doesn't work, change the selector according to the type of page shown [data-testid = "hero-title-block__title"] and [data-testid = "hero-title-block__aggregate-rating__score"] * /
            /* First the data that the movie is going to have, data and punctuation are declared and then with the document.querySelector the selector is chosen
             and with the .inneText the text inside the selector */
            peli.datos = document.querySelector('[class="title_wrapper"]').innerText;
            peli.puntuacion = document.querySelector('[class="ratings_wrapper"]').innerText;
        
    
            return{
                peli
            }
        });
        elementos.push(elemento);
    }
    /* Print by console the information of each element of the array elements */
    console.log(elementos);


     debugger;
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