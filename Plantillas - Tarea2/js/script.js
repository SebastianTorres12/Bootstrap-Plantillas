const context = {
  prefix1: "",
  mainTitle: "Exploremos",
  prefix2: "Melodías",
  subTitle: "Únicas.",
  buttonText: "Comprar Ahora",
  imgAlt: "Guitarras",
  body: "¡Únase a nosotros para transmitir las vibraciones eufóricas de la melodía a los ciudadanos del mundo!",
  text: "Guru's Music es una tienda musical en ciernes con la misión de compartir la alegría de la música. Estas magníficas herramientas auditivas están diseñadas pensando en creadores musicales, como usted. Tanto los aficionados como los principiantes y los expertos pueden apreciar los resplandecientes sonidos proporcionados por todos y cada uno de ellos. instrumento que llevamos.",
  instruments: [
    {
      image: "assets/electronic-keyboard.jpg",
      name: "Teclado eléctrico",
      description:
      "Un piano bienvenido al siglo XXI. Los pianistas celebran el factor de forma compacto y la diversidad de ritmos sintetizados, todo en una máquina musical magistral",
      price: "$1,999.00",
      sale: "$1,699.89",
    },
    {
      image: "assets/electric-guitar.jpg",
      name: "Guitarra Eléctrica",
      description:
      "Únete a las leyendas de los años 50 y 60, cuando la unión de la guitarra y la electricidad creó el instrumento más influyente de una generación. Nota: las púas se venden por separado",
      price: "$599.99",
    },
    {
      image: "assets/bass-guitar.jpg",
      name: "Bajo",
      description:
      "Experimente las frecuencias funk del bajo. Deje que las notas graves y profundas del bajo resuenan con los latidos del corazón en todas partes",
      price: "$624.99",
    },
    {
      image: "assets/drum-kit.jpg",
      name: "Kit de batería",
      description:
        '¿Alguna vez has pensado: "un instrumento no es suficiente?" Encuentra una respuesta en este set de batería. Coordina una colección de tambores y platillos para dictar el ritmo de una obra maestra musical.',
      price: "$649.00",
      sale: "$349.00",
    },
    {
      image: "assets/violin.jpg",
      name: "Violín",
      description:
        "Un instrumento versátil que se adapta a todas y cada una de las ocasiones.",
      price: "$245.00",
    },
  ],
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
