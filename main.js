// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parra_class = document.querySelector(".parra_class");
// const parra_id = document.getElementById("parra_id");
// const input = document.querySelector("input");

// console.log(input.value);

// console.log({h1, p, parra_class, parra_id, input});

// h1.innerText = "Fenix";

// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");

// h1.classList.add("rojo");
// h1.classList.remove("rojo");
// h1.classList.toggle("rojo");
// h1.classList.contains("azul");

// input.value = "123";

// const img = document.createElement("img");
// img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomputerhoy.com%2Flistas%2Ftecnologia%2Ffondos-pantalla-pc-resoluciones-hd-full-hd-4k-286143&psig=AOvVaw3kgAxJT6Rq-bh3O1dL0Zy4&ust=1665527269030000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCDudra1voCFQAAAAAdAAAAABAE');

// console.log(img); 

// parra_id.append(img);


const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener("submit", sumar)

// btn.addEventListener("click", btnOnClick);

function sumar(event){
    // console.log({event});
    event.preventDefault();
    const suma =  parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "Resultado: " + suma;
}
