export const updateObject = (oldObject, updateProperties) => {
  return {
    ...oldObject,
    ...updateProperties
  }
}

export const isEmpty = (obj) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
