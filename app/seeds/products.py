from app.models import db, Product, environment, SCHEMA


def seed_products():
    product1 = Product(
        name="Design Store Self Watering Pot",
        category_id = 67,
        price=40.00,
        brand="MOMA",
        brand_story="MOMA",
        about="Soggy succulents are a thing of the past thanks to an innovative pot-and-reservoir set that ensures you won't over- or under-water your precious plants. Simply fill the hand-blown glass reservoir with water, set the terracotta planter inside and your plants will do the rest, taking in only the water they need.",
    )

    product2 = Product(
        name="Flower Vase Air Dry Clay Pottery Kit",
        category_id = 67,
        price=65.00,
        brand="POTTERY WITH A PURPOSE",
        brand_story="POTTERY WITH A PURPOSE",
        about="This beginner–friendly kit includes everything you need to design, sculpt and decorate a clay vase to display a bouquet of dried flowers—no kiln needed.",
    )

    product3 = Product(
        name="Merry & Bright Cut-Out Banner Garland Kit",
        category_id = 66,
        price=15.95,
        brand="COTTON CLARA",
        brand_story="COTTON CLARA",
        about="Simple, satisfying and mess-free, this easy-make garland kit contains everything you need to build some fun Christmas memories with the crafters in your crew.",
    )

    product4 = Product(
        name="Closed Helix Brass Key Ring",
        category_id = 67,
        price=30.00,
        brand="CRAIGHILL",
        brand_story="CRAIGHILL",
        about="Minimalist design refines this industrial brass key ring featuring a simple closed helix with a threaded end cap that makes it easy to add and remove keys."
    )

    product5 = Product(
        name="Verso Handled Vase",
        category_id = 67,
        price=139.00,
        brand="FERM LIVING",
        brand_story="FERM LIVING",
        about = "Made with an undulating, feminine form and a pair of artfully curved handles, this glazed stoneware vase recalls classic shapes from traditional pottery."
    )

    product6 = Product(
        name="The Concentrate Serum",
        category_id = 76,
        price=220.00,
        brand="LA MER",
        brand_story="La Mer creates luxury, high-performance skin care and makeup by harnessing the power of the sea. In the 1960s, aerospace physicist Dr. Max Huber set out to help heal the appearance of scars he suffered in a lab accident. Pioneering the use of sea kelp and bio-fermentation in skin care, he created Miracle Broth™—the elixir that powers the legendary Crème de la Mer.",
        about = "What it is: A potent barrier serum with a concentrated form of cell-renewing Miracle Broth™ for skin that is stronger, more stable and visibly soothed."
    )

    product7 = Product(
        name="Erémia Eau de Parfum",
        category_id = 84,
        price=195.00,
        brand="AESOP",
        brand_story="Aesop celebrates the simple virtues of our daily routines with its much-loved skin care and body care products. Using a unique blend of both plant-based and laboratory-made ingredients of the highest quality and proven efficacy—particularly those with the greatest antioxidant properties—Aesop's collections intensely nourish the skin and restore the senses to a state of delighted calm.",
        about="A green eau de parfum suggestive of an urban wasteland where vegetation steadily reclaims the built environment."
    )

    product8 = Product(
        name="Addict Lip Glow Balm",
        category_id = 79,
        price=38.00,
        brand="DIOR",
        brand_story="Normandy-born Christian Dior founded his eponymous label in 1947 and quickly became one of the most influential designers of the century. Dior's first perfume, Miss Dior, evolved into an entire line of skin care, fragrance and cosmetics that express a timeless devotion to sensual femininity. Sunglasses add to the brand's reputation of providing luxury without compromise.",
        about="An iconic lip balm with up to 97% natural-origin ingredients that helps awaken the natural color of your lips with a custom glow and hydration.Offering sheer coverage with a glowing finish, this balm is infused with color-reviver technology, which adapts to the pH level of your lips to reveal a custom glow that lasts for up to six hours. Featuring cherry oil, shea butter and sunflower waxes, Addict Lip Glow delivers both custom color as well as lip care."
    )

    product9 = Product(
        name="Blush",
        category_id = 80,
        price=17.00,
        brand="NARS",
        brand_story="Makeup artist François Nars created NARS in 1994. What began as a line of 12 lipstick shades has blossomed into a provocative makeup brand. From their award-winning 'Orgasm' blush to the latest color trends, collaborations and formula innovations, NARS continues to push boundaries inside the beauty industry.",
        about="A blush available in soft, buildable shades that deliver a wide range of effects, ranging from ultra-sheer to powerful pops of color."
    )

    product10 = Product(
        name="ROUGE COCO FLASH Lipstick",
        category_id = 79,
        price=45.00,
        brand="CHANEL",
        brand_story="In the blink of an eye, ROUGE COCO FLASH shows its true colours through its transparent cap. In a stroke, it applies easily over the lips with its glide-on, melt-away and ultra-hydrating texture which transforms into a shiny oil on contact with the lips, for a sensation of absolute comfort. In a flash, it offers an intense high-shine result owing to a thin coating and glossy oil selected for their ability to reflect the light.",
        about="A hydrating lipstick with effortless application, vibrant color and an intense shine finish in a single stroke."
    )

    product11 = Product(
        name="Ultra Facial Cream",
        category_id = 70,
        price=78.00,
        brand="KIEHL'S SINCE 1851",
        brand_story="Founded in 1851 as an old-world apothecary in New York's East Village, Kiehl's utilizes the finest ingredients in unique formulations to assure high-quality skin, hair and body care products. The company's unique, extensive background represents a blend of cosmetic, pharmaceutical, herbal and medicinal knowledge developed and passed on through the generations.",
        about="It immediately leaves skin 2–3 times more hydrated, even in skin's driest areas. Formulated with glacial glycoprotein, which is derived from sea glaciers, and olive-derived squalane, this beloved moisturizer helps strengthen skin's barrier and leaves it feeling comfortable and well balanced. With an ultra-light texture, it absorbs easily for softer, smoother, healthier-looking skin. Gentle and effective, this bestseller is now ultra-clean and ultra-tested."
    )

    product12 = Product(
        name="The Eye Concentrate Eye Cream",
        category_id = 79,
        price=260.00,
        brand="LA MER",
        brand_story="La Mer creates luxury, high-performance skin care and makeup by harnessing the power of the sea. In the 1960s, aerospace physicist Dr. Max Huber set out to help heal the appearance of scars he suffered in a lab accident. Pioneering the use of sea kelp and bio-fermentation in skin care, he created Miracle Broth™—the elixir that powers the legendary Crème de la Mer.",
        about="This highly active treatment contains triple the concentrated Miracle Broth™ to deliver faster brightening, faster improvement in lines and wrinkles, faster strengthening of the skin barrier, and faster soothing, too. It also helps strengthen and stabilize the eye area, while the cooling massage applicator boosts microcirculation. The concentrate works to reduce aging signs in 21 days (in a sensory test conducted by a third party after participants used the product twice per day for four weeks)."
    )

    product13 = Product(
        name="Baker Out Papery Nylon Tote",
        category_id = 96,
        price=500.00,
        brand="ACNE STUDIOS",
        brand_story="Jonny Johansson cofounded the multidisciplinary Acne Studios (an acronym for Ambition to Create Novel Expressions) in Stockholm in 1996. The brand has since come to embody modern, conceptual minimalism through an ongoing exploration of materials, silhouettes and character. Each piece is rooted in Johansson's passion for art, photography, architecture and culture.",
        about="A clever, and much more durable homage to the humble paper grocery bag, this nylon tote goes unexpectedly luxe with leather details, including a zip pocket."
    )

    product14 = Product(
        name="Small Cabarock Loubinthesky Perforated Leather Tote",
        category_id = 96,
        price=1790.00,
        brand="CHRISTIAN LOUBOUTIN",
        brand_story="Known for his iconic red-soled shoes, Christian Louboutin is synonymous with fashion and luxury. Whether classic or cutting-edge, his shoes leave their wearer feeling sexy and strong—the Parisian brand's modus operandi. Louboutin eventually expanded into handbags that match the daring of his shoes, and into cosmetics—including lipstick and nail lacquer—designed in striking, collectible containers.",
        about="Perforated mixed logos create a striking pattern on an iconic tote accented with spiked accents at the shoulder straps. The logo-embossed base and luscious Louboutin-red lining that peeks through the perforations complete the covetable look."
    )
    product15 = Product(
        name="Jitney Dégradé Leather Top Handle Bag",
        category_id = 96,
        price=1935.00,
        brand="OFF-WHITE",
        brand_story="Off-White was founded in Milan in 2012 by American designer Virgil Abloh. The luxury label embraces the now, rooting itself in current culture and youthful sophistication. Each Off-White collection adapts from season to season, with specific (and sometimes differing) visions for women and men. The brand makes all its clothing, shoes and accessories in Milan using the best available materials, with a strong take on fit, fabric and fabrication.",
        about="Nstrom partnered with Off-White to bring you this exclusive take on the label's classic top-handle bag branded with gleaming double-arrow hardware."
    )
    product16 = Product(
        name="La Medusa Canvas Tote",
        category_id = 95,
        price=1350,
        brand="VERSACE",
        brand_story="Founded in 1978, Gianni Versace S.p.A. is one of the leading global fashion design houses. Under the artistic direction of Donatella Versace since 1997, Versace designs and manufactures fashion and lifestyle products including haute couture, women's and men's ready-to-wear, shoes, handbags, jewelry, watches, accessories, fragrances and more.",
        about="A signature Medusa head beautifully highlights this softly structured canvas tote subtly embossed with a typeface logo. Large enough to carry your laptop and all your other essentials, this streamlined style is sure to be a favorite season after season."
    )
    product17 = Product(
        name="Note Leather & Vintage Check Crossbody Bag",
        category_id = 93,
        price=1550,
        brand="BURBERRY",
        brand_story="The quintessential British luxury brand Burberry brings a legacy of iconic check patterns and classic outerwear to modern ready-to-wear, shoes and accessories for women, men and kids. Burberry offers season after season of polished, minimalist collections, as well as makeup, skin care and fragrance through its Burberry Beauty line.",
        about="A checked pocket peeks from beneath the flap of a grainy leather crossbody bag featuring gleaming hardware and an optional strap woven with logo letters."
    )

    product18 = Product(
        name="The Dutchess 6.75-Quart Enamel Cast Iron Dutch Oven with Lid",
        category_id = 62,
        price=160.00,
        brand="GREAT JONES",
        brand_story="GREAT JONES",
        about="This enameled cast-iron pot delivers exceptional heat distribution and retention for everything from slow cooking to braising or roasting."
    )
    product19 = Product(
        name="'50s Retro Style Electric Kettle",
        category_id = 62,
        price=219.95,
        brand="SMEG",
        brand_story="Founded in Italy in 1948 by Vittorio Bertazzoni, smeg is a world leader in superchic small appliances and renowned for offering technology with style. In addition to delivering superior performance and durability, smeg appliances are coveted for their '50s retro aesthetic—colorful works of art that owners can proudly display on their kitchen countertops.",
        about="Beautiful retro aesthetics meet high-powered contemporary performance in a die-cast, powder-coated steel kettle. This kettle makes it a breeze to heat water for tea, oatmeal and more. Featuring a 360° swivel base and easy-to-read water level indicators, the kettle shuts off automatically when water reaches a boiling point, when the jug is lifted from the base or when it's empty. A soft-opening lid prevents the sudden release of steam."
    )
    product20 = Product(
        name="Mickey & Friends Waffle Maker",
        category_id = 62,
        price=49.99,
        brand="DISNEY",
        brand_story="Disney Company, in full The Walt Disney Company, formerly (1929–86) Walt Disney Productions, American corporation that was the best-known purveyor of family entertainment in the 20th and 21st centuries. It also was one of the world’s largest media conglomerates, with such notable holdings as ABC, ESPN, Pixar, Marvel Entertainment, and 20th Century Fox. Disney headquarters are in Burbank, California.",
        about="Make breakfast the happiest meal on Earth with this waffle maker featuring Mickey and his best buds."
    )
    product21 = Product(
        name="Smart Garden 3 Self Watering Indoor Garden",
        category_id = 55,
        price=99.95,
        brand="CLICK & GROW",
        brand_story="CLICK & GROW",
        about="No matter how little space you think you have, you have room to grow your own fresh herbs or vegetables in this self-watering indoor garden. The kit includes the planter base, which features a built-in water reservoir that holds a month's worth of water, an LED lamp arm to provide vital light and three basil starter pods, so you can get growing right away. The proprietary soil mix is inspired by NASA research and contains nutrients released in sync with the plant's life cycle, keeps soil pH balanced and employs tiny oxygen pockets to guarantee plants get ample breathing room and nutrients even when the soil is wet."
    )

    product22 = Product(
        name="Kånken Sling Shoulder Bag",
        category_id = 96,
        price=70.00,
        brand="Fjällräven",
        brand_story="Long life, less waste. Timeless Swedish design meets durable materials for a lifetime of use. Discover thoughtful, practical and planet-friendly gear that's built to be loved and shared for years to come. ",
        about="This scaled-tiny version of the classic Kånken backpack offers the same durable construction and rugged utility as the original. A water-repellent finish, plenty of organizational pockets and a shoulder strap add to the everyday versatility of the practical style."
    )
    product23 = Product(
        name="50mm Small Rectangular Sunglasses",
        category_id = 10,
        price=405,
        brand="PRADA",
        brand_story='Total quality as point of departure, constant innovation without abandoning tradition, searching and selection of materials combined with impeccable manufacturing. These are the product characteristics of this brand, an icon of "Made in Italy," founded by Mario Prada in 1913 and later developed into an international business by Miuccia Prada and Patrizio Bertelli.',
        about="Sleek angular frames modernize the look of standout sunglasses crafted in Italy and finished with logo-stamped temples."
    )
    product24 = Product(
        name="After Hours 50mm Square Sunglasses",
        category_id = 10,
        price=55.00,
        brand="QUAY AUSTRALIA",
        brand_story="",
        about="Slightly winged temples add a dose of modern drama to full-coverage square sunglasses that instantly up your style game."
    )
    product25 = Product(
        name="Fuddlewuddle Lion Stuffed Animal",
        category_id = 49,
        price=27.5,
        brand="JELLYCAT",
        brand_story="Established in London in 1999, Jellycat has delighted children and adults ever since with its incredibly soft stuffed animals and accompanying board books. Jellycat launches two collections of original toy designs each year, ensuring that fans always have new favorites to enjoy. The cuddly creations make perfect gifts for all the little ones in your life.",
        about="Get your little one excited for the holiday season with this adorable book featuring Santa's favorite helper."
    )

    product26 = Product(
        name="41-Piece Star Diner Restaurant Play Set",
        category_id = 51,
        price=37.99,
        brand="MELISSA & DOUG",
        brand_story="The mission of Melissa & Doug is to take back childhood by igniting imagination and a sense of wonder in all kids so they can discover themselves, their passions and their purpose. The brand offers classic wooden toys, crafts, games and pretend-play items—all designed to offer countless ways to play. Melissa & Doug toys encourage free play, creativity, imagination and independent thinking.",
        about="Kids' imaginations can cook up lots of fun with this play set that includes everything for a satisfying visit to a diner—for breakfast lunch or dinner. The seven wooden food pieces cleverly have different foods on each side, and double-sided inserts create multiple options for milkshakes and hot drinks. For kids who want to play behind the counter, there's an apron, a frying pan, a coffee pot and a dry-erase guest check and pen for when it's time to add up the bill. A menu, play money and even a functional bell round out the full diner experience."
    )
    product27 = Product(
        name="V15 Detect Cordless Vacuum",
        category_id = 4,
        price=749.99,
        brand="DYSON",
        brand_story="In 1978, British industrial designer James Dyson became frustrated with his vacuum cleaner's diminishing performance and set out to build a better one. The result: the world's first bagless vacuum cleaner, which used cyclonic technology to maintain suction as it picked up dirt. Dyson then launched his own research center and manufacturing company, which continues to innovate industry-leading products for household cleaning, air treatment, hair care and more.",
        about="Seeing is believing with the Dyson V15 Detect, designed with an onboard display that shows how much—and what types—of dirt the vacuum is removing. It also comes with the Laser slim fluffy cleaner head that makes hidden dust visible on hard floors, so you don't miss anything."
    )

    product28 = Product(
        name="Corrale™ Straightener Gift Set",
        category_id = 72,
        price=499.99,
        brand="DYSON",
        brand_story="In 1978, British industrial designer James Dyson became frustrated with his vacuum cleaner's diminishing performance and set out to build a better one. The result: the world's first bagless vacuum cleaner, which used cyclonic technology to maintain suction as it picked up dirt. Dyson then launched his own research center and manufacturing company, which continues to innovate industry-leading products for household cleaning, air treatment, hair care and more.",
        about="The extra control means you can achieve the same style but with less heat, and therefore half the damage.* It also means enhanced styling, for reduced frizz and fewer fly-aways.** The Dyson Corrale Straightener can be used corded or cord-free for extra versatility and freedom while styling. Before using, charge your straightener to 100% to maximize performance."
    )

    product29 = Product(
        name="Miss Dior Blooming Bouquet Eau de Toilette",
        category_id = 84,
        price=72.00,
        brand="DIOR",
        brand_story="Normandy-born Christian Dior founded his eponymous label in 1947 and quickly became one of the most influential designers of the century. Dior's first perfume, Miss Dior, evolved into an entire line of skin care, fragrance and cosmetics that express a timeless devotion to sensual femininity. Sunglasses add to the brand's reputation of providing luxury without compromise.",
        about="A signature floral scent, this Dior perfume is perfect for a playful and irresistibly charming Miss Dior. Composed like a generous bouquet, Miss Dior Blooming Bouquet Eau de Toilette reveals a tender heart of peony and damascus rose. A poetic trail edged with white musks rounds off this sparkling perfume."
    )






    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.add(product26)
    db.session.add(product27)
    db.session.add(product28)
    db.session.add(product29)

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
