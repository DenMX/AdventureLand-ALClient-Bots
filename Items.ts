import { ItemName } from "../source/definitions/adventureland-data"

export type ItemConf = {
    offeringp ? : number,
    offering ? : number,
    destroy ? : boolean,
    stop ? : number,
    upscroll ? : number
}

const MAX_LEVEL_TO_UPGRADE : number = 8;

const DONT_UPGRADE : ItemConf = {
    stop: 0
}

const JUST_UPGRADE_TO_6: ItemConf ={
    stop: 6
}

const BASE : ItemConf = {
    upscroll: 5
}

const PRETTY_RARE: ItemConf = {
    upscroll: 0,
    offeringp: 5,
    stop: 6
}

const DESTROY: ItemConf = {
    destroy: true
}

const UPGRADE_TO_7_WITH_UP_SCROLL_TO_8: ItemConf = {
    upscroll: 7
}

const RARE: ItemConf = {
    stop: 5,
    offering: 3,
    offeringp: 0
}

const BASE_COMPOUND: ItemConf = {
    upscroll: 2,
    stop: 4
}

const PRETTY_RARE_COMPOUND: ItemConf = {
    upscroll: 1,
    stop: 3
}

const RARE_COMPOUND: ItemConf = {
    stop: 1,
    offering: 0
}

export type UpgradeConfig = {[T in ItemName]?: ItemConf}

export class Items  {

    static ITEMS_TO_SALE: ItemName[] = [
        //materials
        'frogt', 
        'xmashat',
        'pstem', 
        // 'carrot',
        'poison', 
        'smush',
        // 'crabclaw',
        'smoke', 
        'ink',
        'snowball',
        'dstones',

        //Elexirs
        'elixirvit0', 
        'elixirvit1', 
        'elixirvit2', 

        //xmass set
        'rednose',
        'iceskates',
        'xmasshoes',
        'xmassweater',
        
        // 'xmaspants',
        'warmscarf',
        'merry',

        //Jewelery
        'hpamulet',
        'hpbelt',
        'vitearring',
        'vitring',
        // 'dexring',
        // 'dexearring',
        // 'dexbelt',
        'dexamulet',
        'ringsj',

        "helmet1",
        "pants1",
        "gloves1",
        "shoes1",
        "coat1",

        //scrolls
        'vitscroll',
        'forscroll',
        'cape',

        //begginers shit
        // 'cclaw',
        'stinger',
        'slimestaff',
        'gloves',
        // 'wgloves',
        'shoes',
        
        'quiver',
        // 'wshoes',

        //Rugged set
        'helmet1',
        'pants1',
        'gloves1',
        'shoes1',
        'coat1',

        //useless weapons
        'dagger',
        'hotchocolate',
        'throwingstars',
        'carrotsword',
        'spear',
        'swifty',
        'phelmet',
        'sword',

        //halloween
        'gphelmet',
        'skullamulet',
        'lantern',

        //weapon of dead
        'pmaceofthedead',
        'swordofthedead',
        'staffofthedead',
        'daggerofthedead',
        'maceofthedead',
        // 'bowofthedead',

        //heavy useless
        'hboots',
        'hgloves'
        
        //shields
        // 'mshield'
        
    ]

    static ITEMS_TO_UPGRADE : UpgradeConfig = {
        //begginers shit
        // helmet: {level: 8, up: 7},
        firebow: DESTROY,
        lostearring: DESTROY,
        wcap: BASE,
        // coat: {level: 8},
        wattire: BASE,
        // pants: {level: 8},
        wbreeches: BASE,
        wgloves: BASE,
        wshoes: BASE,
        // helmet1: {level: 8},
        // pants1: {level: 8},
        // gloves1: {level: 8},
        // shoes1: {level: 8},
        // coat1: {level: 8},

        //heavy set
        hhelmet: JUST_UPGRADE_TO_6,
        harmor: JUST_UPGRADE_TO_6,
        hpants: JUST_UPGRADE_TO_6,

        //darkforge set 
        xhelmet: RARE,
        xboots: RARE,
        xarmor: RARE,
        xpants: RARE,
        xgloves: RARE,
        
        //capes
        bcape: JUST_UPGRADE_TO_6,
        angelwings: BASE,
        gcape: JUST_UPGRADE_TO_6,


        wingedboots: BASE,
        // quiver: {level: 9}, SELL?
        tigershield: DONT_UPGRADE,
        mcape: DONT_UPGRADE,
        
        mittens: BASE,
        frankypants: RARE,
        
        sweaterhs: BASE,
        mshield: JUST_UPGRADE_TO_6,
        xmaspants: JUST_UPGRADE_TO_6,

        //WEAPON
        firestaff: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        // sword: {level: 9},
        bow: BASE,
        staff: BASE,
        fireblade: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        // t2bow: {level: 9},
        bowofthedead: JUST_UPGRADE_TO_6,
        basher: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        ololipop: BASE,
        glolipop: BASE,
        candycanesword: BASE,
        ornamentstaff: BASE,
        pmace: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        // merry: {level:9}, SELL?
        // warmscarf: {level: 9}, SELL?
        bataxe: BASE,
        vhammer: RARE,
        xmace: BASE, 
        oozingterror: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        harbringer: UPGRADE_TO_7_WITH_UP_SCROLL_TO_8,
        spearofthedead: JUST_UPGRADE_TO_6,
        t3bow: RARE,
        crossbow: PRETTY_RARE,
        broom: PRETTY_RARE,
        cclaw: BASE,
        sshield: BASE,
        mushroomstaff: BASE,
        snowflakes: BASE,
        t2quiver: JUST_UPGRADE_TO_6,
        
        rapier: JUST_UPGRADE_TO_6,
        pinkie: JUST_UPGRADE_TO_6,
        supermittens: RARE,
        wand: BASE,
        lmace: RARE
    } 

    static JEWELRY_TO_UPGRADE : UpgradeConfig =
    {
        strbelt: BASE_COMPOUND,
        intbelt: BASE,
        strring: BASE,
        jacko: PRETTY_RARE,
        talkingskull: PRETTY_RARE_COMPOUND,
        intamulet: BASE_COMPOUND,
        stramulet: BASE_COMPOUND,
        intearring: BASE_COMPOUND,
        strearring: BASE_COMPOUND,
        intring: BASE_COMPOUND,
        wbook0: BASE_COMPOUND,
        t2intamulet: PRETTY_RARE_COMPOUND,
        t2stramulet: PRETTY_RARE_COMPOUND,
        t2dexamulet: PRETTY_RARE_COMPOUND,
        wbookhs: PRETTY_RARE_COMPOUND,
        santasbelt: PRETTY_RARE_COMPOUND,
        dexring: BASE_COMPOUND,
        dexearring: BASE_COMPOUND,
        dexbelt: BASE_COMPOUND
    }

    static ITEMS_TO_BUY_PONTY =
    {
        xhelmet: {level: 5},
        xarmor: {level: 5},
        xpants: {level: 5},
        wingedboots: {level: 5},
        xboots: {level: 5},
        glolipop: {level: 7},
        ololipop: {level: 7},
        tigershield: {level: 7},
        mcape: {level: 5},
        cclaw: {level: 9},
        
        tracker: {},
        computer: {},
        supercomputer: {}

    }

}