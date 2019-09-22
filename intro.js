
/*
//Den looper først igennem det yderste loop og så det inderste loop
// I vores canvas er de lodrette tal det yderste loop og de vandrette tal er det inderste loop
// pr. gang det yderste loop kører, kaster den et tal afsted 
for(let x = 0; x < 3; x++){

    for(let y = 0; y < 3; y++){
        // pr. gang det inderste loop kører, kaster 3 tal afsted
        console.log("x er = " + x + " og y er = " + y);
    }
}*/


/*let arrayCanvas = [0, 1, 0, -1, 2, 0, 0, 0, 0, 1];
console.log(arrayCanvas[1]);

// tager hvor  langt arrayCanvas er 
for(let i = 0; i < arrayCanvas.length; i++) {
    if(arrayCanvas[i] == -1){
    ctx.fillStyle = "red";
    ctx.fillRect(i*50,0, 50,50);
    }else if(arrayCanvas[i] == 1) {
        ctx.fillStyle = "blue";
        ctx.fillRect(i*50,0, 50,50);
    }else if(arrayCanvas[i] == 2) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(i*50,0, 50,50);
    }else {
        ctx.fillStyle = "green";
        ctx.fillRect(i*50,0, 50,50);
    }
}*/

// farver en kasser som vi laver under 
/*ctx.fillStyle = "red";

// starter i venstre hjørne af body og sætter størrelsen på selve kassen og den bliver rød pga. ovenstående tag
//første tal er vandret akse, andet tal er lodret akse, tredje tal er width og sidste tal er height
ctx.fillRect(0,0, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(450,0, 50,50);

ctx.fillStyle = "green";
ctx.fillRect(0,450, 50,50);

ctx.fillStyle = "yellow";
ctx.fillRect(450,450, 50,50);

//hus - selve huset 
ctx.fillStyle = "brown";
ctx.fillRect(150,250, 200,200);

//Hus - taget 
ctx.fillStyle = "blue";
ctx.fillRect(150,200, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(180,150, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(200,100, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(250,100, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(270,150, 50,50);

ctx.fillStyle = "blue";
ctx.fillRect(300,200, 50,50);

//hus dør 
ctx.fillStyle = "grey";
ctx.fillRect(225,350, 50,100);

// Hus vindue 
ctx.fillStyle = "black";
ctx.fillRect(180,300, 30,30);

ctx.fillStyle = "black";
ctx.fillRect(290,300, 30,30);*/


// et forloop gør 3 ting. - "let i = 0;" = definerer hvilket tal loopet starter på (i dette tilfælde 0).
// anden ting er "i < 3;" = definerer hvornår loopet stopper - loopet kører så længe at i er mindre end 3 (i det her tilfælde)
// trejde ting er "i++" = den autoincrementer med 1 for hver gang loopet kører - så i = 0, +1, så i = 1 osv. indtil 3 i dette tilfælde
// i<=3 = i er mindre end eller samme som 3 
//for(let i = 0; i < 10; i++) {
    // %  = modulus. Den vil være sand på alle lige tal da 2 går op i lige tal
    // if(i%2 == 0){
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(i*50, 0, 50, 50);
    // }else{
    //     ctx.fillStyle = "blue";
    //     ctx.fillRect(i*50, 0, 50, 50);
    // }
    // //Hvis i er lig med plads 7 så sæt en grøn firkant ind
    // if(i ==7) {
    //     ctx.fillStyle = "green";
    //     ctx.fillRect(i*50, 0, 50, 50);
    // }
    // 5, 8 og13 - anden farve
    // if(i == 5) {
    //     ctx.fillStyle = "yellow";
    //     ctx.fillRect(i*25, 0, 25, 25);
    // }
    // if(i == 8) {
    //     ctx.fillStyle = "grey";
    //     ctx.fillRect(i*25, 0, 25, 25);
    // }if(i == 13) {
    //     ctx.fillStyle = "brown";
    //     ctx.fillRect(i*25, 0, 25, 25);
    // }
    
//}