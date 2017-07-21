/**
 * Course Class
 * @class
 */
class Course{
    /**
     * Constructor
     * @param {string} name
     * @param {string} parent
     * @constructor
     */
    constructor(name,parent){
        this.name=name;
        this.parent=parent;
    }

    /**
     * Gets class details in string
     * @returns {string}
     */
    toString(){
        var parent='';
        if(this.parent)
            parent=this.parent.toString()+'->';
        return parent+this.name;
    }

    /**
     * Set name of course
     * @param {string} name
     */
    setName(name){
        this.name=name;
    }

    /**
     * get name of course
     * @returns {string|*}
     */
    getName(){
        return this.name;
    }

    /**
     * Set name of course parent
     * @param parent
     */
    setParent(parent){
        this.parent=parent;
    }

    /**
     * get parent of course
     * @returns {string|*}
     */
    getParent(){
        return this.parent;
    }
}