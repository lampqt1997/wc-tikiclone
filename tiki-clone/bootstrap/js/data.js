var danhmucs = [];
var danhmuccons1 = [];
var danhmuccons2 = [];
var danhmuccons3 = [];
var danhmuccons4 = [];
var danhmuccons5 = [];
var danhmuccons6 = [];
var danhmuccons7 = [];
var danhmuccons8 = [];
var danhmuccons9 = [];
var danhmuccons10 = [];
var danhmuccons11 = [];
var danhmuccons12 = [];
var danhmuccons13 = [];
var danhmuccons14 = [];
var danhmuccons15 = [];
var danhmuccons16 = [];



class DanhMuc {
    constructor(ten, code,icon, ...danhmuccon) {
        this.ten = ten;
        this.code = code;
        this.icon = icon;
        this.DanhMucCon = danhmuccon;
    }

}

class DanhMucCon {
    constructor(ten, code, type) {
        this.ten = ten;
        this.code = code;
        this.type = type;
    }
}

function dataMenu() {
    
    danhmuccons1.push(new DanhMucCon('Xu hướng', 'xh', 'title'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy S20 Plus', 'sss20plus', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A51', 'ssa51', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy M11', 'ssm11', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A31', 'ssa31', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone 11', 'ip11', 'item'));
    danhmuccons1.push(new DanhMucCon('iPad 10.2', 'ipa102', 'item'));
    danhmuccons1.push(new DanhMucCon('iPad Mini 5', 'ipamn5', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A11', 'ssa11', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A20s', 'ssa20s', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone 11 Pro Max 64GB', 'ip11pro', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Active 3', 'vsa3', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme 3 Pro', 'rem3pro', 'item'));
    danhmuccons1.push(new DanhMucCon('Galaxy Note 10 Plus', 'ssglxn10', 'item'));
    danhmuccons1.push(new DanhMucCon('OPPO A9', 'oppa9', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone SE 64GB', 'ipse64', 'item'));
    danhmuccons1.push(new DanhMucCon('Xiaomi Redmi Note 8', 'xmn8', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme C3i', 'rmc3i', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme 5 Pro', 'rm5pro', 'item'));
    danhmuccons1.push(new DanhMucCon('VIVO Y91C', 'vvy91c', 'title'));
    danhmuccons1.push(new DanhMucCon('Nổi bật', 'nb', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo A31', 'oppa31', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo A12', 'oppa12', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo Reno 3', 'opprn3', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Joy 3', 'vsj3', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Star', 'vsst', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo Y15', 'vvy15', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo Y12', 'vvy12', 'item'));
    danhmuccons1.push(new DanhMucCon('Smartphone Chính Hãng', 'smartreal', 'title'));
    danhmuccons1.push(new DanhMucCon('Xiaomi Redmi 8', 'xmnm8', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung', 'ss', 'item'));
    danhmuccons1.push(new DanhMucCon('Apple', 'apple', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo', 'opple', 'item'));
    danhmuccons1.push(new DanhMucCon('VSmart', 'vsmart', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo', 'vivo', 'item'));
    danhmuccons1.push(new DanhMucCon('Xiaomi', 'xiaomi', 'item'));
    danhmuccons1.push(new DanhMucCon('Nokia', 'nokia', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme', 'realme', 'item'));
    danhmuccons1.push(new DanhMucCon('Blackberry', 'blackberry', 'item'));
    danhmuccons1.push(new DanhMucCon('Bphone', 'bphone', 'item'));
    danhmuccons1.push(new DanhMucCon('Máy tính bảng', 'mtb', 'title'));
    danhmuccons1.push(new DanhMucCon('Phụ kiện điện thoại', 'phukiendocsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Máy đọc sách', 'maydocsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Dịch vụ, Chính sách', 'dichvuchinhsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Trung tâm bảo hành chính hãng', 'trungtambaohanh', 'title'));
    danhmuccons1.push(new DanhMucCon('Hướng dẫn mua trả góp', 'huongdanmuatragop', 'item'));
    danhmuccons1.push(new DanhMucCon('Quy trình đóng gói, giao hàng', 'quytrinhdonggoiogiaohang', 'item'));
    danhmuccons1.push(new DanhMucCon('Quy trình đổi trả và bảo hành', 'quytrinhdoitrabaohanh', 'item'));



    danhmucs.push(new DanhMuc('Điện thoại - Máy tính bảng', 'DTMTB','fas fa-mobile-alt', danhmuccons1));
    danhmucs.push(new DanhMuc('Điện tử - Điện lạnh', 'DTMTB','fas fa-tv', danhmuccons2));
    danhmucs.push(new DanhMuc('Phụ kiện - Thiết bị số', 'DTMTB','fas fa-headphones-alt', danhmuccons3));
    danhmucs.push(new DanhMuc('Laptop - Thiết bị IT', 'DTMTB', 'fas fa-laptop',danhmuccons4));
    danhmucs.push(new DanhMuc('Máy Ảnh - Quay Phim', 'DTMTB','fas fa-camera' ,danhmuccons5));
    danhmucs.push(new DanhMuc('Điện Gia Dụng', 'DTMTB', 'fas fa-calculator',danhmuccons6));
    danhmucs.push(new DanhMuc('Nhà Cửa Đời sống', 'DTMTB', 'far fa-lightbulb',danhmuccons7));
    danhmucs.push(new DanhMuc('Hàng Tiêu Dùng - Thực Phẩm', 'DTMTB','fas fa-wine-bottle' ,danhmuccons8));
    danhmucs.push(new DanhMuc('Đồ chơi, Mẹ & Bé', 'DTMTB','fas fa-baby' ,danhmuccons9));
    danhmucs.push(new DanhMuc('Làm đẹp - sức khỏe', 'DTMTB', '',danhmuccons10));
    danhmucs.push(new DanhMuc('Thời trang - Dã Ngoại', 'DTMTB', '',danhmuccons11));
    danhmucs.push(new DanhMuc('Thể Thao - Dã Ngoại', 'DTMTB', '',danhmuccons12));
    danhmucs.push(new DanhMuc('Xe Máy, Ô tô, Xe đạp', 'DTMTB', '',danhmuccons13));
    danhmucs.push(new DanhMuc('Hàng Quốc Tế', 'DTMTB', '',danhmuccons14));
    danhmucs.push(new DanhMuc('Sách, VPP & Quà Tặng', 'DTMTB','' ,danhmuccons15));
    danhmucs.push(new DanhMuc('Voucher - Dịch Vụ - Thẻ Cào', 'DTMTB', '',danhmuccons16));


    console.log(danhmucs);
    

}



function fillDataMenu(){

    var e;
    for (let i = 0; i < danhmucs.length; i++) {
        
        e= e+ `<li class="nav-item nav-item-custom">
                        <a class="nav-link text-secondary" href="#">
                        <i class="fas fa-mobile mr-2"> </i>
                        ${danhmucs[i].ten}</a>
                    </li>`;
        
    }
    return e;
}
