export default function vivelibGlobalStateManager() {
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
  