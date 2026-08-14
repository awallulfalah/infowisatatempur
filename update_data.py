import json

base_path = "e:/KKN/WEB INFORMASI WISATA/wisata-tempur/src/data/"

# DESTINATIONS
with open(base_path + "destinations.json", "r", encoding="utf-8") as f:
    destinations = json.load(f)

# Keep track of existing names (lowercase) to avoid duplicates, although we might update them
existing_dest_names = {d["name"].lower(): d for d in destinations}

new_destinations = [
    {"name": "Batu Yoni", "category": "sejarah", "featured": True},
    {"name": "Puncak 29", "category": "alam", "featured": True},
    {"name": "J Cottage", "category": "alam", "featured": True}, 
    {"name": "Puncak Tunggangan", "category": "alam", "featured": False},
    {"name": "Gadjah Mungkur", "category": "alam", "featured": False},
    {"name": "Batu Yoni Mbah Romban", "category": "sejarah", "featured": False},
    {"name": "Candi Angin", "category": "sejarah", "featured": False},
    {"name": "Masjid Gereja", "category": "sejarah", "featured": False},
    {"name": "Petilasan Mbah Kamunoyoso", "category": "sejarah", "featured": False},
    {"name": "Kampong Kopi", "category": "alam", "featured": False}, 
    {"name": "Kafe Kebon", "category": "alam", "featured": False}
]

next_id = max(d["id"] for d in destinations) + 1 if destinations else 1

for nd in new_destinations:
    match = None
    for ed_name, ed in existing_dest_names.items():
        if nd["name"].lower() in ed_name or ed_name in nd["name"].lower():
            match = ed
            break
            
    if match:
        # Update if it exists
        match["category"] = nd["category"]
        match["featured"] = match.get("featured", False) or nd["featured"]
    else:
        destinations.append({
            "id": next_id,
            "name": nd["name"],
            "slug": nd["name"].lower().replace(" ", "-"),
            "zone": "Tempur",
            "category": nd["category"],
            "shortDesc": f"Destinasi wisata {nd['name']} di Desa Tempur.",
            "description": [f"Deskripsi lengkap untuk {nd['name']} sedang dalam pengembangan."],
            "image": "/images/destinations/default.png",
            "gallery": [],
            "hours": "Buka Setiap Hari",
            "price": "Menyesuaikan",
            "tips": "",
            "coordinates": [-6.55, 110.69],
            "featured": nd["featured"]
        })
        next_id += 1

with open(base_path + "destinations.json", "w", encoding="utf-8") as f:
    json.dump(destinations, f, indent=2)


# CULINARY
with open(base_path + "culinary.json", "r", encoding="utf-8") as f:
    culinary = json.load(f)

existing_cul_names = {c["name"].lower(): c for c in culinary}

new_culinary = [
    "Ndank Kopi", "J Cottage", "Kampong Kopi", "Kafe Kebon", "Goedang Roso", "Inidia Cafe", "Aren Sewu", "Mountaint Coffe"
]
next_id = max(c["id"] for c in culinary) + 1 if culinary else 1

for nc in new_culinary:
    match = None
    for ec_name, ec in existing_cul_names.items():
        if nc.lower() in ec_name or ec_name in nc.lower():
            match = ec
            break
    if not match:
        culinary.append({
            "id": next_id,
            "name": nc,
            "slug": nc.lower().replace(" ", "-"),
            "type": "Kafe / Tempat Makan",
            "menuHighlight": "Menu Khas Tempur",
            "address": "Desa Tempur",
            "zone": "Tempur",
            "hours": "Buka Setiap Hari",
            "priceRange": "Rp 10.000 - Rp 50.000",
            "priceMin": 10000,
            "description": f"Tempat kuliner {nc} di Desa Tempur menyajikan berbagai hidangan lezat.",
            "image": "/images/culinary/default.png",
            "coordinates": [-6.55, 110.69]
        })
        next_id += 1

with open(base_path + "culinary.json", "w", encoding="utf-8") as f:
    json.dump(culinary, f, indent=2)


# ACCOMMODATIONS
with open(base_path + "accommodations.json", "r", encoding="utf-8") as f:
    accommodations = json.load(f)

existing_acc_names = {a["name"].lower(): a for a in accommodations}

new_acc = [
    "J Cottage", "Priggle Homestay", "Kafe Kebon", "Gudang Roso"
]
next_id = max(a["id"] for a in accommodations) + 1 if accommodations else 1

for na in new_acc:
    match = None
    for ea_name, ea in existing_acc_names.items():
        if na.lower() in ea_name or ea_name in na.lower():
            match = ea
            break
    if not match:
        accommodations.append({
            "id": next_id,
            "name": na,
            "slug": na.lower().replace(" ", "-"),
            "type": "Penginapan",
            "address": "Desa Tempur",
            "zone": "Tempur",
            "priceRange": "Hubungi Pengelola",
            "priceMin": 100000,
            "facilities": ["Kamar Nyaman", "Kamar Mandi"],
            "description": f"Penginapan {na} di Desa Tempur dengan suasana asri.",
            "contact": "-",
            "distanceToCenter": "-",
            "rooms": 1,
            "image": "/images/accommodations/default.png",
            "coordinates": [-6.55, 110.69]
        })
        next_id += 1

with open(base_path + "accommodations.json", "w", encoding="utf-8") as f:
    json.dump(accommodations, f, indent=2)


# FACILITIES
with open(base_path + "facilities.json", "r", encoding="utf-8") as f:
    facilities = json.load(f)

existing_fac_names = {f["name"].lower(): f for f in facilities}

new_fac = [
    {"name": "Rest Area", "category": "Parkir", "icon": "🅿️"},
    {"name": "Poliklinik Kesehatan Desa (PKD)", "category": "Kesehatan", "icon": "🏥"},
    {"name": "Warung Kelontong & ATM Terdekat", "category": "Belanja", "icon": "🏪"},
    {"name": "Ojek Wisata", "category": "Transportasi", "icon": "🏍️"},
    {"name": "Pick Up", "category": "Transportasi", "icon": "🚙"},
    {"name": "Jeep Wisata", "category": "Transportasi", "icon": "🚙"}
]

next_id = max(f["id"] for f in facilities) + 1 if facilities else 1

for nf in new_fac:
    match = None
    for ef_name, ef in existing_fac_names.items():
        if nf["name"].lower() in ef_name or ef_name in nf["name"].lower():
            match = ef
            break
    if not match:
        facilities.append({
            "id": next_id,
            "name": nf["name"],
            "category": nf["category"],
            "address": "Desa Tempur",
            "description": f"Fasilitas {nf['name']} di Desa Tempur.",
            "icon": nf["icon"],
            "coordinates": [-6.55, 110.69]
        })
        next_id += 1

with open(base_path + "facilities.json", "w", encoding="utf-8") as f:
    json.dump(facilities, f, indent=2)

print("Data successfully updated!")
