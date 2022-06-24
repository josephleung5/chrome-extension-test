// <reference types="chrome"/>

export const setItem = (name: any) => {
  localStorage.setItem('name', name)
  chrome.storage.sync.set({'name': name}, ()=>{})
}

export const clearItems = () => {
  localStorage.clear()
  chrome.storage.sync.clear()
}