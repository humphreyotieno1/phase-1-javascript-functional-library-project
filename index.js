function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], keys[i]));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const values = Array.isArray(collection) ? collection : Object.values(collection);
  
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }

  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  