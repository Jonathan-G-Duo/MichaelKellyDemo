/* data/menu.js - menu. Edit the values only. Keep the first line (window.MENU = {) and the last line (};) exactly as they are. */
window.MENU = {
  "_readme": "EDIT THIS FILE to change the menu. Each item: name, description (text or \"\"), price (a number like 12.5, or null if unknown), featured (true shows a 'Popular' tag and lists it on the home page), available (false shows 'Currently unavailable'), dietary (list like [\"Vegetarian\"], only if verified), image (file name in images/food/ or null). For items sold in sizes, leave price as null and add sizes, like [{\"label\": \"Small\", \"price\": 7.95}, {\"label\": \"Large\", \"price\": 13.95}]. A category can have a note (one sentence) and notes (a list of sentences). To remove an item, delete its whole { ... } block and any extra comma. Never invent prices or descriptions.",
  "notice": "If you have allergies, please ask the restaurant before ordering.",
  "categories": [
    {
      "id": "wings",
      "name": "Wings",
      "notes": [
        "All wings include seasoned fries, carrots and celery.",
        "Sauce flavours: Honey Garlic, Honey Blues, Honey Dill, Honey Jerk, Honey BBQ, Honey Mustard, Smokey BBQ, Smokey Sweet, Smokey Caesar, Smokey Blues, M.K Chipotle BBQ, Caribbean Jerk, Pineapple Jerk, Teriyaki.",
        "Spicy flavours: Mild, Medium, Hot, Butter Chicken, Mexican Hot, Extra Hot, M.K Extreme Hot.",
        "Top 10 flavours: Honey Garlic, BBQ, M.K Bourbon Chipotle, Sweet Caesar, M.K Parm, Medium, Hot, Ring on Fire, Hot Honey, Spicy Caesar.",
        "Dry rubs: Lemon Pepper, Dry Cajun, Garlic Garlic, Salt and Pepper, Salt and Vinegar, Roasted Garlic, All Dressed."
      ],
      "items": [
        {
          "name": "Single Wings",
          "description": "1 lb wings with 1 flavour.",
          "price": 13.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Double Wings",
          "description": "2 lb wings with 2 flavours.",
          "price": 26.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "poutines",
      "name": "Poutines",
      "items": [
        {
          "name": "M.K Poutine",
          "description": "Our famous fries, gravy and cheese curds.",
          "price": 11.99,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Pulled Pork Poutine",
          "description": "Tender pulled pork with cheese curds, smothered in house-made gravy over our famous fries.",
          "price": 14.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Buffalo Style Poutine",
          "description": "Crispy buffalo chicken, cheese curds and house-made gravy served over our famous fries with green onions.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Butter Chicken Poutine",
          "description": "Our famous fries topped with chef's butter chicken, cheese curds, sour cream and green onions.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "salads",
      "name": "Salads",
      "notes": [
        "Dressings: Blue cheese, ranch, Greek, French, Italian, Balsamic, Thousand Island and Dill house dressing.",
        "Add-ons: chicken $6, shrimp $7, steak $10."
      ],
      "items": [
        {
          "name": "Caesar Salad",
          "description": "Romaine lettuce topped with bacon, croutons and Parmesan cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Small",
              "price": 8.99
            },
            {
              "label": "Large",
              "price": 11.99
            }
          ]
        },
        {
          "name": "Greek Salad",
          "description": "Lettuce, tomatoes, cucumbers, peppers, red onion, olives and feta cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Small",
              "price": 8.99
            },
            {
              "label": "Large",
              "price": 11.99
            }
          ]
        },
        {
          "name": "House Salad",
          "description": "Lettuce, tomatoes, cucumbers, peppers, red onion, carrots and orange slices.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Small",
              "price": 6.99
            },
            {
              "label": "Large",
              "price": 10.99
            }
          ]
        },
        {
          "name": "Cobb Salad",
          "description": "Lettuce, chicken breast, feta cheese, avocado, sliced hard-boiled egg, smoked bacon and diced tomato. Served with our classic 1000-Island dressing.",
          "price": 17.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "wraps",
      "name": "Wraps",
      "note": "Served with your choice of fries or house salad.",
      "items": [
        {
          "name": "Chicken Caesar Wrap",
          "description": "Crispy or grilled chicken, wrapped in a flour tortilla and lightly grilled.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Chicken Greek Wrap",
          "description": "Chicken with lettuce, tomatoes, feta cheese, black olives, onions, cucumber and peppers.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Buffalo Wrap",
          "description": "Crispy chicken tossed in buffalo sauce with diced tomatoes, lettuce and Tex-Mex cheese wrapped in a flour tortilla.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Fajita Wrap",
          "description": "Your choice of chicken or steak, with onions, red and green peppers, Tex-Mex cheese and secret spices wrapped in a flour tortilla.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Chicken",
              "price": 15.99
            },
            {
              "label": "Steak",
              "price": 16.99
            }
          ]
        },
        {
          "name": "Chipotle Chicken Wrap",
          "description": "Grilled chicken breast with diced tomatoes, lettuce, Tex-Mex cheese and chipotle mayo wrapped in a flour tortilla.",
          "price": 15.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "favourites",
      "name": "M.K. Favourites",
      "note": "Served with your choice of fries or house salad.",
      "items": [
        {
          "name": "Fish and Chips",
          "description": "Haddock fried until golden brown. Served with fries, lemon, tartar sauce and coleslaw.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "1 piece",
              "price": 11.99
            },
            {
              "label": "2 pieces",
              "price": 14.99
            }
          ]
        },
        {
          "name": "Chicken Tenders",
          "description": "Breaded chicken tenders fried until golden brown. Served with fries and plum sauce.",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Shepherd's Pie",
          "description": "A seasoned mix of minced sirloin, corn, diced carrots, celery and onions topped with mashed potatoes and cheddar cheese, then baked until golden brown. Served with your choice of side.",
          "price": 16.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Jambalaya",
          "description": "Chicken breast, spicy Italian sausage, shrimp, onions, peppers and celery in a spicy tomato sauce, served on a bed of rice. Price does not include fries or house salad.",
          "price": 18.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "M.K Chilli Onion Fries",
          "description": "Chef's special sauce topped with red onions, green onions and green chili.",
          "price": 11.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "pizza",
      "name": "Pizza",
      "notes": [
        "Featuring Angelo's original pizza recipe, started in 1972. The secret is in the crust. Top it your way. Extra cheese equals 2 toppings.",
        "Toppings: Fresh garlic, pineapple, green olives, black olives, onions, ground beef, sliced tomato, green pepper, roasted red pepper, fresh mushroom, chopped spinach, hot banana peppers, pepperoni, salami, Black Forest ham, bacon strips, grilled chicken, mild sausage, anchovies, feta.",
        "If you have allergies or need gluten-free food, please ask the restaurant how it is prepared."
      ],
      "items": [
        {
          "name": "Build Your Own Pizza",
          "description": "Basic sauce and cheese. Additional toppings: $0.75 each on the Mini, $2.00 on the Small, $2.25 on the Medium and $2.50 on the Large.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini 6-inch",
              "price": 7.99
            },
            {
              "label": "Small 10-inch",
              "price": 11.49
            },
            {
              "label": "Medium 12-inch",
              "price": 13.49
            },
            {
              "label": "Large 15-inch",
              "price": 16.49
            }
          ]
        },
        {
          "name": "Build Your Own Pizza, 11-inch Medium Gluten-Free",
          "description": "Basic sauce and cheese. Additional toppings $2.25 each.",
          "price": 14.49,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Our Famous House Combo Pizza",
          "description": "Pepperoni, salami, mushroom, tomato, onion, green pepper and bacon.",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini",
              "price": 10.95
            },
            {
              "label": "Small",
              "price": 20.49
            },
            {
              "label": "Medium",
              "price": 24.49
            },
            {
              "label": "Large",
              "price": 28.49
            }
          ]
        },
        {
          "name": "The Farm Boy Pizza",
          "description": "Pepperoni, ground beef, Italian sausage and bacon.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini",
              "price": 10.99
            },
            {
              "label": "Small",
              "price": 19.49
            },
            {
              "label": "Medium",
              "price": 22.49
            },
            {
              "label": "Large",
              "price": 26.49
            }
          ]
        },
        {
          "name": "The Big Greek Pizza",
          "description": "Tomato, black olives, onion and feta.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini",
              "price": 10.99
            },
            {
              "label": "Small",
              "price": 19.49
            },
            {
              "label": "Medium",
              "price": 22.49
            },
            {
              "label": "Large",
              "price": 26.49
            }
          ]
        },
        {
          "name": "Veggie Pizza",
          "description": "Tomato, onion, mushroom and green peppers.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini",
              "price": 10.99
            },
            {
              "label": "Small",
              "price": 19.49
            },
            {
              "label": "Medium",
              "price": 22.49
            },
            {
              "label": "Large",
              "price": 26.49
            }
          ]
        },
        {
          "name": "Hawaiian Pizza",
          "description": "Black Forest ham and pineapple.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null,
          "sizes": [
            {
              "label": "Mini",
              "price": 9.49
            },
            {
              "label": "Small",
              "price": 15.49
            },
            {
              "label": "Medium",
              "price": 18.49
            },
            {
              "label": "Large",
              "price": 21.49
            }
          ]
        }
      ]
    },
    {
      "id": "sides",
      "name": "Sides",
      "items": [
        {
          "name": "French Fries",
          "description": "",
          "price": 5.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Sweet Potato Fries",
          "description": "",
          "price": 7.99,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Onion Rings",
          "description": "",
          "price": 7.99,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Gravy",
          "description": "",
          "price": 2.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Steamed Veggies",
          "description": "",
          "price": 3.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Mashed Potatoes",
          "description": "",
          "price": 3.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Side Dip",
          "description": "",
          "price": 1.25,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Naan Bread",
          "description": "",
          "price": 1.25,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Coleslaw",
          "description": "",
          "price": 4.99,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "soups",
      "name": "Soups",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Chicken Noodle Soup",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Daily Soup",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Split Pea and Ham Soup",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "French Onion Soup",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "bread",
      "name": "Oven Toasted Bread",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Garlic Bread",
          "description": "Vienna loaf with our very own garlic spread.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Garlic Bread with Cheese",
          "description": "Vienna loaf with our very own garlic spread and mozzarella cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Bruschetta",
          "description": "Vienna loaf baked and topped with a blend of tomato, garlic, onions, basil, mozzarella, white cheddar and feta.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "burgers",
      "name": "Burgers",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "8oz Hamburger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Cheeseburger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Banquet Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Mushroom Swiss Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Veggie Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Red Pepper and Feta Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Peameal and Cheddar Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Double Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Double Banquet Burger",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ],
      "notes": [
        "All burgers are served on a burger bun with lettuce, tomatoes, pickles, onions and a choice of French fries."
      ]
    },
    {
      "id": "sandwiches",
      "name": "Sandwiches",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Grilled Chicken Club",
          "description": "A triple decker 6 oz grilled chicken breast with crisp bacon, lettuce, tomato and mayo.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Meatball Sandwich",
          "description": "Toasted on a Vienna loaf with mushroom, onions, green pepper, tomato sauce and melted mozzarella cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Chicken Parmesan Sandwich",
          "description": "Toasted on a Vienna loaf with mushroom, onions, green pepper, tomato sauce and melted mozzarella cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Peameal on a Bun",
          "description": "Grilled peameal topped with lettuce, tomato and mayo on a toasted bun.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Deli Ham Sandwich",
          "description": "Black Forest ham with cheddar, piled high on a Vienna loaf. Toasted, with lettuce, tomato and mayo.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Philly Cheese Steak Sandwich",
          "description": "Toasted on a Calabrese bun with sauteed beef, peppers, onion, mushroom and melted mozzarella cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Grilled Chicken on a Bun",
          "description": "A 6 oz piece of juicy BBQ chicken on a toasted bun with lettuce, tomato and mayo.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Crispy Chicken on a Bun",
          "description": "Crispy chicken on a toasted bun with lettuce, tomato, pickle and mayo.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Traditional Sandwiches",
          "description": "BLT, Western or Grilled Cheese.",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Club Sandwich",
          "description": "",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        }
      ],
      "notes": [
        "All sandwiches are served with your choice of fries or house salad."
      ]
    },
    {
      "id": "mains",
      "name": "Mains",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Chicken Pork Souvlaki",
          "description": "",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Got Beef Burger Steak",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Lasagna",
          "description": "",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "breakfast",
      "name": "Breakfast",
      "note": "Breakfast is listed as a weekend and holiday menu. With any breakfast item, tea or coffee is $0.99. These items are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Eggs Benedict",
          "description": "",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Waffle Special",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Combo Breakfast",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "3 Eggs and Toast",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Eggs, Home Fries and Sausage",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        },
        {
          "name": "Bacon and Eggs",
          "description": "",
          "price": null,
          "featured": false,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "desserts",
      "name": "Desserts",
      "note": "These items come from an earlier menu photo or customer mentions. They are not yet confirmed on the current menu, and prices are to be confirmed.",
      "items": [
        {
          "name": "Butter Tarts",
          "description": "",
          "price": null,
          "featured": true,
          "available": true,
          "dietary": [],
          "image": null
        }
      ]
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "note": "Beer, wine and coffee are listed as offered. The drink menu is to be confirmed.",
      "items": []
    }
  ]
};
