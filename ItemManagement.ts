import { ItemConf, Items, UpgradeConfig } from "./Items.ts"
import { Item } from "../source/Item.ts"
import { Character } from "../source/Character.ts"
import { ItemName, GItem, GData } from "../source/definitions/adventureland-data.ts";
import { ItemData } from "../source/definitions/adventureland-server.ts";
import {Game } from "../source/Game.ts";
import { Merchant } from "../source/Merchant.ts";
import { Priest } from "../source/Priest.ts";
import { Rogue } from "../source/Rogue.ts";
import { Warrior } from "../source/Warrior.ts";
import { Paladin } from "../source/Paladin.ts";
import { Mage } from "../source/Mage.ts";



export class ItemManagement {

    bot : Mage | Priest | Rogue | Warrior | Paladin | Merchant;
    pc : boolean = false
    constructor(current_bot: Mage | Priest | Rogue | Warrior | Paladin | Merchant)
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

    public async upgradeItems()
    {
        if(this.bot.map == 'bank') {
            setTimeout(this.upgradeItems,2000)
            return
        }
        try{
            for(let i = 0; i< 9; i++)
            {
                for(let [slot , item ] of this.bot.getItems())
                {
                    let upgrade_config = Items.ITEMS_TO_UPGRADE[item.name]
                    if(upgrade_config===undefined) continue
                    if(!item.level || item.level != i || (upgrade_config.stop && upgrade_config.stop<=item.level)) continue
                    if(upgrade_config?.offering && upgrade_config?.offering! >= item.level && !this.bot.locateItem('offering')) continue
                    if(upgrade_config?.offeringp && upgrade_config?.offeringp! >= item.level && !this.bot.locateItem('offeringp')) continue
                    if(upgrade_config?.destroy)
                    {
                        this.bot.dismantle(slot)
                        continue
                    }
                    let scroll_level = item.calculateGrade()

                    //up scroll 
                    if(upgrade_config.upscroll)
                    {
                        if(upgrade_config.upscroll >= item.level) {
                            if(scroll_level!=3) scroll_level+=1
                        }    
                    }
                    let scroll_name = `scroll${scroll_level}` as ItemName
                    let scroll = this.bot.locateItem(scroll_name)
                    
                    if(!scroll)
                    {
                        await this.bot.buy(scroll_name)
                        scroll = this.bot.locateItem(scroll_name)
                    }
                    
                    let offering : number = -1

                    if(upgrade_config.offeringp && item.level >= upgrade_config.offeringp)
                    {
                        offering = this.bot.locateItem('offeringp')
                    }

                    if(upgrade_config.offering && item.level >= upgrade_config.offering)
                    {
                        offering = this.bot.locateItem('offering')
                    }

                    if(this.bot.ctype=='merchant' && this.bot.mp> Game.G.skills.massproductionpp.mp!) await this.bot.massProductionPP()
                    if(this.bot.ctype=='merchant' && this.bot.mp > Game.G.skills.massproduction.mp!) await this.bot.massProduction()
                    if(offering>=0) await this.bot.upgrade(slot, scroll, offering)
                    else await this.bot.upgrade(slot, scroll)
                    
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