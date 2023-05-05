from app.models import db, Category, environment, SCHEMA

def seed_categories():

    # 1
    women = Category(
        name='Women',
        parent_category_id = None
    )

    # 2
    men = Category(
        name="Men",
        parent_category_id = None
    )

    # 3
    kids = Category(
        name = "Kids",
        parent_category_id = None
    )

    # 4
    home = Category(
        name = "Home",
        parent_category_id = None
    )

    # 5
    beauty = Category(
        name = "Beauty",
        parent_category_id = None
    )

    # 6
    designer = Category(
        name = "Designer",
        parent_category_id = None
    )

    # 7
    sale = Category(
        name = "Sale",
        parent_category_id = None
    )

    # 8
    women_clothing = Category(
        name="Clothing",
        parent_category_id = 1
    )

    # 9
    women_shoes = Category(
        name="Shoes",
        parent_category_id = 1
    )

    # 10
    women_handbags_accs = Category(
        name="Handbags & Accessories",
        parent_category_id = 1
    )

    # 11
    women_tops = Category(
        name="Tops",
        parent_category_id = 8
    )

    # 12
    women_dresses = Category(
        name="Dresses",
        parent_category_id = 8
    )

    # 13
    women_pants = Category(
        name="Pants",
        parent_category_id = 8
    )

    # 14
    women_sandal = Category(
        name="Sandals",
        parent_category_id = 9
    )

    # 15
    women_sneakers = Category(
        name = "Sneakers",
        parent_category_id = 9
    )

    # 16
    women_boots = Category(
        name="Boots",
        parent_category_id = 9
    )

    # 17
    women_heels = Category(
        name="Heels",
        parent_category_id = 9
    )

    # 18
    women_handbags = Category(
        name="Handbags",
        parent_category_id = 10
    )

    # 19
    women_jewellery = Category(
        name="Jewellery",
        parent_category_id = 10
    )

    # 20
    women_watches = Category(
        name="Watches",
        parent_category_id = 10
    )

    # 21
    women_sunglasses = Category(
        name="Sunglasses",
        parent_category_id = 10
    )

    # 22
    women_hats = Category(
        name="Hats",
        parent_category_id = 10
    )

    # 23
    men_clothing = Category(
        name = "Clothing",
        parent_category_id = 2
    )

    # 24
    men_shoes = Category(
        name = "Shoes",
        parent_category_id = 2
    )

    # 25
    men_accessories = Category(
        name = "Accessories",
        parent_category_id = 2
    )

    # 26
    men_grooming = Category(
        name = "Grooming",
        parent_category_id = 2
    )


    # 27
    men_shirts = Category(
        name = "Shirts",
        parent_category_id = 23
    )

    # 28
    men_jackets = Category(
        name = "Jackets & Cotas",
        parent_category_id = 23
    )

    # 29
    men_pants = Category(
        name = "Pants",
        parent_category_id = 23
    )

    # 30
    men_sneakers = Category(
        name = "Sneakers",
        parent_category_id = 24
    )


    # 31
    men_boots = Category(
        name = "Boots",
        parent_category_id = 24
    )

    # 32
    men_watches = Category(
        name = "Watches",
        parent_category_id = 25
    )

    # 33
    men_belts = Category(
        name = "Belts",
        parent_category_id = 25
    )

    # 34
    men_ties = Category(
        name = "Ties",
        parent_category_id = 25
    )

    # 35
    men_socks = Category(
        name = "Socks",
        parent_category_id = 25
    )

    # 36
    men_skincare = Category(
        name = "Skincare",
        parent_category_id = 26
    )

    # 37
    men_shaving = Category(
        name = "Shaving",
        parent_category_id = 26
    )

    # 38
    men_haircare = Category(
        name = "Haircare",
        parent_category_id = 26
    )

    # 39
    men_fragrance = Category(
        name = "Fragrance",
        parent_category_id = 26
    )

    # 40
    kids_clothing = Category(
        name = "Kids Clothing",
        parent_category_id = 3
    )

    # 41
    kids_shoes = Category(
        name = "Kids Shoes",
        parent_category_id = 3
    )

    # 42
    kids_toys = Category(
        name = "Toys & Gifts",
        parent_category_id = 3
    )

    # 43
    boys_clothing = Category(
        name = "Boys Clothing",
        parent_category_id = 40
    )

    # 44
    girls_clothing = Category(
        name = "Girls Clothing",
        parent_category_id = 40
    )

    # 45
    baby_clothing = Category(
        name = "Baby Clothing",
        parent_category_id = 40
    )

    # 46
    boy_shoes = Category(
        name = "Boy Shoes",
        parent_category_id = 41
    )

    # 47
    girl_shoes = Category(
        name = "Girl Shoes",
        parent_category_id = 41
    )

    # 48
    baby_shoes = Category(
        name = "Baby Shoes",
        parent_category_id = 41
    )

    # 49
    plush_toys = Category(
        name = "Plush Toys",
        parent_category_id = 42
    )

    # 50
    kids_books = Category(
        name = "Kids Books",
        parent_category_id = 42
    )

    # 51
    kids_games = Category(
        name = "Games",
        parent_category_id = 42
    )

    # 52
    bedding = Category(
        name = "Bedding",
        parent_category_id = 4
    )

    # 53
    bath = Category(
        name = "Bath",
        parent_category_id = 4
    )

    # 54
    kitchen_dining = Category(
        name = "Kitchen & Dining",
        parent_category_id = 4
    )

    # 55
    home_decor = Category(
        name = "Home Decor",
        parent_category_id = 4
    )

    # 56
    comforters = Category(
        name = "Comforters & Duvet Covers",
        parent_category_id = 52
    )

    # 57
    sheets = Category(
        name = "Sheets",
        parent_category_id = 52
    )

    # 58
    pillows = Category(
        name = "Pillows",
        parent_category_id = 52
    )

    # 59
    bath_towels = Category(
        name = "Towels",
        parent_category_id = 53
    )

    # 60
    bath_mats = Category(
        name = "Bath Mats",
        parent_category_id = 53
    )

    # 61
    bath_curtains = Category(
        name = "Bath Curtains",
        parent_category_id = 53
    )

    # 62
    cookware = Category(
        name = "Cookware",
        parent_category_id = 54
    )

    # 63
    dinnerware = Category(
        name = "Dinnerware",
        parent_category_id = 54
    )


    # 64
    glassware = Category(
        name = "Glassware",
        parent_category_id = 54
    )

    # 65
    rugs = Category(
        name = "Rugs",
        parent_category_id = 55
    )

    # 66
    wall_arts = Category(
        name = "Wall Arts",
        parent_category_id = 55
    )

    # 67
    vases_planters = Category(
        name = "Vasess & Planters",
        parent_category_id = 55
    )

    # 68
    storage = Category(
        name = "Storage & Ogranization",
        parent_category_id = 55
    )

    # 69
    clocks = Category(
        name = "Clocks",
        parent_category_id = 55
    )

    # 70
    skincare = Category(
        name = "Skincare",
        parent_category_id = 5
    )

    # 71
    makeup = Category(
        name = "Makeup",
        parent_category_id = 5
    )

    # 72
    haircare = Category(
        name = "Haircare",
        parent_category_id = 5
    )

    # 73
    fragrance = Category(
        name = "Fragrance",
        parent_category_id = 5
    )

    # 74
    cleansers = Category(
        name = "Cleansers",
        parent_category_id = 70
    )

    # 75
    moisturizers = Category(
        name = "Moisturizers",
        parent_category_id = 70
    )

    # 76
    serums = Category(
        name = "Serums",
        parent_category_id = 70
    )

    # 77
    masks = Category(
        name = "Masks",
        parent_category_id = 70
    )

    # 78
    foundation = Category(
        name = "Foundation",
        parent_category_id = 71
    )

    # 79
    lipstick = Category(
        name = "Lipstick",
        parent_category_id = 71
    )

    # 80
    eyeshadow = Category(
        name = "Eyeshadow",
        parent_category_id = 71
    )

    # 81
    mascara = Category(
        name = "Mascara",
        parent_category_id = 71
    )

    # 82
    shampoo = Category(
        name = "Shampoo",
        parent_category_id = 72
    )

    # 83
    conditioner = Category(
        name = "Conditioner",
        parent_category_id = 72
    )

    # 84
    perfume = Category(
        name = "Perfume",
        parent_category_id = 73
    )

    # 85
    cologne = Category(
        name = "Cologne",
        parent_category_id = 73
    )

    # 86
    body_sprays = Category(
        name = "Body Sprays",
        parent_category_id = 73
    )

    # 87
    womens_designer = Category(
        name = "Womens Designer",
        parent_category_id = 6
    )

    # 88
    mens_designer = Category(
        name = "Mens Designer",
        parent_category_id = 6
    )

    # 89
    designer_accessories = Category(
        name = "Designer Accessories",
        parent_category_id = 6
    )

    # 90
    gucci = Category(
        name = "Gucci",
        parent_category_id = 87
    )

    # 91
    prada = Category(
        name = "Prada",
        parent_category_id = 87
    )

    # 92
    givenchy = Category(
        name = "Givenchy",
        parent_category_id = 87
    )

    # 93
    burberry = Category(
        name = "Burberry",
        parent_category_id = 88
    )

    # 94
    tf = Category(
        name = "Tom Ford",
        parent_category_id = 88
    )

    # 95
    versace = Category(
        name = "Versace",
        parent_category_id = 88
    )

    # 96
    disigner_handbags = Category(
        name = "Disigner Handbags",
        parent_category_id = 89
    )

    # 97
    disigner_watches = Category(
        name = "Disigner Watches",
        parent_category_id = 89
    )

    # 98
    women_sale = Category(
        name = "Women's Sale",
        parent_category_id = 7
    )

    # 99
    men_sale = Category(
        name = "Men's Sale",
        parent_category_id = 7
    )

    # 100
    kids_sale = Category(
        name = "Kids Sale",
        parent_category_id = 7
    )

    # 101
    home_sale = Category(
        name = "Home Sale",
        parent_category_id = 7
    )

    # 102
    beauty_sale = Category(
        name = "Beauty Sale",
        parent_category_id = 7
    )

    # 103
    sale_women_clothing = Category(
        name = "Women's Clothing Sale",
        parent_category_id = 98
    )

    # 104
    sale_women_shoes = Category(
        name = "Women's Shoes Sale",
        parent_category_id = 98
    )

    # 105
    sale_women_handbags = Category(
        name = "Women's Handbags Sale",
        parent_category_id = 98
    )

    # 106
    sale_men_clothing = Category(
        name = "Men's Clothing Sale",
        parent_category_id = 99
    )

    # 107
    sale_men_shoes = Category(
        name = "Men's Shoes Sale",
        parent_category_id = 99
    )

    # 108
    sale_men_accessories = Category(
        name = "Men's Accessories Sale",
        parent_category_id = 99
    )

    # 109
    sale_kids_clothing = Category(
        name = "Kids' Clothing Sale",
        parent_category_id = 100
    )

    # 110
    sale_kids_shoes = Category(
        name = "Kids' Shoes Sale",
        parent_category_id = 100
    )

    # 111
    sale_kids_toys = Category(
        name = "Kids' Toys Sale",
        parent_category_id = 100
    )

    # 112
    sale_bedding = Category(
        name = "Bedding Sale",
        parent_category_id = 101
    )

    # 113
    sale_bath = Category(
        name = "Bath Sale",
        parent_category_id = 101
    )

    # 114
    sale_home_decor = Category(
        name = "Home Decoration Sale",
        parent_category_id = 101
    )

    # 115
    sale_kitchen_dining = Category(
        name = "Kitchen & Dining Sale",
        parent_category_id = 101
    )

    # 116
    sale_skincare = Category(
        name = "Skincare Sale",
        parent_category_id = 102
    )

    # 117
    sale_makeup = Category(
        name = "Makeup Sale",
        parent_category_id = 102
    )

    # 118
    sale_hair_care = Category(
        name = "Hair Care Sale",
        parent_category_id = 102
    )

    # 119
    sale_fragrance = Category(
        name = "Fragrance Sale",
        parent_category_id = 102
    )

    category_list = [ women, men, kids, home, beauty, designer, sale, women_clothing,women_shoes, women_handbags_accs,women_tops, women_dresses,women_pants, women_sandal, women_sneakers, women_boots, women_heels, women_handbags, women_jewellery, women_watches, women_sunglasses, women_hats, men_clothing, men_shoes, men_accessories, men_grooming, men_shirts, men_jackets, men_pants, men_sneakers, men_boots, men_watches, men_belts, men_ties, men_socks, men_skincare, men_shaving, men_haircare, men_fragrance, kids_clothing, kids_shoes, kids_toys, boys_clothing, girls_clothing, baby_clothing, boy_shoes, girl_shoes, baby_shoes, plush_toys, kids_books,kids_games, bedding, bath, kitchen_dining, home_decor, comforters, sheets, pillows, bath_towels, bath_mats, bath_curtains, cookware, dinnerware, glassware, rugs, wall_arts, vases_planters, storage, clocks, skincare, makeup, haircare, fragrance, cleansers, moisturizers, serums, masks, foundation, lipstick, eyeshadow, mascara, shampoo, conditioner, perfume, cologne, body_sprays, womens_designer, mens_designer, designer_accessories, gucci, prada, givenchy, burberry, tf, versace, disigner_handbags, disigner_watches, women_sale, men_sale, kids_sale, home_sale, beauty_sale, sale_women_clothing, sale_women_shoes, sale_women_handbags, sale_men_clothing, sale_men_shoes, sale_men_accessories, sale_kids_shoes, sale_kids_toys, sale_bedding, sale_bath, sale_home_decor, sale_kitchen_dining, sale_skincare, sale_makeup, sale_hair_care, sale_fragrance ]

    for category in category_list:
        db.session.add(category)
        db.session.commit()

def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
