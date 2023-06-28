let ladder = {
  step: 0,
  up: function () {
      this.step++;
      return this; //added return this
  },
  down: function () {
      this.step--;
      return this; //added return this
  },
  showStep: function () { // показує теперішню сходинку
      alert(this.step);
      return this; //added return this
  }
};

ladder.up().up().down().showStep(); 