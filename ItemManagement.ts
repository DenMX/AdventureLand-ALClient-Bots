import { Items } from "./Items.ts"
import { Item } from "../source/Item.ts"
import { Character } from "../source/Character.ts"
import { ItemName, GItem, GData } from "../source/definitions/adventureland-data.ts";
import { ItemData } from "../source/definitions/adventureland-server.ts";
import {Game } from "../source/Game.ts";



export class ItemManagement {

    bot : Character;
    pc : boolean = false
    constructor(current_bot: Character)
    {
        this.bot = current_bot
        this.pc = this.bot.hasItem(['computer', 'supercomputer'], this.bot.items)
        this.startLoops()
    }
    //call all loops
    public async startLoops()
    {
        this.checkItems()
        if(this.pc)
        {
            setInterval(this.sellItems, 1000)
            setInterval(this.dismantleItems, 1000)
            this.upgradeItems()
            this.combineItems()
            this.exchangeItems()
        }
        else
        {
            setInterval(this.sendItems, 10000)
        }
    } 

    public async checkItems()
    {
        if(this.bot.esize<22) {

        }
    }


    public async sellItems()
    {
        if(this.bot.map == 'bank') return
        //find indexes of all items to sell
        let items_for_sale_indx:  number [] = this.bot.locateItems(Items.ITEMS_TO_SALE, this.bot.items)
        //if there is no items return
        if(items_for_sale_indx.length<=0) return
        
        items_for_sale_indx.forEach((e)=>this.bot.sell(e))
        
    }

    public async dismantleItems()
    {
        if(this.bot.map == 'bank') return
        //find indexes of all items to dismantle
        let items_for_dismantle_indx = this.bot.locateItems(Items.DISMANTLE_ITEMS, this.bot.items)
        //if there is no items return
        if(items_for_dismantle_indx.length<=0) return

        items_for_dismantle_indx.forEach((e)=> this.bot.dismantle(e))
    }

    public async upgradeItems()
    {
        if(this.bot.map == 'bank') {
            setTimeout(this.upgradeItems,2000)
            return
        }
        try{
            for(let i = 0; i< 9; i++)
            {
                for(let item of this.bot.items)
                {
                    if(!item) continue
                    if(!Items.ITEMS_TO_UPGRADE[item.name]) continue
                    if(item.level && item.level > i) continue
                    let item_class = new Item(item, Game.G)
                    item_class.calculateGrade()
                }
            }
        }
        catch(error){
            console.warn(error)
        }
        finally
        {
            setTimeout(this.upgradeItems, 60000)
        }
    }

    public async combineItems()
    {
        if(this.bot.map == 'bank') {
            setTimeout(this.combineItems,2000)
            return
        }
        try{

        }
        catch(error){
            console.warn(error)
        }
        finally
        {
            setTimeout(this.combineItems, 60000)
        }
    }

    public async storeItems()
    {

    }

    public async sendItems()
    {
        if(this.bot.ctype == "merchant") return

    }

    public async checkScrolls()
    {
        if(this.bot.map == 'bank') {
            setTimeout(this.checkScrolls,2000)
            return
        }
        if(this.bot.ctype != "merchant") return
        
    }

    public async exchangeItems()
    {
        if(this.bot.map == 'bank') {
            setTimeout(this.exchangeItems,2000)
            return
        }
        try{

        }
        catch(error){
            console.warn(error)
        }
        finally
        {
            setTimeout(this.exchangeItems
            
            
                , 60000)
        }
    }

}