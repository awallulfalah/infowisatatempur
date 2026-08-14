import json

base_path = "e:/KKN/WEB INFORMASI WISATA/wisata-tempur/src/data/"

with open(base_path + "destinations.json", "r", encoding="utf-8") as f:
    destinations = json.load(f)

with open(base_path + "culinary.json", "r", encoding="utf-8") as f:
    culinary = json.load(f)

# Find max ID in destinations
max_id = max(d["id"] for d in destinations) if destinations else 0

# Track names to prevent duplicates if they exist in both (e.g. J-Cottage)
existing_names = {d["name"].lower() for d in destinations}

for c in culinary:
    # J-Cottage is already in destinations, so skip it if it's identical
    if c["name"].lower() in existing_names:
        continue
        
    max_id += 1
    
    # Map culinary to destination structure
    new_dest = {
        "id": max_id,
        "name": c["name"],
        "slug": c.get("slug", c["name"].lower().replace(" ", "-")),
        "zone": c.get("zone", "Tempur"),
        "category": "kuliner",
        "shortDesc": c.get("description", ""),
        "description": [c.get("description", "")] if isinstance(c.get("description"), str) else c.get("description", []),
        "image": c.get("image", "/images/culinary/default.png"),
        "gallery": [],
        "hours": c.get("hours", "Buka Setiap Hari"),
        "price": c.get("priceRange", "Menyesuaikan"),
        "tips": "",
        "coordinates": c.get("coordinates", [-6.55, 110.69]),
        "featured": c.get("featured", False)
    }
    
    destinations.append(new_dest)

with open(base_path + "destinations.json", "w", encoding="utf-8") as f:
    json.dump(destinations, f, indent=2)

# Optional: empty culinary.json or write an empty array to prevent issues
with open(base_path + "culinary.json", "w", encoding="utf-8") as f:
    json.dump([], f, indent=2)

print("Merged successfully!")
