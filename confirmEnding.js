function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if (target === str.substr(str.length-target.length,target.length)) {
      return true;
    } else {
    return false;
    }
  }
  
  confirmEnding("Bastian", "n");