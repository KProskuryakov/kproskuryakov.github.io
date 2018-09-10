# Potion Seller
## Idea outline
- Potion seller game
    - Ingredients
        - Randomized properties
        - Each ingredient has different % affixes
        - Figure out ratios to boost certain properties
        - Combination of ingredients yield different properties
        - Start with a few on hand and then order more
    - Automation
        - Can treat ingredient combos like other ingredients
        - Build pipelines that create ingredients at a certain rate
            - Toggle them on and off
            - Tweak the rate 
            - Tweak the inputs and outputs
        - Output ingredients have random modifiers and affixes to them
            - Need to filter output ingredients because some might not cause predictable outputs
    - Cash money
        - Start with some
        - Ordering ingredients will cost $$$
        - Sell combined ingredients and potions to the market to make money
        - Take on bulk orders for specific potions for a bigger profit
    - Inspired by
        - Potion seller video because it's funny
        - Factorio for the automation
        - SpaceChem for the ingredient combination
        - Path of Exile for the ingredient affixes
    - First steps
        - Make a list of ingredients and affixes
        - Be able to calculate affix ranges and averages
        - Calculate potions from ingredients averages

## Ingredients
Aelium
Arendil
Baliunn
Borda
Brall
Cadmus
Chitiki
Clementile
Czenl
Darkroot
Dravanleaf
Dymium
Eargart
Eomiul
Flalanil
Forenheart
Grassboor
Gyreopo
Hollowrose
Hypheen
Idriflower
Ignium
Janum
Jolium
Jozziclaw
Kavorne
Kristal
Kylbark
Lechert
Lunmig
Maleeril
Mordalis
Manmar
Normil
Nymnom
Odflipp
Ogarse
Osdrel
Pakin
Poffium
Preliun
Qorbis
Quixe
Raniffal
Redoran
Rystrium
Saranim
Sentigal
Storyx
Targin
Tritone
Tungeon
Udvar
Ulmium
Unvil
Uzgon
Vagrul
Viridiun
Vustrik
Waxxel
Woadleaf
Wyntie
Xanpeer
Xoffrey
Xylomere
Ybbinik
Yclear
Ykkun
Zarandil
Zogfar
Zyxtirm

## Affixes
- Base stats
    - Healing
    - Mana
    - Armor
    - Shield
    - Power
    - Stamina
- Attributes
    - Strength
    - Agility
    - Dexterity
    - Charisma
    - Constitution
    - Endurance
    - Intelligence
    - Wisdom
    - Luck
    - Finesse
    - Perception
- Magical Attunement/Resistance/Power
    - Fire
    - Water
    - Earth
    - Air
    - Lightning
    - Ice
    - Steam
    - Lava
    - Stone
    - Metal
    - Life
    - Death
    - Light
    - Dark
    - Gravity
- Other effects
    - Height
    - Fertility
    - Beauty
    - Scent
    - Darkvision
    - Language
    - Hearing

## Affix power
Affixes come in different power levels
1. Miniscule
2. Minor
3. Weak
4. Fundamental
5. Moderate
6. Stable
7. Major
8. Bountiful
9. Master
10. Superior