const continents = [
    {
    continentName: "Africa",
    countriesList: [
        {
          countryName: "Algeria",
          code: "dz",
          capitalCity: "Algiers",
          officialLanguagesList: ["Arabic", "Tamazight"],
          currencyName: "Algerian Dinar (DZD)"
        },
        {
          countryName: "Angola",
          code: "ao",
          capitalCity: "Luanda",
          officialLanguagesList: ["Portuguese"],
          currencyName: "Angolan Kwanza (AOA)"
        },
        {
          countryName: "Benin",
          code: "bj",
          capitalCity: "Porto-Novo",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)"
        },
        {
          countryName: "Botswana",
          code: "bw",
          capitalCity: "Gaborone",
          officialLanguagesList : ["English", "Setswana"],
          currencyName: "Botswana Pula (BWP)"
        },
        {
          countryName: "Burkina Faso",
          code: "bf",
          capitalCity: "Ouagadoug ",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)"
        },
        {
          countryName: "Burundi",
          code: "bi",
          capitalCity : "Gitega",
          officialLanguagesList: ["Kirundi", "French"],
          currencyName: "Burundian Franc (BIF)"
        },
        {
          countryName: "Cameroon",
          code: "cm",
          capitalCity: "Yaound ",
          officialLanguagesList: ["French", "English"],
          currencyName: "Central African CFA franc (XAF)"
        },
        {
          countryName: "Cape Verde",
          code: "cv",
          capitalCity: "Praia",
          officialLanguagesList: ["Portuguese"],
          currencyName: "Cape Verdean Escudo (CVE)",
        },
        {
          countryName: "Central African Republic",
          code: "cf",
          capitalCity: "Bangui",
          officialLanguagesList: ["French", "Sango"],
          currencyName: "Central African CFA franc (XAF)",
        },
        {
          countryName: "Chad",
          code: "td",
          capitalCity: "N'Djam ",
          officialLanguagesList: ["French", "Arabic"],
          currencyName: "Central African CFA franc (XAF)",
        },
        {
          countryName: "Comoros",
          code: "km",
          capitalCity: "Moroni",
          officialLanguagesList: ["Comorian", "Arabic", "French"], 
          currencyName: "Comorian Franc (KMF)",
        },
        {
          countryName: "Democratic Republic of the Congo",
          code: "cd",
          capitalCity: "Kinshasa",
          officialLanguagesList: ["French"],
          currencyName: "Congolese Franc (CDF)",
        },
        {
          countryName: "Republic of the Congo",
          code: "cg",
          capitalCity: "Brazzaville",
          officialLanguagesList: ["French"],
          currencyName: "Central African CFA franc (XAF)",
        },
        {
          countryName: "Djibouti",
          code: "dj",
          capitalCity: "Djibouti",
          officialLanguagesList: ["French", "Arabic"],
          currencyName: "Djiboutian Franc (DJF)",
        },
        {
          countryName: "Egypt",
          code: "eg",
          capitalCity: "Cairo",
          officialLanguagesList: ["Arabic"],
          currencyName: "Egyptian Pound (EGP)",
        },
        {
          countryName: "Equatorial Guinea",
          code: "gq",
          capitalCity: "Malabo",
          officialLanguagesList: ["Spanish", "French", "Portuguese"],
          currencyName: "Central African CFA franc (XAF)",
        },
        {
          countryName: "Eritrea",
          code: "er",
          capitalCity: "Asmara",
          officialLanguagesList: ["Tigrinya", "Arabic", "English"],
          currencyName: "Eritrean Nakfa (ERN)",
        },
        {
          countryName: "Eswatini",
          code: "sz",
          capitalCity: "Mbabane",
          officialLanguagesList: ["Swazi", "English"],
          currencyName: "Swazi Lilangeni (SZL)",
        },
        {
          countryName: "Ethiopia",
          code: "et",
          capitalCity: "Addis Ababa",
          officialLanguagesList: ["Amharic"],
          currencyName: "Ethiopian Birr (ETB)",
        },
        {
          countryName: "Gabon",
          code: "ga",
          capitalCity: "Libreville",
          officialLanguagesList: ["French"],
          currencyName: "Central African CFA franc (XAF)",
        },
        {
          countryName: "Gambia",
          code: "gm",
          capitalCity: "Banjul",
          officialLanguagesList: ["English"],
          currencyName: "Gambian Dalasi (GMD)",
        },
        {
          countryName: "Ghana",
          code: "gh",
          capitalCity: "Accra",
          officialLanguagesList: ["English"],
          currencyName: "Ghanaian Cedi (GHS)",
        },
        {
          countryName: "Guinea",
          code: "gn",
          capitalCity: "Conakry",
          officialLanguagesList: ["French"],
          currencyName: "Guinean Franc (GNF)",
        },
        {
          countryName: "Guinea-Bissau",
          code: "gw",
          capitalCity: "Bissau",
          officialLanguagesList: ["Portuguese"],
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Ivory Coast",
          code: "ci",
          capitalCity: "Yamoussoukro",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Kenya",
          code: "ke",
          capitalCity: "Nairobi",
          officialLanguagesList: ["Swahili", "English"],
          currencyName: "Kenyan Shilling (KES)",
        },
        {
          countryName: "Lesotho",
          code: "ls",
          capitalCity: "Maseru",
          officialLanguagesList: ["English", "Sesotho"],
          currencyName: "Lesotho Loti (LSL)",
        },
        {
          countryName: "Liberia",
          code: "lr",
          capitalCity: "Monrovia",
          officialLanguagesList: ["English"],
          currencyName: "Liberian Dollar (LRD)",
        },
        {
          countryName: "Libya",
          code: "ly",
          capitalCity: "Tripoli",
          officialLanguagesList: ["Arabic"],
          currencyName: "Libyan Dinar (LYD)",
        },
        {
          countryName: "Madagascar",
          code: "mg",
          capitalCity: "Antananarivo",
          officialLanguagesList: ["Malagasy", "French"],
          currencyName: "Malagasy Ariary (MGA)",
        },
        {
          countryName: "Malawi",
          code: "mw",
          capitalCity: "Lilongwe",
          officialLanguagesList: ["English", "Chichewa"],
          currencyName: "Malawian Kwacha (MWK)",
        },
        {
          countryName: "Mali",
          code: "ml",
          capitalCity: "Bamako",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Mauritania",
          code: "mr",
          capitalCity: "Nouakchott",
          officialLanguagesList: ["Arabic"],
          currencyName: "Mauritanian Ouguiya (MRU)",
        },
        {
          countryName: "Mauritius",
          code: "mu",
          capitalCity: "Port Louis",
          officialLanguagesList: ["English", "French"],
          currencyName: "Mauritian Rupee (MUR)",
        },
        {
          countryName: "Morocco",
          code: "ma",
          capitalCity: "Rabat",
          officialLanguagesList: ["Arabic", "Berber"],
          currencyName: "Moroccan Dirham (MAD)",
        },
        {
          countryName: "Mozambique",
          code: "mz",
          capitalCity: "Maputo",
          officialLanguagesList: ["Portuguese"],
          currencyName: "Mozambican Metical (MZN)",
        },
        {
          countryName: "Namibia",
          code: "na",
          capitalCity: "Windhoek",
          officialLanguagesList: ["English", "Afrikaans"],
          currencyName: "Namibian Dollar (NAD)",
        },
        {
          countryName: "Niger",
          code: "ne",
          capitalCity: "Niamey",
          officialLanguagesList: ["French"], 
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Nigeria",
          code: "ng",
          capitalCity: "Abuja",
          officialLanguagesList: ["English"],
          currencyName: "Nigerian Naira (NGN)",
        },
        {
          countryName: "Rwanda",
          code: "rw",
          capitalCity: "Kigali",
          officialLanguagesList: ["Kinyarwanda", "French", "English"],
          currencyName: "Rwandan Franc (RWF)",
        },
        {
          countryName: "Sao Tome and Principe",
          code: "st",
          capitalCity: "Sao Tome",
          officialLanguagesList: ["Portuguese"],
          currencyName: "Sao Tome and Principe Dobra (STN)",
        },
        {
          countryName: "Senegal",
          code: "sn",
          capitalCity: "Dakar",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Seychelles",
          code: "sc",
          capitalCity: "Victoria",
          officialLanguagesList: ["English", "French", "Seychellois Creole"],
          currencyName: "Seychellois Rupee (SCR)",
        },
        {
          countryName: "Sierra Leone",
          code: "sl",
          capitalCity: "Freetown",
          officialLanguagesList: ["English"],
          currencyName: "Sierra Leonean Leone (SLL)",
        },
        {
          countryName: "Somalia",
          code: "so",
          capitalCity: "Mogadishu",
          officialLanguagesList: ["Somali", "Arabic"],
          currencyName: "Somali Shilling (SOS)",
        },
        {
          countryName: "South Africa",
          code: "za",
          capitalCity: "Pretoria",
          officialLanguagesList: ["Afrikaans", "English", "Zulu", "Xhosa"],
          currencyName: "South African Rand (ZAR)",
        },
        {
          countryName: "South Sudan",
          code: "ss",
          capitalCity: "Juba",
          officialLanguagesList: ["English"],
          currencyName: "South Sudanese Pound (SSP)",
        },
        {
          countryName: "Sudan",
          code: "sd",
          capitalCity: "Khartoum",
          officialLanguagesList: ["Arabic", "English"],
          currencyName: "Sudanese Pound (SDG)",
        },
        {
          countryName: "Tanzania",
          code: "tz",
          capitalCity: "Dodoma",
          officialLanguagesList: ["Swahili", "English"],
          currencyName: "Tanzanian Shilling (TZS)",
        },
        {
          countryName: "Togo",
          code: "tg",
          capitalCity: "Lome",
          officialLanguagesList: ["French"],
          currencyName: "West African CFA franc (XOF)",
        },
        {
          countryName: "Tunisia",
          code: "tn",
          capitalCity: "Tunis",
          officialLanguagesList: ["Arabic"],
          currencyName: "Tunisian Dinar (TND)",
        },
        {
          countryName: "Uganda",
          code: "ug",
          capitalCity: "Kampala",
          officialLanguagesList: ["English", "Swahili"],
          currencyName: "Ugandan Shilling (UGX)",
        },
        {
          countryName: "Zambia",
          code: "zm",
          capitalCity: "Lusaka",
          officialLanguagesList: ["English"],
          currencyName: "Zambian Kwacha (ZMW)",
        },
        {
          countryName: "Zimbabwe",
          code: "zw",
          capitalCity: "Harare",
          officialLanguagesList: ["English", "Shona", "Sindebele"],
          currencyName: "Zimbabwean Dollar (ZWL)",
        },
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
  