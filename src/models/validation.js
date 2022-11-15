function Validation() {
  this.ktRong = function (value, errowId, message) {
    if (value == "") {
      getEle(errowId).innerHTML = "(*) " + message + " không được để trống";
      getEle(errowId).style.display = "block";
      return false;
    } else {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    }
  };

  this.ktSo = function (value, errowId, message) {
    var number = /^[0-9]+$/;
    if (value.match(number)) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktDodaikitu = function (min, max, value, errowId, message) {
    if (min <= value.trim().length && value.trim().length <= max) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktChuoikitu = function (value, errowId, message) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktEmail = function (value, errowId, message) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(letter)) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktMatkhau = function (value, errowId, message) {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.match(password)) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktSotrongkhoang = function (min, max, value, errowId, message) {
    if (min <= value && value <= max) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktChucvu = function (id, errowId, message) {
    if (getEle(id).selectedIndex !== 0) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };

  this.ktTaikhoantrung = function (data, value, errowId, message) {
    var exist = false;
    for (i = 0; i < data.length; i++) {
      var nv = data[i];
      if (nv.taiKhoan === value) {
        exist = true;
        break;
      }
    }

    if (exist) {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    } else {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    }
  };
}
