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
  
export function alonsoGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedAlonso = 0;
  
    return {
      setNbTalkedAlonso(value) {
        nbTalkedAlonso = value;
      },
      getNbTalkedAlonso: () => nbTalkedAlonso,
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

export function thaysGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedThays = 0;

    return {
      setNbTalkedThays(value) {
        nbTalkedThays = value;
      },
      getNbTalkedThays: () => nbTalkedThays,
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

export function luisGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedLuis = 0;

    return {
      setNbTalkedLuis(value) {
        nbTalkedLuis = value;
      },
      getNbTalkedLuis: () => nbTalkedLuis,
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

export function yumilvaGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedYumilva = 0;

    return {
      setNbTalkedYumilva(value) {
        nbTalkedYumilva = value;
      },
      getNbTalkedYumilva: () => nbTalkedYumilva,
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

export function vicenzoGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedVicenzo = 0;

    return {
      setNbTalkedVicenzo(value) {
        nbTalkedVicenzo = value;
      },
      getNbTalkedVicenzo: () => nbTalkedVicenzo,
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

export function chavezGlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedChavez = 0;

    return {
      setNbTalkedChavez(value) {
        nbTalkedChavez = value;
      },
      getNbTalkedChavez: () => nbTalkedChavez,
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