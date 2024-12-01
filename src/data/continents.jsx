const continents = [
  {
    name: "Africa",
    countries: [
      {
        name: "Algeria",
        code: "dz",
        capital: "Algiers",
      },
      {
        name: "Angola",
        code: "ao",
        capital: "Luanda",
      },
      {
        name: "Benin",
        code: "bj",
        capital: "Porto-Novo",
      },
      {
        name: "Botswana",
        code: "bw",
        capital: "Gaborone",
      },
      {
        name: "Burkina Faso",
        code: "bf",
        capital: "Ouagadoug ",
      },
      {
        name: "Burundi",
        code: "bi",
        capital : "Gitega",
      },
      {
        name: "Cameroon",
        code: "cm",
        capital: "Yaound ",
      },
      {
        name: "Cape Verde",
        code: "cv",
        capital: "Praia",
      },
      {
        name: "Central African Republic",
        code: "cf",
        capital: "Bangui",
      },
      {
        name: "Chad",
        code: "td",
        capital: "N'Djam ",
      },
      {
        name: "Comoros",
        code: "km",
        capital: "Moroni",
      },
      {
        name: "Democratic Republic of the Congo",
        code: "cd",
        capital: "Kinshasa",
      },
      {
        name: "Republic of the Congo",
        code: "cg",
        capital: "Brazzaville",
      },
      {
        name: "Djibouti",
        code: "dj",
        capital: "Djibouti",
      },
      {
        name: "Egypt",
        code: "eg",
        capital: "Cairo",
      },
      {
        name: "Equatorial Guinea",
        code: "gq",
        capital: "Malabo",
      },
      {
        name: "Eritrea",
        code: "er",
        capital: "Asmara",
      },
      {
        name: "Eswatini",
        code: "sz",
        capital: "Mbabane",
      },
      {
        name: "Ethiopia",
        code: "et",
        capital: "Addis Ababa",
      },
      {
        name: "Gabon",
        code: "ga",
        capital: "Libreville",
      },
      {
        name: "Gambia",
        code: "gm",
        capital: "Banjul",
      },
      {
        name: "Ghana",
        code: "gh",
        capital: "Accra",
      },
      {
        name: "Guinea",
        code: "gn",
        capital: "Conakry",
      },
      {
        name: "Guinea-Bissau",
        code: "gw",
        capital: "Bissau",
      },
      {
        name: "Ivory Coast",
        code: "ci",
        capital: "Yamoussoukro",
      },
      {
        name: "Kenya",
        code: "ke",
        capital: "Nairobi",
      },
      {
        name: "Lesotho",
        code: "ls",
        capital: "Maseru",
      },
      {
        name: "Liberia",
        code: "lr",
        capital: "Monrovia",
      },
      {
        name: "Libya",
        code: "ly",
        capital: "Tripoli",
      },
      {
        name: "Madagascar",
        code: "mg",
        capital: "Antananarivo",
      },
      {
        name: "Malawi",
        code: "mw",
        capital: "Lilongwe",
      },
      {
        name: "Mali",
        code: "ml",
        capital: "Bamako",
      },
      {
        name: "Mauritania",
        code: "mr",
        capital: "Nouakchott",
      },
      {
        name: "Mauritius",
        code: "mu",
        capital: "Port Louis",
      },
      {
        name: "Morocco",
        code: "ma",
        capital: "Rabat",
      },
      {
        name: "Mozambique",
        code: "mz",
        capital: "Maputo",
      },
      {
        name: "Namibia",
        code: "na",
        capital: "Windhoek",
      },
      {
        name: "Niger",
        code: "ne",
        capital: "Niamey",
      },
      {
        name: "Nigeria",
        code: "ng",
        capital: "Abuja",
      },
      {
        name: "Rwanda",
        code: "rw",
        capital: "Kigali",
      },
      {
        name: "Sao Tome and Principe",
        code: "st",
        capital: "Sao Tome",
      },
      {
        name: "Senegal",
        code: "sn",
        capital: "Dakar",
      },
      {
        name: "Seychelles",
        code: "sc",
        capital: "Victoria",
      },
      {
        name: "Sierra Leone",
        code: "sl",
        capital: "Freetown",
      },
      {
        name: "Somalia",
        code: "so",
        capital: "Mogadishu",
      },
      {
        name: "South Africa",
        code: "za",
        capital: "Pretoria",
      },
      {
        name: "South Sudan",
        code: "ss",
        capital: "Juba",
      },
      {
        name: "Sudan",
        code: "sd",
        capital: "Khartoum",
      },
      {
        name: "Tanzania",
        code: "tz",
        capital: "Dodoma",
      },
      {
        name: "Togo",
        code: "tg",
        capital: "Lome",
      },
      {
        name: "Tunisia",
        code: "tn",
        capital: "Tunis",
      },
      {
        name: "Uganda",
        code: "ug",
        capital: "Kampala",
      },
      {
        name: "Zambia",
        code: "zm",
        capital: "Lusaka",
      },
      {
        name: "Zimbabwe",
        code: "zw",
        capital: "Harare",
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
      },
      {
        name: "Armenia",
        code: "am",
        capital: "Yerevan",
      },
      {
        name: "Azerbaijan",
        code: "az",
        capital: "Baku",
      },
      {
        name: "Bahrain",
        code: "bh",
        capital: "Manama",
      },
      {
        name: "Bangladesh",
        code: "bd",
        capital: "Dhaka",
      },
      {
        name: "Bhutan",
        code: "bt",
        capital: "Thimphu",
      },
      {
        name: "Brunei",
        code: "bn",
        capital: "Bandar Seri Begawan",
      },
      {
        name: "Cambodia",
        code: "kh",
        capital: "Phnom Penh",
      },
      {
        name: "China",
        code: "cn",
        capital: "Beijing",
      },
      {
        name: "Cyprus",
        code: "cy",
        capital: "Nicosia",
      },
      {
        name: "Georgia",
        code: "ge",
        capital: "Tbilisi",
      },
      {
        name: "India",
        code: "in",
        capital: "New Delhi",
      },
      {
        name: "Indonesia",
        code: "id",
        capital: "Jakarta",
      },
      {
        name: "Iran",
        code: "ir",
        capital: "Tehran",
      },
      {
        name: "Iraq",
        code: "iq",
        capital: "Baghdad",
      },
      {
        name: "Israel",
        code: "il",
        capital: "Jerusalem",
      },
      {
        name: "Japan",
        code: "jp",
        capital: "Tokyo",
      },
      {
        name: "Jordan",
        code: "jo",
        capital: "Amman",
      },
      {
        name: "Kazakhstan",
        code: "kz",
        capital: "Nur-Sultan",
      },
      {
        name: "Kuwait",
        code: "kw",
        capital: "Kuwait City",
      },
      {
        name: "Kyrgyzstan",
        code: "kg",
        capital: "Bishkek",
      },
      {
        name: "Laos",
        code: "la",
        capital: "Vientiane",
      },
      {
        name: "Lebanon",
        code: "lb",
        capital: "Beirut",
      },
      {
        name: "Malaysia",
        code: "my",
        capital: "Kuala Lumpur",
      },
      {
        name: "Maldives",
        code: "mv",
        capital: "Malé",
      },
      {
        name: "Mongolia",
        code: "mn",
        capital: "Ulaanbaatar",
      },
      {
        name: "Myanmar",
        code: "mm",
        capital: "Naypyidaw",
      },
      {
        name: "Nepal",
        code: "np",
        capital: "Kathmandu",
      },
      {
        name: "North Korea",
        code: "kp",
        capital: "Pyongyang",
      },
      {
        name: "Oman",
        code: "om",
        capital: "Muscat",
      },
      {
        name: "Pakistan",
        code: "pk",
        capital: "Islamabad",
      },
      {
        name: "Palestine",
        code: "ps",
        capital: "Ramallah",
      },
      {
        name: "Philippines",
        code: "ph",
        capital: "Manila",
      },
      {
        name: "Qatar",
        code: "qa",
        capital: "Doha",
      },
      {
        name: "Russia",
        code: "ru",
        capital: "Moscow",
      },
      {
        name: "Saudi Arabia",
        code: "sa",
        capital: "Riyadh",
      },
      {
        name: "Singapore",
        code: "sg",
        capital: "Singapore",
      },
      {
        name: "South Korea",
        code: "kr",
        capital: "Seoul",
      },
      {
        name: "Sri Lanka",
        code: "lk",
        capital : "Sri Jayawardenepura Kotte",
      },
      {
        name: "Syria",
        code: "sy",
        capital: "Damascus",
      },
      {
        name: "Taiwan",
        code: "tw",
        capital: "Taipei",
      },
      {
        name: "Tajikistan",
        code: "tj",
        capital: "Dushanbe",
      },
      {
        name: "Thailand",
        code: "th",
        capital: "Bangkok",
      },
      {
        name: "Timor-Leste",
        code: "tl",
        capital: "Dili",
      },
      {
        name: "Turkey",
        code: "tr",
        capital: "Ankara",
      },
      {
        name: "Turkmenistan",
        code: "tm",
        capital: "Ashgabat",
      },
      {
        name: "United Arab Emirates",
        code: "ae",
        capital: "Abu Dhabi",
      },
      {
        name: "Uzbekistan",
        code: "uz",
        capital: "Tashkent",
      },
      {
        name: "Vietnam",
        code: "vn",
        capital: "Hanoi",
      },
      {
        name: "Yemen",
        code: "ye",
        capital: "Sana'a",
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
      },
      {
        name: "Andorra",
        code: "ad",
        capital: "Andorra la Vella",
      },
      {
        name: "Austria",
        code: "at",
        capital: "Vienna",
      },
      {
        name: "Belarus",
        code: "by",
        capital: "Minsk",
      },
      {
        name: "Belgium",
        code: "be",
        capital: "Brussels",
      },
      {
        name: "Bosnia and Herzegovina",
        code: "ba",
        capital: "Sarajevo",
      },
      {
        name: "Bulgaria",
        code: "bg",
        capital: "Sofia",
      },
      {
        name: "Croatia",
        code: "hr",
        capital: "Zagreb",
      },
      {
        name: "Czech Republic",
        code: "cz",
        capital: "Prague",
      },
      {
        name: "Denmark",
        code: "dk",
        capital: "Copenhagen",
      },
      {
        name: "Estonia",
        code: "ee",
        capital: "Tallinn",
      },
      {
        name: "Finland",
        code: "fi",
        capital: "Helsinki",
      },
      {
        name: "France",
        code: "fr",
        capital: "Paris",
      },
      {
        name: "Germany",
        code: "de",
        capital: "Berlin",
      },
      {
        name: "Greece",
        code: "gr",
        capital: "Athens",
      },
      {
        name: "Hungary",
        code: "hu",
        capital: "Budapest",
      },
      {
        name: "Iceland",
        code: "is",
        capital: "Reykjavik",
      },
      {
        name: "Ireland",
        code: "ie",
        capital: "Dublin",
      },
      {
        name: "Italy",
        code: "it",
        capital: "Rome",
      },
      {
        name: "Latvia",
        code: "lv",
        capital: "Riga",
      },
      {
        name: "Liechtenstein",
        code: "li",
        capital: "Vaduz",
      },
      {
        name: "Lithuania",
        code: "lt",
        capital: "Vilnius",
      },
      {
        name: "Luxembourg",
        code: "lu",
        capital: "Luxembourg",
      },
      {
        name: "Malta",
        code: "mt",
        capital: "Valletta",
      },
      {
        name: "Moldova",
        code: "md",
        capital: "Chisinau",
      },
      {
        name: "Monaco",
        code: "mc",
        capital: "Monaco",
      },
      {
        name: "Montenegro",
        code: "me",
        capital: "Podgorica",
      },
      {
        name: "Netherlands",
        code: "nl",
        capital: "Amsterdam",
      },
      {
        name: "North Macedonia",
        code: "mk",
        capital: "Skopje",
      },
      {
        name: "Norway",
        code: "no",
        capital: "Oslo",
      },
      {
        name: "Poland",
        code: "pl",
        capital: "Warsaw",
      },
      {
        name: "Portugal",
        code: "pt",
        capital: "Lisbon",
      },
      {
        name: "Romania",
        code: "ro",
        capital: "Bucharest",
      },
      {
        name: "San Marino",
        code: "sm",
        capital: "San Marino",
      },
      {
        name: "Serbia",
        code: "rs",
        capital: "Belgrade",
      },
      {
        name: "Slovakia",
        code: "sk",
        capital: "Bratislava",
      },
      {
        name: "Slovenia",
        code: "si",
        capital: "Ljubljana",
      },
      {
        name: "Spain",
        code: "es",
        capital: "Madrid",
      },
      {
        name: "Sweden",
        code: "se",
        capital: "Stockholm",
      },
      {
        name: "Switzerland",
        code: "ch",
        capital: "Bern",
      },
      {
        name: "Ukraine",
        code: "ua",
        capital: "Kyiv",
      },
      {
        name: "United Kingdom",
        code: "gb",
        capital: "London",
      },
      {
        name: "Vatican City",
        code: "va",
        capital: "Vatican City",
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
      },
      {
        name: "Bahamas",
        code: "bs",
        capital: "Nassau",
      },
      {
        name: "Barbados",
        code: "bb",
        capital: "Bridgetown",
      },
      {
        name: "Belize",
        code: "bz",
        capital: "Belmopan",
      },
      {
        name: "Canada",
        code: "ca",
        capital: "Ottawa",
      },
      {
        name: "Costa Rica",
        code: "cr",
        capital: "San Jos ",
      },
      {
        name: "Cuba",
        code: "cu",
        capital: "Havana",
      },
      {
        name: "Dominica",
        code: "dm",
        capital: "Roseau",
      },
      {
        name: "Dominican Republic",
        code: "do",
        capital: "Santo Domingo",
      },
      {
        name: "El Salvador",
        code: "sv",
        capital: "San Salvador",
      },
      {
        name: "Grenada",
        code: "gd",
        capital: "Saint George's",
      },
      {
        name: "Guatemala",
        code: "gt",
        capital: "Guatemala City",
      },
      {
        name: "Haiti",
        code: "ht",
        capital: "Port-au-Prince",
      },
      {
        name: "Honduras",
        code: "hn",
        capital: "Tegucigalpa",
      },
      {
        name: "Jamaica",
        code: "jm",
        capital: "Kingston",
      },
      {
        name: "Mexico",
        code: "mx",
        capital: "Mexico City",
      },
      {
        name: "Nicaragua",
        code: "ni",
        capital: "Managua",
      },
      {
        name: "Panama",
        code: "pa",
        capital: "Panama City",
      },
      {
        name: "Saint Kitts and Nevis",
        code: "kn",
        capital: "Basseterre",
      },
      {
        name: "Saint Lucia",
        code: "lc",
        capital: "Castries",
      },
      {
        name: "Saint Vincent and the Grenadines",
        code: "vc",
        capital: "Kingstown",
      },
      {
        name: "Trinidad and Tobago",
        code: "tt",
        capital: "Port of Spain",
      },
      {
        name: "United States",
        code: "us",
        capital: "Washington, D.C.",
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
      },
      {
        name: "Fiji",
        code: "fj",
        capital: "Suva",
      },
      {
        name: "Kiribati",
        code: "ki",
        capital: "South Tarawa",
      },
      {
        name: "Marshall Islands",
        code: "mh",
        capital: "Majuro",
      },
      {
        name: "Micronesia",
        code: "fm",
        capital: "Palikir",
      },
      {
        name: "Nauru",
        code: "nr",
        capital: "Yaren",
      },
      {
        name: "New Zealand",
        code: "nz",
        capital: "Wellington",
      },
      {
        name: "Palau",
        code: "pw",
        capital: "Ngerulmud",
      },
      {
        name: "Papua New Guinea",
        code: "pg",
        capital: "Port Moresby",
      },
      {
        name: "Samoa",
        code: "ws",
        capital: "Apia",
      },
      {
        name: "Solomon Islands",
        code: "sb",
        capital: "Honiara",
      },
      {
        name: "Tonga",
        code: "to",
        capital: "Nuku'alofa",
      },
      {
        name: "Tuvalu",
        code: "tv",
        capital: "Funafuti",
      },
      {
        name: "Vanuatu",
        code: "vu",
        capital: "Port Vila",
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
      },
      {
        name: "Bolivia",
        code: "bo",
        capital: "Sucre",
      },
      {
        name: "Brazil",
        code: "br",
        capital: "Brasília",
      },
      {
        name: "Chile",
        code: "cl",
        capital: "Santiago",
      },
      {
        name: "Colombia",
        code: "co",
        capital: "Bogot ",
      },
      {
        name: "Ecuador",
        code: "ec",
        capital: "Quito",
      },
      {
        name: "Guyana",
        code: "gy",
        capital: "Georgetown",
      },
      {
        name: "Paraguay",
        code: "py",
        capital: "Asunci ",
      },
      {
        name: "Peru",
        code: "pe",
        capital: "Lima",
      },
      {
        name: "Suriname",
        code: "sr",
        capital: "Paramaribo",
      },
      {
        name: "Uruguay",
        code: "uy",
        capital: "Montevideo",
      },
      {
        name: "Venezuela",
        code: "ve",
        capital: "Caracas",
      },
    ],
  },
];

export { continents };
