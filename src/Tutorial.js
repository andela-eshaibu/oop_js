
/**
 * Tutorial Class
 * @class
 */
class Tutorial extends Company{
    /**
     * Constructor
     * @param {string} name
     * @param {number} year
     * @param {string} location
     * @param {Array}courses
     * @constructor
     */
    constructor(name,year,location,courses){
        super(name,year,location);
        this.courses=courses;
    }

    /**
     * Overriding parent toString method
     * Gets class details in string
     * @returns {string}
     */
    toString(){
        return super.toString()+' '+this.courses;
    }

    /**
     * add course
     * @param {String} course
     */
    addCourse(course){
        this.courses.push(course);
    }

    /**
     * Remove course
     * @param course
     */
    removeCourse(course){
        var index=this.courses.indexOf(course);
        this.courses.splice(index,1);
    }
}