import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 3,
        name: "Смартфоны",
      },
      {
        id: 6,
        name: "Часы",
      },
      {
        id: 16,
        name: "Холодильники",
      },
      {
        id: 4,
        name: "Телевизоры",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "LG",
      },
      {
        id: 2,
        name: "Samsung",
      },
      {
        id: 3,
        name: "Apple",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 14 pro",
        price: 70000,
        raiting: 5,
        img: "1a690341-e18b-49e0-9d70-1c63a926ef03.jpg",
        brandId: 3,
        typeId: 3,
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 50000,
        raiting: 3,
        img: "57c39a73-892c-4fc7-a1a4-e07bc678e07f.jpg",
        brandId: 3,
        typeId: 3,
      },
      {
        id: 3,
        name: "Samsung s20",
        price: 20000,
        raiting: 4,
        img: "225baf4d-fa76-4877-a57d-726cda4fc842.jpg",
        brandId: 2,
        typeId: 3,
      },
      {
        id: 4,
        name: "Samsung a50",
        price: 80000,
        raiting: 0,
        img: "b20cca59-a70d-46d6-ad27-f5779d82dbe0.jpg",
        brandId: 2,
        typeId: 3,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(selectedType) {
    this._selectedType = selectedType;
  }
  setSelectedBrand(selectedBrand) {
    this._selectedBrand = selectedBrand;
  }
}
