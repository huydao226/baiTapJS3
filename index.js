
document.getElementById("numbers").onclick = function() {

}

var numbers = [];

function luuMang() {
    const numbersInput = document.getElementById("numbers").value;
    const numbers = numbersInput.split(",").map(Number);
    this.numbers = numbers;
    document.getElementById("currentArray").innerHTML = "Mảng hiện tại: " + this.numbers;

}

function themSoVaoMang() {
    const numberInput = +document.getElementById("numbers").value;
    this.numbers.push(numberInput);
    document.getElementById("currentArray").innerHTML = "Mảng hiện tại: " + this.numbers;

}

function tinhToan() {
    var selectedFuntion = document.getElementById("selector").value;

    switch (selectedFuntion) {
        case "1":
            this.tongSoDuong();
            break;
        case "2":
            this.demSoDuong();
            break;
        case "3":
            this.timSoNhoNhat();
            break;
        case "4":
            this.minDuong();
            break;
        case "5":
            this.timSoChanCuoi();
            break;
        case "6":
            this.doiViTri();
            break;
        case "7":
            this.sort();
            break;
        case "8":
            this.timSoNguyenTo();
            break;
        case "9":
            this.demSoNguyen();
            break;
        case "10":
            this.soSanhAmDuong();
            break;
        default:
            break;
    }
}

//Tổng số dương
function tongSoDuong() {
  const tong = this.numbers.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
  document.getElementById("results").innerHTML += `<p>Tổng các số dương trong mảng: ${tong}</p>`;
}

//Đếm số dương
function demSoDuong() {
  const counting = this.numbers.filter(num => num > 0).length;
  document.getElementById("results").innerHTML += `<p>Số lượng số dương trong mảng: ${counting}</p>`;
}

//Tìm min
function timSoNhoNhat() {
   const min = Math.min(...numbers);
   document.getElementById("results").innerHTML += `<p>Số nhỏ nhất trong mảng: ${min}</p>`;
}

//Số dương nhỏ nhất
function minDuong() {
  const positiveNumbers = this.numbers.filter(num => num > 0);
  const minPositiveNumber = positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : -1;
  document.getElementById("results").innerHTML += `<p>Số dương nhỏ nhất trong mảng: ${minPositiveNumber}</p>`;
}

//Số chẵn cuối
function timSoChanCuoi() {
  const lastEvenNumber = this.numbers.filter(num => num % 2 === 0).pop() || -1;
  document.getElementById("results").innerHTML += `<p>Số chẵn cuối cùng trong mảng: ${lastEvenNumber}</p>`;
}

//Đổi vị trí
function doiViTri() {
  const swapPositions = () => {
    const position1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
    const position2 = parseInt(prompt("Nhập vị trí thứ hai:"));

    if (position1 >= 0 && position1 < this.numbers.length && position2 >= 0 && position2 < this.numbers.length) {
      const temp = this.numbers[position1];
      this.numbers[position1] = this.numbers[position2];
      this.numbers[position2] = temp;
      resultsDiv.innerHTML += `<p>Mảng sau khi đổi chỗ: ${numbers.join(", ")}</p>`;
    } else {
      resultsDiv.innerHTML += `<p>Vị trí không hợp lệ.</p>`;
    }
  };
}

//sort
function sort() {
    const sortArray = () => {
        this.numbers.sort((a, b) => a - b);
        document.getElementById("results").innerHTML += `<p>Mảng sau khi sắp xếp: ${this.numbers.join(", ")}</p>`;
      };
  };

//tim so nguyen to
function timSoNguyenTo() {
  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const firstPrimeNumber = this.numbers.find(isPrime) || -1;
  document.getElementById("results").innerHTML += `<p>Số nguyên tố đầu tiên trong mảng: ${firstPrimeNumber}</p>`;
}

//   
function demSoNguyen() {

}

//so sanh so am duong
function soSanhAmDuong() {


}
