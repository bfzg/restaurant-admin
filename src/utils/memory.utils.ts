/**
 * 对浏览器本地存储进行二次封装方便统一管理 单例模式
 */

class StorageMemory {
  private static localStorageInstance: StorageMemory;
  private static sessionStorageInstance: StorageMemory;
  private storage: Storage;

  private constructor(storageType: "localStorage" | "sessionStorage") {
    this.storage = window[storageType];
  }

  public static getInstance(storageType: "localStorage" | "sessionStorage"){
    if (storageType === 'localStorage') {
        if (!StorageMemory.localStorageInstance) {
            StorageMemory.localStorageInstance = new StorageMemory('localStorage');
        }
        return StorageMemory.localStorageInstance;
      } else if (storageType === 'sessionStorage') {
        if (!StorageMemory.sessionStorageInstance) {
            StorageMemory.sessionStorageInstance = new StorageMemory('sessionStorage');
        }
        return StorageMemory.sessionStorageInstance;
      }
  }

  public getItem (key:string):any{
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  public setItem (key:string, value:any):void{
    this.storage.setItem(key, JSON.stringify(value));
  }

  public removeItem (key:string):void{
    this.storage.removeItem(key);
  }

  public clear ():void{
    this.storage.clear();
  }
}

export default StorageMemory;