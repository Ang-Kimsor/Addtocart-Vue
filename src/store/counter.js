import { defineStore } from "pinia";
const getCount = () => {
    const count = localStorage.getItem('count')
    return count ? JSON.parse(count) : 0;
}
const setCount = (count) => {
    localStorage.setItem('count', JSON.stringify(count))
}
export const useCounter = defineStore('counter', {
    state: () => ({
        count: getCount()
    }),
    getters: {
        double: state => state.count * 2
    },
    actions: {
        increment() {
            this.count++
            setCount(this.count)
        },
        decrement() {
            this.count--
            setCount(this.count)
        },
        reset() {
            this.count = 0
            setCount(this.count)
        }
    }
})