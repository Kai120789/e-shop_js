import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'electronic'},
            {id: 2, name: 'machines'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 10000, rating: 5, img: '', brandId: 1, typeId: 1},
            {id: 2, name: 'Iphone 12 pro', price: 15000, rating: 5, img: '', brandId: 1, typeId: 1}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    getTypes(types) {
        return this._types
    }

    getBrands(brands) {
        return this._brands
    }

    getDevices(devices) {
        return this._devices
    }
}