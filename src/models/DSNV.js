function DanhSachNhanVien() {
  this.arr = [];

  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  this.timVitri = function (taiKhoan) {
    var index = -1;
    for (i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      if (nv.taiKhoan == taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.xoaNV = function (taiKhoan) {
    var index = this.timVitri(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.chiTietNV = function (taiKhoan) {
    var index = this.timVitri(taiKhoan);

    if (index !== -1) {
      return this.arr[index];
    }
  };

  this.capNhatNV = function (nv) {
    var index = this.timVitri(nv.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };

  this.timNV = function (keyword) {
    var arrTimkiem = [];

    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      var xepLoaiLowerCase = nv.xepLoai.toLowerCase();
      var keywordLowerCase = keyword.toLowerCase();
      if (xepLoaiLowerCase.indexOf(keywordLowerCase) !== -1) {
        arrTimkiem.push(nv);
      }
    }
    return arrTimkiem;
  };
}
