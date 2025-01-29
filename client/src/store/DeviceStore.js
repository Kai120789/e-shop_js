import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this.types = [
            {id: 1, name: 'electronic'},
            {id: 2, name: 'machines'},
            {id: 3, name: 'notebooks'},
            {id: 4, name: 'tablets'},
        ]
        this.brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Xiaomi'},
            {id: 4, name: 'Lenovo'},
        ]
        this.devices = [
            {id: 1, name: 'Iphone 12', price: 10000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1},
            {id: 2, name: 'Iphone 12 pro', price: 15000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1},
            {id: 3, name: 'Iphone 12', price: 10000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1},
            {id: 4, name: 'Iphone 12 pro', price: 15000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1},
            {id: 5, name: 'Iphone 12', price: 10000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1},
            {id: 6, name: 'Iphone 12 pro', price: 15000, rating: 5, img: 'https://cdn-icons-png.flaticon.com/512/9929/9929025.png', brandId: 1, typeId: 1}
        ]
        this.selectedType = {}
        this.selectedBrand = {}
        makeAutoObservable(this)
    }

    setSelectedType(type) {
        this.selectedType = type
    }

    setSelectedBrand(brand) {
        this.selectedBrand = brand
    }

    setTypes(types) {
        this.types = types
    }

    setBrands(brands) {
        this.brands = brands
    }

    setDevices(devices) {
        this.devices = devices
    }

    getSelectedType() {
        return this.selectedType
    }

    getSelectedBrand() {
        return this.selectedBrand
    }

    getTypes() {
        return this.types
    }

    getBrands() {
        return this.brands
    }

    getDevices() {
        return this.devices
    }
}