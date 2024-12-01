const continents = [
  {
    name: "Africa",
    countries: [
      {
        name: "Algeria",
        code: "dz",
        capital: "Algiers",
        officialLanguages: ["Arabic", "Tamazight"]
      },
      {
        name: "Angola",
        code: "ao",
        capital: "Luanda",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Benin",
        code: "bj",
        capital: "Porto-Novo",
        officialLanguages: ["French"]
      },
      {
        name: "Botswana",
        code: "bw",
        capital: "Gaborone",
        officialLanguages : ["English", "Setswana"]
      },
      {
        name: "Burkina Faso",
        code: "bf",
        capital: "Ouagadoug ",
        officialLanguages: ["French"]
      },
      {
        name: "Burundi",
        code: "bi",
        capital : "Gitega",
        officialLanguages: ["Kirundi", "French"]
      },
      {
        name: "Cameroon",
        code: "cm",
        capital: "Yaound ",
        officialLanguages: ["French", "English"]
      },
      {
        name: "Cape Verde",
        code: "cv",
        capital: "Praia",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Central African Republic",
        code: "cf",
        capital: "Bangui",
        officialLanguages: ["French", "Sango"]
      },
      {
        name: "Chad",
        code: "td",
        capital: "N'Djam ",
        officialLanguages: ["French", "Arabic"]
      },
      {
        name: "Comoros",
        code: "km",
        capital: "Moroni",
        officialLanguages: ["Comorian", "Arabic", "French"]
      },
      {
        name: "Democratic Republic of the Congo",
        code: "cd",
        capital: "Kinshasa",
        officialLanguages: ["French"]
      },
      {
        name: "Republic of the Congo",
        code: "cg",
        capital: "Brazzaville",
        officialLanguages: ["French"]
      },
      {
        name: "Djibouti",
        code: "dj",
        capital: "Djibouti",
        officialLanguages: ["French", "Arabic"]
      },
      {
        name: "Egypt",
        code: "eg",
        capital: "Cairo",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Equatorial Guinea",
        code: "gq",
        capital: "Malabo",
        officialLanguages: ["Spanish", "French", "Portuguese"]
      },
      {
        name: "Eritrea",
        code: "er",
        capital: "Asmara",
        officialLanguages: ["Tigrinya", "Arabic", "English"]
      },
      {
        name: "Eswatini",
        code: "sz",
        capital: "Mbabane",
        officialLanguages: ["Swazi", "English"]
      },
      {
        name: "Ethiopia",
        code: "et",
        capital: "Addis Ababa",
        officialLanguages: ["Amharic"]
      },
      {
        name: "Gabon",
        code: "ga",
        capital: "Libreville",
        officialLanguages: ["French"]
      },
      {
        name: "Gambia",
        code: "gm",
        capital: "Banjul",
        officialLanguages: ["English"]
      },
      {
        name: "Ghana",
        code: "gh",
        capital: "Accra",
        officialLanguages: ["English"]
      },
      {
        name: "Guinea",
        code: "gn",
        capital: "Conakry",
        officialLanguages: ["French"]
      },
      {
        name: "Guinea-Bissau",
        code: "gw",
        capital: "Bissau",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Ivory Coast",
        code: "ci",
        capital: "Yamoussoukro",
        officialLanguages: ["French"]
      },
      {
        name: "Kenya",
        code: "ke",
        capital: "Nairobi",
        officialLanguages: ["Swahili", "English"]
      },
      {
        name: "Lesotho",
        code: "ls",
        capital: "Maseru",
        officialLanguages: ["English", "Sesotho"]
      },
      {
        name: "Liberia",
        code: "lr",
        capital: "Monrovia",
        officialLanguages: ["English"]
      },
      {
        name: "Libya",
        code: "ly",
        capital: "Tripoli",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Madagascar",
        code: "mg",
        capital: "Antananarivo",
        officialLanguages: ["Malagasy", "French"]
      },
      {
        name: "Malawi",
        code: "mw",
        capital: "Lilongwe",
        officialLanguages: ["English", "Chichewa"]
      },
      {
        name: "Mali",
        code: "ml",
        capital: "Bamako",
        officialLanguages: ["French"]
      },
      {
        name: "Mauritania",
        code: "mr",
        capital: "Nouakchott",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Mauritius",
        code: "mu",
        capital: "Port Louis",
        officialLanguages: ["English", "French"]
      },
      {
        name: "Morocco",
        code: "ma",
        capital: "Rabat",
        officialLanguages: ["Arabic", "Berber"]
      },
      {
        name: "Mozambique",
        code: "mz",
        capital: "Maputo",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Namibia",
        code: "na",
        capital: "Windhoek",
        officialLanguages: ["English", "Afrikaans"]
      },
      {
        name: "Niger",
        code: "ne",
        capital: "Niamey",
        officialLanguages: ["French"]
      },
      {
        name: "Nigeria",
        code: "ng",
        capital: "Abuja",
        officialLanguages: ["English"]
      },
      {
        name: "Rwanda",
        code: "rw",
        capital: "Kigali",
        officialLanguages: ["Kinyarwanda", "French", "English"]
      },
      {
        name: "Sao Tome and Principe",
        code: "st",
        capital: "Sao Tome",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Senegal",
        code: "sn",
        capital: "Dakar",
        officialLanguages: ["French"]
      },
      {
        name: "Seychelles",
        code: "sc",
        capital: "Victoria",
        officialLanguages: ["English", "French", "Seychellois Creole"]
      },
      {
        name: "Sierra Leone",
        code: "sl",
        capital: "Freetown",
        officialLanguages: ["English"]
      },
      {
        name: "Somalia",
        code: "so",
        capital: "Mogadishu",
        officialLanguages: ["Somali", "Arabic"]
      },
      {
        name: "South Africa",
        code: "za",
        capital: "Pretoria",
        officialLanguages: ["Afrikaans", "English", "Zulu", "Xhosa"]
      },
      {
        name: "South Sudan",
        code: "ss",
        capital: "Juba",
        officialLanguages: ["English"]
      },
      {
        name: "Sudan",
        code: "sd",
        capital: "Khartoum",
        officialLanguages: ["Arabic", "English"]
      },
      {
        name: "Tanzania",
        code: "tz",
        capital: "Dodoma",
        officialLanguages: ["Swahili", "English"]
      },
      {
        name: "Togo",
        code: "tg",
        capital: "Lome",
        officialLanguages: ["French"]
      },
      {
        name: "Tunisia",
        code: "tn",
        capital: "Tunis",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Uganda",
        code: "ug",
        capital: "Kampala",
        officialLanguages: ["English", "Swahili"]
      },
      {
        name: "Zambia",
        code: "zm",
        capital: "Lusaka",
        officialLanguages: ["English"]
      },
      {
        name: "Zimbabwe",
        code: "zw",
        capital: "Harare",
        officialLanguages: ["English", "Shona", "Sindebele"]
      },
    ],
  },
  {
    name: "Asia",
    countries: [
      {
        name: "Afghanistan",
        code: "af",
        capital: "Kabul",
        officialLanguages: ["Pashto", "Dari"]
      },
      {
        name: "Armenia",
        code: "am",
        capital: "Yerevan",
        officialLanguages: ["Armenian"]
      },
      {
        name: "Azerbaijan",
        code: "az",
        capital: "Baku",
        officialLanguages: ["Azerbaijani"]
      },
      {
        name: "Bahrain",
        code: "bh",
        capital: "Manama",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Bangladesh",
        code: "bd",
        capital: "Dhaka",
        officialLanguages: ["Bengali"]
      },
      {
        name: "Bhutan",
        code: "bt",
        capital: "Thimphu",
        officialLanguages: ["Dzongkha"]
      },
      {
        name: "Brunei",
        code: "bn",
        capital: "Bandar Seri Begawan",
        officialLanguages: ["Malay"]
      },
      {
        name: "Cambodia",
        code: "kh",
        capital: "Phnom Penh",
        officialLanguages: ["Khmer"]
      },
      {
        name: "China",
        code: "cn",
        capital: "Beijing",
        officialLanguages: ["Madarin"]
      },
      {
        name: "Cyprus",
        code: "cy",
        capital: "Nicosia",
        officialLanguages: ["Greek", "Turkish"]
      },
      {
        name: "Georgia",
        code: "ge",
        capital: "Tbilisi",
        officialLanguages: ["Georgian"]
      },
      {
        name: "India",
        code: "in",
        capital: "New Delhi",
        officialLanguages: ["Hindi", "English"]
      },
      {
        name: "Indonesia",
        code: "id",
        capital: "Jakarta",
        officialLanguages: ["Indonesian"]
      },
      {
        name: "Iran",
        code: "ir",
        capital: "Tehran",
        officialLanguages: ["Persian"]
      },
      {
        name: "Iraq",
        code: "iq",
        capital: "Baghdad",
        officialLanguages: ["Arabic", "Kurdish"]
      },
      {
        name: "Israel",
        code: "il",
        capital: "Jerusalem",
        officialLanguages: ["Hebrew", "Arabic"]
      },
      {
        name: "Japan",
        code: "jp",
        capital: "Tokyo",
        officialLanguages: ["Japanese"]
      },
      {
        name: "Jordan",
        code: "jo",
        capital: "Amman",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Kazakhstan",
        code: "kz",
        capital: "Nur-Sultan",
        officialLanguages: ["Kazakh", "Russian"]
      },
      {
        name: "Kuwait",
        code: "kw",
        capital: "Kuwait City",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Kyrgyzstan",
        code: "kg",
        capital: "Bishkek",
        officialLanguages: ["Kyrgyz", "Russian"]
      },
      {
        name: "Laos",
        code: "la",
        capital: "Vientiane",
        officialLanguages: ["Lao"]
      },
      {
        name: "Lebanon",
        code: "lb",
        capital: "Beirut",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Malaysia",
        code: "my",
        capital: "Kuala Lumpur",
        officialLanguages: ["Malay"]
      },
      {
        name: "Maldives",
        code: "mv",
        capital: "Malé",
        officialLanguages: ["Dhivehi"]
      },
      {
        name: "Mongolia",
        code: "mn",
        capital: "Ulaanbaatar",
        officialLanguages: ["Mongolian"]
      },
      {
        name: "Myanmar",
        code: "mm",
        capital: "Naypyidaw",
        officialLanguages: ["Burmese"]
      },
      {
        name: "Nepal",
        code: "np",
        capital: "Kathmandu",
        officialLanguages: ["Nepali"]
      },
      {
        name: "North Korea",
        code: "kp",
        capital: "Pyongyang",
        officialLanguages: ["Korean"]
      },
      {
        name: "Oman",
        code: "om",
        capital: "Muscat",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Pakistan",
        code: "pk",
        capital: "Islamabad",
        officialLanguages: ["Urdu"]
      },
      {
        name: "Palestine",
        code: "ps",
        capital: "Ramallah",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Philippines",
        code: "ph",
        capital: "Manila",
        officialLanguages: ["Tagalog", "English"]
      },
      {
        name: "Qatar",
        code: "qa",
        capital: "Doha",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Russia",
        code: "ru",
        capital: "Moscow",
        officialLanguages: ["Russian"]
      },
      {
        name: "Saudi Arabia",
        code: "sa",
        capital: "Riyadh",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Singapore",
        code: "sg",
        capital: "Singapore",
        officialLanguages: ["English", "Malay", "Mandarin", "Tamil"]
      },
      {
        name: "South Korea",
        code: "kr",
        capital: "Seoul",
        officialLanguages: ["Korean"]
      },
      {
        name: "Sri Lanka",
        code: "lk",
        capital : "Sri Jayawardenepura Kotte",
        officialLanguages: ["Sinhala", "Tamil"]
      },
      {
        name: "Syria",
        code: "sy",
        capital: "Damascus",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Taiwan",
        code: "tw",
        capital: "Taipei",
        officialLanguages: ["Mandarin"] 
      },
      {
        name: "Tajikistan",
        code: "tj",
        capital: "Dushanbe",
        officialLanguages: ["Tajik"]
      },
      {
        name: "Thailand",
        code: "th",
        capital: "Bangkok",
        officialLanguages: ["Thai"]
      },
      {
        name: "Timor-Leste",
        code: "tl",
        capital: "Dili",
        officialLanguages: ["Portuguese", "Tetum"]
      },
      {
        name: "Turkey",
        code: "tr",
        capital: "Ankara",
        officialLanguages: ["Turkish"]
      },
      {
        name: "Turkmenistan",
        code: "tm",
        capital: "Ashgabat",
        officialLanguages: ["Turkmen"]
      },
      {
        name: "United Arab Emirates",
        code: "ae",
        capital: "Abu Dhabi",
        officialLanguages: ["Arabic"]
      },
      {
        name: "Uzbekistan",
        code: "uz",
        capital: "Tashkent",
        officialLanguages: ["Uzbek"]
      },
      {
        name: "Vietnam",
        code: "vn",
        capital: "Hanoi",
        officialLanguages: ["Vietnamese"]
      },
      {
        name: "Yemen",
        code: "ye",
        capital: "Sana'a",
        officialLanguages: ["Arabic"]
      },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "Albania",
        code: "al",
        capital: "Tirana",
        officialLanguages: ["Albanian"]
      },
      {
        name: "Andorra",
        code: "ad",
        capital: "Andorra la Vella",
        officialLanguages: ["Catalan"]
      },
      {
        name: "Austria",
        code: "at",
        capital: "Vienna",
        officialLanguages: ["German"]
      },
      {
        name: "Belarus",
        code: "by",
        capital: "Minsk",
        officialLanguages: ["Belarusian", "Russian"]
      },
      {
        name: "Belgium",
        code: "be",
        capital: "Brussels",
        officialLanguages: ["Dutch", "French", "German"]
      },
      {
        name: "Bosnia and Herzegovina",
        code: "ba",
        capital: "Sarajevo",
        officialLanguages: ["Bosnian", "Croatian", "Serbian"]
      },
      {
        name: "Bulgaria",
        code: "bg",
        capital: "Sofia",
        officialLanguages: ["Bulgarian"]
      },
      {
        name: "Croatia",
        code: "hr",
        capital: "Zagreb",
        officialLanguages: ["Croatian"]
      },
      {
        name: "Czech Republic",
        code: "cz",
        capital: "Prague",
        officialLanguages: ["Czech"]
      },
      {
        name: "Denmark",
        code: "dk",
        capital: "Copenhagen",
        officialLanguages: ["Danish"]
      },
      {
        name: "Estonia",
        code: "ee",
        capital: "Tallinn",
        officialLanguages: ["Estonian"]
      },
      {
        name: "Finland",
        code: "fi",
        capital: "Helsinki",
        officialLanguages: ["Finnish", "Swedish"]
      },
      {
        name: "France",
        code: "fr",
        capital: "Paris",
        officialLanguages: ["French"]
      },
      {
        name: "Germany",
        code: "de",
        capital: "Berlin",
        officialLanguages: ["German"]
      },
      {
        name: "Greece",
        code: "gr",
        capital: "Athens",
        officialLanguages: ["Greek"]
      },
      {
        name: "Hungary",
        code: "hu",
        capital: "Budapest",
        officialLanguages: ["Hungarian"]
      },
      {
        name: "Iceland",
        code: "is",
        capital: "Reykjavik",
        officialLanguages: ["Icelandic"]
      },
      {
        name: "Ireland",
        code: "ie",
        capital: "Dublin",
        officialLanguages: ["Irish", "English"]
      },
      {
        name: "Italy",
        code: "it",
        capital: "Rome",
        officialLanguages: ["Italian"]
      },
      {
        name: "Latvia",
        code: "lv",
        capital: "Riga",
        officialLanguages: ["Latvian"]
      },
      {
        name: "Liechtenstein",
        code: "li",
        capital: "Vaduz",
        officialLanguages: ["German"]
      },
      {
        name: "Lithuania",
        code: "lt",
        capital: "Vilnius",
        officialLanguages: ["Lithuanian"]
      },
      {
        name: "Luxembourg",
        code: "lu",
        capital: "Luxembourg",
        officialLanguages: ["Luxembourgish", "French", "German"]
      },
      {
        name: "Malta",
        code: "mt",
        capital: "Valletta",
        officialLanguages: ["Maltese", "English"]
      },
      {
        name: "Moldova",
        code: "md",
        capital: "Chisinau",
        officialLanguages: ["Moldovan"]
      },
      {
        name: "Monaco",
        code: "mc",
        capital: "Monaco",
        officialLanguages: ["French"]
      },
      {
        name: "Montenegro",
        code: "me",
        capital: "Podgorica",
        officialLanguages: ["Montenegrin"]
      },
      {
        name: "Netherlands",
        code: "nl",
        capital: "Amsterdam",
        officialLanguages: ["Dutch"]
      },
      {
        name: "North Macedonia",
        code: "mk",
        capital: "Skopje",
        officialLanguages: ["Macedonian"]
      },
      {
        name: "Norway",
        code: "no",
        capital: "Oslo",
        officialLanguages: ["Norwegian"]
      },
      {
        name: "Poland",
        code: "pl",
        capital: "Warsaw",
        officialLanguages: ["Polish"]
      },
      {
        name: "Portugal",
        code: "pt",
        capital: "Lisbon",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Romania",
        code: "ro",
        capital: "Bucharest",
        officialLanguages: ["Romanian"]
      },
      {
        name: "San Marino",
        code: "sm",
        capital: "San Marino",
        officialLanguages: ["Italian"]
      },
      {
        name: "Serbia",
        code: "rs",
        capital: "Belgrade",
        officialLanguages: ["Serbian"]
      },
      {
        name: "Slovakia",
        code: "sk",
        capital: "Bratislava",
        officialLanguages: ["Slovak"]
      },
      {
        name: "Slovenia",
        code: "si",
        capital: "Ljubljana",
        officialLanguages: ["Slovene"]
      },
      {
        name: "Spain",
        code: "es",
        capital: "Madrid",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Sweden",
        code: "se",
        capital: "Stockholm",
        officialLanguages: ["Swedish"]
      },
      {
        name: "Switzerland",
        code: "ch",
        capital: "Bern",
        officialLanguages: ["German", "French", "Italian", "Romansh"]
      },
      {
        name: "Ukraine",
        code: "ua",
        capital: "Kyiv",
        officialLanguages: ["Ukrainian"]
      },
      {
        name: "United Kingdom",
        code: "gb",
        capital: "London",
        officialLanguages: ["English"]
      },
      {
        name: "Vatican City",
        code: "va",
        capital: "Vatican City",
        officialLanguages: ["Italian"]
      },
    ],
  },
  {
    name: "North America",
    countries: [
      {
        name: "Antigua and Barbuda",
        code: "ag",
        capital: "Saint John's",
        officialLanguages: ["English"]
      },
      {
        name: "Bahamas",
        code: "bs",
        capital: "Nassau",
        officialLanguages: ["English"]
      },
      {
        name: "Barbados",
        code: "bb",
        capital: "Bridgetown",
        officialLanguages: ["English"]
      },
      {
        name: "Belize",
        code: "bz",
        capital: "Belmopan",
        officialLanguages: ["English"]
      },
      {
        name: "Canada",
        code: "ca",
        capital: "Ottawa",
        officialLanguages: ["English", "French"]
      },
      {
        name: "Costa Rica",
        code: "cr",
        capital: "San Jos ",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Cuba",
        code: "cu",
        capital: "Havana",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Dominica",
        code: "dm",
        capital: "Roseau",
        officialLanguages: ["English"]
      },
      {
        name: "Dominican Republic",
        code: "do",
        capital: "Santo Domingo",
        officialLanguages: ["Spanish"]
      },
      {
        name: "El Salvador",
        code: "sv",
        capital: "San Salvador",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Grenada",
        code: "gd",
        capital: "Saint George's",
        officialLanguages: ["English"]
      },
      {
        name: "Guatemala",
        code: "gt",
        capital: "Guatemala City",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Haiti",
        code: "ht",
        capital: "Port-au-Prince",
        officialLanguages: ["French", "Haitian Creole"]
      },
      {
        name: "Honduras",
        code: "hn",
        capital: "Tegucigalpa",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Jamaica",
        code: "jm",
        capital: "Kingston",
        officialLanguages: ["English"]
      },
      {
        name: "Mexico",
        code: "mx",
        capital: "Mexico City",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Nicaragua",
        code: "ni",
        capital: "Managua",
        officialLanguages: ["Spanish"]

      },
      {
        name: "Panama",
        code: "pa",
        capital: "Panama City",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Saint Kitts and Nevis",
        code: "kn",
        capital: "Basseterre",
        officialLanguages: ["English"]
      },
      {
        name: "Saint Lucia",
        code: "lc",
        capital: "Castries",
        officialLanguages: ["English"]
      },
      {
        name: "Saint Vincent and the Grenadines",
        code: "vc",
        capital: "Kingstown",
        officialLanguages: ["English"]

      },
      {
        name: "Trinidad and Tobago",
        code: "tt",
        capital: "Port of Spain",
        officialLanguages: ["English "] 
      },
      {
        name: "United States",
        code: "us",
        capital: "Washington, D.C.",
        officialLanguages: ["English"]
      },
    ],
  },
  {
    name: "Oceania",
    countries: [
      {
        name: "Australia",
        code: "au",
        capital: "Canberra",
        officialLanguages : ["English"]
      },
      {
        name: "Fiji",
        code: "fj",
        capital: "Suva",
        officialLanguages: ["English", "Fijian", "Hindi"]
      },
      {
        name: "Kiribati",
        code: "ki",
        capital: "South Tarawa",
        officialLanguages: ["English", "Gilbertese"]
      },
      {
        name: "Marshall Islands",
        code: "mh",
        capital: "Majuro",
        officialLanguages: ["English", "Marshallese"]
      },
      {
        name: "Micronesia",
        code: "fm",
        capital: "Palikir",
        officialLanguages: ["English"]
      },
      {
        name: "Nauru",
        code: "nr",
        capital: "Yaren",
        officialLanguages: ["English", "Nauruan"]
      },
      {
        name: "New Zealand",
        code: "nz",
        capital: "Wellington",
        officialLanguages: ["English", "Maori"]
      },
      {
        name: "Palau",
        code: "pw",
        capital: "Ngerulmud",
        officialLanguages: ["English", "Palauan"]
      },
      {
        name: "Papua New Guinea",
        code: "pg",
        capital: "Port Moresby",
        officialLanguages: ["English", "Hiri Motu", "Tok Pisin"]
      },
      {
        name: "Samoa",
        code: "ws",
        capital: "Apia",
        officialLanguages: ["Samoan", "English"]
      },
      {
        name: "Solomon Islands",
        code: "sb",
        capital: "Honiara",
        officialLanguages: ["English"]
      },
      {
        name: "Tonga",
        code: "to",
        capital: "Nuku'alofa",
        officialLanguages: ["English  "]
      },
      {
        name: "Tuvalu",
        code: "tv",
        capital: "Funafuti",
        officialLanguages: ["English", "Tuvaluan"]
      },
      {
        name: "Vanuatu",
        code: "vu",
        capital: "Port Vila",
        officialLanguages: ["Bislama", "English", "French"]
      },
    ],
  },
  {
    name: "South America",
    countries: [
      {
        name: "Argentina",
        code: "ar",
        capital: "Buenos Aires",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Bolivia",
        code: "bo",
        capital: "Sucre",
        officialLanguages: ["Spanish", "Quechua", "Aymara"]
      },
      {
        name: "Brazil",
        code: "br",
        capital: "Brasília",
        officialLanguages: ["Portuguese"]
      },
      {
        name: "Chile",
        code: "cl",
        capital: "Santiago",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Colombia",
        code: "co",
        capital: "Bogot ",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Ecuador",
        code: "ec",
        capital: "Quito",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Guyana",
        code: "gy",
        capital: "Georgetown",
        officialLanguages: ["English"]
      },
      {
        name: "Paraguay",
        code: "py",
        capital: "Asunci ",
        officialLanguages: ["Spanish", "Guarani"]
      },
      {
        name: "Peru",
        code: "pe",
        capital: "Lima",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Suriname",
        code: "sr",
        capital: "Paramaribo",
        officialLanguages: ["Dutch"]
      },
      {
        name: "Uruguay",
        code: "uy",
        capital: "Montevideo",
        officialLanguages: ["Spanish"]
      },
      {
        name: "Venezuela",
        code: "ve",
        capital: "Caracas",
        officialLanguages: ["Spanish"]
      },
    ],
  },
];

export { continents };
