const snacks = {
  savoury: [
    {
      id: 1,
      name: "Chicken Satay",
      description:
        "Skewers of marinated chicken pieces grilled to perfection, typically served with a flavorful peanut dipping sauce.",
      price: "200 per serving",

      image: "public/savoury/ChickenSatay.jpeg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 2,
      name: "Chicken Tenders",
      description:
        "Strips of chicken breast coated in seasoned breading and fried until golden and crispy, often served with dipping sauces like honey mustard or barbecue.",
      price: "150 per serving",

      image: "public/savoury/ChickenTenders.jpeg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 3,
      name: "Deviled Eggs",
      description:
        "Hard-boiled eggs cut in half and filled with a creamy mixture of egg yolk, mayonnaise, mustard, and spices.",
      price: "100 per serving",
      image: "public/savoury/DeviledEggs.png",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 3.9,
      quantity: 0,
    },
    {
      id: 4,
      name: "Lamb Kebabs",
      description:
        "Skewers of marinated lamb pieces, grilled or broiled until tender and flavorful, often served with pita bread, tzatziki sauce, and grilled vegetables.",
      price: "300 per serving",
      image: "public/savoury/LambKebabs.jpg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 5,
      name: "Mini Sausage Rolls",
      description:
        "Sausage meat wrapped in puff pastry and baked until golden and flaky, often served as bite-sized snacks.",
      price: "150 per serving",
      image: "public/savoury/MiniSausageRolls.jpeg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 4.1,
      quantity: 0,
    },
    {
      id: 6,
      name: "Pork Dumplings",
      description:
        "Dumplings filled with seasoned ground pork and vegetables, steamed or fried, typically served with soy sauce or a vinegar-based dipping sauce.",
      price: "200 per serving (6-8 pieces)",
      image: "public/savoury/PorkDumplings.jpg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 3.5,
      quantity: 0,
    },
    {
      id: 7,
      name: "Shrimp Cocktail",
      description:
        "Cooked and chilled shrimp served with a tangy cocktail sauce, often garnished with lemon wedges and parsley.",
      price: "300 per serving",
      image: "public/savoury/ShrimpCocktail.jpg",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 4.6,
      quantity: 0,
    },
    {
      id: 8,
      name: "Chips and Dip",
      description:
        "A popular snack featuring crispy potato chips served with various dips such as salsa, guacamole, cheese dip, or sour cream and onion dip.",
      price: "100 per serving",
      image: "public/savoury/ChipsandDip.png",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.9,
      quantity: 0,
    },
    {
      id: 9,
      name: "Falafel",
      description:
        "Deep-fried balls or patties made from ground chickpeas, herbs, and spices. Often served with hummus or in pita bread with vegetables.",
      price: "150 per serving",
      image: "public/savoury/Falafel.jpg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.3,
      quantity: 0,
    },
    {
      id: 10,
      name: "Nachos",
      description:
        "Tortilla chips topped with melted cheese, jalapeños, beans, and sometimes meat or vegetables. Often served with sides of salsa, guacamole, and sour cream.",
      price: "200 per serving",
      image: "public/savoury/nachos.jpeg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 3.5,
      quantity: 0,
    },
    {
      id: 11,
      name: "Paneer Tikka",
      description:
        "Cubes of paneer (Indian cottage cheese) marinated in yogurt and spices, then grilled to perfection. Served with mint chutney and onion rings.",
      price: "200 per serving",
      image: "public/savoury/PaneerTikka.jpeg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 12,
      name: "Popcorn",
      description:
        "A light and airy snack made from popping kernels of corn, often seasoned with butter, salt, or other flavorings like caramel or cheese.",
      price: "50 per serving",
      image: "public/savoury/Popcorn.jpeg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 13,
      name: "Samosas",
      description:
        "Deep-fried pastries filled with spiced potatoes, peas, and sometimes lentils or meat. Served with tamarind chutney or mint chutney.",
      price: "20 per piece",
      image: "public/savoury/Samosas.png",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 3.3,
      quantity: 0,
    },
    {
      id: 14,
      name: "Spring Rolls",
      description:
        "Thin pastry filled with a mix of vegetables, sometimes including meat, then deep-fried until crispy. Served with sweet chili sauce or soy sauce.",
      price: "100 per serving (2-3 pieces)",
      image: "public/savoury/spring-rolls.jpg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.7,
      quantity: 0,
    },
    {
      id: 15,
      name: "Stuffed Mushrooms",
      description:
        "Mushrooms filled with a mixture of cheese, breadcrumbs, herbs, and sometimes garlic, then baked until the mushrooms are tender and the stuffing is golden brown.",
      price: "150 per serving",
      image: "public/savoury/StuffedMushrooms.jpeg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 16,
      name: "Chicken Burger",
      description:
        "A juicy chicken patty served in a bun with lettuce, tomato, cheese, and mayonnaise.",
      price: "250 per serving",
      image: "public/savoury/chickenburger.png",
      foodType: { type: "Savoury", dietary: "Non-Vegetarian" },
      rating: 3.6,
      quantity: 0,
    },
    {
      id: 17,
      name: "Pizza",
      description:
        "A juicy chicken patty served in a bun with lettuce, tomato, cheese, and mayonnaise.",
      price: "250 per serving",
      image: "public/savoury/pizza.png",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.6,
      quantity: 0,
    },
    {
      id: 18,
      name: "Veg Burger",
      description:
        "A delicious vegetable patty served in a bun with lettuce, tomato, cheese, and a tangy sauce.",
      price: "200 per serving",
      image: "public/savoury/VegBurger.jpg",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.7,
      quantity: 0,
    },
    {
      id: 19,
      name: "Fries",
      description:
        "Crispy golden fries seasoned with salt, served with ketchup or your favorite dip.",
      price: "100 per serving",
      image: "public/savoury/fries.png",
      foodType: { type: "Savoury", dietary: "Vegetarian" },
      rating: 4.3,
      quantity: 0,
    },
  ],

  sweet: [
    {
      id: 20,
      name: "Baklava",
      description:
        "Baklava is a rich, sweet pastry made of layers of filo dough filled with chopped nuts, such as pistachios or walnuts, and sweetened with honey or syrup. It's a popular dessert in Middle Eastern and Mediterranean cuisines.",
      price: "150 per serving",
      image: "public/Sweet/Baklava.jpeg",
      foodType: { type: "Sweet", dietary: "Non-Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 21,
      name: "Tiramisu",
      description:
        "Tiramisu is a classic Italian dessert made of layers of coffee-soaked ladyfingers (savoiardi) and a creamy mixture of mascarpone cheese, eggs, and sugar, often flavored with cocoa. It's typically chilled before serving.",
      price: "200 per serving",
      image: "public/Sweet/mon-tiramisu.jpg",
      foodType: { type: "Sweet", dietary: "Non-Vegetarian" },
      rating: 4.2,
      quantity: 0,
    },
    {
      id: 22,
      name: "Crème Brûlée",
      description:
        "Crème Brûlée is a French dessert consisting of a rich custard base topped with a contrasting layer of hard caramel. The custard is typically flavored with vanilla and the caramel is created by caramelizing sugar under a broiler or with a blowtorch.",
      price: "250 per serving",
      image: "public/Sweet/CrèmeBrûlée.png",
      foodType: { type: "Sweet", dietary: "Non-Vegetarian" },
      rating: 4.9,
      quantity: 0,
    },
    {
      id: 23,
      name: "Cheesecake",
      description:
        "Cheesecake is a creamy dessert with a base made from cream cheese, eggs, and sugar, often set on a graham cracker or digestive biscuit crust. It can be flavored in various ways and topped with fruits, chocolate, or sauces.",
      price: "200 per serving",
      image: "public/Sweet/Cheesecake.png",
      foodType: { type: "Sweet", dietary: "Non-Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 24,
      name: "Brownies",
      description:
        "Brownies are rich, fudgy chocolate squares made with flour, sugar, eggs, butter, and cocoa powder. They can be dense or cakey, and often include nuts, chocolate chips, or frosting.",
      price: "50 per piece",
      image: "public/Sweet/Brownies.jpg",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 3.4,
      quantity: 0,
    },
    {
      id: 25,
      name: "Candy",
      description:
        "Candy includes a wide variety of sweet confections such as hard candies, gummies, caramels, and chocolates. They are typically made with sugar or corn syrup, flavorings, and sometimes gelatin.",
      price: "10 per piece/package",
      image: "public/Sweet/Candy.png",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 3.7,
      quantity: 0,
    },
    {
      id: 26,
      name: "Chocolate Chip Cookies",
      description:
        "Chocolate chip cookies are classic cookies made with a dough containing chocolate chips or chunks. They are typically soft and chewy or crispy, depending on the recipe.",
      price: "5 per piece",
      image: "public/Sweet/ChocolateChipCookies.png",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 27,
      name: "Donuts",
      description:
        "Donuts are deep-fried or baked dough pastries that come in various shapes, most commonly ring-shaped. They are often glazed, frosted, or filled with jelly, cream, or custard.",
      price: "40 per piece",
      image: "public/Sweet/Donuts.png",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 3.9,
      quantity: 0,
    },
    {
      id: 28,
      name: "Chocolate Pretzels",
      description:
        "Chocolate-covered pretzels are crunchy pretzels dipped in melted chocolate, which can be dark, milk, or white chocolate. They combine sweet and salty flavors.",
      price: "100 per package",
      image: "public/Sweet/Chocolate-covered-pretzel.png",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 2.9,
      quantity: 0,
    },
    {
      id: 29,
      name: "Cupcakes",
      description:
        "Cupcakes are small cakes designed to serve one person, baked in a cup-shaped mold and often topped with frosting and decorations. They come in various flavors, from vanilla and chocolate to red velvet.",
      price: "50 per piece",
      image: "public/Sweet/perfect-vanilla-cupcakes-square.png",
      foodType: { type: "Sweet", dietary: "Vegetarian" },
      rating: 3.6,
      quantity: 0,
    },
  ],
  healthy: [
    {
      id: 30,
      // name: "Chicken and Vegetable Skewers",
      name: "Chicken Skewers",
      description:
        "Skewers of marinated chicken pieces grilled with vegetables like bell peppers, onions, and zucchini.",
      price: "200 per serving",
      image: "public/Healthy/ChickenandVegetableSkewers.png",
      foodType: { type: "Healthy", dietary: "Non-Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 31,
      // name: "Smoked Salmon and Cream Cheese on Cucumber Slices",
      name: "Smoked Salmon",
      description:
        "Slices of cucumber topped with a spread of cream cheese and a piece of smoked salmon, garnished with dill.",
      price: "200 per serving",
      image: "public/Healthy/SmokedSalmon.png",
      foodType: { type: "Healthy", dietary: "Non-Vegetarian" },
      rating: 5,
      quantity: 0,
    },

    {
      id: 32,
      // name: "Tuna Salad Lettuce Wraps",
      name: "Lettuce Wraps",
      description:
        "Tuna salad made with canned tuna, mixed with vegetables and a light dressing, served in crisp lettuce leaves.",
      price: "150 per serving",
      image: "public/Healthy/TunaSaladLettuceWraps.png",
      foodType: { type: "Healthy", dietary: "Non-Vegetarian" },
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 33,
      // name: "Turkey and Avocado Roll-Ups",
      name: "Avocado Roll-Ups",
      description:
        "Slices of turkey breast rolled up with avocado slices and a sprinkle of seasoning.",
      price: "200 per serving",
      image: "public/Healthy/TurkeyandAvocadoRoll-Ups.png",
      foodType: { type: "Healthy", dietary: "Non-Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 34,
      name: "Trail Mix",
      description:
        "A mix of nuts, seeds, dried fruits, and sometimes chocolate or other treats.",
      price: "150 per serving",
      image: "public/Healthy/TrailMix.jpg",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 2.5,
      quantity: 0,
    },
    {
      id: 35,
      name: "Avocado Toast",
      description:
        "Sliced avocado spread on toasted bread, often seasoned with salt, pepper, and other toppings like tomatoes or eggs.",
      price: "150 per serving",
      image: "public/Healthy/AvocadoToast.jpeg",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 3.9,
      quantity: 0,
    },
    {
      id: 36,
      name: "Chia Seed Pudding",
      description:
        "Pudding made with chia seeds soaked in milk or a milk alternative, often flavored with vanilla and sweetened with honey or maple syrup.",
      price: "100 per serving",
      image: "public/Healthy/ChiaSeedPudding.png",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 37,
      name: "Greek Yogurt Parfait",
      description:
        "Layers of Greek yogurt, granola, and fresh fruits such as berries or banana slices, sometimes drizzled with honey.",
      price: "150 per serving",
      image: "public/Healthy/GreekYogurtParfait.jpg",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 4.1,
      quantity: 0,
    },
    {
      id: 38,
      name: "Vegetable Sticks and Dip",
      description:
        "Assorted fresh vegetable sticks like carrots, celery, and bell peppers, served with a dip such as hummus or ranch.",
      price: "100 per serving",
      image: "public/Healthy/VegetableSticksAndDip.png",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 39,
      name: "Fresh Fruits",
      description:
        "A selection of fresh, seasonal fruits, sliced and served as a healthy snack option.",
      price: "120 per serving",
      image: "public/Healthy/FreshFruits.png",
      foodType: { type: "Healthy", dietary: "Vegetarian" },
      rating: 4.8,
      quantity: 0,
    },
  ],

  iceCreams: [
    {
      id: 40,
      name: "Vanilla Soft Serve Cone",
      description:
        "A classic soft serve ice cream cone with smooth and creamy vanilla flavor.",
      price: "30 per cone",
      image: "public/IceCream/VanillaSoftServeCone.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 41,
      name: "Mango Sorbet",
      description:
        "Refreshing mango-flavored sorbet made from mango puree and sugar, served in a cup or cone.",
      price: "50 per serving",
      image: "public/IceCream/MangoSorbet.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 4.6,
      quantity: 0,
    },
    {
      id: 42,
      name: "Chocolate Chip Gelato",
      description:
        "Rich chocolate gelato with chocolate chips mixed in for added texture and flavor.",
      price: "100 per serving",
      image: "public/IceCream/ChocolateChipGelato.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 4.7,
      quantity: 0,
    },
    {
      id: 43,
      name: "Strawberry Soft Serve",
      description:
        "Tangy frozen yogurt flavored with natural strawberry puree, served with fresh strawberry slices on top.",
      price: "80 per serving",
      image: "public/IceCream/StrawberryFrozenYogurt.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 4.9,
      quantity: 0,
    },
    {
      id: 44,
      name: "Pistachio Soft Serve",
      description:
        "Soft serve ice cream with a nutty pistachio flavor, topped with chopped pistachios.",
      price: "40 per cone",
      image: "public/IceCream/PistachioSoftServe.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 45,
      name: "Coffee Crunch Gelato",
      description:
        "Smooth gelato flavored with espresso coffee and crunchy bits of toffee or chocolate.",
      price: "120 per serving",
      image: "public/IceCream/CoffeeCrunchGelato.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 4,
      quantity: 0,
    },
    {
      id: 46,
      name: "Raspberry Sorbet",
      description:
        "Tart and fruity raspberry sorbet made with fresh raspberry puree, served chilled.",
      price: "60 per serving",
      image: "public/IceCream/RaspberrySorbet.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
    {
      id: 47,
      // name: "Salted Caramel Artisanal Ice Cream",
      name: "Salted Caramel ",
      description:
        "Creamy caramel-flavored ice cream with a hint of sea salt, creating a perfect balance of sweet and salty.",
      price: "160 per serving",
      image: "public/IceCream/SaltedCaramelArtisanalIceCream.png",
      foodType: { type: "Ice Cream", dietary: "Vegetarian" },
      rating: 5,
      quantity: 0,
    },
  ],
};

export default snacks;
