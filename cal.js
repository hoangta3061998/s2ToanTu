let DiemLy;
let DiemHoa;
let DiemSinh;

DiemLy = prompt("Nhap Diem Ly");
DiemHoa = prompt("Nhap Diem Hoa");
DiemSinh = prompt("Nhap Diem Sinh");

let Ly = parseInt(DiemLy);
let Hoa = parseInt(DiemHoa);
let Sinh = parseInt(DiemSinh);

let TrungBinh = (Ly + Hoa + Sinh)/3;
document.write("Diem Trung binh: " + TrungBinh);
let Tong = Ly + Hoa + Sinh;
document.write("Diem Tong: " + Tong);