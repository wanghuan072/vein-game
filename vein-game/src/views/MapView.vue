<template>
  <div class="map-view">
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <p class="eyebrow">VEIN · Champlain Valley</p>
          <h1 class="hero-title">Champlain Valley Tactical Map</h1>
          <p class="hero-description">
            VEIN takes place inside Champlain Valley, spanning northern New York, western Vermont, and the southern edge of Quebec.
            The v0.022 playable slice sits 30–40 miles south of the Canadian border and features four primary towns:
            Dannemora, Lyon Mountain, Redford, and Saranac.
          </p>
          <div class="hero-actions">
            <router-link to="/vein-map-detail" class="btn-interactive-map">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              View Interactive Map
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="region-overview">
      <div class="container">
        <div class="region-grid">
          <div class="region-card">
            <h3>Region Snapshot</h3>
            <ul>
              <li><strong>Setting:</strong> Champlain Valley, Northeastern United States</li>
              <li><strong>Biome:</strong> Lakes, forests, mining towns, and industrial corridors</li>
              <li><strong>Key Settlements:</strong> Dannemora · Lyon Mountain · Redford · Saranac</li>
              <li><strong>Version:</strong> v0.022 · Early Access</li>
            </ul>
          </div>
          <div class="region-card">
            <h3>Viewing the Map</h3>
            <div class="method" v-for="option in viewingOptions" :key="option.title">
              <h4>{{ option.title }}</h4>
              <p>{{ option.description }}</p>
              <ul>
                <li v-for="detail in option.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="town-section">
      <div class="container">
        <div class="section-header">
          <h2>Primary Towns</h2>
          <p>These anchor towns shape most early-game routes and faction quest lines.</p>
        </div>
        <div class="town-grid">
          <div class="town-card" v-for="town in towns" :key="town.name">
            <h3>{{ town.name }}</h3>
            <p>{{ town.description }}</p>
            <ul>
              <li v-for="detail in town.highlights" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="poi-section">
      <div class="container">
        <div class="section-header">
          <h2>Points of Interest</h2>
          <p>
            Champlain Valley currently contains 154 Points of Interest (POIs). Once you discover a POI, it is permanently marked on every map you open.
            Below are the confirmed categories in v0.022.
          </p>
        </div>

        <div class="poi-group" v-for="group in poiGroups" :key="group.title">
          <div class="poi-group-header">
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
          <div class="poi-layout">
            <div class="poi-category-list">
              <div 
                v-for="category in group.categories" 
                :key="category.title"
                class="poi-category-item"
              >
                <h4 class="category-title">{{ category.title }}</h4>
                <div class="poi-items">
                  <span 
                    v-for="(item, index) in category.items" 
                    :key="index"
                    class="poi-item"
                  >
                    <span v-if="item.endsWith('*')" class="star">{{ item.replace('*', '') }}</span>
                    <span v-else>{{ item }}</span>
                    <span v-if="index < category.items.length - 1" class="item-separator"> · </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const viewingOptions = [
  {
    title: "Utility Slot Map / GPS / Cell Phone",
    description:
      "Press 'M' when a Map, GPS, or Cell Phone is equipped in a Utility Slot. GPS and phones need charged batteries and display your live position.",
    details: ['Physical Map: lightweight, no power required', 'GPS / Cell Phone: live tracking + orientation'],
  },
  {
    title: 'Inventory Interaction',
    description: "Right-click a Map while it is in your inventory (or on the ground) and select “Open Map.”",
    details: ['Works hands-free', 'No live tracking, but perfect for planning'],
  },
]

const towns = [
  {
    name: 'Dannemora',
    description: 'Prison town with scrapyards, municipal offices, and dense quest coverage.',
    highlights: ['Clinton Correctional complex', 'Court center & fire department', 'Rail and wastewater infrastructure'],
  },
  {
    name: 'Lyon Mountain',
    description: 'Mining settlement on higher ground; rich with lookouts and quarantine activity.',
    highlights: ['Lyon Mountain Lookout', 'Quarantine Center', 'Power Substation D-LM-01'],
  },
  {
    name: 'Redford',
    description: 'Lakeside community with resorts, cabins, and river crossings.',
    highlights: ['Boat launches • cabins • campgrounds', 'Fire department and post office', 'River-based fast travel routes'],
  },
  {
    name: 'Saranac',
    description: 'Historic town packed with cemeteries, churches, and administrative buildings.',
    highlights: ['Courthouse + Town Hall', 'Multiple cemeteries', 'Historic bridge and cultural sites'],
  },
]

const poiGroups = [
  {
    title: 'Settlements & Housing',
    description: 'Residential hubs that support faction quests, trading, and survivor respawns.',
    categories: [
      { title: 'Towns', items: ['Dannemora*', 'Elsinore', 'Lyon Mountain*', 'Redford*', 'Russia*', 'Saranac*', 'Standish'] },
      { title: 'Assisted Living', items: ['Ganong Centennial House', 'Pinegrove Assisted Living'] },
      { title: 'Mobile Home Communities', items: ['Northstar Estates', 'Summer Haven Mobile Homes'] },
    ],
  },
  {
    title: 'Businesses & Services',
    description: 'Commercial clusters ranging from auto shops to farm co-ops and resorts.',
    categories: [
      {
        title: 'Automotive',
        items: ["David's Auto Parts", "John's Small Engine Repair", 'Mud Pond Motors', "Rustin'Pieces Scrapyard", 'Tony Gunque Used Cars'],
      },
      {
        title: 'Construction',
        items: ["Isaac & Sons Construction Yard", "Isaac & Sons Main Office", "Rick's Construction"],
      },
      {
        title: 'Dining',
        items: [
          "American Legion Post #0607",
          "Bridge Hills Bar N' Grill",
          'Countryside Fresh Foods Pantry',
          'Duck Bill Bakery',
          "Santino's Pizza & Red Hots",
          'Standish Ice Cream Stand',
        ],
      },
      {
        title: 'Farming',
        items: [
          'Abandoned Farmstead',
          'Blake Farm',
          'Blake Farm Storage',
          'Calico Farm',
          'Champlain Farm',
          'Chazy Lake Dairy Farm',
          'Clark Hill Acres',
        ],
      },
      {
        title: 'Lodging',
        items: [
          'Aleksander Ridge Cabins',
          'Badger Heights Resort',
          'Chazy Highlands Cabins',
          'Corners Brook Campgrounds',
          'Dark Woods Cabin',
          'Dead Ends Motel',
          "Hunter's Lab",
          'Iron Ore Resort',
          'Isolated Cabin',
          'Parsons Knob Campgrounds',
          'Pond-side Cabin',
          'Sunset Resort',
        ],
      },
      { title: 'Logging', items: ['Barber Logging Camp', 'Walt & Sons Logging'] },
      {
        title: 'Markets',
        items: ['Anvil Gas', 'Good Times Local Depot', 'Green Valley Market', 'High Noon Plaza', 'Maple Mart #152', 'Maple Mart #192', 'Rural Dollar', "Sammy's - Dannemora"],
      },
      { title: 'Medical', items: ["Bran's Pharmacy", 'Medical Supply Depot', 'Valley Veterinary Clinic'] },
      {
        title: 'Religious',
        items: [
          'Abandoned Grave Site',
          'Elisnore Cemetery',
          'Saranac Haven Cemetery',
          'Saranac Sunrise Methodist Church',
          "St. Abelard's Church",
          "St. John's Holy Church",
          "St. John's Memorial",
          "St. Peter's Cemetery",
          "St. Peter's House of Prayer",
        ],
      },
      {
        title: 'Other Businesses',
        items: [
          '93.4 Broadcast Station',
          "Agatha's Plant Shop",
          'Backwoods Self Storage',
          'Birch Hill Go-Kart Raceway',
          'Flooded Quarry',
          "Frank's Hardware Emporium",
          'Hank Heckler Law Office',
          'KHW Trust Dannemora Branch',
          'Kleennow Warehouse',
          "Kline's Archery & Bait",
          'Lakeside Gun Shop & Range',
          "Marty's Bait & Tackle",
          'Mill No. 3',
          'Purrfect Paws Pet Grooming',
          'Taylor Realty Main Office',
        ],
      },
    ],
  },
  {
    title: 'Public Utilities & Services',
    description: 'Critical sites for quests, firefighting, and world events.',
    categories: [
      {
        title: 'Utilities & Civic',
        items: [
          'Clinton Correctional Storage',
          'Clinton Correctional Facility',
          'Dannemora Community & Court Center',
          'Dannemora Fire Dept.',
          'Dannemora Town Garage',
          'Dannemora Wastewater Plant',
          'Elisnore Waste Transfer Station',
          'General Services Office',
          'Lyon Mtn. Baseball Field',
          'Lyon Mtn. Fire Department',
          'Lyon Mtn. Museum',
          'Lyon Mtn. Post Office',
          'NYS Department of Transportation',
          'Redford Fire Department',
          'Redford Post Office',
          'Saranac Courthouse',
          'Saranac Fire Department',
          'Saranac Hollow Historic Bridge',
          'Saranac Town Garage',
          'Saranac Town Hall',
          'Wastewater Plant A7',
        ],
      },
      {
        title: 'Lookouts',
        items: ['Chazy Lake Lookout', 'Dannemora Lookout', 'Johnson Mtn. Lookout', 'Lyon Mountain Lookout', 'Northeastern Lookout', 'Seine Mountain Lookout'],
      },
      {
        title: 'Parks & Recreation',
        items: ['Bowen Hill Park', 'Chazy Lake Beach', 'Chazy Lake Boat Launch', 'Fauve Park', 'Lyon Mountain Peak', 'Philips Park', 'Prosperity Park'],
      },
      {
        title: 'Power Stations',
        items: [
          'Ambient Energy Powerhouse',
          'Bowen Hill Hydroelectric Dam',
          'Dannemora Power Substation D-DM-01',
          'Lyon Mountain Power Substation D-LM-01',
          'Power Line Service Shed 2-4R',
          'Power Line Service Shed 2-5E',
          'Power Line Service Shed 3-9LM',
          'Saranac Power Substation D-RF-01',
          'Saranac Power Substation D-S-02',
          'Saranac Power Substation M-SRF-06',
        ],
      },
      { title: 'Quarantine & Dumps', items: ['Lyon Mtn. Quarantine Center', 'Mass Dump Site A1', 'Outpost Alpha'] },
      { title: 'Schools', items: ['Dannemora High School', 'Saranac Central School', 'Saranac School Bus Garage'] },
      { title: 'Event Locations', items: ['Noreastern Rail Wreckage', 'Uh-60 Grey Eagle Crash Site'] },
    ],
  },
  {
    title: 'Landforms & Natural Features',
    description: 'Mountains, caves, lakes, rivers, and swamps that shape traversal.',
    categories: [
      { title: 'Mountains', items: ['Averill Mountain*', 'Dannemora Mountain*', 'Johnson Mountain*', 'Lyon Mountain*', 'Seine Mountain*'] },
      {
        title: 'Hills',
        items: ['Birch Hill*', 'Brushy Knob*', 'Chazy Highlands*', 'Clark Hill*', 'Hardhack Ridge*', 'Haystack Knob*', 'Parsons Knob*'],
      },
      {
        title: 'Caves & Mines',
        items: [
          'Abandoned Cave',
          'Averill Mines North & South',
          'Belmont Mine',
          'Cold Brook Cavern',
          "Devil's Grotto",
          'Dismal Swamp Cave',
          'Green Canyon Mine',
          'Haystack Cave',
          'Kings Hollow Mines East & West',
          "Rook's Cavern",
          'Saranac Cave',
          'Smithkill Mine',
          'The Apex',
          'Unnamed Mines North & South',
        ],
      },
      { title: 'Forests', items: ['Cadyville State Forest*', 'Dannemora State Forest*'] },
      { title: 'Islands', items: ['Moffitt Island*', 'Werrenrath Island'] },
      {
        title: 'Lakes & Ponds',
        items: ['Chazy Lake*', 'Upper Chateaugay Lake*', 'Barnes Pond*', 'Bucks Pond', 'Church Pond*', 'Dow Pond*', 'Iron Pond', 'Mud Pond', 'Sunset Pont', 'Wolf Pond*'],
      },
      { title: 'Rivers & Swamps', items: ['Saranac River*', 'Duck Bill Swamp', 'Dump Site A2', 'Dump Site 2B', 'Dump Site 2C', 'Fairbanks Swamp', 'Highlands Swamp'] },
    ],
  },
]
</script>

<style scoped>
.map-view {
  min-height: 100vh;
}

.page-hero {
  padding: 80px 0 60px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.page-hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 210, 210, 0.65);
  font-size: 0.75rem;
  margin-bottom: 12px;
  font-weight: 500;
}

.hero-title {
  font-size: 3.2rem;
  margin: 0 0 20px;
  color: var(--text);
  font-weight: 700;
  background: linear-gradient(135deg, rgba(255, 230, 230, 0.95), rgba(255, 200, 200, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 30px;
}

.hero-actions {
  margin-top: 30px;
}

.btn-interactive-map {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.2), rgba(255, 100, 100, 0.15));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: rgba(255, 230, 230, 0.95);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 54, 54, 0.2);
}

.btn-interactive-map:hover {
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.3), rgba(255, 100, 100, 0.25));
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 54, 54, 0.3);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.region-overview {
  padding: 60px 0;
}

.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.region-card {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.7), rgba(30, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.region-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 54, 54, 0.15);
  border-color: rgba(255, 255, 255, 0.15);
}

.region-card h3 {
  margin: 0 0 20px;
  font-size: 1.5rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.region-card ul {
  padding-left: 20px;
  color: rgba(255, 210, 210, 0.82);
  line-height: 1.8;
  margin: 0;
  list-style: none;
}

.region-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.region-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
}

.region-card ul li strong {
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.method {
  margin-bottom: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.method:first-of-type {
  border-top: none;
  padding-top: 0;
}

.method h4 {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: rgba(255, 230, 230, 0.9);
  font-weight: 600;
}

.method p {
  margin: 0 0 12px;
  color: rgba(255, 210, 210, 0.75);
  line-height: 1.6;
  font-size: 0.95rem;
}

.method ul {
  padding-left: 20px;
  margin: 0;
  list-style: none;
}

.method ul li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  color: rgba(255, 210, 210, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
}

.method ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.town-section {
  padding: 60px 0;
  background: linear-gradient(180deg, transparent, rgba(18, 0, 0, 0.2));
}

.section-header {
  margin-bottom: 40px;
  text-align: center;
}

.section-header h2 {
  font-size: 2.5rem;
  margin: 0 0 12px;
  color: var(--text);
  font-weight: 700;
}

.section-header p {
  color: rgba(255, 210, 210, 0.75);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

.town-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.town-card {
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.65), rgba(20, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.town-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(255, 54, 54, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.town-card h3 {
  margin: 0 0 14px;
  font-size: 1.6rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.town-card > p {
  margin: 0 0 16px;
  color: rgba(255, 210, 210, 0.8);
  line-height: 1.7;
  font-size: 0.95rem;
}

.town-card ul {
  padding-left: 20px;
  color: rgba(255, 210, 210, 0.8);
  margin: 0;
  list-style: none;
}

.town-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 1.6;
}

.town-card ul li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.85rem;
}

.poi-section {
  padding: 60px 0 100px;
}

.poi-group {
  margin-bottom: 60px;
}

.poi-group:last-child {
  margin-bottom: 0;
}

.poi-group-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.3);
}

.poi-group-header h3 {
  margin: 0 0 10px;
  font-size: 2rem;
  color: var(--text);
  font-weight: 700;
}

.poi-group-header p {
  margin: 0;
  color: rgba(255, 210, 210, 0.75);
  line-height: 1.7;
  font-size: 1rem;
}

.poi-layout {
  width: 100%;
}

.poi-category-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.poi-category-item {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.6), rgba(25, 0, 0, 0.4));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.poi-category-item:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(255, 54, 54, 0.1);
}

.category-title {
  margin: 0 0 12px;
  font-size: 1.1rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.poi-items {
  color: rgba(255, 210, 210, 0.78);
  font-size: 0.9rem;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.poi-item {
  display: inline;
}

.item-separator {
  color: rgba(255, 255, 255, 0.3);
  margin: 0 4px;
}

.star {
  position: relative;
}

.star::after {
  content: ' *';
  color: var(--accent);
  font-weight: 600;
  margin-left: 2px;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .page-hero {
    padding: 60px 0 40px;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .region-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .town-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }


  .section-header h2 {
    font-size: 2.2rem;
  }

  .poi-group-header h3 {
    font-size: 1.8rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .page-hero {
    padding: 40px 0 30px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .hero-description {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin-bottom: 20px;
  }

  .hero-actions {
    margin-top: 20px;
  }

  .btn-interactive-map {
    padding: 12px 20px;
    font-size: 14px;
  }

  .btn-icon {
    width: 18px;
    height: 18px;
  }

  .eyebrow {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }

  .region-overview {
    padding: 40px 0;
  }

  .region-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .region-card {
    padding: 20px;
  }

  .region-card h3 {
    font-size: 20px;
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .region-card ul {
    font-size: 12px;
    line-height: 1.6;
  }

  .region-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method {
    margin-bottom: 20px;
    padding-top: 16px;
  }

  .method h4 {
    font-size: 16px;
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method ul li {
    font-size: 12px;
    margin-bottom: 6px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-section {
    padding: 40px 0;
  }

  .section-header {
    margin-bottom: 30px;
    text-align: left;
  }

  .section-header h2 {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .section-header p {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .town-card {
    padding: 20px;
  }

  .town-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-card > p {
    font-size: 12px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-card ul {
    font-size: 12px;
  }

  .town-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-section {
    padding: 40px 0 60px;
  }

  .poi-group {
    margin-bottom: 40px;
  }

  .poi-group-header {
    margin-bottom: 24px;
    padding-bottom: 16px;
  }

  .poi-group-header h3 {
    font-size: 20px;
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-group-header p {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-category-item {
    padding: 16px;
  }

  .category-title {
    font-size: 16px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-items {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .item-separator {
    margin: 0 2px;
  }
}
</style>

