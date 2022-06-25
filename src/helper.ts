// <reference types="chrome"/>

export const setItem = (name: any) => {
  localStorage.setItem('name', name)
  if (process.env.NODE_ENV !== 'development') {
    chrome.storage.sync.set({'name': name}, ()=>{})
  }
}

export const clearItems = () => {
  localStorage.clear()
  if (process.env.NODE_ENV !== 'development') {
    chrome.storage.sync.clear()
  }
}
