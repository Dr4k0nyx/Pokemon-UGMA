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

export function npc1GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc1 = 0;

    return {
      setNbTalkedNpc1(value) {
        nbTalkedNpc1 = value;
      },
      getNbTalkedNpc1: () => nbTalkedNpc1,
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

export function npc2GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc2 = 0;

    return {
      setNbTalkedNpc2(value) {
        nbTalkedNpc2 = value;
      },
      getNbTalkedNpc2: () => nbTalkedNpc2,
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

export function npc3GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc3 = 0;

    return {
      setNbTalkedNpc3(value) {
        nbTalkedNpc3 = value;
      },
      getNbTalkedNpc3: () => nbTalkedNpc3,
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

export function npc4GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc4 = 0;

    return {
      setNbTalkedNpc4(value) {
        nbTalkedNpc4 = value;
      },
      getNbTalkedNpc4: () => nbTalkedNpc4,
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

export function npc5GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc5 = 0;

    return {
      setNbTalkedChavez(value) {
        nbTalkedNpc5 = value;
      },
      getNbTalkedNpc5: () => nbTalkedNpc5,
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

export function npc6GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc6 = 0;

    return {
      setNbTalkedNpc6(value) {
        nbTalkedNpc6 = value;
      },
      getNbTalkedNpc6: () => nbTalkedNpc6,
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

export function npc7GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc7 = 0;

    return {
      setNbTalkedNpc7(value) {
        nbTalkedNpc7 = value;
      },
      getNbTalkedNpc7: () => nbTalkedNpc7,
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

export function npc8GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc8 = 0;

    return {
      setNbTalkedNpc8(value) {
        nbTalkedNpc8 = value;
      },
      getNbTalkedNpc8: () => nbTalkedNpc8,
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

export function npc9GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc9 = 0;

    return {
      setNbTalkedNpc9(value) {
        nbTalkedNpc9 = value;
      },
      getNbTalkedNpc9: () => nbTalkedNpc9,
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

export function npc10GlobalStateManager() {
  let instance = null;
  
  function createInstance() {
    let nbTalkedNpc10 = 0;

    return {
      setNbTalkedNpc10(value) {
        nbTalkedNpc10 = value;
      },
      getNbTalkedNpc10: () => nbTalkedNpc10,
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