

const button = document.querySelectorAll('.button');

button.forEach((child) => {

    child.addEventListener("mouseenter", (e) => {

        // Scale up
        gsap.to(child, {
            scale: 1.5,
            duration: 0.3
        });

        if (child.classList.contians("how-to-container")) {
            
        } else if (child.classList.contains("food-container")) {
            
        } else if (child.classList.contains("actors-container")) {
            
        } else if (child.classList.contains("favs-container")) {
            
        }

    });

    console.log("Check");

    child.addEventListener("mouseleave", () => {

        // Scale back down
        gsap.to(child, {
            scale: 1,
            duration: 0.3
        });

    });

});

const loading_page = document.querySelector('.loading-page-container');
const images = document.querySelectorAll('.Loading_Image');
const totalImages = images.length;

const image_1 = document.querySelector('.Image_1');
const image_2 = document.querySelector('.Image_2');
const image_3 = document.querySelector('.Image_3');
const image_4 = document.querySelector('.Image_4');
const image_5 = document.querySelector('.Image_5');
const image_6 = document.querySelector('.Image_6');
const image_7 = document.querySelector('.Image_7');
const image_8 = document.querySelector('.Image_8');


let loadedImages = 0;

const dur = 1;

function updateLoader() {
    loadedImages++;

    const progress = Math.round(
        (loadedImages / totalImages)
    );

    image_1.style.display = 'block';
    image_1.style.scale = progress;

    if (loadedImages === totalImages) {
        //Now start the animation
        //Right Top
        image_1.style.display = 'block';
        triangle_2.style.display = 'block';
        gsap.to(
            '.slice2',
            {
                opacity : 1,
                duration : dur,
                onComplete : ()=>{
                    image_1.style.display = 'none';
                    image_2.style.display = 'block';
                    triangle_3.style.display = 'block';
                    gsap.to(
                        '.slice3',
                        {
                            opacity: 1,
                            duration : dur,
                            onComplete: ()=>{
                                image_2.style.display = 'none';
                                image_3.style.display = 'block';
                                triangle_4.style.display = 'block';
                                gsap.to(
                                    '.slice4',
                                    {
                                        opacity: 1,
                                        duration : dur,
                                        onComplete: ()=>{
                                            
                                            image_3.style.display = 'none';
                                            image_4.style.display = 'block';
                                            triangle_5.style.display = 'block';

                                            console.log('Image 4 is shown');
                                            gsap.to(
                                                '.slice5',
                                                {
                                                    opacity: 1,
                                                    duration : dur,
                                                    onComplete: ()=>{
                                                        image_4.style.display = 'none';
                                                        image_5.style.display = 'block';
                                                        triangle_6.style.display = 'block';

                                                        console.log('Image 5 is shown');
                                                        gsap.to(
                                                            '.slice6',
                                                            {
                                                                opacity: 1,
                                                                duration : dur,
                                                                onComplete: ()=>{
                                                                    image_5.style.display = 'none';
                                                                    image_6.style.display = 'block';
                                                                    triangle_7.style.display = 'block';

                                                                    console.log('Image6 is shown');
                                                                    gsap.to(
                                                                        '.slice7',
                                                                        {
                                                                            opacity: 1,
                                                                            duration : dur,
                                                                            onComplete: ()=>{
                                                                                image_6.style.display = 'none';
                                                                                image_7.style.display = 'block';
                                                                                triangle_8.style.display = 'block';
                                                                                console.log('Image6 is shown');
                                                                                gsap.to(
                                                                                    '.slice8',
                                                                                    {
                                                                                        opacity: 1,
                                                                                        duration : dur,
                                                                                        onComplete: ()=>{
                                                                                            image_7.style.display = 'none';
                                                                                            image_8.style.display = 'block';
                                                                                            triangle_1.style.display = 'block';
                                                                                            
                                                                                            gsap.to(
                                                                                                '.slice1',
                                                                                                {
                                                                                                    opacity: 1,
                                                                                                    duration : dur,
                                                                                                    onComplete: ()=>{
                                                                                                        gsap.to(
                                                                                                            image_8,
                                                                                                            {
                                                                                                                opacity: 0,
                                                                                                                scale: 2,
                                                                                                                duration: 1, 
                                                                                                            }
                                                                                                        )

                                                                                                        gsap.to(
                                                                                                            loading_page,
                                                                                                            {
                                                                                                                opacity: 0,
                                                                                                                duration: 1,
                                                                                                                onComplete: ()=>{
                                                                                                                    image_8.style.display = 'none';
                                                                                                                    loading_page.style.display = 'none';
                                                                                                                }
                                                                                                            }
                                                                                                        )
                                                                                                    }
                                                                                                }
                                                                                            )
                                                                                        }
                                                                                    }
                                                                                )
                                                                            }
                                                                        }
                                                                    ) 
                                                                }
                                                            }  
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    }  
                                )
                            }
                        }
                    )
                }
            }
        )
    }
}

for (let img of images) {

    if (img.complete) {
        updateLoader();
    } else {
        img.addEventListener("load", updateLoader);
        img.addEventListener("error", updateLoader);
    }
}

const triangle_1 = document.querySelector('.slice1');
const triangle_5 = document.querySelector('.slice5');
const triangle_3 = document.querySelector('.slice3');
const triangle_7 = document.querySelector('.slice7');
const triangle_2 = document.querySelector('.slice2');
const triangle_4 = document.querySelector('.slice4');
const triangle_6 = document.querySelector('.slice6');
const triangle_8 = document.querySelector('.slice8');

//Clip Path adjustments
function makeTriangles(){
    //Find the Width and Height of Screen
    let width = window.innerWidth;
    let height = window.innerHeight;

    let y = height * Math.tan(12.5 * (180 / Math.PI)) * 0.5;
    let x = width/2 - y;

    let b = width * Math.tan(12.5 * (180 / Math.PI)) * 0.5;
    let a = height/2 - b;

    let p1 = x / (2 * (x + y));
    let p2 = ((2 * y) + x) / (2 * (x + y));
    let p3 = a / (2 * (a + b));
    let p4 = (a + (2 * b)) / (2 * (a + b));

    triangle_1.style.clipPath = `polygon(
        50% 50%,
        ${p1 * 100 + 15}% 0%,
        ${p2 * 100 - 15}% 0%
    )`;

    triangle_5.style.clipPath = `polygon(
        50% 50%,
        ${p1 * 100 + 15}% 100%,
        ${p2 * 100 - 15}% 100%
    )`;

    triangle_3.style.clipPath = `polygon(
        50% 50%,
        100% ${p3 * 100 + 20}%,
        100% ${p4 * 100 - 20}% 
    )`;

    triangle_7.style.clipPath = `polygon(
        50% 50%,
        0% ${p3 * 100 + 15}%,
        0% ${p4 * 100 - 15}% 
    )`;

    triangle_2.style.clipPath = `polygon(
        50% 50%,
        ${p1 * 100 + 15}% 0% ,
        100% 0%,
        100% ${p3 * 100 - 25}%
    )`;

    triangle_4.style.clipPath = `polygon(
        50% 50%,
        100% ${p4 * 100 + 25}%,
        100% 100%,
        ${p2 * 100 - 15}% 100%
    )`;

    triangle_6.style.clipPath = `polygon(
        50% 50%,
        ${p1 * 100 - 15}% 100%,
        0% 100%,
        0% ${p4 * 100 + 15}%
    )`;

    triangle_8.style.clipPath = `polygon(
        50% 50%,
        0% ${p3 * 100 - 15}%,
        0% 0%,
        ${p1 * 100 - 15}% 0%
    )`; 
}

makeTriangles();

document.addEventListener('resize' , makeTriangles)