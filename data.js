// Dynamically generated data for Nearby App
(function () {
    // Definitive color mapping as requested: 
    // Health = Red, Automotive = Yellow, Home = Blue, Retail = Green
    const categoryColors = {
        health: { bg: '#fee2e2', text: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
        auto: { bg: '#fef3c7', text: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
        home: { bg: '#dbeafe', text: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
        retail: { bg: '#dcfce7', text: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' }
    };

    const subcategories = {
        // Health & Pharmacy (Red)
        'doctor': { name: 'Doctor', icon: 'fa-user-doctor', parent: 'health', services: ['City General Checkup', 'Pediatric Care Plus', 'Family Physician Consult'] },
        'pharmacy': { name: 'Pharmacy', icon: 'fa-pills', parent: 'health', services: ['24/7 Meds Delivery', 'LifeCare Pharmacy', 'QuickScript Refills'] },
        'lab-tests': { name: 'Lab Tests', icon: 'fa-flask-vial', parent: 'health', services: ['Accurate Blood Panels', 'Rapid Diagnostics Clinic', 'Home Sample Collection'] },
        'dental': { name: 'Dental', icon: 'fa-tooth', parent: 'health', services: ['Smile Bright Dentistry', 'Emergency Tooth Extraction', 'Painless Root Canals'] },
        'eye-care': { name: 'Eye Care', icon: 'fa-eye', parent: 'health', services: ['Vision First Optics', 'Laser Eye Correction Consult', 'Premium Lens Fitting'] },
        'physiotherapy': { name: 'Physiotherapy', icon: 'fa-person-walking', parent: 'health', services: ['Sports Rehab Center', 'Mobility Restore Clinic', 'Post-Op Physio Care'] },
        'nursing': { name: 'Nursing', icon: 'fa-user-nurse', parent: 'health', services: ['Elderly Care Nursing', 'At-Home Daily Care', 'Certified Midwife Services'] },
        'medical-equipment': { name: 'Medical Equipment', icon: 'fa-kit-medical', parent: 'health', services: ['Wheelchair Rentals', 'Oxygen Cylinder Supply', 'Ortho Support Brace Fittings'] },
        'ambulance': { name: 'Ambulance', icon: 'fa-truck-medical', parent: 'health', services: ['Rapid Response EMT', 'Non-Emergency Transport', 'ICU Ambulance Service'] },
        'wellness': { name: 'Wellness', icon: 'fa-dumbbell', parent: 'health', services: ['Holistic Therapy Session', 'Yoga & Meditation Studio', 'Nutritional Counseling'] },

        // Automotive & Fuel (Yellow)
        'fuel': { name: 'Fuel', icon: 'fa-gas-pump', parent: 'auto', services: ['Mobile Fuel Delivery', 'Premium Petrol Station', 'Diesel Refill Service'] },
        'car-wash': { name: 'Car Wash', icon: 'fa-spray-can-sparkles', parent: 'auto', services: ['Sparkle Auto Spa', 'Prestige Mobile Detailing', 'Eco-Friendly Jet Wash'] },
        'tires': { name: 'Tires', icon: 'fa-circle-dot', parent: 'auto', services: ['Roadside Puncture Fix', 'All-Terrain Tire Sales', 'Wheel Alignment & Balancing'] },
        'battery': { name: 'Battery', icon: 'fa-car-battery', parent: 'auto', services: ['Jumpstart Rescue Squad', 'Exide Battery Replacement', 'Alternator Testing'] },
        'oil-change': { name: 'Oil Change', icon: 'fa-oil-can', parent: 'auto', services: ['10-Minute Lube Run', 'Synthetic Oil Upgrade', 'Engine Flush & Filter'] },
        'repair': { name: 'Repair', icon: 'fa-screwdriver-wrench', parent: 'auto', services: ['City Core Auto Mechanics', 'Transmission Specialists', 'Brake Pad Replacement'] },
        'auto-parts': { name: 'Auto Parts', icon: 'fa-gears', parent: 'auto', services: ['OEM Spares Hub', 'Performance Upgrades Center', 'Imported Car Accessories'] },
        'towing': { name: 'Towing', icon: 'fa-truck', parent: 'auto', services: ['24/7 Flatbed Towing', 'Accident Recovery Unit', 'Heavy Duty Wrecker Service'] },
        'inspection': { name: 'Inspection', icon: 'fa-list-check', parent: 'auto', services: ['Pre-Purchase Car Scan', 'Emissions Testing Center', 'Comprehensive Safety Check'] },
        'ev-charging': { name: 'EV Charging', icon: 'fa-charging-station', parent: 'auto', services: ['Rapid Supercharger Hub', 'Home Connector Installation', 'EV Battery Diagnostics'] },

        // Home & Utilities (Blue)
        'electrician': { name: 'Electrician', icon: 'fa-bolt', parent: 'home', services: ['Spark Electrical Fixes', 'Complete House Wiring', 'Emergency Power Restore'] },
        'plumbing': { name: 'Plumbing', icon: 'fa-faucet-drip', parent: 'home', services: ['Pro Plumbers Fix', 'Leak Detection Experts', 'Drain Unblocking Service'] },
        'ac-repair': { name: 'A/C Repair', icon: 'fa-wind', parent: 'home', services: ['Cool Breeze AC Repair', 'HVAC Deep Cleaning', 'Split AC Installation'] },
        'cleaning': { name: 'Cleaning', icon: 'fa-broom', parent: 'home', services: ['Spotless Deep Cleaning', 'Move-in Sanitization', 'Upholstery & Carpet Wash'] },
        'pest-control': { name: 'Pest Control', icon: 'fa-bug', parent: 'home', services: ['Termite Exterminators', 'Eco-Safe Bug Spraying', 'Rodent Removal Experts'] },
        'internet-tv': { name: 'Internet & TV', icon: 'fa-wifi', parent: 'home', services: ['Fiber Optic Setup', 'Smart TV Mounting', 'WiFi Deadzone Fixing'] },
        'gas': { name: 'Gas', icon: 'fa-fire-flame-simple', parent: 'home', services: ['Cooking Gas Delivery', 'Gas Leak Safety Check', 'Stove Repair & Maintenance'] },
        'water': { name: 'Water', icon: 'fa-droplet', parent: 'home', services: ['Drinking Water Delivery', 'Overhead Tank Cleaning', 'Water Heater Repair'] },
        'painting': { name: 'Painting', icon: 'fa-paint-roller', parent: 'home', services: ['Fresh Coat Painters', 'Exterior Waterproofing', 'Textured Accent Walls'] },
        'appliances': { name: 'Appliances', icon: 'fa-toolbox', parent: 'home', services: ['Washing Machine Fix', 'Fridge Compressor Repair', 'Microwave Troubleshooting'] },

        // Retail & Essentials (Green)
        'supermarkets': { name: 'Supermarkets', icon: 'fa-store', parent: 'retail', services: ['Hypermarket Home Delivery', 'Fresh Produce Aisle', 'Bulk Grocery Supply'] },
        'groceries': { name: 'Groceries', icon: 'fa-bag-shopping', parent: 'retail', services: ['Organic Mini-Mart', 'Daily Essentials Drop-off', 'Farm Fresh Veggies'] },
        'restaurants': { name: 'Restaurants', icon: 'fa-utensils', parent: 'retail', services: ['Gourmet Dining Experience', 'Local Street Food Delivery', 'Family Buffet Reservation'] },
        'cafe-bakery': { name: 'Café & Bakery', icon: 'fa-mug-hot', parent: 'retail', services: ['Artisan Bread & Pastries', 'Espresso Bar Setup', 'Custom Birthday Cakes'] },
        'clothing': { name: 'Clothing', icon: 'fa-shirt', parent: 'retail', services: ['Bespoke Tailoring', 'Dry Cleaning Hub', 'Trendsetter Boutique'] },
        'electronics': { name: 'Electronics', icon: 'fa-laptop', parent: 'retail', services: ['Gadget Repair Center', 'Smartphone Screen Fix', 'Smart Home Setup'] },
        'stationery': { name: 'Stationery', icon: 'fa-book', parent: 'retail', services: ['School Supplies Pack', 'Office printing & Binding', 'Art Material Store'] },
        'baby-kids': { name: 'Baby & Kids', icon: 'fa-baby', parent: 'retail', services: ['Premium Diaper Delivery', 'Toy Restoring Workshop', 'Kids Party Planners'] },
        'pet-supplies': { name: 'Pet Supplies', icon: 'fa-paw', parent: 'retail', services: ['Gourmet Pet Food', 'Mobile Dog Grooming', 'Vet Checkup Supply'] },
        'hardware': { name: 'Hardware', icon: 'fa-hammer', parent: 'retail', services: ['Power Tool Rentals', 'DIY Building Materials', 'Lumber & Paint Supply'] }
    };

    let services = {};
    let featuredServices = [];
    let serviceIdCounter = 1;

    // Helper for seeded random to ensure data doesn't change wildly on every reload
    function seededRandom(seed) {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    let seed = 12345;
    function rand() {
        return seededRandom(seed++);
    }

    const priceRanges = {
        'doctor': [2500, 5000],
        'pharmacy': [500, 3000],
        'lab-tests': [1500, 15000],
        'dental': [3000, 25000],
        'eye-care': [2000, 15000],
        'physiotherapy': [2500, 6000],
        'nursing': [3000, 15000],
        'medical-equipment': [15000, 250000],
        'ambulance': [8000, 35000],
        'wellness': [3000, 12000],
        
        'fuel': [2000, 15000],
        'car-wash': [1500, 6000],
        'tires': [15000, 85000],
        'battery': [20000, 65000],
        'oil-change': [8000, 25000],
        'repair': [5000, 150000],
        'auto-parts': [2000, 80000],
        'towing': [8000, 35000],
        'inspection': [4000, 15000],
        'ev-charging': [1500, 8000],
        
        'electrician': [2000, 15000],
        'plumbing': [2500, 15000],
        'ac-repair': [3500, 25000],
        'cleaning': [4000, 25000],
        'pest-control': [5000, 35000],
        'internet-tv': [2500, 15000],
        'gas': [3500, 5000],
        'water': [500, 2500],
        'painting': [15000, 150000],
        'appliances': [3000, 25000],
        
        'supermarkets': [500, 15000],
        'groceries': [500, 12000],
        'restaurants': [2000, 15000],
        'cafe-bakery': [800, 6000],
        'clothing': [2500, 25000],
        'electronics': [5000, 350000],
        'stationery': [300, 5000],
        'baby-kids': [1500, 25000],
        'pet-supplies': [1000, 15000],
        'hardware': [500, 45000]
    };

    // Hardcode the 15 specific services that have image assets provided by the user
    const featuredTitles = [
        'Accident Recovery Unit',
        'Accurate Blood Panels',
        'Brake Pad Replacement',
        'Comprehensive Safety Check',
        'Cool Breeze AC Repair',
        'Diesel Refill Service',
        'Emergency Power Restore',
        'Emissions Testing Center',
        'Heavy Duty Wrecker Service',
        'Mobile Fuel Delivery',
        'Non-Emergency Transport',
        'Oxygen Cylinder Supply',
        'Sports Rehab Center',
        'Spotless Deep Cleaning',
        'Transmission Specialists'
    ];

    const productCategories = [
        'pharmacy', 'medical-equipment', 'auto-parts', 
        'supermarkets', 'groceries', 'restaurants', 'cafe-bakery', 
        'clothing', 'electronics', 'stationery', 'baby-kids', 
        'pet-supplies', 'hardware', 'water', 'gas'
    ];

    // Generate specific services from the arrays
    for (const [catKey, catData] of Object.entries(subcategories)) {
        services[catKey] = [];

        // Use the pre-defined realistic names instead of generic ones
        const serviceNamesForCat = catData.services;
        const colorData = categoryColors[catData.parent];
        const isProduct = productCategories.includes(catKey);

        for (let i = 0; i < serviceNamesForCat.length; i++) {
            const id = 'srv_' + serviceIdCounter++;
            const title = serviceNamesForCat[i];
            const rating = (rand() * (5 - 4) + 4).toFixed(1);
            
            const [minPrice, maxPrice] = priceRanges[catKey] || [1000, 5000];
            const rawPrice = Math.floor(rand() * (maxPrice - minPrice + 1)) + minPrice;
            const price = Math.round(rawPrice / 100) * 100;
            
            const available = Math.floor(rand() * 20) + 1;

            const safeCatName = catData.name.replace(/\//g, '');
            const folderName = catData.parent === 'auto' ? 'automotive' : catData.parent;
            const generatedImage = `images/${folderName}/${safeCatName} ${i + 1}.jpg`;
            const imagePath = featuredTitles.includes(title) ? `images/${title}.jpg` : generatedImage;

            const colomboLocations = ['Colombo 01', 'Colombo 02', 'Colombo 03', 'Colombo 04', 'Colombo 05', 'Colombo 06', 'Colombo 07', 'Dehiwala', 'Mount Lavinia', 'Nugegoda', 'Rajagiriya', 'Battaramulla', 'Kotte', 'Nawala', 'Kohuwala'];
            const serviceRadii = ['5 km', '10 km', '15 km', '20 km'];
            
            const location = colomboLocations[Math.floor(rand() * colomboLocations.length)];
            const radius = serviceRadii[Math.floor(rand() * serviceRadii.length)];

            let catalog = [];
            if (isProduct) {
                const numItems = Math.floor(rand() * 6) + 15; // 15 to 20 items
                const genericAdjectives = ['Premium', 'Fresh', 'Organic', 'Quality', 'Standard', 'Deluxe', 'Essential', 'Pro'];
                const genericNouns = ['Pack', 'Bundle', 'Kit', 'Set', 'Item', 'Supply', 'Unit'];
                for(let j=0; j < numItems; j++) {
                    const adj = genericAdjectives[Math.floor(rand() * genericAdjectives.length)];
                    const noun = genericNouns[Math.floor(rand() * genericNouns.length)];
                    
                    // Create an intelligently scoped price depending on parent max
                    const itemMax = maxPrice > 20000 ? maxPrice / 5 : maxPrice / 2;
                    const itemMin = minPrice < 1000 ? minPrice : 500;
                    const rawPPrice = Math.floor(rand() * (itemMax - itemMin + 1)) + itemMin;
                    const pPrice = Math.round(rawPPrice / 50) * 50;
                    
                    catalog.push({
                        id: `prod_${id}_${j}`,
                        name: `${adj} ${catData.name} ${noun}`,
                        description: `A reliable and high-quality ${catData.name.toLowerCase()} item for daily use.`,
                        price: `LKR ${pPrice}`
                    });
                }
            }

            const serviceObj = {
                id,
                title,
                rating,
                price: `LKR ${price}`,
                description: `Experience top-tier service with ${title}. We bring unmatched expertise directly to you, ensuring all your ${catData.name.toLowerCase()} needs are met professionally and efficiently.`,
                availability: `${available} available now`,
                location: location,
                serviceRadius: radius,
                icon: catData.icon,
                category: catKey,
                categoryName: catData.name,
                parentCategory: catData.parent,
                colorInfo: colorData,
                image: imagePath,
                isProduct: isProduct,
                catalog: catalog
            };

            services[catKey].push(serviceObj);

            // Add specifically to featured services if it has an image
            if (featuredTitles.includes(title)) {
                featuredServices.push(serviceObj);
            }
        }
    }

    // Attach to window
    window.appData = {
        services,
        featuredServices,
        subcategories,
        categoryColors
    };
})();
