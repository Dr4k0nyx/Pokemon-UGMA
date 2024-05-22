export function vivelibGlobalStateManager() {
    let instance = null;
  
    function createInstance() {
      let nbTalkedVivelib = 0;
  
      return {
        setNbTalkedVivelib(value) {
          nbTalkedVivelib = value;
        },
        getNbTalkedVivelib: () => nbTalkedVivelib,
      };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
  
        return instance;
      },
    };
  }

  export function yeleniaGlobalStateManager() {
    let instance = null;
  
    function createInstance() {
      let nbTalkedYelenia = 0;
  
      return {
        setNbTalkedYelenia(value) {
          nbTalkedYelenia = value;
        },
        getNbTalkedYelenia: () => nbTalkedYelenia,
      };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
  
        return instance;
      },
    };
  }
  
  