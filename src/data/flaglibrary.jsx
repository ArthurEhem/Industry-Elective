const continents = [
    {
      continentName: "Africa",
      countriesList: [
          {
            countryName: "Algeria",
            code: "dz",
            capitalCity: "Algiers",
            officialLanguagesList: ["Arabic", "Tamazight"],
            currencyName: "Algerian Dinar (DZD)",
            description: "Algeria is the largest country in Africa and the 10th largest in the world. It is located in North Africa and is bordered by the Mediterranean Sea to the north, Tunisia to the northeast, Libya to the east, Niger to the southeast, Mali and Mauritania to the southwest, Western Sahara to the west, and Morocco to the northwest."
          },
          {
            countryName: "Angola",
            code: "ao",
            capitalCity: "Luanda",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Angolan Kwanza (AOA)",
            description: "Angola is located in Southern Africa and is bordered by Namibia to the south, the Democratic Republic of the Congo to the north, Zambia to the east, and the Atlantic Ocean to the west. It is the 7th largest country in Africa."
          },
          {
            countryName: "Benin",
            code: "bj",
            capitalCity: "Porto-Novo",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Benin is a country in West Africa. It is bordered by Togo to the west, Nigeria to the east, Burkina Faso and Niger to the north, and the Atlantic Ocean to the south."
          },
          {
            countryName: "Botswana",
            code: "bw",
            capitalCity: "Gaborone",
            officialLanguagesList : ["English", "Setswana"],
            currencyName: "Botswana Pula (BWP)",
            description: "Botswana is a landlocked country in Southern Africa. It is bordered by Namibia to the west and north, Zimbabwe to the northeast, and South Africa to the south and southeast."
          },
          {
            countryName: "Burkina Faso",
            code: "bf",
            capitalCity: "Ouagadougou",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Burkina Faso is a landlocked country in West Africa. It is bordered by Mali to the north, Niger to the east, Benin to the southeast, Togo and Ghana to the south, and Ivory Coast to the southwest."
          },
          {
            countryName: "Burundi",
            code: "bi",
            capitalCity : "Gitega",
            officialLanguagesList: ["Kirundi", "French"],
            currencyName: "Burundian Franc (BIF)",
            description: "Burundi is a landlocked country in East Africa. It is bordered by Rwanda to the north, Tanzania to the east and southeast, and the Democratic Republic of the Congo to the west."
          },
          {
            countryName: "Cameroon",
            code: "cm",
            capitalCity: "Yaoundé",
            officialLanguagesList: ["French", "English"],
            currencyName: "Central African CFA franc (XAF)",
            description: "Cameroon is a country in Central Africa. It is bordered by Nigeria to the west and north, Chad to the northeast, the Central African Republic to the east, and Equatorial Guinea, Gabon, and the Republic of the Congo to the south."
          },
          {
            countryName: "Cape Verde",
            code: "cv",
            capitalCity: "Praia",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Cape Verdean Escudo (CVE)",
            description: "Cape Verde is an island country in the central Atlantic Ocean. It consists of 10 volcanic islands and is located off the coast of West Africa."
          },
          {
            countryName: "Central African Republic",
            code: "cf",
            capitalCity: "Bangui",
            officialLanguagesList: ["French", "Sango"],
            currencyName: "Central African CFA franc (XAF)",
            description: "The Central African Republic is a landlocked country in Central Africa. It is bordered by Chad to the north, Sudan to the northeast, South Sudan to the east, the Democratic Republic of the Congo to the south, the Republic of the Congo to the southwest, and Cameroon to the west."
          },
          {
            countryName: "Chad",
            code: "td",
            capitalCity: "N'Djamena",
            officialLanguagesList: ["French", "Arabic"],
            currencyName: "Central African CFA franc (XAF)",
            description: "Chad is a landlocked country in north-central Africa. It is bordered by Libya to the north, Sudan to the east, the Central African Republic to the south, Cameroon and Nigeria to the southwest, and Niger to the west."
          },
          {
            countryName: "Comoros",
            code: "km",
            capitalCity: "Moroni",
            officialLanguagesList: ["Comorian", "Arabic", "French"], 
            currencyName: "Comorian Franc (KMF)",
            description: "Comoros is an island country in the Indian Ocean, located at the northern end of the Mozambique Channel off the eastern coast of Africa."
          },
          {
            countryName: "Democratic Republic of the Congo",
            code: "cd",
            capitalCity: "Kinshasa",
            officialLanguagesList: ["French"],
            currencyName: "Congolese Franc (CDF)",
            description: "The Democratic Republic of the Congo is a country in Central Africa. It is the second-largest country in Africa by area and the 11th largest in the world."
          },
          {
            countryName: "Republic of the Congo",
            code: "cg",
            capitalCity: "Brazzaville",
            officialLanguagesList: ["French"],
            currencyName: "Central African CFA franc (XAF)",
            description: "The Republic of the Congo is a country in Central Africa. It is bordered by Gabon to the west, Cameroon to the northwest, the Central African Republic to the northeast, the Democratic Republic of the Congo to the southeast, and the Angolan exclave of Cabinda to the south."
          },
          {
            countryName: "Djibouti",
            code: "dj",
            capitalCity: "Djibouti",
            officialLanguagesList: ["French", "Arabic"],
            currencyName: "Djiboutian Franc (DJF)",
            description: "Djibouti is a country located in the Horn of Africa. It is bordered by Eritrea to the north, Ethiopia to the west and south, and Somalia to the southeast."
          },
          {
            countryName: "Egypt",
            code: "eg",
            capitalCity: "Cairo",
            officialLanguagesList: ["Arabic"],
            currencyName: "Egyptian Pound (EGP)",
            description: "Egypt is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia. It is bordered by the Gaza Strip and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west."
          },
          {
            countryName: "Equatorial Guinea",
            code: "gq",
            capitalCity: "Malabo",
            officialLanguagesList: ["Spanish", "French", "Portuguese"],
            currencyName: "Central African CFA franc (XAF)",
            description: "Equatorial Guinea is a country located on the west coast of Central Africa. It consists of a mainland region and several islands."
          },
          {
            countryName: "Eritrea",
            code: "er",
            capitalCity: "Asmara",
            officialLanguagesList: ["Tigrinya", "Arabic", "English"],
            currencyName: "Eritrean Nakfa (ERN)",
            description: "Eritrea is a country in the Horn of Africa. It is bordered by Sudan to the west, Ethiopia to the south, and Djibouti to the southeast."
          },
          {
            countryName: "Eswatini",
            code: "sz",
            capitalCity: "Mbabane",
            officialLanguagesList: ["Swazi", "English"],
            currencyName: "Swazi Lilangeni (SZL)",
            description: "Eswatini, formerly known as Swaziland, is a landlocked country in Southern Africa. It is bordered by Mozambique to the northeast and South Africa to the west and south."
          },
          {
            countryName: "Ethiopia",
            code: "et",
            capitalCity: "Addis Ababa",
            officialLanguagesList: ["Amharic"],
            currencyName: "Ethiopian Birr (ETB)",
            description: "Ethiopia is a country located in the Horn of Africa. It is bordered by Eritrea to the north, Djibouti and Somalia to the east, Kenya to the south, South Sudan to the west, and Sudan to the northwest."
          },
          {
            countryName: "Gabon",
            code: "ga",
            capitalCity: "Libreville",
            officialLanguagesList: ["French"],
            currencyName: "Central African CFA franc (XAF)",
            description: "Gabon is a country on the west coast of Central Africa. It is bordered by Equatorial Guinea to the northwest, Cameroon to the north, and the Republic of the Congo to the east and south."
          },
          {
            countryName: "Gambia",
            code: "gm",
            capitalCity: "Banjul",
            officialLanguagesList: ["English"],
            currencyName: "Gambian Dalasi (GMD)",
            description: "The Gambia is a country in West Africa. It is the smallest country within mainland Africa and is surrounded by Senegal, except for its western coast on the Atlantic Ocean."
          },
          {
            countryName: "Ghana",
            code: "gh",
            capitalCity: "Accra",
            officialLanguagesList: ["English"],
            currencyName: "Ghanaian Cedi (GHS)",
            description: "Ghana is a country in West Africa. It is bordered by the Ivory Coast to the west, Burkina Faso to the north, Togo to the east, and the Gulf of Guinea and the Atlantic Ocean to the south."
          },
          {
            countryName: "Guinea",
            code: "gn",
            capitalCity: "Conakry",
            officialLanguagesList: ["French"],
            currencyName: "Guinean Franc (GNF)",
            description: "Guinea is a country in West Africa. It is bordered by Guinea-Bissau to the northwest, Senegal to the north, Mali to the northeast, Ivory Coast to the southeast, Sierra Leone to the southwest, and Liberia to the south."
          },
          {
            countryName: "Guinea-Bissau",
            code: "gw",
            capitalCity: "Bissau",
            officialLanguagesList: ["Portuguese"],
            currencyName: "West African CFA franc (XOF)",
            description: "Guinea-Bissau is a country in West Africa. It is bordered by Senegal to the north and Guinea to the south and east, with the Atlantic Ocean to its west."
          },
          {
            countryName: "Ivory Coast",
            code: "ci",
            capitalCity: "Yamoussoukro",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Ivory Coast, also known as Côte d'Ivoire, is a country located on the south coast of West Africa. It is bordered by Guinea and Liberia to the west, Burkina Faso and Mali to the north, Ghana to the east, and the Gulf of Guinea to the south."
          },
          {
            countryName: "Kenya",
            code: "ke",
            capitalCity: "Nairobi",
            officialLanguagesList: ["Swahili", "English"],
            currencyName: "Kenyan Shilling (KES)",
            description: "Kenya is a country in East Africa. It is bordered by South Sudan to the northwest, Ethiopia to the north, Somalia to the east, Uganda to the west, Tanzania to the south, and the Indian Ocean to the southeast."
          },
          {
            countryName: "Lesotho",
            code: "ls",
            capitalCity: "Maseru",
            officialLanguagesList: ["English", "Sesotho"],
            currencyName: "Lesotho Loti (LSL)",
            description: "Lesotho is a landlocked country and enclave entirely surrounded by South Africa. It is the only independent state in the world that lies entirely above 1,000 meters in elevation."
          },
          {
            countryName: "Liberia",
            code: "lr",
            capitalCity: "Monrovia",
            officialLanguagesList: ["English"],
            currencyName: "Liberian Dollar (LRD)",
            description: "Liberia is a country in West Africa. It is bordered by Sierra Leone to the northwest, Guinea to the north, Ivory Coast to the east, and the Atlantic Ocean to the south and west."
          },
          {
            countryName: "Libya",
            code: "ly",
            capitalCity: "Tripoli",
            officialLanguagesList: ["Arabic"],
            currencyName: "Libyan Dinar (LYD)",
            description: "Libya is a country in North Africa. It is bordered by the Mediterranean Sea to the north, Egypt to the east, Sudan to the southeast, Chad to the south, Niger to the southwest, Algeria to the west, and Tunisia to the northwest."
          },
          {
            countryName: "Madagascar",
            code: "mg",
            capitalCity: "Antananarivo",
            officialLanguagesList: ["Malagasy", "French"],
            currencyName: "Malagasy Ariary (MGA)",
            description: "Madagascar is an island country in the Indian Ocean, off the coast of East Africa. It is the fourth largest island in the world."
          },
          {
            countryName: "Malawi",
            code: "mw",
            capitalCity: "Lilongwe",
            officialLanguagesList: ["English", "Chichewa"],
            currencyName: "Malawian Kwacha (MWK)",
            description: "Malawi is a landlocked country in southeastern Africa. It is bordered by Zambia to the northwest, Tanzania to the northeast, and Mozambique to the east, south, and west."
          },
          {
            countryName: "Mali",
            code: "ml",
            capitalCity: "Bamako",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Mali is a landlocked country in West Africa. It is bordered by Algeria to the north, Niger to the east, Burkina Faso and Ivory Coast to the south, Guinea to the southwest, and Senegal and Mauritania to the west."
          },
          {
            countryName: "Mauritania",
            code: "mr",
            capitalCity: "Nouakchott",
            officialLanguagesList: ["Arabic"],
            currencyName: "Mauritanian Ouguiya (MRU)",
            description: "Mauritania is a country in Northwest Africa. It is bordered by the Atlantic Ocean to the west, Western Sahara to the north, Algeria to the northeast, Mali to the east and southeast, and Senegal to the southwest."
          },
          {
            countryName: "Mauritius",
            code: "mu",
            capitalCity: "Port Louis",
            officialLanguagesList: ["English", "French"],
            currencyName: "Mauritian Rupee (MUR)",
            description: "Mauritius is an island nation in the Indian Ocean, about 2,000 kilometers off the southeast coast of the African continent."
          },
          {
            countryName: "Morocco",
            code: "ma",
            capitalCity: "Rabat",
            officialLanguagesList: ["Arabic", "Berber"],
            currencyName: "Moroccan Dirham (MAD)",
            description: "Morocco is a country located in North Africa. It is bordered by the Atlantic Ocean and the Mediterranean Sea to the west and north, Algeria to the east, and Western Sahara to the south."
          }, //add more
          {
            countryName: "Mozambique",
            code: "mz",
            capitalCity: "Maputo",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Mozambican Metical (MZN)",
            description: "Mozambique is known for its extensive coastline and marine parks."
          },
          {
            countryName: "Namibia",
            code: "na",
            capitalCity: "Windhoek",
            officialLanguagesList: ["English", "Afrikaans"],
            currencyName: "Namibian Dollar (NAD)",
            description: "Namibia is famous for the Namib Desert, considered the oldest desert in the world."
          },
          {
            countryName: "Niger",
            code: "ne",
            capitalCity: "Niamey",
            officialLanguagesList: ["French"], 
            currencyName: "West African CFA franc (XOF)",
            description: "Niger is home to the Sahara Desert and the ancient city of Agadez."
          },
          {
            countryName: "Nigeria",
            code: "ng",
            capitalCity: "Abuja",
            officialLanguagesList: ["English"],
            currencyName: "Nigerian Naira (NGN)",
            description: "Nigeria is the most populous country in Africa and known for its diverse cultures."
          },
          {
            countryName: "Rwanda",
            code: "rw",
            capitalCity: "Kigali",
            officialLanguagesList: ["Kinyarwanda", "French", "English"],
            currencyName: "Rwandan Franc (RWF)",
            description: "Rwanda is known as the 'Land of a Thousand Hills' due to its mountainous terrain."
          },
          {
            countryName: "Sao Tome and Principe",
            code: "st",
            capitalCity: "Sao Tome",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Sao Tome and Principe Dobra (STN)",
            description: "Sao Tome and Principe is an island nation known for its biodiversity and cocoa production."
          },
          {
            countryName: "Senegal",
            code: "sn",
            capitalCity: "Dakar",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Senegal is famous for its vibrant music scene and the Dakar Rally."
          },
          {
            countryName: "Seychelles",
            code: "sc",
            capitalCity: "Victoria",
            officialLanguagesList: ["English", "French", "Seychellois Creole"],
            currencyName: "Seychellois Rupee (SCR)",
            description: "Seychelles is an archipelago known for its stunning beaches and coral reefs."
          },
          {
            countryName: "Sierra Leone",
            code: "sl",
            capitalCity: "Freetown",
            officialLanguagesList: ["English"],
            currencyName: "Sierra Leonean Leone (SLL)",
            description: "Sierra Leone is known for its beautiful beaches and the tragic civil war in the 1990s."
          },
          {
            countryName: "Somalia",
            code: "so",
            capitalCity: "Mogadishu",
            officialLanguagesList: ["Somali", "Arabic"],
            currencyName: "Somali Shilling (SOS)",
            description: "Somalia has the longest coastline on Africa's mainland and a rich cultural heritage."
          },
          {
            countryName: "South Africa",
            code: "za",
            capitalCity: "Pretoria",
            officialLanguagesList: ["Afrikaans", "English", "Zulu", "Xhosa"],
            currencyName: "South African Rand (ZAR)",
            description: "South Africa is known for its diverse cultures, wildlife, and the iconic Table Mountain."
          },
          {
            countryName: "South Sudan",
            code: "ss",
            capitalCity: "Juba",
            officialLanguagesList: ["English"],
            currencyName: "South Sudanese Pound (SSP)",
            description: "South Sudan is the newest country in the world, gaining independence in 2011."
          },
          {
            countryName: "Sudan",
            code: "sd",
            capitalCity: "Khartoum",
            officialLanguagesList: ["Arabic", "English"],
            currencyName: "Sudanese Pound (SDG)",
            description: "Sudan is known for its ancient pyramids and the Nile River."
          },
          {
            countryName: "Tanzania",
            code: "tz",
            capitalCity: "Dodoma",
            officialLanguagesList: ["Swahili", "English"],
            currencyName: "Tanzanian Shilling (TZS)",
            description: "Tanzania is home to Mount Kilimanjaro, the highest peak in Africa."
          },
          {
            countryName: "Togo",
            code: "tg",
            capitalCity: "Lome",
            officialLanguagesList: ["French"],
            currencyName: "West African CFA franc (XOF)",
            description: "Togo is known for its palm-lined beaches and hilltop villages."
          },
          {
            countryName: "Tunisia",
            code: "tn",
            capitalCity: "Tunis",
            officialLanguagesList: ["Arabic"],
            currencyName: "Tunisian Dinar (TND)",
            description: "Tunisia is famous for its ancient ruins and Mediterranean coastline."
          },
          {
            countryName: "Uganda",
            code: "ug",
            capitalCity: "Kampala",
            officialLanguagesList: ["English", "Swahili"],
            currencyName: "Ugandan Shilling (UGX)",
            description: "Uganda is known for its diverse wildlife and the source of the Nile River."
          },
          {
            countryName: "Zambia",
            code: "zm",
            capitalCity: "Lusaka",
            officialLanguagesList: ["English"],
            currencyName: "Zambian Kwacha (ZMW)",
            description: "Zambia is home to Victoria Falls, one of the largest and most famous waterfalls in the world."
          },
          {
            countryName: "Zimbabwe",
            code: "zw",
            capitalCity: "Harare",
            officialLanguagesList: ["English", "Shona", "Sindebele"],
            currencyName: "Zimbabwean Dollar (ZWL)",
            description: "Zimbabwe is known for its dramatic landscapes and diverse wildlife."
          }
        ],
    },
    {
        continentName: "Asia",
        countriesList: [
          {
            countryName: "Afghanistan",
            code: "af",
            capitalCity: "Kabul",
            officialLanguagesList: ["Pashto", "Dari"],
            currencyName: "Afghan Afghani (AFN)"
          },
          {
            countryName: "Armenia",
            code: "am",
            capitalCity: "Yerevan",
            officialLanguagesList: ["Armenian"],
            currencyName: "Armenian Dram (AMD)"
          },
          {
            countryName: "Azerbaijan",
            code: "az",
            capitalCity: "Baku",
            officialLanguagesList: ["Azerbaijani"],
            currencyName: "Azerbaijani Manat (AZN)"
          },
          {
            countryName: "Bahrain",
            code: "bh",
            capitalCity: "Manama",
            officialLanguagesList: ["Arabic"],
            currencyName: "Bahraini Dinar (BHD)"
          },
          {
            countryName: "Bangladesh",
            code: "bd",
            capitalCity: "Dhaka",
            officialLanguagesList: ["Bengali"],
            currencyName: "Bangladeshi Taka (BDT)"
          },
          {
            countryName: "Bhutan",
            code: "bt",
            capitalCity: "Thimphu",
            officialLanguagesList: ["Dzongkha"],
            currencyName: "Bhutanese Ngultrum (BTN)"
          },
          {
            countryName: "Brunei",
            code: "bn",
            capitalCity: "Bandar Seri Begawan",
            officialLanguagesList: ["Malay"],
            currencyName: "Brunei Dollar (BND)"
          },
          {
            countryName: "Cambodia",
            code: "kh",
            capitalCity: "Phnom Penh",
            officialLanguagesList: ["Khmer"],
            currencyName: "Cambodian Riel (KHR)"
          },
          {
            countryName: "China",
            code: "cn",
            capitalCity: "Beijing",
            officialLanguagesList: ["Mandarin"],
            currencyName: "Chinese Yuan (CNY)"
          },
          {
            countryName: "Cyprus",
            code: "cy",
            capitalCity: "Nicosia",
            officialLanguagesList: ["Greek", "Turkish"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Georgia",
            code: "ge",
            capitalCity: "Tbilisi",
            officialLanguagesList: ["Georgian"],
            currencyName: "Georgian Lari (GEL)"
          },
          {
            countryName: "India",
            code: "in",
            capitalCity: "New Delhi",
            officialLanguagesList: ["Hindi", "English"],
            currencyName: "Indian Rupee (INR)"
          },
          {
            countryName: "Indonesia",
            code: "id",
            capitalCity: "Jakarta",
            officialLanguagesList: ["Indonesian"],
            currencyName: "Indonesian Rupiah (IDR)"
          },
          {
            countryName: "Iran",
            code: "ir",
            capitalCity: "Tehran",
            officialLanguagesList: ["Persian"],
            currencyName: "Iranian Rial (IRR)"
          },
          {
            countryName: "Iraq",
            code: "iq",
            capitalCity: "Baghdad",
            officialLanguagesList: ["Arabic", "Kurdish"],
            currencyName: "Iraqi Dinar (IQD)"
          },
          {
            countryName: "Israel",
            code: "il",
            capitalCity: "Jerusalem",
            officialLanguagesList: ["Hebrew", "Arabic"],
            currencyName: "Israeli New Shekel (ILS)"
          },
          {
            countryName: "Japan",
            code: "jp",
            capitalCity: "Tokyo",
            officialLanguagesList: ["Japanese"],
            currencyName: "Japanese Yen (JPY)"
          },
          {
            countryName: "Jordan",
            code: "jo",
            capitalCity: "Amman",
            officialLanguagesList: ["Arabic"],
            currencyName: "Jordanian Dinar (JOD)"
          },
          {
            countryName: "Kazakhstan",
            code: "kz",
            capitalCity: "Nur-Sultan",
            officialLanguagesList: ["Kazakh", "Russian"],
            currencyName: "Kazakhstani Tenge (KZT)"
          },
          {
            countryName: "Kuwait",
            code: "kw",
            capitalCity: "Kuwait City",
            officialLanguagesList: ["Arabic"],
            currencyName: "Kuwaiti Dinar (KWD)"
          },
          {
            countryName: "Kyrgyzstan",
            code: "kg",
            capitalCity: "Bishkek",
            officialLanguagesList: ["Kyrgyz", "Russian"],
            currencyName: "Kyrgyzstani Som (KGS)"
          },
          {
            countryName: "Laos",
            code: "la",
            capitalCity: "Vientiane",
            officialLanguagesList: ["Lao"],
            currencyName: "Lao Kip (LAK)"
          },
          {
            countryName: "Lebanon",
            code: "lb",
            capitalCity: "Beirut",
            officialLanguagesList: ["Arabic", "French"],
            currencyName: "Lebanese Pound (LBP)"
          },
          {
            countryName: "Malaysia",
            code: "my",
            capitalCity: "Kuala Lumpur",
            officialLanguagesList: ["Malay"],
            currencyName: "Malaysian Ringgit (MYR)"
          },
          {
            countryName: "Maldives",
            code: "mv",
            capitalCity: "Malé",
            officialLanguagesList: ["Dhivehi"],
            currencyName: "Maldivian Rufiyaa (MVR)"
          },
          {
            countryName: "Mongolia",
            code: "mn",
            capitalCity: "Ulaanbaatar",
            officialLanguagesList: ["Mongolian"],
            currencyName: "Mongolian Tögrög (MNT)"
          },
          {
            countryName: "Myanmar",
            code: "mm",
            capitalCity: "Naypyidaw",
            officialLanguagesList: ["Burmese"],
            currencyName: "Burmese Kyat (MMK)"
          },
          {
            countryName: "Nepal",
            code: "np",
            capitalCity: "Kathmandu",
            officialLanguagesList: ["Nepali"],
            currencyName: "Nepalese Rupee (NPR)"
          },
          {
            countryName: "North Korea",
            code: "kp",
            capitalCity: "Pyongyang",
            officialLanguagesList: ["Korean"],
            currencyName: "North Korean Won (KPW)"
          },
          {
            countryName: "Oman",
            code: "om",
            capitalCity: "Muscat",
            officialLanguagesList: ["Arabic"],
            currencyName: "Omani Rial (OMR)"
          },
          {
            countryName: "Pakistan",
            code: "pk",
            capitalCity: "Islamabad",
            officialLanguagesList: ["Urdu", "English"],
            currencyName: "Pakistani Rupee (PKR)"
          },
          {
            countryName: "Palestine",
            code: "ps",
            capitalCity: "Ramallah",
            officialLanguagesList: ["Arabic"],
            currencyName: "Israeli New Shekel (ILS)"
          },
          {
            countryName: "Philippines",
            code: "ph",
            capitalCity: "Manila",
            officialLanguagesList: ["Filipino", "English"],
            currencyName: "Philippine Peso (PHP)"
          },
          {
            countryName: "Qatar",
            code: "qa",
            capitalCity: "Doha",
            officialLanguagesList: ["Arabic"],
            currencyName: "Qatari Riyal (QAR)"
          },
          {
            countryName: "Russia",
            code: "ru",
            capitalCity: "Moscow",
            officialLanguagesList: ["Russian"],
            currencyName: "Russian Ruble (RUB)"
          },
          {
            countryName: "Saudi Arabia",
            code: "sa",
            capitalCity: "Riyadh",
            officialLanguagesList: ["Arabic"],
            currencyName: "Saudi Riyal (SAR)"
          },
          {
            countryName: "Singapore",
            code: "sg",
            capitalCity: "Singapore",
            officialLanguagesList: ["English", "Malay", "Mandarin", "Tamil"],
            currencyName: "Singapore Dollar (SGD)"
          },
          {
            countryName: "South Korea",
            code: "kr",
            capitalCity: "Seoul",
            officialLanguagesList: ["Korean"],
            currencyName: "South Korean Won (KRW)"
          },
          {
            countryName: "Sri Lanka",
            code: "lk",
            capitalCity: "Sri Jayawardenepura Kotte",
            officialLanguagesList: ["Sinhala", "Tamil"],
            currencyName: "Sri Lankan Rupee (LKR)"
          },
          {
            countryName: "Syria",
            code: "sy",
            capitalCity: "Damascus",
            officialLanguagesList: ["Arabic"],
            currencyName: "Syrian Pound (SYP)"
          },
          {
            countryName: "Taiwan",
            code: "tw",
            capitalCity: "Taipei",
            officialLanguagesList: ["Mandarin"],
            currencyName: "New Taiwan Dollar (TWD)"
          },
          {
            countryName: "Tajikistan",
            code: "tj",
            capitalCity: "Dushanbe",
            officialLanguagesList: ["Tajik"],
            currencyName: "Tajikistani Somoni (TJS)"
          },
          {
            countryName: "Thailand",
            code: "th",
            capitalCity: "Bangkok",
            officialLanguagesList: ["Thai"],
            currencyName: "Thai Baht (THB)"
          },
          {
            countryName: "Timor-Leste",
            code: "tl",
            capitalCity: "Dili",
            officialLanguagesList: ["Tetum", "Portuguese"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Turkmenistan",
            code: "tm",
            capitalCity: "Ashgabat",
            officialLanguagesList: ["Turkmen"],
            currencyName: "Turkmenistani Manat (TMT)"
          },
          {
            countryName: "United Arab Emirates",
            code: "ae",
            capitalCity: "Abu Dhabi",
            officialLanguagesList: ["Arabic"],
            currencyName: "UAE Dirham (AED)"
          },
          {
            countryName: "Uzbekistan",
            code: "uz",
            capitalCity: "Tashkent",
            officialLanguagesList: ["Uzbek"],
            currencyName: "Uzbekistani Som (UZS)"
          },
          {
            countryName: "Vietnam",
            code: "vn",
            capitalCity: "Hanoi",
            officialLanguagesList: ["Vietnamese"],
            currencyName: "Vietnamese Dong (VND)"
          },
          {
            countryName: "Yemen",
            code: "ye",
            capitalCity: "Sana'a",
            officialLanguagesList: ["Arabic"],
            currencyName: "Yemeni Rial (YER)"
          },
        ],
    },
    {
        continentName: "Europe",
        countriesList: [
          {
            countryName: "Albania",
            code: "al",
            capitalCity: "Tirana",
            officialLanguagesList: ["Albanian"],
            currencyName: "Albanian Lek (ALL)"
          },
          {
            countryName: "Andorra",
            code: "ad",
            capitalCity: "Andorra la Vella",
            officialLanguagesList: ["Catalan"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Armenia",
            code: "am",
            capitalCity: "Yerevan",
            officialLanguagesList: ["Armenian"],
            currencyName: "Armenian Dram (AMD)"
          },
          {
            countryName: "Austria",
            code: "at",
            capitalCity: "Vienna",
            officialLanguagesList: ["German"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Azerbaijan",
            code: "az",
            capitalCity: "Baku",
            officialLanguagesList: ["Azerbaijani"],
            currencyName: "Azerbaijani Manat (AZN)"
          },
          {
            countryName: "Belarus",
            code: "by",
            capitalCity: "Minsk",
            officialLanguagesList: ["Belarusian", "Russian"],
            currencyName: "Belarusian Ruble (BYN)"
          },
          {
            countryName: "Belgium",
            code: "be",
            capitalCity: "Brussels",
            officialLanguagesList: ["Dutch", "French", "German"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Bosnia and Herzegovina",
            code: "ba",
            capitalCity: "Sarajevo",
            officialLanguagesList: ["Bosnian", "Croatian", "Serbian"],
            currencyName: "Bosnia and Herzegovina Convertible Mark (BAM)"
          },
          {
            countryName: "Bulgaria",
            code: "bg",
            capitalCity: "Sofia",
            officialLanguagesList: ["Bulgarian"],
            currencyName: "Bulgarian Lev (BGN)"
          },
          {
            countryName: "Croatia",
            code: "hr",
            capitalCity: "Zagreb",
            officialLanguagesList: ["Croatian"],
            currencyName: "Croatian Kuna (HRK)"
          },
          {
            countryName: "Cyprus",
            code: "cy",
            capitalCity: "Nicosia",
            officialLanguagesList: ["Greek", "Turkish"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Czech Republic",
            code: "cz",
            capitalCity: "Prague",
            officialLanguagesList: ["Czech"],
            currencyName: "Czech Koruna (CZK)"
          },
          {
            countryName: "Denmark",
            code: "dk",
            capitalCity: "Copenhagen",
            officialLanguagesList: ["Danish"],
            currencyName: "Danish Krone (DKK)"
          },
          {
            countryName: "Estonia",
            code: "ee",
            capitalCity: "Tallinn",
            officialLanguagesList: ["Estonian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Finland",
            code: "fi",
            capitalCity: "Helsinki",
            officialLanguagesList: ["Finnish", "Swedish"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "France",
            code: "fr",
            capitalCity: "Paris",
            officialLanguagesList: ["French"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Georgia",
            code: "ge",
            capitalCity: "Tbilisi",
            officialLanguagesList: ["Georgian"],
            currencyName: "Georgian Lari (GEL)"
          },
          {
            countryName: "Germany",
            code: "de",
            capitalCity: "Berlin",
            officialLanguagesList: ["German"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Greece",
            code: "gr",
            capitalCity: "Athens",
            officialLanguagesList: ["Greek"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Hungary",
            code: "hu",
            capitalCity: "Budapest",
            officialLanguagesList: ["Hungarian"],
            currencyName: "Hungarian Forint (HUF)"
          },
          {
            countryName: "Iceland",
            code: "is",
            capitalCity: "Reykjavik",
            officialLanguagesList: ["Icelandic"],
            currencyName: "Icelandic Krona (ISK)"
          },
          {
            countryName: "Ireland",
            code: "ie",
            capitalCity: "Dublin",
            officialLanguagesList: ["Irish", "English"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Italy",
            code: "it",
            capitalCity: "Rome",
            officialLanguagesList: ["Italian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Kazakhstan",
            code: "kz",
            capitalCity: "Nur-Sultan",
            officialLanguagesList: ["Kazakh", "Russian"],
            currencyName: "Kazakhstani Tenge (KZT)"
          },
          {
            countryName: "Kosovo",
            code: "xk",
            capitalCity: "Pristina",
            officialLanguagesList: ["Albanian", "Serbian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Latvia",
            code: "lv",
            capitalCity: "Riga",
            officialLanguagesList: ["Latvian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Liechtenstein",
            code: "li",
            capitalCity: "Vaduz",
            officialLanguagesList: ["German"],
            currencyName: "Swiss Franc (CHF)"
          },
          {
            countryName: "Lithuania",
            code: "lt",
            capitalCity: "Vilnius",
            officialLanguagesList: ["Lithuanian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Luxembourg",
            code: "lu",
            capitalCity: "Luxembourg",
            officialLanguagesList: ["Luxembourgish", "French", "German"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Malta",
            code: "mt",
            capitalCity: "Valletta",
            officialLanguagesList: ["Maltese", "English"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Moldova",
            code: "md",
            capitalCity: "Chisinau",
            officialLanguagesList: ["Romanian"],
            currencyName: "Moldovan Leu (MDL)"
          },
          {
            countryName: "Monaco",
            code: "mc",
            capitalCity: "Monaco",
            officialLanguagesList: ["French"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Montenegro",
            code: "me",
            capitalCity: "Podgorica",
            officialLanguagesList: ["Montenegrin"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Netherlands",
            code: "nl",
            capitalCity: "Amsterdam",
            officialLanguagesList: ["Dutch"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "North Macedonia",
            code: "mk",
            capitalCity: "Skopje",
            officialLanguagesList: ["Macedonian"],
            currencyName: "Macedonian Denar (MKD)"
          },
          {
            countryName: "Norway",
            code: "no",
            capitalCity: "Oslo",
            officialLanguagesList: ["Norwegian"],
            currencyName: "Norwegian Krone (NOK)"
          },
          {
            countryName: "Poland",
            code: "pl",
            capitalCity: "Warsaw",
            officialLanguagesList: ["Polish"],
            currencyName: "Polish Zloty (PLN)"
          },
          {
            countryName: "Portugal",
            code: "pt",
            capitalCity: "Lisbon",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Romania",
            code: "ro",
            capitalCity: "Bucharest",
            officialLanguagesList: ["Romanian"],
            currencyName: "Romanian Leu (RON)"
          },
          {
            countryName: "Russia",
            code: "ru",
            capitalCity: "Moscow",
            officialLanguagesList: ["Russian"],
            currencyName: "Russian Ruble (RUB)"
          },
          {
            countryName: "San Marino",
            code: "sm",
            capitalCity: "San Marino",
            officialLanguagesList: ["Italian"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Serbia",
            code: "rs",
            capitalCity: "Belgrade",
            officialLanguagesList: ["Serbian"],
            currencyName: "Serbian Dinar (RSD)"
          },
          {
            countryName: "Slovakia",
            code: "sk",
            capitalCity: "Bratislava",
            officialLanguagesList: ["Slovak"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Slovenia",
            code: "si",
            capitalCity: "Ljubljana",
            officialLanguagesList: ["Slovene"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Spain",
            code: "es",
            capitalCity: "Madrid",
            officialLanguagesList: ["Spanish"],
            currencyName: "Euro (EUR)"
          },
          {
            countryName: "Sweden",
            code: "se",
            capitalCity: "Stockholm",
            officialLanguagesList: ["Swedish"],
            currencyName: "Swedish Krona (SEK)"
          },
          {
            countryName: "Switzerland",
            code: "ch",
            capitalCity: "Bern",
            officialLanguagesList: ["German", "French", "Italian", "Romansh"],
            currencyName: "Swiss Franc (CHF)"
          },
          {
            countryName: "Turkey",
            code: "tr",
            capitalCity: "Ankara",
            officialLanguagesList: ["Turkish"],
            currencyName: "Turkish Lira (TRY)"
          },
          {
            countryName: "Ukraine",
            code: "ua",
            capitalCity: "Kyiv",
            officialLanguagesList: ["Ukrainian"],
            currencyName: "Ukrainian Hryvnia (UAH)"
          },
          {
            countryName: "United Kingdom",
            code: "gb",
            capitalCity: "London",
            officialLanguagesList: ["English"],
            currencyName: "British Pound (GBP)"
          },
          {
            countryName: "Vatican City",
            code: "va",
            capitalCity: "Vatican City",
            officialLanguagesList: ["Italian", "Latin"],
            currencyName: "Euro (EUR)"
          },
        ],
    },
    {
        continentName: "North America",
        countriesList: [
          {
            countryName: "Antigua and Barbuda",
            code: "ag",
            capitalCity: "Saint John's",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Bahamas",
            code: "bs",
            capitalCity: "Nassau",
            officialLanguagesList: ["English"],
            currencyName: "Bahamian Dollar (BSD)"
          },
          {
            countryName: "Barbados",
            code: "bb",
            capitalCity: "Bridgetown",
            officialLanguagesList: ["English"],
            currencyName: "Barbadian Dollar (BBD)"
          },
          {
            countryName: "Belize",
            code: "bz",
            capitalCity: "Belmopan",
            officialLanguagesList: ["English"],
            currencyName: "Belize Dollar (BZD)"
          },
          {
            countryName: "Canada",
            code: "ca",
            capitalCity: "Ottawa",
            officialLanguagesList: ["English", "French"],
            currencyName: "Canadian Dollar (CAD)"
          },
          {
            countryName: "Costa Rica",
            code: "cr",
            capitalCity: "San José",
            officialLanguagesList: ["Spanish"],
            currencyName: "Costa Rican Colón (CRC)"
          },
          {
            countryName: "Cuba",
            code: "cu",
            capitalCity: "Havana",
            officialLanguagesList: ["Spanish"],
            currencyName: "Cuban Peso (CUP)"
          },
          {
            countryName: "Dominica",
            code: "dm",
            capitalCity: "Roseau",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Dominican Republic",
            code: "do",
            capitalCity: "Santo Domingo",
            officialLanguagesList: ["Spanish"],
            currencyName: "Dominican Peso (DOP)"
          },
          {
            countryName: "El Salvador",
            code: "sv",
            capitalCity: "San Salvador",
            officialLanguagesList: ["Spanish"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Grenada",
            code: "gd",
            capitalCity: "Saint George's",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Guatemala",
            code: "gt",
            capitalCity: "Guatemala City",
            officialLanguagesList: ["Spanish"],
            currencyName: "Guatemalan Quetzal (GTQ)"
          },
          {
            countryName: "Haiti",
            code: "ht",
            capitalCity: "Port-au-Prince",
            officialLanguagesList: ["French", "Haitian Creole"],
            currencyName: "Haitian Gourde (HTG)"
          },
          {
            countryName: "Honduras",
            code: "hn",
            capitalCity: "Tegucigalpa",
            officialLanguagesList: ["Spanish"],
            currencyName: "Honduran Lempira (HNL)"
          },
          {
            countryName: "Jamaica",
            code: "jm",
            capitalCity: "Kingston",
            officialLanguagesList: ["English"],
            currencyName: "Jamaican Dollar (JMD)"
          },
          {
            countryName: "Mexico",
            code: "mx",
            capitalCity: "Mexico City",
            officialLanguagesList: ["Spanish"],
            currencyName: "Mexican Peso (MXN)"
          },
          {
            countryName: "Nicaragua",
            code: "ni",
            capitalCity: "Managua",
            officialLanguagesList: ["Spanish"],
            currencyName: "Nicaraguan Córdoba (NIO)"
          },
          {
            countryName: "Panama",
            code: "pa",
            capitalCity: "Panama City",
            officialLanguagesList: ["Spanish"],
            currencyName: "Panamanian Balboa (PAB)"
          },
          {
            countryName: "Saint Kitts and Nevis",
            code: "kn",
            capitalCity: "Basseterre",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Saint Lucia",
            code: "lc",
            capitalCity: "Castries",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Saint Vincent and the Grenadines",
            code: "vc",
            capitalCity: "Kingstown",
            officialLanguagesList: ["English"],
            currencyName: "East Caribbean Dollar (XCD)"
          },
          {
            countryName: "Trinidad and Tobago",
            code: "tt",
            capitalCity: "Port of Spain",
            officialLanguagesList: ["English"],
            currencyName: "Trinidad and Tobago Dollar (TTD)"
          },
          {
            countryName: "United States",
            code: "us",
            capitalCity: "Washington, D.C.",
            officialLanguagesList: ["English"],
            currencyName: "United States Dollar (USD)"
          },
        ],
    },
    {
        continentName: "Oceania",
        countriesList: [
          {
            countryName: "Australia",
            code: "au",
            capitalCity: "Canberra",
            officialLanguagesList: ["English"],
            currencyName: "Australian Dollar (AUD)"
          },
          {
            countryName: "Fiji",
            code: "fj",
            capitalCity: "Suva",
            officialLanguagesList: ["English", "Fijian", "Hindi"],
            currencyName: "Fijian Dollar (FJD)"
          },
          {
            countryName: "Kiribati",
            code: "ki",
            capitalCity: "Tarawa",
            officialLanguagesList: ["English", "Gilbertese"],
            currencyName: "Australian Dollar (AUD)"
          },
          {
            countryName: "Marshall Islands",
            code: "mh",
            capitalCity: "Majuro",
            officialLanguagesList: ["Marshallese", "English"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Micronesia",
            code: "fm",
            capitalCity: "Palikir",
            officialLanguagesList: ["English"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Nauru",
            code: "nr",
            capitalCity: "Yaren",
            officialLanguagesList: ["Nauruan", "English"],
            currencyName: "Australian Dollar (AUD)"
          },
          {
            countryName: "New Zealand",
            code: "nz",
            capitalCity: "Wellington",
            officialLanguagesList: ["English", "Māori", "NZ Sign Language"],
            currencyName: "New Zealand Dollar (NZD)"
          },
          {
            countryName: "Palau",
            code: "pw",
            capitalCity: "Ngerulmud",
            officialLanguagesList: ["Palauan", "English"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Papua New Guinea",
            code: "pg",
            capitalCity: "Port Moresby",
            officialLanguagesList: ["English", "Hiri Motu", "Tok Pisin"],
            currencyName: "Papua New Guinean Kina (PGK)"
          },
          {
            countryName: "Samoa",
            code: "ws",
            capitalCity: "Apia",
            officialLanguagesList: ["Samoan", "English"],
            currencyName: "Samoan Tala (WST)"
          },
          {
            countryName: "Solomon Islands",
            code: "sb",
            capitalCity: "Honiara",
            officialLanguagesList: ["English"],
            currencyName: "Solomon Islands Dollar (SBD)"
          },
          {
            countryName: "Tonga",
            code: "to",
            capitalCity: "Nuku'alofa",
            officialLanguagesList: ["Tongan", "English"],
            currencyName: "Tongan Paʻanga (TOP)"
          },
          {
            countryName: "Tuvalu",
            code: "tv",
            capitalCity: "Funafuti",
            officialLanguagesList: ["Tuvaluan", "English"],
            currencyName: "Australian Dollar (AUD)"
          },
          {
            countryName: "Vanuatu",
            code: "vu",
            capitalCity: "Port Vila",
            officialLanguagesList: ["Bislama", "English", "French"],
            currencyName: "Vanuatu Vatu (VUV)"
          },
        ],
    },
    {
        continentName: "South America",
        countriesList: [
          {
            countryName: "Argentina",
            code: "ar",
            capitalCity: "Buenos Aires",
            officialLanguagesList: ["Spanish"],
            currencyName: "Argentine Peso (ARS)"
          },
          {
            countryName: "Bolivia",
            code: "bo",
            capitalCity: "Sucre",
            officialLanguagesList: ["Spanish", "Quechua", "Aymara"],
            currencyName: "Bolivian Boliviano (BOB)"
          },
          {
            countryName: "Brazil",
            code: "br",
            capitalCity: "Brasília",
            officialLanguagesList: ["Portuguese"],
            currencyName: "Brazilian Real (BRL)"
          },
          {
            countryName: "Chile",
            code: "cl",
            capitalCity: "Santiago",
            officialLanguagesList: ["Spanish"],
            currencyName: "Chilean Peso (CLP)"
          },
          {
            countryName: "Colombia",
            code: "co",
            capitalCity: "Bogotá",
            officialLanguagesList: ["Spanish"],
            currencyName: "Colombian Peso (COP)"
          },
          {
            countryName: "Ecuador",
            code: "ec",
            capitalCity: "Quito",
            officialLanguagesList: ["Spanish"],
            currencyName: "United States Dollar (USD)"
          },
          {
            countryName: "Guyana",
            code: "gy",
            capitalCity: "Georgetown",
            officialLanguagesList: ["English"],
            currencyName: "Guyanese Dollar (GYD)"
          },
          {
            countryName: "Paraguay",
            code: "py",
            capitalCity: "Asunción",
            officialLanguagesList: ["Spanish", "Guarani"],
            currencyName: "Paraguayan Guarani (PYG)"
          },
          {
            countryName: "Peru",
            code: "pe",
            capitalCity: "Lima",
            officialLanguagesList: ["Spanish"],
            currencyName: "Peruvian Sol (PEN)"
          },
          {
            countryName: "Suriname",
            code: "sr",
            capitalCity: "Paramaribo",
            officialLanguagesList: ["Dutch"],
            currencyName: "Surinamese Dollar (SRD)"
          },
          {
            countryName: "Uruguay",
            code: "uy",
            capitalCity: "Montevideo",
            officialLanguagesList: ["Spanish"],
            currencyName: "Uruguayan Peso (UYU)"
          },
          {
            countryName: "Venezuela",
            code: "ve",
            capitalCity: "Caracas",
            officialLanguagesList: ["Spanish"],
            currencyName: "Venezuelan Bolívar (VES)"
          },
        ],
    },
  ];
  
  export { continents };
  