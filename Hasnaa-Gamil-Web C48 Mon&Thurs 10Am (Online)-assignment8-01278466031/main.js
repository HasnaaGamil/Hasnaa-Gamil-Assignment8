const recipes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=900&q=80",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    tags: [{ text: "Intermediate", type: "difficulty" }, { text: "Italian", type: "cuisine" }],
    rating: 4.9,
    reviewsCount: 512,
    prepTime: 90,
    cookTime: 12,
    servings: 2,
    extendedPrep: true,
    ingredients: [
      { amount: "300g", name: "pizza dough" },
      { amount: "200g", name: "crushed tomatoes" },
      { amount: "250g", name: "fresh mozzarella" },
      { amount: "", name: "Fresh basil leaves" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "", name: "Salt and pepper to taste" },
      { amount: "", name: "Parmesan cheese for topping" }
    ],
    instructions: [
      "Let the pizza dough come to room temperature and rest for at least 30 minutes.",
      "Preheat oven to its highest setting (with a pizza stone inside, if you have one).",
      "Stretch the dough out into a round base on a floured surface.",
      "Spread the crushed tomatoes evenly, leaving a border for the crust.",
      "Tear the mozzarella into pieces and scatter over the sauce.",
      "Bake for 8-12 minutes until the crust is golden and cheese is bubbling.",
      "Top with fresh basil, a drizzle of olive oil, and parmesan before serving."
    ],
    nutrition: { calories: 720, protein: 30, carbs: 84, fat: 28, fiber: 4, sodium: 1150 },
    tips: [
      "Use a very hot oven — the higher the better for a crisp crust.",
      "Don't overload with toppings or the base will turn soggy.",
      "Fresh mozzarella releases water, so pat it dry before adding.",
      "Let the pizza rest 2 minutes before slicing so the cheese sets."
    ]
  },
  {
    id: 2,
    name: "BBQ Pulled Pork",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=80",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "American", type: "cuisine" }],
    rating: 4.7,
    reviewsCount: 412,
    prepTime: 15,
    cookTime: 240,
    servings: 4,
    extendedPrep: true,
    ingredients: [
      { amount: "1kg", name: "pork shoulder" },
      { amount: "1 cup", name: "BBQ sauce" },
      { amount: "1/2 cup", name: "apple cider vinegar" },
      { amount: "2 tbsp", name: "brown sugar" },
      { amount: "1 tbsp", name: "paprika" },
      { amount: "1 tbsp", name: "garlic powder" },
      { amount: "", name: "Burger buns" },
      { amount: "", name: "Coleslaw for serving" }
    ],
    instructions: [
      "Rub the pork shoulder generously with paprika, garlic powder, salt and pepper.",
      "Sear the pork on all sides in a hot pan until browned.",
      "Transfer to a slow cooker with vinegar and half the BBQ sauce.",
      "Cook on low for 6-8 hours until the meat shreds easily with a fork.",
      "Shred the pork and mix with the remaining BBQ sauce and brown sugar.",
      "Pile onto toasted buns and top with coleslaw."
    ],
    nutrition: { calories: 610, protein: 42, carbs: 38, fat: 30, fiber: 2, sodium: 980 },
    tips: [
      "Low and slow is key — rushing the cook makes the meat tough.",
      "Sear the pork first to lock in flavor before slow cooking.",
      "Shred while the meat is still warm for the best texture.",
      "Save some cooking liquid to moisten the pulled pork before serving."
    ]
  },
  {
    id: 3,
    name: "Creamy Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&q=80",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "Italian", type: "cuisine" }],
    rating: 4.8,
    reviewsCount: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    extendedPrep: false,
    ingredients: [
      { amount: "400g", name: "spaghetti pasta" },
      { amount: "200g", name: "pancetta or guanciale, diced" },
      { amount: "4", name: "large eggs" },
      { amount: "100g", name: "Pecorino Romano cheese, grated" },
      { amount: "50g", name: "Parmesan cheese, grated" },
      { amount: "", name: "Freshly ground black pepper" },
      { amount: "", name: "Salt for pasta water" }
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "While pasta cooks, fry the pancetta until crisp and golden.",
      "Whisk the eggs with Pecorino, Parmesan, and plenty of black pepper.",
      "Drain the pasta, reserving a cup of the starchy cooking water.",
      "Off the heat, toss the hot pasta with the pancetta and egg mixture.",
      "Add splashes of pasta water until glossy and creamy. Serve immediately."
    ],
    nutrition: { calories: 650, protein: 32, carbs: 62, fat: 30, fiber: 3, sodium: 890 },
    tips: [
      "Take the pan off the heat before adding eggs so they don't scramble.",
      "Reserve pasta water — it's essential for a silky sauce.",
      "Use guanciale over bacon for the most authentic flavor.",
      "Serve immediately; carbonara doesn't reheat well."
    ]
  },
  {
    id: 4,
    name: "Greek Moussaka",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80",
    description: "Traditional layered eggplant casserole with lamb",
    tags: [{ text: "Intermediate", type: "difficulty" }, { text: "Mediterranean", type: "cuisine" }],
    rating: 4.8,
    reviewsCount: 234,
    prepTime: 30,
    cookTime: 60,
    servings: 4,
    extendedPrep: true,
    ingredients: [
      { amount: "3", name: "large eggplants, sliced" },
      { amount: "500g", name: "ground lamb" },
      { amount: "400g", name: "canned tomatoes" },
      { amount: "1", name: "onion, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "500ml", name: "béchamel sauce" },
      { amount: "100g", name: "parmesan cheese" },
      { amount: "", name: "Cinnamon and oregano" },
      { amount: "", name: "Olive oil" }
    ],
    instructions: [
      "Salt eggplant slices and let sit 20 minutes to draw out moisture, then pat dry.",
      "Brush with olive oil and roast or fry until golden on both sides.",
      "Cook onion and garlic, then brown the lamb with cinnamon and oregano.",
      "Stir in tomatoes and simmer the meat sauce for 20 minutes.",
      "Layer eggplant and meat sauce in a baking dish, finishing with a layer of eggplant.",
      "Top with béchamel and parmesan, then bake at 180°C for 40 minutes until golden."
    ],
    nutrition: { calories: 590, protein: 34, carbs: 28, fat: 36, fiber: 6, sodium: 720 },
    tips: [
      "Salting the eggplant first prevents a soggy, bitter dish.",
      "Let the moussaka rest 10-15 minutes before cutting so it holds its layers.",
      "A pinch of cinnamon in the meat sauce is the traditional flavor secret.",
      "Make it a day ahead — moussaka tastes even better reheated."
    ]
  },
  {
    id: 5,
    name: "Honey Garlic Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80",
    description: "Pan-seared salmon with a sweet and savory glaze",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "Seafood", type: "cuisine" }],
    rating: 4.9,
    reviewsCount: 187,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    extendedPrep: false,
    ingredients: [
      { amount: "2", name: "salmon fillets (6oz each)" },
      { amount: "3 tbsp", name: "honey" },
      { amount: "2 tbsp", name: "soy sauce" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "1 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "fresh ginger, grated" },
      { amount: "", name: "Sesame seeds for garnish" },
      { amount: "", name: "Green onions, sliced" }
    ],
    instructions: [
      "Whisk together honey, soy sauce, garlic, and ginger for the glaze.",
      "Season salmon fillets with salt and pepper.",
      "Heat olive oil in a pan and sear salmon skin-side down for 4 minutes.",
      "Flip and cook another 3 minutes until nearly cooked through.",
      "Pour in the glaze and simmer, spooning over the salmon until sticky.",
      "Garnish with sesame seeds and green onions before serving."
    ],
    nutrition: { calories: 420, protein: 36, carbs: 22, fat: 18, fiber: 1, sodium: 640 },
    tips: [
      "Pat the salmon dry before searing for the best crust.",
      "Don't move the fillets while searing — let a crust form first.",
      "Watch the glaze closely near the end, honey burns quickly.",
      "Rest the salmon a minute before serving to let juices redistribute."
    ]
  },
  {
    id: 6,
    name: "Caprese Sandwich",
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=900&q=80",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "Italian", type: "cuisine" }],
    rating: 4.5,
    reviewsCount: 189,
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    extendedPrep: false,
    ingredients: [
      { amount: "1", name: "ciabatta bread" },
      { amount: "200g", name: "fresh mozzarella, sliced" },
      { amount: "2", name: "large tomatoes, sliced" },
      { amount: "", name: "Fresh basil leaves" },
      { amount: "3 tbsp", name: "pesto" },
      { amount: "2 tbsp", name: "balsamic glaze" },
      { amount: "", name: "Olive oil" },
      { amount: "", name: "Salt and pepper" }
    ],
    instructions: [
      "Slice the ciabatta in half lengthwise and lightly toast if desired.",
      "Spread pesto generously over both cut sides of the bread.",
      "Layer mozzarella and tomato slices, seasoning with salt and pepper.",
      "Add a generous layer of fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze before closing the sandwich.",
      "Press gently, slice in half, and serve."
    ],
    nutrition: { calories: 480, protein: 22, carbs: 46, fat: 24, fiber: 3, sodium: 780 },
    tips: [
      "Salt the tomatoes briefly and pat dry so the bread doesn't get soggy.",
      "Use good quality fresh mozzarella, not the low-moisture block kind.",
      "A cast-iron press gives a nice warm, melty version of this sandwich.",
      "Let it sit 5 minutes after assembling so the flavors meld."
    ]
  },
  {
    id: 7,
    name: "Classic Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
    description: "Juicy homemade burger with all the fixings",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "American", type: "cuisine" }],
    rating: 4.6,
    reviewsCount: 421,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    extendedPrep: false,
    ingredients: [
      { amount: "500g", name: "ground beef (80/20)" },
      { amount: "4", name: "burger buns" },
      { amount: "4", name: "slices cheddar cheese" },
      { amount: "", name: "Lettuce leaves" },
      { amount: "", name: "Tomato slices" },
      { amount: "", name: "Red onion, sliced" },
      { amount: "", name: "Pickles" },
      { amount: "", name: "Burger sauce or condiments" }
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan."
    ],
    nutrition: { calories: 650, protein: 38, carbs: 42, fat: 35, fiber: 2, sodium: 920 },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor"
    ]
  },
  {
    id: 8,
    name: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=80",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    tags: [{ text: "Intermediate", type: "difficulty" }, { text: "Asian", type: "cuisine" }],
    rating: 4.7,
    reviewsCount: 389,
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    extendedPrep: true,
    ingredients: [
      { amount: "600g", name: "chicken breast, cubed" },
      { amount: "1 cup", name: "plain yogurt" },
      { amount: "2 tbsp", name: "tikka masala paste" },
      { amount: "400ml", name: "coconut cream" },
      { amount: "1", name: "onion, diced" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "2 tbsp", name: "ginger, grated" },
      { amount: "400g", name: "canned tomatoes" }
    ],
    instructions: [
      "Marinate chicken in yogurt and half the tikka masala paste for at least 30 minutes.",
      "Sear the marinated chicken in a hot pan until charred at the edges. Set aside.",
      "Sauté onion, garlic, and ginger until softened.",
      "Stir in the remaining tikka paste and cook until fragrant.",
      "Add tomatoes and simmer for 10 minutes, then blend until smooth if desired.",
      "Return the chicken to the pan with coconut cream and simmer until cooked through."
    ],
    nutrition: { calories: 560, protein: 44, carbs: 20, fat: 32, fiber: 3, sodium: 780 },
    tips: [
      "Marinate the chicken as long as possible — even overnight — for deeper flavor.",
      "Char the chicken before simmering for authentic smoky flavor.",
      "Blend the sauce for a restaurant-style smooth texture.",
      "Finish with a swirl of cream and fresh cilantro before serving."
    ]
  },
  {
    id: 9,
    name: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=900&q=80",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    tags: [{ text: "Intermediate", type: "difficulty" }, { text: "Asian", type: "cuisine" }],
    rating: 4.7,
    reviewsCount: 312,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    extendedPrep: false,
    ingredients: [
      { amount: "2 tbsp", name: "green curry paste" },
      { amount: "400ml", name: "coconut milk" },
      { amount: "300g", name: "chicken breast, sliced" },
      { amount: "1", name: "red bell pepper, sliced" },
      { amount: "100g", name: "green beans" },
      { amount: "1", name: "eggplant, cubed" },
      { amount: "2 tbsp", name: "fish sauce" },
      { amount: "1 tbsp", name: "palm sugar" },
      { amount: "", name: "Fresh Thai basil leaves" }
    ],
    instructions: [
      "Fry the green curry paste in a splash of coconut milk until fragrant.",
      "Add the chicken and cook until lightly browned on all sides.",
      "Pour in the remaining coconut milk and bring to a gentle simmer.",
      "Add bell pepper, green beans, and eggplant, cooking until tender.",
      "Season with fish sauce and palm sugar to balance the flavors.",
      "Stir in Thai basil just before serving with steamed rice."
    ],
    nutrition: { calories: 480, protein: 28, carbs: 24, fat: 30, fiber: 5, sodium: 820 },
    tips: [
      "Frying the curry paste first releases much more aroma and flavor.",
      "Add vegetables in order of cook time so nothing turns mushy.",
      "Balance the curry with fish sauce, sugar, and lime at the end.",
      "Full-fat coconut milk gives the richest, creamiest result."
    ]
  },
  {
    id: 10,
    name: "Pad Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=900&q=80",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    tags: [{ text: "Intermediate", type: "difficulty" }, { text: "Asian", type: "cuisine" }],
    rating: 4.8,
    reviewsCount: 445,
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    extendedPrep: false,
    ingredients: [
      { amount: "200g", name: "rice noodles" },
      { amount: "200g", name: "shrimp, peeled" },
      { amount: "2", name: "eggs" },
      { amount: "3 tbsp", name: "tamarind paste" },
      { amount: "2 tbsp", name: "fish sauce" },
      { amount: "1 tbsp", name: "palm sugar" },
      { amount: "", name: "Bean sprouts" },
      { amount: "", name: "Crushed peanuts" },
      { amount: "", name: "Lime wedges and cilantro" }
    ],
    instructions: [
      "Soak rice noodles in warm water until pliable, then drain.",
      "Whisk tamarind paste, fish sauce, and palm sugar into a sauce.",
      "Stir-fry shrimp in a hot wok until just pink, then push to one side.",
      "Scramble the eggs in the empty space, then mix everything together.",
      "Add noodles and sauce, tossing until noodles are coated and tender.",
      "Fold in bean sprouts, top with peanuts, lime, and cilantro."
    ],
    nutrition: { calories: 520, protein: 30, carbs: 66, fat: 14, fiber: 3, sodium: 980 },
    tips: [
      "Don't over-soak the noodles — they'll finish cooking in the wok.",
      "Use a very hot wok for that signature smoky wok-hei flavor.",
      "Prep all ingredients beforehand; this dish cooks in minutes.",
      "Adjust tamarind and fish sauce to balance sour, salty, and sweet."
    ]
  },
  {
    id: 11,
    name: "Vegetable Curry",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80",
    description: "Hearty vegetarian curry with coconut milk",
    tags: [{ text: "Easy", type: "difficulty" }, { text: "Asian", type: "cuisine" }],
    rating: 4.6,
    reviewsCount: 289,
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    extendedPrep: true,
    ingredients: [
      { amount: "2", name: "potatoes, cubed" },
      { amount: "1", name: "cauliflower, florets" },
      { amount: "2", name: "carrots, sliced" },
      { amount: "1 can", name: "chickpeas" },
      { amount: "400ml", name: "coconut milk" },
      { amount: "3 tbsp", name: "curry powder" },
      { amount: "1", name: "onion, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "", name: "Fresh spinach" }
    ],
    instructions: [
      "Sauté onion and garlic until soft and fragrant.",
      "Stir in curry powder and cook for a minute to toast the spices.",
      "Add potatoes and carrots, coating them in the spiced onions.",
      "Pour in coconut milk and simmer until vegetables are nearly tender.",
      "Add cauliflower and chickpeas, cooking until everything is soft.",
      "Stir in fresh spinach at the end until just wilted. Serve with rice."
    ],
    nutrition: { calories: 410, protein: 12, carbs: 48, fat: 20, fiber: 9, sodium: 640 },
    tips: [
      "Toast the curry powder briefly in oil to deepen its flavor.",
      "Add heartier vegetables first so everything finishes cooking together.",
      "This curry tastes even better the next day as flavors develop.",
      "Stir in greens at the very end so they don't overcook."
    ]
  }
];
 
let currentRecipe = recipes[0];
let currentTab = "ingredients";
 
function renderRecipe() {
  const r = currentRecipe;
 
  document.getElementById("recipeImage").src = r.image;
  document.getElementById("ratingValue").textContent = r.rating.toFixed(1);
  document.getElementById("reviewCount").textContent = `(${r.reviewsCount} reviews)`;
  document.getElementById("prepTime").textContent = `${r.prepTime} min`;
  document.getElementById("cookTime").textContent = `${r.cookTime} min`;
  document.getElementById("servings").textContent = `${r.servings} people`;
  document.getElementById("recipeName").textContent = r.name;
  document.getElementById("recipeDescription").textContent = r.description;
 
  const tagsEl = document.getElementById("tags");
  tagsEl.innerHTML = "";
  r.tags.forEach(t => {
    const span = document.createElement("span");
    span.className = `tag ${t.type}`;
    span.textContent = t.text;
    tagsEl.appendChild(span);
  });
 
  document.getElementById("warningBox").classList.toggle("show", r.extendedPrep);
 
  renderPanel();
}
 
const nutritionMeta = {
  calories: {
    label: "Calories", unit: " kcal", color: "#e8590c",
    icon: `<svg class="svg-inline--fa fa-fire" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#e8590c" width="19" height="19" data-fa-i2svg=""><path fill="#e8590c" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"></path></svg> `
},
  protein: {
    label: "Protein", unit: "g", color: "#3457d5",
    icon: `<svg class="svg-inline--fa fa-dumbbell" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dumbbell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 512" fill="#3457d5" s width="19" height="19" data-fa-i2svg=""><path fill="#3457d5" d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"></path></svg>
    `
  },
  carbs: {
    label: "Carbohydrates", unit: "g", color: "#d4a017",
    icon: `<svg class="svg-inline--fa fa-wheat-awn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wheat-awn" role="img" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512" fill="#d4a017" width="19" height="19" data-fa-i2svg=""><path fill="#d4a017" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z"></path></svg>
`  
  },
  fat: {
    label: "Fat", unit: "g", color: "#e0433d",
    icon: `<svg class="svg-inline--fa fa-droplet" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="droplet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#e0433d" width="19" height="19 data-fa-i2svg=""><path fill="#e0433d" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"></path></svg>
`  
  },
  fiber: {
    label: "Fiber", unit: "g", color: "#2e9e5c",
    icon: `
    <svg class="svg-inline--fa fa-seedling" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="seedling" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e9e5c" width="19" height="19" data-fa-i2svg=""><path fill="#2e9e5c" d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"></path></svg>
    `
  },
  sodium: {
    label: "Sodium", unit: "mg", color: "#d63b8f",
    icon: `<svg class="svg-inline--fa fa-cube" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#d63b8f" width="19" height="19" data-fa-i2svg=""><path fill="#d63b8f" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"></path></svg>
    <svg viewBox="0 0 448 512" fill="#d63b8f" width="19" height="19"><path d="..."></path></svg>`  // salt-shaker/container shape
  }
};
 
function renderPanel() {
  const panel = document.getElementById("panelContent");
  const r = currentRecipe;
 
  panel.classList.toggle("plain-bg", currentTab !== "ingredients");
 
  if (currentTab === "ingredients") {
    panel.innerHTML = `<ul class="ingredient-list">` +
      r.ingredients.map((ing, i) => `
        <li>
          <span class="num">${i + 1}</span>
          <span>${ing.amount ? `<span class="ingredient-amount">${ing.amount}</span>` : ""}${ing.name}</span>
        </li>`).join("") +
      `</ul>`;
 
  } else if (currentTab === "instructions") {
    panel.innerHTML = `<ol class="step-list">` +
      r.instructions.map((step, i) => `
        <li>
          <span class="step-num">${i + 1}</span>
          <span>${step}</span>
        </li>`).join("") +
      `</ol>`;
 
  } else if (currentTab === "nutrition") {
    const keys = Object.keys(r.nutrition);
    panel.innerHTML = `<div class="nutrition-grid">` +
      keys.map(key => {
        const meta = nutritionMeta[key];
        return `
          <div class="nutrition-item">
            <div class="left">
              <span class="nutrition-icon ${key}">${meta.icon}</span>
              <span class="nutrition-label">${meta.label}</span>
            </div>
            <span class="nutrition-value">${r.nutrition[key]}${meta.unit}</span>
          </div>`;
      }).join("") +
      `</div>`;
 
  } else if (currentTab === "tips") {
    panel.innerHTML = `<div class="tips-list">` +
      r.tips.map(tip => `
        <div class="tip-item">
          <span class="tip-check">&#10003;</span>
          <span>${tip}</span>
        </div>`).join("") +
      `</div>`;
  }
}
 
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderPanel();
  });
});
 
document.getElementById("tryAnotherBtn").addEventListener("click", () => {
  let next;
  do {
    next = recipes[Math.floor(Math.random() * recipes.length)];
  } while (next.id === currentRecipe.id && recipes.length > 1);
  currentRecipe = next;
  currentTab = "ingredients";
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  document.querySelector('.tab[data-tab="ingredients"]').classList.add("active");
  renderRecipe();
});
 
renderRecipe();