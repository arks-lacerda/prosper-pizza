type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: 'Siciliana',
    desc: 'Acenda suas papilas gustativas com uma combinação ardente de calabresa picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um toque especial a cada mordida.',
    img: '/temporary/p1.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Peperoni Deluxe',
    desc: 'Delicie-se com a pizza de peperoni deluxe com um champions feitos da chapa com manteiga, coberto com azeitas, queijo cheddar derretido, com bacon crocante, delicioso e fresco majaricão, cebola caramelizada e um pouco de molho picante.',
    img: '/temporary/p2.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Bella Napoli',
    desc: 'Uma delícia italiana clássica com crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um bocado de maionese picante',
    img: '/temporary/p3.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Spicy Arrabbiata',
    desc: 'Acenda suas papilas gustativas com esta criação dessa pizza ardente, combinando um molho de tomate picante infundido com alho, flocos de pimenta vermelha e manjericão fresco para a melhor experiência gastronômica reconfortante.',
    img: '/temporary/p4.png',
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: 'Jalapeño Fiesta',
    desc: 'Acenda suas papilas gustativas com um chute de fogo! Esta pizza apresenta um suculento cogumelo, molho de tomate ardentes ao jalapeños, queijo pepper jack, um manjericão pre-selecionado a dedo e todos os ingredientes clássicos em uma massa torrada s.',
    img: '/temporary/p5.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'Margherita Magic',
    desc: 'Um favorito atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e um fiozinho de esmalte balsâmico.',
    img: '/temporary/p6.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: 'Garlic Parmesan',
    desc: 'Uma delícia para os amantes de cogumelos, com tomates e azeitonas pretas, infundido com alho poró e guarnecido com rúcula, molho de pimentão e tomate cereja.',
    img: '/temporary/p7.png',
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: 'Mediterranean Delight',
    desc: 'Embarque em uma viagem culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano',
    img: '/temporary/p8.png',
    price: 32.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: 'Hawaiian',
    desc: 'Experimente o sabor dos trópicos com uma suculenta pizza de queijo parmesão coberto com molho teriyaki picante, coberto com tomates grelhado, azeitonas pretas e rúcula fresca.',
    img: '/temporary/p9.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: 'Siciliana',
    desc: 'Acenda suas papilas gustativas com uma combinação ardente de calabresa picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um toque especial a cada mordida.',
    img: '/temporary/p1.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Peperoni Deluxe',
    desc: 'Delicie-se com a pizza de peperoni deluxe com um champions feitos da chapa com manteiga, coberto com azeitas, queijo cheddar derretido, com bacon crocante, delicioso e fresco majaricão, cebola caramelizada e um pouco de molho picante.',
    img: '/temporary/p2.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Bella Napoli',
    desc: 'Uma delícia italiana clássica com crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um bocado de maionese picante',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Spicy Arrabbiata',
    desc: 'Acenda suas papilas gustativas com esta criação dessa pizza ardente, combinando um molho de tomate picante infundido com alho, flocos de pimenta vermelha e manjericão fresco para a melhor experiência gastronômica reconfortante.',
    img: '/temporary/p4.png',
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: 'Jalapeño Fiesta',
    desc: 'Acenda suas papilas gustativas com um chute de fogo! Esta pizza apresenta um suculento cogumelo, molho de tomate ardentes ao jalapeños, queijo pepper jack, um manjericão pre-selecionado a dedo e todos os ingredientes clássicos em uma massa torrada s.',
    img: '/temporary/p5.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'Margherita Magic',
    desc: 'Um favorito atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e um fiozinho de esmalte balsâmico.',
    img: '/temporary/p6.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 6,
  title: 'Margherita Magic',
  desc: 'Um favorito atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e um fiozinho de esmalte balsâmico.',
  img: '/temporary/p6.png',
  price: 24.9,
  options: [
    {
      title: 'Small',
      additionalPrice: 0,
    },
    {
      title: 'Medium',
      additionalPrice: 4,
    },
    {
      title: 'Large',
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: 'doces',
    title: 'Pizza Doce',
    desc: 'Saberei o sabor da perfeição com nosso requintado menu de pizza doces',
    img: '/temporary/m1.png',
    color: 'white',
  },
  {
    id: 2,
    slug: 'normal',
    title: 'Pizza Normal',
    desc: 'Pizzas tradicionais, porém com aquele toque especial.',
    img: '/temporary/m2.png',
    color: 'black',
  },
  {
    id: 3,
    slug: 'especias',
    title: 'Pizzas Paradisíacas',
    desc: 'Pizza Paradisíacas: Fatias irresistíveis, coberturas de dar água na boca e perfeição de queijo.',
    img: '/temporary/m3.png',
    color: 'white',
  },
];
