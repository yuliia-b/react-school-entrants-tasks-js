/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  return new SpiralMatrix(n);
}

class SpiralMatrix {
  constructor(rank) {
    this.step = 0;
    this.rank = rank - 1;
    this.endNum = Math.pow(rank, 2);
    this.round = 0;
    this.i = 0;
    this.j = 0;
    this.number = 1;
    this.matrixNums = [];
    
    return this.getSpiralMatrix();
  }

  createMatrix() {
    let arr = [];

    for (let i = 0; i <= this.rank; i++) {
      arr[i] = [];
    }

    return arr;
  }

  __getNextStep() {
    if (this.i === this.round && this.j === this.round) {
      this.step = 0;
      this.round++;
      this.rank--;
      this.i = this.j = this.round;
    }
  }

  __defineDirection() {
    if (this.i === this.round && this.j < this.rank) this.j++;
    else if (this.i < this.rank && this.j === this.rank) this.i++;
    else if (this.i === this.rank && this.j > this.round) this.j--;
    else if (this.i > this.round && this.j === this.round) this.i--;
  }

  __fillMatrix() {
    this.matrixNums[this.i][this.j] = this.number;
    this.number++;
    this.step++;
  }

  getSpiralMatrix() {
    if (this.matrixNums.length === 0) {
      this.matrixNums = this.createMatrix(this.rank);
    }

    while (this.number <= this.endNum) {
      this.__fillMatrix();
      this.__defineDirection();
      this.__getNextStep();
    }

    return this.matrixNums;
  }
}

export default fillSpiralMatrix;
