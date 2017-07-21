/**
 * Company Class
 * @class
 */
class Company{
    /**
     * Constructor
     * @param {string} name
     * @param {number} year
     * @param {string} location
     * @constructor
     */
    constructor(name,year,location){
        this.name=name;
        this.year=year;
        this.location=location;
    }
    getname(){
        return this.name;
    }
    getyear(){
        return this.year;
    }
    getlocation(){
        return this.location;
    }
    setlocation(location){
        this.location=location;
    }
    setyear(year){
        this.year=year;
    }
    setname(name){
        this.name=name;
    }
    /**
     * Gets class details in string
     * @returns {string}
     */
    toString(){
        return this.name+' '+this.location+' '+this.year;
    }
}