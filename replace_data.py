import json

base_path = "e:/KKN/WEB INFORMASI WISATA/wisata-tempur/src/data/"

destinations = [
    {"name": "Batu Yoni", "category": "sejarah", "featured": True},
    {"name": "Puncak 29", "category": "alam", "featured": True},
    {"name": "The New J-Cottage Coffee & Camping Ground", "category": "alam", "featured": True},
    {"name": "Puncak Tunggangan", "category": "alam", "featured": False},
    {"name": "Gadjah Mungkur", "category": "alam", "featured": False},
    {"name": "Batu Yoni Mbah Romban", "category": "sejarah", "featured": False},
    {"name": "Candi Angin", "category": "sejarah", "featured": False},
    {"name": "Masjid Gereja", "category": "sejarah", "featured": False},
    {"name": "Petilasan Mbah Kamunoyoso", "category": "sejarah", "featured": False},
    {"name": "Kampong Kopi", "category": "alam", "featured": False},
    {"name": "Kafe Kebon", "category": "alam", "featured": False}
]

dest_data = []
for i, d in enumerate(destinations, 1):
    dest_data.append({
        "id": i,
        "name": d["name"],
        "slug": d["name"].lower().replace(" ", "-").replace("&", "").replace("--", "-"),
        "zone": "Tempur",
        "category": d["category"],
        "shortDesc": f"Destinasi wisata {d['name']} di Desa Tempur.",
        "description": [f"Deskripsi lengkap untuk {d['name']} sedang dalam pengembangan."],
        "image": "/images/destinations/default.png",
        "gallery": [],
        "hours": "Buka Setiap Hari",
        "price": "Menyesuaikan",
        "tips": "",
        "coordinates": [-6.55, 110.69],
        "featured": d["featured"]
    })

with open(base_path + "destinations.json", "w", encoding="utf-8") as f:
    json.dump(dest_data, f, indent=2)

culinary = [
    "Ndank Kopi", "The New J-Cottage Coffee & Camping Ground", "Kampong Kopi", 
    "Kafe Kebon", "Goedang Roso", "Inidia Cafe", "Aren Sewu", "Mountaint Coffe"
]

culinary_data = []
for i, c in enumerate(culinary, 1):
    culinary_data.append({
        "id": i,
        "name": c,
        "slug": c.lower().replace(" ", "-").replace("&", "").replace("--", "-"),
        "type": "Kafe / Tempat Makan",
        "menuHighlight": "Menu Khas Tempur",
        "address": "Desa Tempur",
        "zone": "Tempur",
        "hours": "Buka Setiap Hari",
        "priceRange": "Rp 10.000 - Rp 50.000",
        "priceMin": 10000,
        "description": f"Tempat kuliner {c} di Desa Tempur menyajikan berbagai hidangan lezat.",
        "image": "/images/culinary/default.png",
        "coordinates": [-6.55, 110.69]
    })

with open(base_path + "culinary.json", "w", encoding="utf-8") as f:
    json.dump(culinary_data, f, indent=2)

accommodations = [
    "The New J-Cottage Coffee & Camping Ground", "Priggle Homestay", "Kafe Kebon", "Gudang Roso"
]

acc_data = []
for i, a in enumerate(accommodations, 1):
    acc_data.append({
        "id": i,
        "name": a,
        "slug": a.lower().replace(" ", "-").replace("&", "").replace("--", "-"),
        "type": "Penginapan",
        "address": "Desa Tempur",
        "zone": "Tempur",
        "priceRange": "Hubungi Pengelola",
        "priceMin": 100000,
        "facilities": ["Kamar Nyaman", "Kamar Mandi"],
        "description": f"Penginapan {a} di Desa Tempur dengan suasana asri.",
        "contact": "-",
        "distanceToCenter": "-",
        "rooms": 1,
        "image": "/images/accommodations/default.png",
        "coordinates": [-6.55, 110.69]
    })

with open(base_path + "accommodations.json", "w", encoding="utf-8") as f:
    json.dump(acc_data, f, indent=2)


facilities = [
    {"name": "Rest Area", "category": "Parkir", "icon": "🅿️"},
    {"name": "Poliklinik Kesehatan Desa (PKD)", "category": "Kesehatan", "icon": "🏥"},
    {"name": "Warung Kelontong & ATM Terdekat", "category": "Belanja", "icon": "🏪"},
    {"name": "Ojek", "category": "Transportasi", "icon": "🏍️"},
    {"name": "Pick Up", "category": "Transportasi", "icon": "🚙"},
    {"name": "Jeep Wisata", "category": "Transportasi", "icon": "🚙"}
]

fac_data = []
for i, f_item in enumerate(facilities, 1):
    fac_data.append({
        "id": i,
        "name": f_item["name"],
        "category": f_item["category"],
        "address": "Desa Tempur",
        "description": f"Fasilitas {f_item['name']} di Desa Tempur.",
        "icon": f_item["icon"],
        "coordinates": [-6.55, 110.69]
    })

with open(base_path + "facilities.json", "w", encoding="utf-8") as f:
    json.dump(fac_data, f, indent=2)

print("Replacement complete.")
