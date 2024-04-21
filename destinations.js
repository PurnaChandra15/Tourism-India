// _---_destinations.js

var famousPlaces = [
    {
        state: "AndhraPradesh",
        image: "img/andhrapradesh.jpg",
        places: [
            {
                name: "Tirupati Balaji Temple, Tirumala",
                image: "img/balajitemple.jpg",
                description: "The Tirupati Balaji Temple, located in Tirumala, is one of the most sacred and visited temples in India. Dedicated to Lord Venkateswara, it is situated atop the Tirumala Hills and attracts millions of devotees every year. The temple is known for its intricate architecture, spiritual atmosphere, and the practice of offering hair as a form of devotion."
            },
            {
                name: "Borra Caves, Visakhapatnam",
                image: "img/borracaves.jpg",
                description: "The Borra Caves, nestled in the Ananthagiri Hills of the Araku Valley near Visakhapatnam, are famous for their stunning stalactite and stalagmite formations. Believed to be millions of years old, these limestone caves offer a mesmerizing underground experience for visitors. The caves are also rich in biodiversity and are home to various species of bats and insects."
            },
            {
                name: "Gandikota, Kadapa",
                image: "img/gandikota.jpg",
                description: "Gandikota is a stunning gorge formed by the Pennar River cutting through the Erramala Hills. Often referred to as the Grand Canyon of India, Gandikota offers breathtaking views of deep valleys, rugged terrain, and ancient fort ruins. The Gandikota Fort, built during the 13th century, stands majestically overlooking the gorge and provides a glimpse into the region's rich history. Visitors can explore the fort's architectural marvels, trek along scenic trails, and camp amidst nature's beauty."
            },
            {
                name: "Araku Valley, Visakhapatnam",
                image: "img/arakuvalley.jpg",
                description: "Araku Valley is a picturesque hill station located in the Eastern Ghats of Andhra Pradesh, near Visakhapatnam. Known for its lush greenery, coffee plantations, and cascading waterfalls, Araku Valley offers a tranquil retreat amidst nature. Visitors can enjoy scenic train rides, explore tribal villages, and indulge in local cuisine while soaking in the serene ambiance of the valley."
            }
        ]
    },
    {
        "state": "Rajasthan",
        "image": "img/rajasthan.jpg",
        "places": [
            {
                "name": "City Palace, Jaipur",
                "image": "img/citypalace.jpg",
                "description": "City Palace, Jaipur, is a complex of courtyards, gardens, and buildings at the heart of the Old City. It reflects Rajput, Mughal, and European architectural styles and houses museums showcasing royal costumes, arms, and paintings."
            },
            {
                "name": "Lake Pichola, Udaipur",
                "image": "img/lakepichola.jpg",
                "description": "Lake Pichola is an artificial freshwater lake created in the year 1362 AD. It's famous for the picturesque islands that have several palaces of historical and cultural significance, like the Jag Niwas and Jag Mandir."
            },
            {
                "name": "Mehrangarh Fort, Jodhpur",
                "image": "img/mehrangarh.jpg",
                "description": "Mehrangarh Fort in Jodhpur is one of the largest forts in India. Perched on a rocky hill, the fort dominates the cityscape and is renowned for its intricate carvings, expansive courtyards, and a richly stocked museum."
            }
        ]
    },
    {
        "state": "Telangana",
        "image": "img/telangana.jpg",
        "places": [
            {
                "name": "Charminar, Hyderabad",
                "image": "img/charminar.jpg",
                "description": "The Charminar in Hyderabad is a monumental mosque built in 1591, famous for its architecture and history. It stands at the center of the old city and is an iconic symbol of Hyderabad, offering panoramic views of the surrounding city from its upper floors."
            },
            {
                "name": "Golconda Fort, Hyderabad",
                "image": "img/golcondafort.jpg",
                "description": "Golconda Fort is a historic fortress renowned for its diamond mines that have produced some of the world's famous gemstones. The fort's architecture features grand palaces, ingenious water supply systems, and the remarkable acoustics of the Fateh Rahben gun."
            },
            {
                "name": "Ramoji Film City, Hyderabad",
                "image": "img/ramojifilmcity.jpg",
                "description": "Ramoji Film City in Hyderabad is recognized by Guinness World Records as the largest film studio complex in the world. It is a popular tourism and recreation center, containing both natural and artificial attractions including film sets, theme parks, and amusement rides."
            }
        ]
    },
    {
        "state": "Karnataka",
        "image": "img/karnataka.jpg",
        "places": [
            {
                "name": "Mysore Palace, Mysore",
                "image": "img/mysorepalace.jpg",
                "description": "Mysore Palace is a historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward."
            },
            {
                "name": "Hampi, Bellary",
                "image": "img/hampi.jpg",
                "description": "Hampi, a UNESCO World Heritage Site, is an ancient village dotted with numerous ruined temple complexes from the Vijayanagara Empire. It is renowned for its vast array of archaeological monuments and its captivating landscape of rocky outcrops."
            },
            {
                "name": "Coorg, Kodagu",
                "image": "img/coorg.jpg",
                "description": "Coorg, also known as Kodagu, is a rural district in the state of Karnataka known for its verdant hills and streams cutting right through them. It's famous for its coffee plantations, steep hills, and the rich Kodava culture."
            }
        ]
    },
    {
        "state": "TamilNadu",
        "image": "img/tamilnadu.jpg",
        "places": [
            {
                "name": "Meenakshi Amman Temple, Madurai",
                "image": "img/meenakshitemple.jpg",
                "description": "Meenakshi Amman Temple is a historic Hindu temple located in the holy city of Madurai, Tamil Nadu. It is dedicated to goddess Meenakshi, a form of Parvati, and is known for its astonishing architecture, richly sculpted towers, and vibrant festivals."
            },
            {
                "name": "Marina Beach, Chennai",
                "image": "img/marinabeach.jpg",
                "description": "Marina Beach in Chennai is the longest natural urban beach in the country, running along the Bay of Bengal. It is famous for its long sandy coast which provides a scenic view of the sunrise and sunset."
            },
            {
                "name": "Ooty, Nilgiris",
                "image": "img/ooty.jpg",
                "description": "Ooty, also known as Udhagamandalam, is a popular hill station located in the Nilgiri Hills. Known for its mild climate and natural beauty, it's a favored tourist destination famous for its tea plantations and botanical gardens."
            }
        ]
    },
    {
        "state": "Maharashtra",
        "image": "img/maharashtra.jpg",
        "places": [
            {
                "name": "Gateway of India, Mumbai",
                "image": "img/gatewayofindia.jpg",
                "description": "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai. It was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911. Today, it is one of the most popular tourist attractions in Mumbai."
            },
            {
                "name": "Ajanta and Ellora Caves, Aurangabad",
                "image": "img/ajantaellora.jpg",
                "description": "The Ajanta and Ellora Caves, located near Aurangabad in Maharashtra, are UNESCO World Heritage Sites known for their beautiful carvings and stunning frescoes. The caves are a collection of Buddhist, Hindu, and Jain temples carved into the rock face dating from the 2nd century BCE to about 480 or 650 CE."
            },
            {
                "name": "Mahabaleshwar, Satara",
                "image": "img/mahabaleshwar.jpg",
                "description": "Mahabaleshwar is a hill station located in the Western Ghats range. With one of the few evergreen forests in India, it served as the summer capital of Bombay province during the British Raj. It is known for its numerous rivers, magnificent cascades, and majestic peaks."
            }
        ]
    },
    {
        "state": "MadhyaPradesh",
        "image": "img/madhyapradesh.jpg",
        "places": [
            {
                "name": "Khajuraho Temples, Chhatarpur",
                "image": "img/khajuraho.jpg",
                "description": "The Khajuraho Group of Monuments is a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India. They are famous for their nagara-style architectural symbolism and their erotic sculptures. Most were built between 950 and 1050 by the Chandela dynasty."
            },
            {
                "name": "Kanha National Park, Mandla",
                "image": "img/kanhanationalpark.jpg",
                "description": "Kanha National Park, located in the heartlands of central India, is known for its efforts in the preservation of the rare hard ground Barasingha, an endangered species of deer. The park was also the inspiration for Rudyard Kipling's classic 'The Jungle Book'."
            },
            {
                "name": "Bhimbetka Rock Shelters, Raisen",
                "image": "img/bhimbetka.jpg",
                "description": "The Bhimbetka rock shelters are an archaeological site of the Paleolithic, exhibiting the earliest traces of human life on the Indian subcontinent, and thus the beginning of the South Asian Stone Age. It is located in the Raisen District in the Indian state of Madhya Pradesh."
            }
        ]
    },
    {
        "state": "Chhattisgarh",
        "image": "img/chhattisgarh.jpg",
        "places": [
            {
                "name": "Chitrakote Waterfalls, Bastar",
                "image": "img/chitrakotewaterfalls.jpg",
                "description": "Chitrakote Waterfalls, located in Bastar district, is often called the 'Niagara Falls of India'. It is the broadest waterfall in India and is known for its horse-shoe shape. The falls are a spectacular sight especially in the monsoon season when they are in full flow."
            },
            {
                "name": "Kailash and Kutumsar Caves, Bastar",
                "image": "img/kailashkutumsarcaves.jpg",
                "description": "Kailash and Kutumsar Caves, situated in Kanger Valley National Park, are underground caves known for their stalactite and stalagmite formations. Kutumsar Caves are considered one of the deepest caves in India and are a significant attraction due to their unique ecosystems."
            },
            {
                "name": "Barnawapara Wildlife Sanctuary, Mahasamund",
                "image": "img/barnawapara.jpg",
                "description": "Barnawapara Wildlife Sanctuary is one of the most popular wildlife sanctuaries in central India. It is known for its lush green fauna and varied wildlife including leopards, tigers, flying squirrels, and various species of birds."
            }
        ]
    },
    {
        "state": "Odisha",
        "image": "img/odisha.jpg",
        "places": [
            {
                "name": "Jagannath Temple, Puri",
                "image": "img/jagannathtemple.jpg",
                "description": "The Jagannath Temple in Puri is one of the most renowned and sacred Hindu temples dedicated to Lord Jagannath, a form of Lord Vishnu. The temple is famous for its annual Rath Yatra or chariot festival, which attracts millions of pilgrims and visitors from around the world."
            },
            {
                "name": "Konark Sun Temple, Konark",
                "image": "img/konarksuntemple.jpg",
                "description": "Konark Sun Temple, built in the 13th century, is a massive temple dedicated to the sun god, Surya. It is known for its exquisite stone carvings that cover the entire structure and its gigantic chariot-shaped architecture, symbolizing the chariot of Surya."
            },
            {
                "name": "Chilika Lake, Puri, Khurda and Ganjam",
                "image": "img/chilikalake.jpg",
                "description": "Chilika Lake is Asia's largest brackish water lagoon and a Ramsar Wetland site of international importance. The lake is a hotspot of biodiversity, hosting numerous species of birds, especially during the winter migration period."
            }
        ]
    },
    {
        "state": "WestBengal",
        "image": "img/westbengal.jpg",
        "places": [
            {
                "name": "Darjeeling Himalayan Railway, Darjeeling",
                "image": "img/darjeelingrailway.jpg",
                "description": "The Darjeeling Himalayan Railway, also known as the 'Toy Train', is a UNESCO World Heritage Site. It runs from New Jalpaiguri to Darjeeling and is famous for its picturesque route that offers stunning views of the majestic Himalayas."
            },
            {
                "name": "Victoria Memorial, Kolkata",
                "image": "img/victoriamemorial.jpg",
                "description": "The Victoria Memorial is a large marble building in Kolkata, built between 1906 and 1921. It is dedicated to the memory of Queen Victoria and is now a museum with a rich collection of Raj-era paintings and other historical artifacts."
            },
            {
                "name": "Sundarbans National Park, Sundarbans",
                "image": "img/sundarbans.jpg",
                "description": "The Sundarbans National Park is a tiger and biosphere reserve located in the Sundarbans delta. It is the largest mangrove forest in the world and is renowned for its wide range of fauna, including the Bengal tiger."
            }
        ]
    },
    {
        "state": "Jharkhand",
        "image": "img/jharkhand.jpg",
        "places": [
            {
                "name": "Betla National Park, Latehar",
                "image": "img/betlanationalpark.jpg",
                "description": "Betla National Park is one of India's first tiger reserves under Project Tiger. Covering a large area, it is known for its diverse flora and fauna, including elephants, tigers, and various deer species, and offers opportunities for jeep safaris and elephant rides."
            },
            {
                "name": "Dassam Falls, Ranchi",
                "image": "img/dassamfalls.jpg",
                "description": "Dassam Falls is a scenic waterfall located near Ranchi. It is a cascade waterfall that drops from a height of about 44 meters, making it a popular tourist destination especially in the monsoon season when it is at its most spectacular."
            },
            {
                "name": "Parasnath Hill, Giridih",
                "image": "img/parasnathhill.jpg",
                "description": "Parasnath Hill is a major Jain pilgrimage site and the highest peak in Jharkhand. It is considered sacred by Jains as it is believed to be the site where many of the Jain Tirthankaras, including Parasnath, attained Moksha."
            }
        ]
    },
    {
        "state": "Gujarat",
        "image": "img/gujarat.jpg",
        "places": [
            {
                "name": "Somnath Temple, Somnath",
                "image": "img/somnathtemple.jpg",
                "description": "Somnath Temple, located in Somnath, is one of the twelve Jyotirlingas of Lord Shiva. The temple has been destroyed and rebuilt several times in history, and the current structure stands as a testament to the endurance of Indian culture and architecture."
            },
            {
                "name": "Rann of Kutch, Kutch",
                "image": "img/rannofkutch.jpg",
                "description": "The Rann of Kutch is a vast salt marsh located in the Thar Desert in the Kutch District of Gujarat. It is famous for its white salty desert sand and is reputed to be one of the largest salt deserts in the world. The area becomes a spectacular sight during the annual Rann Utsav festival."
            },
            {
                "name": "Sabarmati Ashram, Ahmedabad",
                "image": "img/sabarmatiashram.jpg",
                "description": "Sabarmati Ashram, situated on the banks of the Sabarmati river in Ahmedabad, was one of the residences of Mahatma Gandhi who lived there for about twelve years along with his wife, Kasturba. The ashram now serves as a museum and an institution preserving the history and legacy of Gandhi."
            }
        ]
    },
    {
        "state": "Punjab",
        "image": "img/punjab.jpg",
        "places": [
            {
                "name": "Golden Temple, Amritsar",
                "image": "img/goldentemple.jpg",
                "description": "The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism."
            },
            {
                "name": "Jallianwala Bagh, Amritsar",
                "image": "img/jallianwalabagh.jpg",
                "description": "Jallianwala Bagh is a historic garden and 'memorial of national importance' in Amritsar, Punjab, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre inflicted by British troops on unarmed Indians in 1919."
            },
            {
                "name": "Rock Garden, Chandigarh",
                "image": "img/rockgarden.jpg",
                "description": "The Rock Garden of Chandigarh is a sculpture garden for rock enthusiasts located in Chandigarh, India. It is completely built from industrial and home waste and thrown-away items, created by artist Nek Chand."
            }
        ]
    },
    {
        "state": "JammuKashmir",
        "image": "img/jammukashmir.jpg",
        "places": [
            {
                "name": "Dal Lake, Srinagar",
                "image": "img/dallake.jpg",
                "description": "Dal Lake, situated in Srinagar, is famous for its houseboats and shikara boat rides. It's a large lake that plays host to numerous houseboats, floating gardens, and markets, making it a significant cultural symbol of the region and a key element in tourism."
            },
            {
                "name": "Vaishno Devi Temple, Katra",
                "image": "img/vaishnodevi.jpg",
                "description": "Vaishno Devi Temple is one of the most sacred Hindu temples dedicated to Goddess Shakti. Located in Katra at the Trikuta Mountains, the temple attracts millions of pilgrims every year who trek the mountain to seek blessings."
            },
            {
                "name": "Gulmarg, Baramulla",
                "image": "img/gulmarg.jpg",
                "description": "Gulmarg is a town, a hill station, a popular skiing destination located in the Baramulla district of Jammu and Kashmir. Known for its scenic beauty, it is also home to the world's highest green golf course, as well as offering one of the best ski slopes in the world."
            }
        ]
    },
    {
        "state": "Ladakh",
        "image": "img/ladakh.jpg",
        "places": [
            {
                "name": "Pangong Lake, Leh",
                "image": "img/pangonglake.jpg",
                "description": "Pangong Lake, situated at over 13,000 feet, spans from India to Tibet. It is renowned for its blue waters and is a popular spot for camping and bird-watching, especially during migratory seasons."
            },
            {
                "name": "Leh Palace, Leh",
                "image": "img/lehpalace.jpg",
                "description": "Leh Palace, a former royal palace overlooking the Ladakhi Himalayan town of Leh, mirrors the Potala Palace in Lhasa and houses a museum with a rich collection of jewelry, ornaments, ceremonial dresses and crowns."
            },
            {
                "name": "Nubra Valley, Ladakh",
                "image": "img/nubravalley.jpg",
                "description": "Nubra Valley, a tri-armed valley located to the north east of Ladakh valley, is known for its orchards, scenic vistas, Bactrian camels and monasteries. The valley is accessed via the high Khardung La pass."
            }
        ]
    },
    {
        "state": "HimachalPradesh",
        "image": "img/himachalpradesh.jpg",
        "places": [
            {
                "name": "Manali, Kullu",
                "image": "img/manali.jpg",
                "description": "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it's a gateway for skiing in the Solang Valley and trekking in Parvati Valley."
            },
            {
                "name": "Shimla, Shimla",
                "image": "img/shimla.jpg",
                "description": "Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. Its Victorian-era architecture, especially the grand old Christ Church, stands out among the scenic mountainous landscape."
            },
            {
                "name": "Dharamshala, Kangra",
                "image": "img/dharamshala.jpg",
                "description": "Dharamshala is the district headquarters of Kangra district in India. It is the winter seat of government of the state and the region is also known for its Tibetan community centered around the activities of the Dalai Lama."
            }
        ]
    },
    {
        "state": "Uttarakhand",
        "image": "img/uttarakhand.jpg",
        "places": [
            {
                "name": "Har Ki Pauri, Haridwar",
                "image": "img/harkipauri.jpg",
                "description": "Har Ki Pauri is a famous ghat on the banks of the Ganges in Haridwar. This sacred site is believed to be the place where Lord Vishnu and Lord Shiva visited during the Vedic times. It is a major landmark of the city and a focal point for spiritual ceremonies and rituals."
            },
            {
                "name": "Nainital Lake, Nainital",
                "image": "img/nainitallake.jpg",
                "description": "Nainital Lake, also known as Naini Lake, is the centerpiece of the town of Nainital, nestled in the Kumaon foothills of the Himalayas. The lake offers a tranquil retreat with opportunities for boating and stunning vistas of the surrounding mountains."
            },
            {
                "name": "Valley of Flowers National Park, Chamoli",
                "image": "img/valleyofflowers.jpg",
                "description": "Valley of Flowers National Park is renowned for its meadows of endemic alpine flowers and the variety of flora. This richly diverse area is also home to rare and endangered animals, including the Asiatic black bear, snow leopard, and blue sheep."
            }
        ]
    },
    {
        "state": "Haryana",
        "image": "img/haryana.jpg",
        "places": [
            {
                "name": "Kingdom of Dreams, Gurugram",
                "image": "img/kingdomofdreams.jpg",
                "description": "Kingdom of Dreams is India’s first live entertainment, theatre, and leisure destination, and it is located in Gurugram. It is an extravagant cultural and entertainment space that showcases modern and traditional India through interactive exhibits, theatrical performances, and cuisines."
            },
            {
                "name": "Sultanpur National Park, Gurugram",
                "image": "img/sultanpurnationalpark.jpg",
                "description": "Sultanpur National Park is located in Gurugram and is a popular nature reserve for migratory birds. During the winter season, it becomes a temporary home to several species of migratory birds from different parts of the world including Siberia and Europe."
            },
            {
                "name": "Bhakra Nangal Dam, Yamunanagar",
                "image": "img/bhakranangaldam.jpg",
                "description": "Bhakra Nangal Dam, located at the border of Himachal Pradesh and Haryana, is one of the highest gravity dams in the world. It impounds the Sutlej River and supports both irrigation and hydroelectric power generation."
            }
        ]
    },
    {
        "state": "NewDelhi",
        "image": "img/newdelhi.jpg",
        "places": [
            {
                "name": "India Gate, New Delhi",
                "image": "img/indiagate.jpg",
                "description": "India Gate is a war memorial located astride the Rajpath, on the eastern edge of the ‘ceremonial axis’ of New Delhi, India, formerly called Kingsway. India Gate is a memorial to 70,000 soldiers of the British Indian Army who died in the period 1914–21 in the First World War."
            },
            {
                "name": "Red Fort, New Delhi",
                "image": "img/redfort.jpg",
                "description": "The Red Fort is a historic fortification in the city of Delhi. Built by the fifth Mughal Emperor, Shah Jahan in the 17th century, it is a brilliant architectural example of the Mughal era and a symbol of India's rich history."
            },
            {
                "name": "Qutub Minar, New Delhi",
                "image": "img/qutubminar.jpg",
                "description": "Qutub Minar is a 73-meter tall minaret that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India. Made of red sandstone and marble, Qutub Minar is the tallest minaret in the world built of bricks."
            }
        ]
    },
    {
        "state": "UttarPradesh",
        "image": "img/uttarpradesh.jpg",
        "places": [
            {
                "name": "Taj Mahal, Agra",
                "image": "img/tajmahal.jpg",
                "description": "The Taj Mahal, located in Agra, is a UNESCO World Heritage Site and one of the Seven Wonders of the World. This iconic symbol of love was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. The white marble mausoleum is renowned for its stunning architectural beauty and intricate craftsmanship."
            },
            {
                "name": "Kashi Vishwanath Temple, Varanasi",
                "image": "img/kashivishwanath.jpg",
                "description": "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. Located in Varanasi, the temple stands on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas, the holiest of Shiva temples."
            },
            {
                "name": "Fatehpur Sikri, Agra",
                "image": "img/fatehpursikri.jpg",
                "description": "Fatehpur Sikri is a town in the Agra District of Uttar Pradesh, India. The city was founded in 1569 by the Mughal Emperor Akbar and served as the capital of the Mughal Empire from 1571 to 1585. It is a UNESCO World Heritage site known for its red sandstone architecture and complex of monuments and temples."
            }
        ]
    },
    {
        "state": "Goa",
        "image": "img/goa.jpg",
        "places": [
            {
                "name": "Basilica of Bom Jesus, Goa",
                "image": "img/bomjesus.jpg",
                "description": "The Basilica of Bom Jesus, located in Goa, is a UNESCO World Heritage Site and a prime example of Baroque architecture in India. This church holds the mortal remains of St. Francis Xavier and is a significant monument for Catholics worldwide."
            },
            {
                "name": "Fort Aguada, Goa",
                "image": "img/fortaguada.jpg",
                "description": "Fort Aguada is a well-preserved seventeenth-century Portuguese fort standing in Goa, on Sinquerim Beach, overlooking the Arabian Sea. It was constructed in 1612 to guard against the Dutch and the Marathas, and was a reference point for vessels coming from Europe at that time."
            },
            {
                "name": "Dudhsagar Falls, Goa",
                "image": "img/dudhsagar.jpg",
                "description": "Dudhsagar Falls is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is amongst India's tallest waterfalls with a height of 310 meters and an average width of 30 meters. Surrounded by lush greenery and deciduous forests, it is a part of the Bhagwan Mahavir Wild Life Sanctuary and is a major tourist attraction."
            }
        ]
    },    
    {
        "state": "Bihar",
        "image": "img/bihar.jpg",
        "places": [
            {
                "name": "Mahabodhi Temple, Bodh Gaya",
                "image": "img/mahabodhitemple.jpg",
                "description": "The Mahabodhi Temple, located in Bodh Gaya, Bihar, is a UNESCO World Heritage Site and one of the most important pilgrimage sites for Buddhists. It marks the location where Siddhartha Gautama, the Buddha, attained enlightenment under a Bodhi tree."
            },
            {
                "name": "Nalanda University, Nalanda",
                "image": "img/nalanda.jpg",
                "description": "Nalanda University, an ancient center of higher learning in Bihar, India, dates back to the 5th century CE. It was one of the first residential universities in the world, known for its large public lectures and attracting scholars from around the globe."
            },
            {
                "name": "Golghar, Patna",
                "image": "img/golghar.jpg",
                "description": "Golghar is a large granary located in Patna, Bihar, built by Captain John Garstin in 1786 as a famine reserve. This beehive-shaped structure offers panoramic views of the city and the Ganges river from its top."
            }
        ]
    },
    {
        "state": "Sikkim",
        "image": "img/sikkim.jpg",
        "places": [
            {
                "name": "Rumtek Monastery, Gangtok",
                "image": "img/rumtekmonastery.jpg",
                "description": "Rumtek Monastery, located near Gangtok, is one of the largest and most significant monasteries in Sikkim. It is the seat of the Karmapa Lama, the third highest monk in Tibetan Buddhism. The monastery is known for its religious art and vibrant annual festivals."
            },
            {
                "name": "Tsomgo Lake, Gangtok",
                "image": "img/tsomgolake.jpg",
                "description": "Tsomgo Lake, also known as Changu Lake, is a glacial lake located near Gangtok at an altitude of about 3,753 meters. The lake is highly revered by the local Sikkimese people and is a popular tourist spot due to its scenic beauty and the colorful Brahminy ducks that inhabit it."
            },
            {
                "name": "Pelling, West Sikkim",
                "image": "img/pelling.jpg",
                "description": "Pelling is a small town in West Sikkim, known for its splendid views of the Kanchenjunga range and its close proximity to various trek routes and monasteries. It is a serene destination, popular for activities like hiking and nature walks."
            }
        ]
    },
    {
        "state": "Assam",
        "image": "img/assam.jpg",
        "places": [
            {
                "name": "Kaziranga National Park, Golaghat and Nagaon districts",
                "image": "img/kaziranganationalpark.jpg",
                "description": "Kaziranga National Park is a UNESCO World Heritage Site known for housing two-thirds of the world's great one-horned rhinoceroses. This national park is also home to other wildlife such as tigers, elephants, panthers, and bears, and is a major tourist attraction."
            },
            {
                "name": "Kamakhya Temple, Guwahati",
                "image": "img/kamakhyatemple.jpg",
                "description": "The Kamakhya Temple, located on the Nilachal Hill in Guwahati, is one of the oldest of the 51 Shakti Pithas. It is an important pilgrimage destination for general Hindu and especially for Tantric worshipers."
            },
            {
                "name": "Majuli Island, Brahmaputra River",
                "image": "img/majuli.jpg",
                "description": "Majuli is a river island in the Brahmaputra River, Assam, and is the world's largest river island. Known for its vibrant culture and numerous Satras (Vaishnavite monasteries), it offers a picturesque natural environment and a rich cultural heritage."
            }
        ]
    },
    {
        "state": "ArunachalPradesh",
        "image": "img/arunachalpradesh.jpg",
        "places": [
            {
                "name": "Tawang Monastery, Tawang",
                "image": "img/tawangmonastery.jpg",
                "description": "Tawang Monastery, located in the Tawang district of Arunachal Pradesh, is the largest monastery in India and the second largest in the world after the Potala Palace in Lhasa, Tibet. It is a major holy site for Tibetan Buddhists and houses many valuable Buddhist texts and scriptures."
            },
            {
                "name": "Ziro Valley, Lower Subansiri",
                "image": "img/zirovalley.jpg",
                "description": "Ziro Valley is famed for its lush green landscapes, rice fields, and the unique cultural lifestyle of the Apatani tribe. It's also well-known for its music festival which attracts music lovers from across the globe."
            },
            {
                "name": "Sela Pass, Tawang",
                "image": "img/selapass.jpg",
                "description": "Sela Pass is located between the Tawang and West Kameng districts of Arunachal Pradesh. It is one of the high-altitude mountain passes in India and offers stunning views of the Eastern Himalayas. The pass is also significant for its strategic importance."
            }
        ]
    },
    {
        "state": "Nagaland",
        "image": "img/nagaland.jpg",
        "places": [
            {
                "name": "Kohima War Cemetery, Kohima",
                "image": "img/kohimawarcemetery.jpg",
                "description": "Kohima War Cemetery is a memorial dedicated to the soldiers of the 2nd British Division of the Allied Forces who died in the Second World War during the Battle of Kohima in 1944. It is maintained by the Commonwealth War Graves Commission."
            },
            {
                "name": "Dzükou Valley, Kohima",
                "image": "img/dzukouvalley.jpg",
                "description": "Dzükou Valley, located at the border of Nagaland and Manipur, is well known for its natural environment, seasonal flowers, and flora & fauna. It is a popular trekking destination known for its beautiful landscapes and tranquil environment."
            },
            {
                "name": "Mon Village, Mon",
                "image": "img/monvillage.jpg",
                "description": "Mon Village is known for its traditional tribal culture and is often called the 'Land of Anghs'. It offers a glimpse into the lifestyle and traditions of the Konyak Nagas, known for their tattooed faces and exquisite beadwork."
            }
        ]
    },
    {
        "state": "Manipur",
        "image": "img/manipur.jpg",
        "places": [
            {
                "name": "Loktak Lake, Moirang",
                "image": "img/loktaklake.jpg",
                "description": "Loktak Lake is the largest freshwater lake in Northeast India, known for its unique phumdis (heterogeneous mass of vegetation, soil, and organic matters at various stages of decomposition) floating over it. The lake is also home to the world’s only floating national park, Keibul Lamjao National Park."
            },
            {
                "name": "Kangla Fort, Imphal",
                "image": "img/kanglafort.jpg",
                "description": "Kangla Fort is situated on the banks of the Imphal River and was the traditional seat of the past Meitei rulers of Manipur. This historic fort is a symbol of Manipur's rich cultural history and is an important site for the state’s archaeological studies."
            },
            {
                "name": "Shri Govindajee Temple, Imphal",
                "image": "img/shrigovindajee.jpg",
                "description": "Shri Govindajee Temple is a significant cultural and religious site in Manipur, located next to the royal palace in Imphal. The temple is dedicated to the Hindu god Krishna and Radha, and it plays a central role in the spiritual life of the local community."
            }
        ]
    },
    {
        "state": "Mizoram",
        "image": "img/mizoram.jpg",
        "places": [
            {
                "name": "Aizawl City, Aizawl",
                "image": "img/aizawlcity.jpg",
                "description": "Aizawl, the capital of Mizoram, is located high on a ridge at 1132 meters above sea level, overlooking the Tlawng River Valley. It is known for its picturesque landscape and vibrant culture which is deeply influenced by the Mizo traditions."
            },
            {
                "name": "Phawngpui Blue Mountain National Park, Lawngtlai",
                "image": "img/phawngpui.jpg",
                "description": "Phawngpui, also known as the Blue Mountain, is the highest mountain peak in Mizoram and a part of Phawngpui National Park. The park is famous for its beautiful orchids and rhododendrons, and it offers stunning views of the surrounding mountains and valleys."
            },
            {
                "name": "Vantawng Falls, Serchhip",
                "image": "img/vantawngfalls.jpg",
                "description": "Vantawng Falls is located near Thenzawl in Serchhip district and is the highest waterfall in Mizoram. Surrounded by lush green tropical forests, it provides a serene and picturesque environment for visitors."
            }
        ]
    },
    {
        "state": "Tripura",
        "image": "img/tripura.jpg",
        "places": [
            {
                "name": "Ujjayanta Palace, Agartala",
                "image": "img/ujjayantapalace.jpg",
                "description": "Ujjayanta Palace is a former royal palace situated in the capital city of Agartala. The palace now serves as a museum and is an exquisite example of the architectural grandeur of Tripura. It houses the State Museum, which contains the art, culture, history, and ethnography of Northeast India."
            },
            {
                "name": "Tripura Sundari Temple, Udaipur",
                "image": "img/tripurasundaritemple.jpg",
                "description": "Tripura Sundari Temple is one of the 51 Shakti Peethas and is located in the ancient city of Udaipur. This temple is dedicated to the goddess Tripura Sundari or Devi Kali and is a revered site for Hindu pilgrims."
            },
            {
                "name": "Neermahal, Melaghar",
                "image": "img/neermahal.jpg",
                "description": "Neermahal, meaning 'Water Palace', is located in the middle of Rudrasagar Lake in the Melaghar block of the Sepahijala district. It is the largest water palace in India and was built as a summer palace for the royal family of Tripura."
            }
        ]
    },
    {
        "state": "Meghalaya",
        "image": "img/meghalaya.jpg",
        "places": [
            {
                "name": "Cherrapunji, East Khasi Hills",
                "image": "img/cherrapunji.jpg",
                "description": "Cherrapunji, once recorded as the wettest place on Earth, is famous for its living root bridges made from rubber trees. These natural bridges are a testament to the ingenuity of the Khasi tribes and are a major attraction in the lush and misty landscape of Meghalaya."
            },
            {
                "name": "Mawlynnong Village, East Khasi Hills",
                "image": "img/mawlynnong.jpg",
                "description": "Mawlynnong Village, dubbed as the cleanest village in Asia, offers a picturesque natural beauty with its sweeping views of the East Khasi Hills. The village is known for its cleanliness, matrilineal society, and the living root bridge nearby."
            },
            {
                "name": "Umiam Lake, Ri Bhoi District",
                "image": "img/umiamlake.jpg",
                "description": "Umiam Lake is a beautiful man-made reservoir located in the hills 15 km to the North of Shillong. The lake is popular for boating, kayaking, and other water sports, and is surrounded by coniferous forests."
            }
        ]
    },
    {
        state: "Kerala",
        image: "img/kerala.jpg",
        places: [
            {
                name: "Backwaters, Alappuzha",
                image: "img/backwaters.jpg",
                description: "Alappuzha's backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast. Known for houseboat cruises that traverse the serene waterways lined with lush greenery and villages, they offer a peaceful and picturesque experience of rural Kerala."
            },
            {
                name: "Munnar Hill Station, Idukki",
                image: "img/munnar.jpg",
                description: "Munnar is a popular hill station located in the Western Ghats of Kerala. It is renowned for its rolling hills covered in emerald-green tea plantations, cool climate, and opportunities for trekking and wildlife spotting. The area is also home to the endemic Nilgiri Tahr."
            },
            {
                name: "Fort Kochi, Kochi",
                image: "img/fortkochi.jpg",
                description: "Fort Kochi in Kochi is a historic area known for its colonial architecture, art galleries, and spice markets. Visitors can explore the Portuguese-built St. Francis Church, watch the iconic Chinese fishing nets in action, and stroll through quaint streets filled with the aroma of spices."
            }
        ]
    }
];

window.onload = function() {
    // Function to display famous places for a selected state
    function displayPlaces(state) {
        // Your implementation of the displayPlaces function
    }

    // Function to handle loading content based on URL hash (selected state)
    function loadContentBasedOnHash() {
        var hash = window.location.hash.substring(1);
        if (hash) {
            var state = hash.replace(/-/g, " ");
            displayPlaces(state);
        }
    }

    var stateNameElement = document.getElementById("stateName");
    var stateImageElement = document.getElementById("stateImage");
    var placesList = document.getElementById("placesList");
    var stateSelect = document.getElementById("stateSelect");

    if (!stateNameElement || !stateImageElement || !placesList || !stateSelect) {
        console.error("One or more required elements not found.");
        return;
    }

    // Initially load content based on URL hash when the page loads
    loadContentBasedOnHash();

    // Function to handle state selection change
    function onStateChange() {
        var selectedState = this.value;
        displayPlaces(selectedState);
		// Redirect to destinations page when state selection changes
        window.location.href = "destinations.html#" + selectedState.replace(/\s+/g, "-");
   
    }

    // Populate state dropdown and attach event listener
    famousPlaces.forEach(function(state) {
        var option = document.createElement("option");
        option.value = state.state;
        option.textContent = state.state;
        stateSelect.appendChild(option);
    });
    stateSelect.addEventListener("change", onStateChange);


    // Add event listener for the reviews button to navigate to reviews page
    var reviewsButton = document.getElementById("reviewsButton");
    if (reviewsButton) {
        reviewsButton.addEventListener("click", function() {
            window.location.href = "reviews.html";
        });
    } else {
        console.error("Reviews button not found.");
    }
};

// This should be in destinations.js

window.onload = function() {
    const hash = window.location.hash.substring(1).replace(/-/g, ' ');
    displayPlaces(hash);
};

function displayPlaces(state) {
    const matchedState = famousPlaces.find(sp => sp.state.toLowerCase() === state.toLowerCase());
    if (!matchedState) {
        console.error("State not found:", state);
        return;
    }
    const stateNameElement = document.getElementById('stateName');
    const stateImageElement = document.getElementById('stateImage');
    const placesList = document.getElementById('placesList');

    stateNameElement.textContent = matchedState.state;
    stateImageElement.src = matchedState.image;
    stateImageElement.alt = matchedState.state;
    placesList.innerHTML = '';

    matchedState.places.forEach(place => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${place.image}" class="card-img-top" alt="${place.name}">
            <div class="card-body">
                <h5 class="card-title">${place.name}</h5>
                <p class="card-text">${place.description}</p>
            </div>
        `;
        placesList.appendChild(card);

// destinations.js

// Function to display famous places for a selected state
function displayPlaces(state) {
    const stateInfo = famousPlaces[state];
    if (stateInfo) {
        // Populate state name in the title
        document.getElementById("stateName").textContent = "Famous Places in " + stateInfo.state;

        // Populate state image
        document.getElementById("stateImage").src = stateInfo.image;

        // Populate list of famous places
        const placesList = document.getElementById("placesList");
        placesList.innerHTML = ""; // Clear existing content

        stateInfo.places.forEach(place => {
            const placeCard = document.createElement("div");
            placeCard.classList.add("col-md-4", "mb-4"); // Adjust column size here

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const placeImage = document.createElement("img");
            placeImage.classList.add("card-img-top");
            placeImage.src = place.image;
            placeImage.alt = place.name;

            const placeName = document.createElement("h5");
            placeName.classList.add("card-title");
            placeName.textContent = place.name;

            const placeDescription = document.createElement("p");
            placeDescription.classList.add("card-text");
            placeDescription.textContent = place.description;

            cardBody.appendChild(placeImage);
            cardBody.appendChild(placeName);
            cardBody.appendChild(placeDescription);
            card.appendChild(cardBody);
            placeCard.appendChild(card);
            placesList.appendChild(placeCard);
        });
    } else {
        console.error("State information not found.");
    }
}

// Rest of the code remains the same

    });
};
