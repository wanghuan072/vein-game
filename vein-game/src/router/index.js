import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuidesView from '../views/GuidesView.vue'
import GuideDetailView from '../views/GuideDetailView.vue'
import WikiView from '../views/wiki/WikiView.vue'
import WikiDetailView from '../views/wiki/WikiDetailView.vue'
import ItemsView from '../views/item/ItemsView.vue'
import ItemsWeaponsView from '../views/item/ItemsWeaponsView.vue'
import ItemsArmorView from '../views/item/ItemsArmorView.vue'
import ItemsClothingView from '../views/item/ItemsClothingView.vue'
import ItemsConsumablesView from '../views/item/ItemsConsumablesView.vue'
import ItemsSpecialView from '../views/item/ItemsSpecialView.vue'
import ItemsMaterialsView from '../views/item/ItemsMaterialsView.vue'
import ItemsAmmoView from '../views/item/ItemsAmmoView.vue'
import ItemsMedicalView from '../views/item/ItemsMedicalView.vue'
import ItemsToolsView from '../views/item/ItemsToolsView.vue'
import ItemsMiscView from '../views/item/ItemsMiscView.vue'
import ItemsDetailView from '../views/item/ItemsDetailView.vue'
import MapView from '../views/MapView.vue'
import MapDetailView from '../views/MapDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'VEIN Survival Game | Wiki, Guides, Items, Map - veingame.org',
          description: 'The ultimate resource for VEIN Survival Game. Find all Guides, Wiki, Items/Weapons databases, HD Maps, and winning strategies to conquer every challenge.',
          keywords: 'VEIN survival game, VEIN wiki, VEIN guides, VEIN weapons,VEIN database, VEIN maps, VEIN Armor '
        }
      }
    },
    {
      path: '/vein-guides',
      name: 'guides',
      component: GuidesView,
      meta: {
        seo: {
          title: 'VEIN game Guides | Tips and Strategies - veingame.org',
          description: 'The VEIN Guides library for Survival Game players. Find full beginner walkthroughs, expert tips, and advanced strategies to master every area and mechanic.',
          keywords: 'VEIN guides, VEIN walkthrough, VEIN strategies, VEIN tips,  VEIN resources, VEIN survival tips, VEIN gameplay'
        }
      }
    },
    {
      path: '/vein-guides/:id',
      name: 'guide-detail',
      component: GuideDetailView,
    },
    {
      path: '/vein-wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        seo: {
          title: 'VEIN Game Wiki | Mechanics and Game Database - veingame.org',
          description: 'The VEIN Game Wiki is here. Explore detailed information on Controls, Skills, Crafting/Cooking Recipes, Game Mechanics, Building, Vehicles, and Update History.',
          keywords: 'VEIN wiki, VEIN game mechanics, VEIN skills, VEIN crafting recipes, VEIN cooking, VEIN building, VEIN vehicles, VEIN controls'
        }
      }
    },
    {
      path: '/vein-wiki/:id',
      name: 'wiki-detail',
      component: WikiDetailView,
    },
    {
      path: '/vein-items',
      name: 'items',
      component: ItemsView,
      meta: {
        seo: {
          title: 'VEIN game Items| Weapons, Armor, Stats - veingame.org',
          description: 'The ultimate VEIN Items Database. Search all Weapons, Armor, Consumables, Tools, and Materials. Get full stats, crafting recipes, and every item in the game.',
          keywords: 'VEIN items database, VEIN weapons, VEIN armor, VEIN crafting, VEIN consumables, VEIN materials, VEIN ammo, item stats'
        }
      }
    },
    {
      path: '/vein-items/weapons',
      name: 'items-weapons',
      component: ItemsWeaponsView,
      meta: {
        seo: {
          title: 'VEIN Game Weapons - Complete Weapons List - veingame.org',
          description: 'The complete VEIN Weapons Database. Find all melee and ranged weapons, including their full stats, damage values, unique attributes, and acquisition',
          keywords: 'VEIN game weapons, melee weapons, ranged weapons, weapons database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/armor',
      name: 'items-armor',
      component: ItemsArmorView,
      meta: {
        seo: {
          title: 'VEIN Game Armor - Complete Armor List - veingame.org',
          description: 'The complete VEIN Armor Database. Explore all protective gear, including helmets, chestplates, and leg armor. Get stats, crafting recipes, and where to find each piece.',
          keywords: 'VEIN game armor, protective gear, armor database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/clothing',
      name: 'items-clothing',
      component: ItemsClothingView,
      meta: {
        seo: {
          title: 'VEIN Game Clothing - Complete Clothing List - veingame.org',
          description: 'The complete VEIN Clothing Database. Find all protective and customizable outfits, including hats, jackets, and pants. Get stats, crafting recipes, and where to find each piece.',
          keywords: 'VEIN game clothing, outfits, tactical apparel, clothing database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/consumables',
      name: 'items-consumables',
      component: ItemsConsumablesView,
      meta: {
        seo: {
          title: 'VEIN Game Consumables - Complete Consumables List - veingame.org',
          description: 'The complete VEIN Consumables Database. Find all food, water, and temporary buffs. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game consumables, food, water, survival items, consumables database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/special',
      name: 'items-special',
      component: ItemsSpecialView,
      meta: {
        seo: {
          title: 'VEIN Game Special Items - Complete Special Items List - veingame.org',
          description: 'The complete VEIN Special Items Database. Find all rare and unique items, including limited drops and event rewards. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game special items, rare items, unique items, special items database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/materials',
      name: 'items-materials',
      component: ItemsMaterialsView,
      meta: {
        seo: {
          title: 'VEIN Game Materials - Complete Materials List - veingame.org',
          description: 'The complete VEIN Materials Database. Find all crafting materials and resources, including wood, metal, and cloth. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game materials, crafting materials, resources, materials database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/ammo',
      name: 'items-ammo',
      component: ItemsAmmoView,
      meta: {
        seo: {
          title: 'VEIN Game Ammo - Complete Ammo List - veingame.org',
          description: 'The complete VEIN Ammo Database. Find all ammunition types for ranged weapons, including bullets, shells, and grenades. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game ammo, ammunition, ammo database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/medical',
      name: 'items-medical',
      component: ItemsMedicalView,
      meta: {
        seo: {
          title: 'VEIN Game Medical Items - Complete Medical Items List - veingame.org',
          description: 'The complete VEIN Medical Items Database. Find all medkits, bandages, and pharmaceuticals to heal injuries and illnesses. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game medical items, medkits, first aid, medical supplies, medical items database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/tools',
      name: 'items-tools',
      component: ItemsToolsView,
      meta: {
        seo: {
          title: 'VEIN Game Tools - Complete Tools List - veingame.org  ',
          description: 'The complete VEIN Tools Database. Find all crafting, repairing, and interacting tools. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game tools, utility tools, crafting tools, tools database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/misc',
      name: 'items-misc',
      component: ItemsMiscView,
      meta: {
        seo: {
          title: 'VEIN Game Misc Items - Complete Misc Items List - veingame.org',
          description: 'The complete VEIN Misc Items Database. Find all miscellaneous items, including quest items, trade goods, and collectibles. Get stats, crafting recipes, and where to find each item.',
          keywords: 'VEIN game misc items, miscellaneous items, collectibles, misc items database, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-items/:category/:id',
      name: 'items-detail',
      component: ItemsDetailView,
    },
    {
      path: '/vein-map',
      name: 'map',
      component: MapView,
      meta: {
        seo: {
          title: 'VEIN game Map | All Resource Locations Spawns - veingame.org',
          description: 'the high-resolution, interactive VEIN Map. Locate every resource node, key landmark, item spawn point, and across all zones to maximize your survival chances.',
          keywords: 'VEIN game map, Champlain Valley, interactive map, locations, points of interest, VEIN survival game'
        }
      }
    },
    {
      path: '/vein-map-detail',
      name: 'map-detail',
      component: MapDetailView,
      meta: {
        seo: {
          title: 'VEIN Game Map Details | Hidden Loot, Secrets - veingame.org',
          description: 'detailed map in VEIN. Locate every hidden cave, rare resource spawn, secret chest, and crucial Points of Interest to maximize your exploration and survival.',
          keywords: 'VEIN interactive map, VEIN game map, world map, locations, points of interest, navigation, VEIN survival game'
        }
      }
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
