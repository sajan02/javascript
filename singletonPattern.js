/**
 * A Singleton is an object which can only be instantiated only once. 
 * A singleton pattern creates a new instance of a class if one doesn’t exist. 
 * If an instance exists, it simply returns a reference to that object. 
 * Any repeated calls to the constructor would always fetch the same object.
 * Reference - https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd
 */

const singleton = (function() {
    let instance;
    
    function init() {
      return {
        name: 'Peter',
        age: 24,
      };
    }
    return {
      getInstance: function() {
        if(!instance) {
          instance = init();
        }
        
        return instance;
      }
    }
  })();
  const instanceA = singleton.getInstance();
  const instanceB = singleton.getInstance();
  // prints true
  console.log(instanceA === instanceB);