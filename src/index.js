class Sorter {
  constructor() {
      this.array = [];
      this.compareFunction = (a, b) => a - b;
  }
  add(elem) {
      this.array.push(elem);
  }
  at(index) {
      return this.array[index];
  }
  get length() {
      return this.array.length;
  }
  toArray() {
      return this.array;
  }
  sort(indices) {
      var mas = [];
      indices.sort();
      for (var i = 0; i < indices.length; i++) {
          mas.push(this.array[indices[i]]);
      }
      mas.sort(this.compareFunction);
      for (var i = 0; i < indices.length; i++) {
          this.array[indices[i]] = mas[i];
      }
  }
  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
  }
};

module.exports = Sorter;
