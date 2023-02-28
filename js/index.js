// Bài 1
document.getElementById('tinhToan').onclick = function () {
    /*
    Input:
    Điểm môn 1, 2 ,3 điểm chuẩn, điểm khu vực, đối tượng ==> 
    number
    
    Output: Kết quả trượt hay rớt ==> String
    
    */
    var diemMon1 = +document.getElementById('diemMon1').value;
    var diemMon2 = +document.getElementById('diemMon2').value;
    var diemMon3 = +document.getElementById('diemMon3').value;
    var diemChuan = +document.getElementById('diemChuan').value;
    var diemKhuVuc = +document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    var tongDiem = tinhDiemThi(diemMon1, diemMon2, diemMon3, diemChuan, diemKhuVuc, doiTuong)
    if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        document.getElementById('ket-qua-b1').innerHTML = `Bạn đã trúng tuyển !. Tổng điểm là: ${tongDiem} `;
    }
    else if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById('ket-qua-b1').innerHTML = `Bạn đã trượt do có môn bị điểm 0.  Tổng điểm là: ${tongDiem} `;
    }
    else if (tongDiem < diemChuan) {
        document.getElementById('ket-qua-b1').innerHTML = `Bạn đã trượt do không đủ điểm.  Tổng điểm là: ${tongDiem} `;
    }
}
function tinhDiemThi(diemMon1, diemMon2, diemMon3, diemChuan, diemKhuVuc, doiTuong) {
    var tongDiem = 0;
    tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + doiTuong;
    return tongDiem;
}
// Bài 2
document.getElementById('tinhTienDien').onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var soDien = document.getElementById('soDien').value;
    var tienDien = tinhTienDien(soDien);
    tienDien = new Intl.NumberFormat('vn-VN').format(tienDien);
    document.getElementById('ket-qua-b2').innerHTML = `Họ và tên là: ${hoTen} ; Số tiền điện là:  ${tienDien}`;
}
function tinhTienDien(soDien) {
    /*
    Input:
    số kW => number
    Họ và tên => String
    Output:
    Tiền điện và họ tên = > number và string
    
    
    
    */
    var tienDien = 0;
    if (soDien <= 50 && soDien >= 0) {
        tienDien = soDien * 500;
    }
    else if (soDien > 50 && soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650;
    }
    else if (soDien > 100 && soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    }
    else if (soDien > 200 && soDien <= 350) {
        tienDien = 50 * (500 + 650) + 100 * 850 + (soDien - 200) * 1100;
    }
    else {
        tienDien = 50 * (500 + 650) + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
    }
    return tienDien;
}
// Bài 3 
document.getElementById('tinhTienThue').onclick = function () {
    var nhapHoTen = document.getElementById('nhapHoTen').value;
    var tongThuNhap = +document.getElementById('tongThuNhap').value;
    var soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;
    var tienThue = tinhTienThue(tongThuNhap, soNguoiPhuThuoc);
    tienThue = new Intl.NumberFormat('vn-VN').format(tienThue);
    document.getElementById('ket-qua-b3').innerHTML = `Họ và tên là : ${nhapHoTen} ; Số tiền thuế là ${tienThue} `
}
function tinhTienThue(thuNhap, phuthuoc) {
    var tienThue = 0;
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
    return tienThue;
}