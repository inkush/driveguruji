# DriveGuruji — Vehicle Data Extraction Prompt

## HOW TO USE
1. Copy the prompt below
2. Paste into Claude.ai (Opus/Sonnet) or Gemini Advanced
3. Run it **one brand at a time** for best results
4. Replace `[BRAND_NAME]` with the actual brand (e.g., "Maruti Suzuki", "Hyundai", "Royal Enfield")
5. Save each output as `data/[brand-slug].json`
6. Repeat for every brand

---

## THE PROMPT (copy everything below this line)

```
You are an automotive data engineer building a comprehensive vehicle database for an Indian automotive portal called DriveGuruji (driveguruji.com).

Your task: Extract EVERY currently sold model from [BRAND_NAME] in India as of 2025-2026. Include discontinued models only if they were available within the last 2 years.

For EACH model, return a JSON object with this EXACT structure:

{
  "id": "brand-model-name",           // kebab-case slug (e.g., "maruti-swift", "hyundai-creta-ev")
  "name": "Model Name",               // just model name without brand (e.g., "Swift", "Creta EV")
  "brand": "Brand Name",              // full brand name (e.g., "Maruti Suzuki", "Hyundai")
  "brandSlug": "brand-slug",          // kebab-case (e.g., "maruti-suzuki", "hyundai")
  "status": "on-sale",                // "on-sale" | "upcoming" | "discontinued"
  "launchYear": 2024,                 // year of latest generation launch in India
  "bodyType": "SUV",                  // "Hatchback" | "Sedan" | "SUV" | "Compact SUV" | "Midsize SUV" | "Fullsize SUV" | "Micro SUV" | "MPV" | "MUV" | "Coupe" | "Pickup" | "Van" | "Motorcycle" | "Scooter" | "Electric Scooter"
  "segment": "C-SUV",                 // "Mini" | "Entry Hatch" | "Premium Hatch" | "Sub-4m SUV" | "C-SUV" | "D-SUV" | "E-SUV" | "Entry Sedan" | "Mid Sedan" | "Premium Sedan" | "Luxury" | "Commuter Bike" | "Sport Bike" | "Cruiser" | "Adventure" | "Scooter"

  "priceExShowroom": {
    "min": 649000,                    // base variant ex-showroom Delhi in ₹ (integer, no decimals)
    "max": 964000,                    // top variant ex-showroom Delhi in ₹
    "displayMin": "₹6.49L",          // human-readable
    "displayMax": "₹9.64L",
    "displayRange": "₹6.49 – 9.64 Lakh"
  },

  "variants": [
    {
      "name": "LXi",                  // variant name exactly as sold
      "price": 649000,                // ex-showroom Delhi ₹
      "engine": "1197cc Petrol",
      "transmission": "5MT",
      "fuelType": "Petrol",
      "keyDifference": "Base — manual AC, no infotainment"  // what makes this variant different
    },
    {
      "name": "VXi",
      "price": 749000,
      "engine": "1197cc Petrol",
      "transmission": "5MT",
      "fuelType": "Petrol",
      "keyDifference": "Touchscreen, push-button start"
    }
    // ... ALL variants, every single one including AMT/AT/CNG/diesel sub-variants
  ],

  "engine": {
    "options": [
      {
        "name": "1.2L Petrol",
        "displacement": "1197cc",
        "type": "Inline-4 / Inline-3 / V-Twin / Single / etc.",
        "fuelType": "Petrol",          // "Petrol" | "Diesel" | "Electric" | "CNG" | "Hybrid" | "Plug-in Hybrid"
        "power": "90 PS @ 6000 rpm",
        "powerPS": 90,                 // just the number
        "torque": "113 Nm @ 4400 rpm",
        "torqueNm": 113,
        "transmission": ["5MT", "AMT"],
        "driveType": "FWD"             // "FWD" | "RWD" | "AWD" | "4WD" | "Chain" | "Belt"
      }
    ]
  },

  "electric": null,                    // null if not EV, otherwise:
  // "electric": {
  //   "batteryCapacity": "51.4 kWh",
  //   "batteryType": "Lithium-ion NMC",
  //   "rangeARAI": "473 km",
  //   "rangeReal": "350-380 km",       // estimated real-world
  //   "chargingAC": "11 kW (0-100% in 6h)",
  //   "chargingDC": "50 kW (10-80% in 58 min)",
  //   "motorPower": "150 kW / 204 PS",
  //   "motorTorque": "255 Nm",
  //   "regenerativeBraking": true,
  //   "v2l": true,                      // vehicle-to-load
  //   "v2h": false                      // vehicle-to-home
  // },

  "performance": {
    "topSpeed": "180 km/h",
    "acceleration0to100": "11.5 sec",  // null if not available
    "gradeability": null,              // for SUVs/off-roaders
    "wadingDepth": null                // mm, for SUVs
  },

  "mileage": {
    "araiClaimed": "24.80 km/l",      // or "473 km" for EVs
    "cityReal": "18-20 km/l",         // estimated real city driving
    "highwayReal": "22-24 km/l",      // estimated real highway
    "tankCapacity": "37 litres",       // or battery kWh for EVs
    "fuelCostPerKm": "₹5.8"           // approximate at current fuel prices
  },

  "dimensions": {
    "length": 3845,                    // mm
    "width": 1735,
    "height": 1530,
    "wheelbase": 2450,
    "groundClearance": 163,            // mm — very important for Indian roads
    "bootSpace": "268 litres",         // or "268-947 litres" if seats fold
    "kerbWeight": "890-945 kg",
    "turningRadius": "4.8m",
    "seatingCapacity": 5,
    "doors": 5                         // 2/4/5 for cars, null for bikes
  },

  "features": {
    "infotainment": {
      "screenSize": "9-inch",
      "system": "SmartPlay Pro+",
      "appleCarPlay": true,
      "androidAuto": true,
      "connectedCar": false,
      "wirelessCharging": false,
      "speakers": 4,
      "navigation": false
    },
    "comfort": {
      "ac": "Manual / Auto Climate",
      "ventilatedSeats": false,
      "heatedSeats": false,
      "sunroof": false,                // "None" | "Single-pane" | "Panoramic"
      "rearACVents": true,
      "pushButtonStart": true,
      "keylessEntry": true,
      "cruiseControl": false,
      "steeringType": "Power (Electric)",
      "adjustableSteering": "Tilt",    // "Tilt" | "Tilt + Telescopic"
      "rearParkingSensors": true,
      "rearCamera": true,
      "camera360": false,
      "autoDimmingMirror": false,
      "electricORVMs": true,
      "rainSensingWipers": false
    },
    "safety": {
      "ncapRating": null,              // "5-star GNCAP" | "4-star GNCAP" | "3-star" | null
      "airbags": 6,
      "abs": true,
      "ebd": true,
      "esp": true,                     // electronic stability program
      "hillHoldAssist": true,
      "hillDescentControl": false,
      "tractionControl": true,
      "isofix": true,
      "tpms": true,                    // tyre pressure monitoring
      "adas": false,                   // Advanced Driver Assistance
      "adasLevel": null,               // "Level 1" | "Level 2" | null
      "adasFeatures": [],              // ["Lane Keep Assist", "Adaptive Cruise Control", "Auto Emergency Braking", "Blind Spot Monitor", "Rear Cross Traffic Alert"]
      "parkAssist": false,
      "dashcam": false,
      "surroundViewMonitor": false
    },
    "lighting": {
      "headlamps": "LED Projector",    // "Halogen" | "LED" | "LED Projector" | "Matrix LED"
      "drl": true,
      "fogLamps": true,
      "autoHeadlamps": false,
      "cornering": false
    }
  },

  "colors": [
    "Sizzling Red", "Pearl Arctic White", "Magma Grey", "Luster Blue", "Solid Fire Red", "Splendid Silver"
  ],

  "prosAndCons": {
    "pros": [
      "Best-in-class fuel efficiency at 24.8 km/l claimed",
      "Peppy 90 PS engine feels quick in city",
      "Unbeatable resale value — 70% after 3 years",
      "6 airbags standard across all variants",
      "Light steering perfect for city driving"
    ],
    "cons": [
      "No diesel option anymore — dealbreaker for high-km drivers",
      "AMT feels jerky in stop-go traffic",
      "Rear seat is tight for 3 adults on long drives",
      "Boot space at 268L is smallest in segment",
      "No sunroof even in top variant"
    ]
  },

  "verdict": "India's most reliable hatchback. If mileage and resale value are your top priorities, Swift is still the undisputed king. The AMT isn't great, so go for the manual if possible.",

  "gurujiTake": "Swift lene ka mann hai? Mileage aur resale mein koi competition nahi. Lekin agar backseat mein family baithti hai regularly, Baleno dekh lo — thoda zyada space milega same price mein.",

  "competitors": ["baleno", "i20", "glanza", "jazz"],  // slugs of direct rivals

  "targetBuyer": "City commuters prioritizing mileage and resale value. First-time buyers. Families needing a reliable second car.",

  "bestVariant": {
    "value": "VXi",                    // best value-for-money variant
    "reason": "Gets touchscreen, push-button start, alloy wheels at ₹1L over base — sweet spot",
    "enthusiast": "ZXi MT",            // for enthusiasts
    "enthusiastReason": "Top features + manual gearbox = best driving experience"
  },

  "onRoadEstimate": {
    "delhi": {
      "baseVariant": 799000,           // approximate on-road ₹
      "topVariant": 1180000,
      "breakdown": {
        "exShowroom": 649000,
        "rto": 52000,
        "insurance": 28000,
        "tcs": 0,                      // 1% TCS if ex-showroom > ₹10L
        "accessories": 15000,
        "fastag": 500,
        "total": 744500
      }
    }
  },

  "serviceAndOwnership": {
    "warranty": "2 years / 40,000 km",
    "extendedWarranty": "Up to 5 years available",
    "serviceCost": "₹3,500 – 5,000 per service",
    "serviceInterval": "10,000 km or 1 year",
    "insuranceCostYear1": "₹18,000 – 28,000 (comprehensive)",
    "sparePartsCost": "Low — Maruti parts are cheapest",
    "resaleValue3yr": "68-72%",
    "resaleValue5yr": "55-60%"
  },

  "media": {
    "images": {
      "hero": "https://example.com/swift-hero.jpg",      // main display image
      "exterior": [],   // we'll fill these later with real images
      "interior": [],
      "colors": []
    }
  },

  "seo": {
    "title": "Maruti Swift Price in India 2025 — Specs, Mileage, Variants | DriveGuruji",
    "description": "Maruti Swift price starts at ₹6.49 Lakh. Check real mileage (24.8 km/l), all 8 variants, safety features, on-road price, and honest review on DriveGuruji.",
    "keywords": ["swift price", "maruti swift 2025", "swift mileage", "swift vs baleno", "swift on road price delhi"],
    "faqSchema": [
      {"q": "What is the price of Maruti Swift 2025?", "a": "Maruti Swift 2025 price ranges from ₹6.49 to ₹9.64 Lakh (ex-showroom Delhi)."},
      {"q": "What is the real mileage of Maruti Swift?", "a": "Maruti Swift gives 18-20 km/l in city and 22-24 km/l on highway in real-world conditions."},
      {"q": "How many airbags does Swift have?", "a": "All variants of the 2024 Maruti Swift come with 6 airbags as standard."},
      {"q": "Is Swift available in diesel?", "a": "No, the current generation Maruti Swift is available only in petrol. The diesel option was discontinued in 2020."},
      {"q": "What is the boot space of Maruti Swift?", "a": "The Maruti Swift has a boot space of 268 litres."}
    ]
  },

  "lastUpdated": "2025-03-07"
}

CRITICAL RULES:
1. ALL prices must be in Indian Rupees (₹), ex-showroom Delhi
2. Use the LATEST 2025-2026 prices — not old ones
3. Include EVERY variant currently on sale (don't skip CNG/diesel/automatic sub-variants)
4. Real-world mileage estimates must be honest (15-25% less than ARAI claimed)
5. Pros/Cons must be HONEST — no OEM-pleasing fluff. Call out real problems.
6. The "gurujiTake" must be in Hinglish — conversational, like a trusted friend advising
7. Competitor slugs must match the id format (kebab-case)
8. For bikes/scooters: adapt dimensions (no doors/boot), use relevant fields
9. If data is genuinely unknown, use null — don't make up numbers
10. For upcoming/unreleased cars, use expected/estimated values and mark clearly

Now generate the COMPLETE JSON array for ALL models currently sold by [BRAND_NAME] in India.

Output format: Return a valid JSON array wrapped in ```json code blocks. No explanatory text before or after — just the data.
```

---

## BRANDS TO RUN (India market priority order)

### Tier 1 — Run these first (80% of Indian market)
1. Maruti Suzuki (17+ models)
2. Hyundai (12+ models)
3. Tata Motors (11+ models)
4. Mahindra (9+ models)
5. Kia (5+ models)
6. Toyota (7+ models)
7. Honda (6+ models)
8. Hero MotoCorp (22+ bikes)
9. Bajaj Auto (16+ bikes)
10. Royal Enfield (14+ bikes)
11. TVS Motor (18+ bikes/scooters)
12. Honda 2-Wheeler (15+ bikes/scooters)

### Tier 2 — Major players
13. Volkswagen
14. Skoda
15. MG Motor
16. Citroen
17. Jeep
18. Nissan/Renault
19. Yamaha
20. Suzuki 2-Wheeler
21. KTM
22. Kawasaki
23. Triumph

### Tier 3 — Premium/Luxury
24. BMW (cars)
25. Mercedes-Benz
26. Audi
27. Volvo
28. Porsche
29. Land Rover
30. Lexus
31. BMW Motorrad (bikes)
32. Ducati
33. Harley-Davidson
34. Aprilia

### Tier 4 — New entrants
35. BYD
36. VinFast
37. Ora (Great Wall)
38. Ather (electric scooters)
39. Ola Electric
40. Simple Energy

---

## AFTER EXTRACTION — Merge Script

After running the prompt for each brand, save outputs as:
```
data/
├── maruti-suzuki.json
├── hyundai.json
├── tata-motors.json
├── ...
└── ola-electric.json
```

Then merge into one master file:
```javascript
// merge-data.js
const fs = require('fs');
const path = require('path');

const dataDir = './data';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
const allVehicles = [];

files.forEach(file => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
  allVehicles.push(...data);
});

// Sort by brand, then price
allVehicles.sort((a, b) => {
  if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
  return a.priceExShowroom.min - b.priceExShowroom.min;
});

fs.writeFileSync('vehicles-master.json', JSON.stringify(allVehicles, null, 2));
console.log(`✅ Merged ${allVehicles.length} vehicles from ${files.length} brands`);
```

---

## ESTIMATED OUTPUT
- ~40 brands × 8-20 models each = 400-600 vehicles
- Each vehicle JSON = ~3-4 KB
- Total master file = ~2 MB
- This powers: search, filters, comparisons, detail pages, SEO pages, EMI calculator

---

## TIPS FOR BEST RESULTS
1. **Claude Opus** gives the most accurate variant-level pricing
2. **Gemini 1.5 Pro** is faster but sometimes hallucinates prices — double-check
3. Run Tier 1 brands first — they cover 80% of Indian market traffic
4. For bikes, the prompt auto-adapts (no boot space, doors etc.)
5. After merging, spot-check 10 random vehicles against official sites
6. Re-run every month to catch price updates and new launches
