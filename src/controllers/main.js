var dsnv = new DanhSachNhanVien();
// tạo validation
var validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

// Lấy thông tin user
function layThongtinNV(isAdd) {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var Email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoban = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  // Validation
  var valid = true;

  if (isAdd) {
    // Tài khoản
    valid &=
      validation.ktRong(taiKhoan, "tbTKNV", "Tài khoản") &&
      validation.ktSo(taiKhoan, "tbTKNV", "(*) Vui lòng chỉ nhập số") &&
      validation.ktDodaikitu(
        4,
        6,
        taiKhoan,
        "tbTKNV",
        "(*) Vui lòng nhập ký số từ 4 - 6"
      ) &&
      validation.ktTaikhoantrung(
        dsnv.arr,
        taiKhoan,
        "tbTKNV",
        "Tài khoản bị trùng"
      );
  }

  // Họ tên
  valid &=
    validation.ktRong(hoTen, "tbTen", "Họ tên") &&
    validation.ktChuoikitu(hoTen, "tbTen", "(*) Vui lòng chỉ nhập chuỗi kí tự");

  // email
  valid &=
    validation.ktRong(Email, "tbEmail", "Email") &&
    validation.ktEmail(
      Email,
      "tbEmail",
      "(*) Vui lòng nhập email đúng định dạng"
    );

  // Mật khẩu
  valid &=
    validation.ktRong(matKhau, "tbMatKhau", "Mật khẩu") &&
    validation.ktDodaikitu(
      6,
      10,
      matKhau,
      "tbMatKhau",
      "(*) Vui lòng nhập ký từ từ 6 - 10"
    ) &&
    validation.ktMatkhau(
      matKhau,
      "tbMatKhau",
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  // Ngày làm
  valid &= validation.ktRong(ngayLam, "tbNgay", "Ngày làm");

  // Lương cơ bản
  valid &=
    validation.ktRong(luongCoban, "tbLuongCB", "Lương cơ bản") &&
    validation.ktSo(luongCoban, "tbLuongCB", "(*) Vui lòng chỉ nhập số") &&
    validation.ktSotrongkhoang(
      1000000,
      20000000,
      luongCoban,
      "tbLuongCB",
      "(*) Vui lòng nhập đúng lương"
    );

  // Chức vụ
  valid &= validation.ktChucvu(
    "chucvu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  // Giờ làm
  valid &=
    validation.ktRong(gioLam, "tbGiolam", "Giờ làm") &&
    validation.ktSo(gioLam, "tbGiolam", "(*) Vui lòng chỉ nhập số") &&
    validation.ktSotrongkhoang(
      80,
      200,
      gioLam,
      "tbGiolam",
      "(*) Vui lòng nhập đúng số giờ làm"
    );

  if (!valid) return;
  var nv = new NhanVien(
    taiKhoan,
    hoTen,
    Email,
    matKhau,
    ngayLam,
    luongCoban,
    chucVu,
    gioLam
  );

  nv.tongLuong();
  nv.xepLoai();

  return nv;
}

// Thêm NV
getEle("btnThemNV").onclick = function () {
  var nv = layThongtinNV(true);

  if (nv) {
    dsnv.themNV(nv);

    renderTable(dsnv.arr);
    setLocalStorage();
  }
};

// Xóa NV
function Xoa(taiKhoan) {
  dsnv.xoaNV(taiKhoan);

  renderTable(dsnv.arr);
  setLocalStorage();
}

// Sửa NV
function Sua(taiKhoan) {
  var nv = dsnv.chiTietNV(taiKhoan);

  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoTen;
    getEle("email").value = nv.Email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoban;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
    getEle("tbTKNV").style.display = "none";
    getEle("btnCapNhat").style.display = "block";
    getEle("btnThemNV").style.display = "none";
  }
}

// Cập nhật NV
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = layThongtinNV(false);
  dsnv.capNhatNV(nv);
  renderTable(dsnv.arr);
  setLocalStorage();
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
  getEle("tknv").disabled = false;
  getEle("tbTKNV").style.display = "none";
});

// Tìm kiếm NV
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var arrTimkiem = dsnv.timNV(keyword);
  renderTable(arrTimkiem);
});
// Tạo bảng
function renderTable(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `
    <tr>
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.Email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong}</td>
      <td>${nv.xepLoai}</td>
      <td>
          <button class="btn btn-info" onclick="Sua('${nv.taiKhoan}')">Sửa</button>
          <button class="btn btn-danger" onclick="Xoa('${nv.taiKhoan}')">Xóa</button>
      </td>
    </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("dsnv", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("dsnv")) {
    var dataString = localStorage.getItem("dsnv");
    dsnv.arr = JSON.parse(dataString);
    renderTable(dsnv.arr);
  }
}
