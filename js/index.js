// Bài 1
document.getElementById('tinhToan').onclick = function () {
    tinhDiemThi('diemMon1', 'diemMon2', 'diemMon3', 'diemChuan', 'khuVuc', 'doiTuong', 'ket-qua-b1');
}
/**
 * 
 * @param {*} diem1:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diem2:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diem3:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diemDau: là id của thẻ chứa điểm chuẩn cần lấy 
 * @param {*} diemKhuVuc là id của thẻ chứa điểm khu vực cần lấy
 * @param {*} diemDoiTuong là id của thẻ chứa điểm đổi tượng cần lấy
 * @param {*} idOutPut là id của thẻ sẽ chứa kết quả
 * @returns 
 */
function tinhDiemThi(diem1, diem2, diem3, diemDau, diemKhuVuc, diemDoiTuong, idOutPut) {
    var mon1 = +document.getElementById(diem1).value;
    var mon2 = +document.getElementById(diem2).value;
    var mon3 = +document.getElementById(diem3).value;
    var dChuan = +document.getElementById(diemDau).value;
    var dKhuVuc = +document.getElementById(diemKhuVuc).value;
    var dDoiTuong = +document.getElementById(diemDoiTuong).value;
    var tong = mon1 + mon2 + mon3 + dKhuVuc + dDoiTuong;
    var kQua = '';
    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        kQua = `Bạn đã trượt do có 1 môn bị điểm 0. Tổng điểm là ${tong}`;
    } else if (tong < dChuan) {
        kQua = `Bạn đã trượt do không đủ điểm `;
    } if (tong >= dChuan) {
        kQua = `Bạn đã trúng tuyển !!!. Tổng điểm là ${tong}`;
    }
    document.getElementById(idOutPut).innerHTML = kQua;
    return kQua;
}
// Bài 2
document.getElementById('tinhTienDien').onclick = function () {
    tinhTienDien('soDien', 'hoTen', 'ket-qua-b2');
}
function tinhTienDien(dienSuDung, Ten, outPutTienVaTen) {
    var tien = 0;
    var hoTen = document.getElementById(Ten).value;
    var Dien = document.getElementById(dienSuDung).value;
    if (Dien <= 50 && Dien >= 0) {
        tien = Dien * 500;
    }
    else if (Dien > 50 && Dien <= 100) {
        tien = 50 * 500 + (Dien - 50) * 650;
    }
    else if (Dien > 100 && Dien <= 200) {
        tien = 50 * 500 + 50 * 650 + (Dien - 100) * 850;
    }
    else if (Dien > 200 && Dien <= 350) {
        tien = 50 * (500 + 650) + 100 * 850 + (Dien - 200) * 1100;
    }
    else {
        tien = 50 * (500 + 650) + 100 * 850 + 150 * 1100 + (Dien - 350) * 1300;
    }
    tienDien = new Intl.NumberFormat('vn-VN').format(tien);
    document.getElementById(outPutTienVaTen).innerHTML = `Họ và tên là: ${hoTen} ; Số tiền điện là: ${tienDien} `;
    var kQuaB2 = document.getElementById(outPutTienVaTen).innerHTML;
    return kQuaB2;
}
// Bài 3 
document.getElementById('tinhTienThue').onclick = function () {
    tinhTienThue('tongThuNhap', 'soNguoiPhuThuoc', 'nhapHoTen', 'ket-qua-b3')
}
function tinhTienThue(thuNhapThuc, soNgPhuThuoc, ten, idOutPutB3) {
    var thuNhap = document.getElementById(thuNhapThuc).value;
    var hoVaTen = +document.getElementById(ten).value;
    var tienThue = 0;
    var phuthuoc = +document.getElementById(soNgPhuThuoc).value;
    thuNhapChiuThue = thuNhap - 4e+6 - phuthuoc * 1.6e+6;
    if (thuNhapChiuThue <= 60e+6 && thuNhapChiuThue >= 0) {
        tienThue = thuNhapChiuThue * 0.05;
    }
    else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        tienThue = (60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1);
    }
    else if (thuNhapChiuThue > 120e+6 & thuNhapChiuThue <= 210e+6) {
        tienThue = thuNhapChiuThue * 0.15;
    }
    else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        tienThue = thuNhapChiuThue * 0.2;
    }
    else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * 0.25;
    }
    else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        tienThue = thuNhapChiuThue * 0.3;
    }
    else {
        tienThue = thuNhapChiuThue * 0.35;
    }
    tienThueFormat = new Intl.NumberFormat('vn-VN').format(tienThue);
    document.getElementById(idOutPutB3).innerHTML = `Họ và tên là: ${hoVaTen} ; Số tiền thuế là: ${tienThueFormat}`;
    var kQuaB3 = document.getElementById(idOutPutB3).innerHTML;
    return kQuaB3;
}
// Bài 4:
document.getElementById('soKetNoi').style.display = 'none'
document.getElementById('loaiKhachHang').onchange = function () {
    displayKetNoi('loaiKhachHang', 'soKetNoi');
}
function displayKetNoi(loaiKhach, ketNoi) {

    var loaiKH = document.getElementById(loaiKhach).value;
    if (loaiKH == 0) {
        document.getElementById(ketNoi).style.display = 'none';
    } else if (loaiKH == 1) {
        document.getElementById(ketNoi).style.display = 'none';
    } else if (loaiKH == 2) {
        document.getElementById(ketNoi).style.display = 'inline-block'
    }
}
document.getElementById('tinhTienCap').onclick = function () {
    tinhTienCap('loaiKhachHang', 'maKhachHang', 'soKenh', 'soKetNoi', 'ket-qua-b4');
}
function tinhTienCap(loaiKhach, khachHang, Kenh, ketNoi, idOutPutB4) {
    var loaiKH = document.getElementById(loaiKhach).value;
    var maKH = +document.getElementById(khachHang).value;
    var kenhCaoCap = +document.getElementById(Kenh).value;
    var soLuongKetNoi = +document.getElementById(ketNoi).value;
    var tienCap = 0;
    if (loaiKH == 0) {
        alert('Hãy chọn loại hình khách hàng');
    } else if (loaiKH == 1) {
        tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap;
    } else if (loaiKH == 2 && soLuongKetNoi <= 10) {
        tienCap = 15 + 75 + 50 * kenhCaoCap;
    } else if (loaiKH == 2 && soLuongKetNoi > 10) {
        tienCap = 15 + 75 + (soLuongKetNoi - 10) * 5 + 50 * kenhCaoCap;
    }
    document.getElementById(idOutPutB4).innerHTML = `Mã khách hàng là: ${maKH} ; Số tiền cáp là: $${tienCap}`
    var kQuaB4 = document.getElementById(idOutPutB4).innerHTML;
    return kQuaB4;
}