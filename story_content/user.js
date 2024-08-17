window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau011 = player.GetVar("cau011");
var cau012 = player.GetVar("cau012");
var cau013 = player.GetVar("cau013");
var cau014 = player.GetVar("cau014");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau011 },
    { question: "Câu 2", condition: cau012 },
    { question: "Câu 3", condition: cau013 },
    { question: "Câu 4", condition: cau014 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man1 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man1", man1);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man1", "Không có câu hỏi nào khả dụng");
}
}

window.Script2 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau021 = player.GetVar("cau021");
var cau022 = player.GetVar("cau022");
var cau023 = player.GetVar("cau023");
var cau024 = player.GetVar("cau024");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau021 },
    { question: "Câu 2", condition: cau022 },
    { question: "Câu 3", condition: cau023 },
    { question: "Câu 4", condition: cau024 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man2 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man2", man2);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man2", "Không có câu hỏi nào khả dụng");
}
}

window.Script3 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau031 = player.GetVar("cau031");
var cau032 = player.GetVar("cau032");
var cau033 = player.GetVar("cau033");
var cau034 = player.GetVar("cau034");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau031 },
    { question: "Câu 2", condition: cau032 },
    { question: "Câu 3", condition: cau033 },
    { question: "Câu 4", condition: cau034 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man3 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man3", man3);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man3", "Không có câu hỏi nào khả dụng");
}
}

window.Script4 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau041 = player.GetVar("cau041");
var cau042 = player.GetVar("cau042");
var cau043 = player.GetVar("cau043");
var cau044 = player.GetVar("cau044");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau041 },
    { question: "Câu 2", condition: cau042 },
    { question: "Câu 3", condition: cau043 },
    { question: "Câu 4", condition: cau044 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man4 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man4", man4);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man4", "Không có câu hỏi nào khả dụng");
}
}

window.Script5 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau051 = player.GetVar("cau051");
var cau052 = player.GetVar("cau052");
var cau053 = player.GetVar("cau053");
var cau054 = player.GetVar("cau054");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau051 },
    { question: "Câu 2", condition: cau052 },
    { question: "Câu 3", condition: cau053 },
    { question: "Câu 4", condition: cau054 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man5 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man5", man5);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man5", "Không có câu hỏi nào khả dụng");
}
}

window.Script6 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau061 = player.GetVar("cau061");
var cau062 = player.GetVar("cau062");
var cau063 = player.GetVar("cau063");
var cau064 = player.GetVar("cau064");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau061 },
    { question: "Câu 2", condition: cau062 },
    { question: "Câu 3", condition: cau063 },
    { question: "Câu 4", condition: cau064 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man6 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man6", man6);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man6", "Không có câu hỏi nào khả dụng");
}
}

window.Script7 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau071 = player.GetVar("cau071");
var cau072 = player.GetVar("cau072");
var cau073 = player.GetVar("cau073");
var cau074 = player.GetVar("cau074");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau071 },
    { question: "Câu 2", condition: cau072 },
    { question: "Câu 3", condition: cau073 },
    { question: "Câu 4", condition: cau074 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man7 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man7", man7);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man7", "Không có câu hỏi nào khả dụng");
}
}

window.Script8 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau081 = player.GetVar("cau081");
var cau082 = player.GetVar("cau082");
var cau083 = player.GetVar("cau083");
var cau084 = player.GetVar("cau084");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau081 },
    { question: "Câu 2", condition: cau082 },
    { question: "Câu 3", condition: cau083 },
    { question: "Câu 4", condition: cau084 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man8 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man8", man8);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man8", "Không có câu hỏi nào khả dụng");
}
}

window.Script9 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau091 = player.GetVar("cau091");
var cau092 = player.GetVar("cau092");
var cau093 = player.GetVar("cau093");
var cau094 = player.GetVar("cau094");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau091 },
    { question: "Câu 2", condition: cau092 },
    { question: "Câu 3", condition: cau093 },
    { question: "Câu 4", condition: cau094 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man9 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man9", man9);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man9", "Không có câu hỏi nào khả dụng");
}
}

window.Script10 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cau101 = player.GetVar("cau101");
var cau102 = player.GetVar("cau102");
var cau103 = player.GetVar("cau103");
var cau104 = player.GetVar("cau104");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cau101 },
    { question: "Câu 2", condition: cau102 },
    { question: "Câu 3", condition: cau103 },
    { question: "Câu 4", condition: cau104 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var man10 = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("man10", man10);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("man10", "Không có câu hỏi nào khả dụng");
}
}

window.Script11 = function()
{
  var player = GetPlayer();

// Lấy giá trị của các biến true/false từ 1 đến 10
var cauh1 = player.GetVar("cauh1");
var cauh2 = player.GetVar("cauh2");
var cauh3 = player.GetVar("cauh3");
var cauh4 = player.GetVar("cauh4");
var cauh5 = player.GetVar("cauh5");
var cauh6 = player.GetVar("cauh6");
var cauh7 = player.GetVar("cauh7");
var cauh8 = player.GetVar("cauh8");
var cauh9 = player.GetVar("cauh9");
var cauh10 = player.GetVar("cauh10");
var cauh11 = player.GetVar("cauh11");
var cauh12 = player.GetVar("cauh12");
var cauh13 = player.GetVar("cauh13");
var cauh14 = player.GetVar("cauh14");
var cauh15 = player.GetVar("cauh15");

// Danh sách các câu hỏi
const missions = [
    { question: "Câu 1", condition: cauh1 },
    { question: "Câu 2", condition: cauh2 },
    { question: "Câu 3", condition: cauh3 },
    { question: "Câu 4", condition: cauh4 },
    { question: "Câu 5", condition: cauh5 },
    { question: "Câu 6", condition: cauh6 },
    { question: "Câu 7", condition: cauh7 },
    { question: "Câu 8", condition: cauh8 },
    { question: "Câu 9", condition: cauh9 },
    { question: "Câu 10", condition: cauh10 },
    { question: "Câu 11", condition: cauh11 },
    { question: "Câu 12", condition: cauh12 },
    { question: "Câu 13", condition: cauh13 },
    { question: "Câu 14", condition: cauh14 },
    { question: "Câu 15", condition: cauh15 },
];

// Lọc bỏ các câu hỏi có biến điều kiện là true
const availableMissions = missions.filter(m => !m.condition).map(m => m.question);

// Chọn ngẫu nhiên một câu hỏi từ danh sách còn lại
if (availableMissions.length > 0) {
    var cauhoih = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    player.SetVar("cauhoih", cauhoih);
} else {
    // Xử lý khi không còn câu hỏi nào có thể chọn
    console.log("Không còn câu hỏi nào có thể chọn.");
    player.SetVar("cauhoih", "Không có câu hỏi nào khả dụng");
}
}

window.Script12 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbwcJ3dpRB_xxze7109lJkf5vPZT0KWTQ0_sQmZrxNSrtFzzWhXYwjvtnRG-NH26GafM/exec";
const player = GetPlayer();

// Tạo một đối tượng Date đại diện cho thời gian hiện tại
const currentDate = new Date();

// Lấy thông tin ngày, tháng, năm, giờ, phút, giây
const day = String(currentDate.getDate()).padStart(2, '0'); //Thêm số 0 phía trước nếu ngày tháng chỉ có 1 chữ số
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1
const year = currentDate.getFullYear();
const hours = String(currentDate.getHours()).padStart(2, '0'); //Thêm số 0 phía trước nếu giờ chỉ có 1 chữ số
const minutes = String(currentDate.getMinutes()).padStart(2, '0'); //Thêm số 0 phía trước nếu phút chỉ có 1 chữ số
const seconds = String(currentDate.getSeconds()).padStart(2, '0'); //Thêm số 0 phía trước nếu giây chỉ có 1 chữ số

// Tạo chuỗi đại diện cho timestamp
const timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

fetch(url, {
    method: "POST",
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({
        tennhanvien: player.GetVar("hovaten"),
        masonhanvien: player.GetVar("masonhanvien"),
        nhapcuahang: player.GetVar("donvilamviec"),
        diemso: player.GetVar("diem"),
        tggio: player.GetVar("gio"),
        tgphut: player.GetVar("phut"),
        tggiay: player.GetVar("demthoigian"),
        timestamp: timestamp // Thêm timestamp vào dữ liệu gửi đi
    })
});
}

};
