function sortedList() {
    return {
        list: [],
        size: 0,
        add: function (el) {
            this.list.push(el);
            this.size++;
            this.list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        }
    };
}