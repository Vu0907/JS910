function NhanVien(
  _taiKhoan,
  _hoTen,
  _Email,
  _matKhau,
  _ngayLam,
  _luongCoban,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.Email = _Email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoban = _luongCoban;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tongLuong = function () {
    if (this.chucVu == "Giám đốc") {
      this.tongLuong = this.luongCoban * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCoban * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tongLuong = this.luongCoban * 1;
    }
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "Giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung bình";
    }
  };
}
