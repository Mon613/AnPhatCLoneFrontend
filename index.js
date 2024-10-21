var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list_image img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');


var currentIndex = 0;

function updateImage(index){
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src')
}

listImg.forEach((imgElement, index)=>{
        imgElement.addEventListener('click', e=>{
            updateImage(index);
        })
    })

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length - 1;
    }
    else{
        currentIndex--;
    }
    updateImage(currentIndex);
});
nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length-1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    updateImage(currentIndex);
});

// jquery

// var _array = {
//     path_image: " ",
//     list_imageupdate: "",
//     content_type: "",
//     content_type1: "",
//     content_type2: "",
//     content_type3: "",
//     content_type4: "",
//     content_type5: "",
//     price_type_del: "",
//     price_type_sale: "",
// }
// var sp1 = {};
// sp1.path_image = "./img/Lenovo/img_6173.jpg"
// sp1.list_imageupdate = ""
// sp1.content_type = "Laptop Lenovo Legion 5 15IAH7H 82RC0090VN (Intel Core i5-12500H | 16GB | 512GB | RTX 3050 Ti 4GB | 15.6 inch FHD | Win 11 | Xám)"
// sp1.content_type1 = "NBLN0718"
// sp1.content_type2 = "CPU: Intel Core i5-12500H (12 nhân 16 luồng, upto 4.5GHz, 18MB)"
// sp1.content_type3 = "RAM: 2x 8GB SO-DIMM DDR5-4800 (2khe)"
// sp1.content_type4 = "Ổ cứng: 512GB SSD M.2 2280 PCIe® 4.0x4 NVMe + 1 slot"
// sp1.content_type5 = "VGA: NVIDIA GeForce RTX 3050 Ti 4GB GDDR6"
// sp1.price_type_del = "34.600.000"
// sp1.price_type_sale = "	25.990.000"

// var sp2 = {};
// sp2.path_image = "./img/Gigabyte/ndgi0026-2.jpg"
// sp2.list_imageupdate = ""
// sp2.content_type = "Laptop Lenovo Legion 5 15IAH7H 82RC0090VN (Intel Core i5-12500H | 16GB | 512GB | RTX 3050 Ti 4GB | 15.6 inch FHD | Win 11 | Xám)"
// sp2.content_type1 = "NBLN0718"
// sp2.content_type2 = "CPU: Intel Core i5-12500H (12 nhân 16 luồng, upto 4.5GHz, 18MB)"
// sp2.content_type3 = "RAM: 2x 8GB SO-DIMM DDR5-4800 (2khe)"
// sp2.content_type4 = "Ổ cứng: 512GB SSD M.2 2280 PCIe® 4.0x4 NVMe + 1 slot"
// sp2.content_type5 = "VGA: NVIDIA GeForce RTX 3050 Ti 4GB GDDR6"
// sp2.price_type_del = "34.600.000"
// sp2.price_type_sale = "	25.990.000"

// var sp3 = {};
// sp3.path_image = "./img/Lenovo/img_6173.jpg"
// sp3.list_imageupdate = ""
// sp3.content_type = "Laptop Lenovo Legion 5 15IAH7H 82RC0090VN (Intel Core i5-12500H | 16GB | 512GB | RTX 3050 Ti 4GB | 15.6 inch FHD | Win 11 | Xám)"
// sp3.content_type1 = "NBLN0718"
// sp3.content_type2 = "CPU: Intel Core i5-12500H (12 nhân 16 luồng, upto 4.5GHz, 18MB)"
// sp3.content_type3 = "RAM: 2x 8GB SO-DIMM DDR5-4800 (2khe)"
// sp3.content_type4 = "Ổ cứng: 512GB SSD M.2 2280 PCIe® 4.0x4 NVMe + 1 slot"
// sp3.content_type5 = "VGA: NVIDIA GeForce RTX 3050 Ti 4GB GDDR6"
// sp3.price_type_del = "34.600.000"
// sp3.price_type_sale = "	25.990.000"
// list_sp = [sp1,sp2,sp3];
// $(document).ready(function(){
//     $(".load_sp").click(function(){
//         let _val = this.value
//         path ="";
//         content_text = "";
//         content_text1 = "";
//         content_text2 = "";
//         content_text3 = "";
//         content_text4 = "";
//         content_text5 = "";
//         price_del = "";
//         price_sale = "";
//         if(_val == 1){
//             path = list_sp[0].path_image;
//             content_text = list_sp[0].content_type;
//             content_text1 = list_sp[0].content_type1;
//             content_text2 = list_sp[0].content_type2;
//             content_text3 = list_sp[0].content_type3;
//             content_text4 = list_sp[0].content_type4;
//             content_text5 = list_sp[0].content_type5;
//             price_del = list_sp[0].price_type_del;
//             price_sale = list_sp[0].price_type_sale;

//         }
//         else if(_val == 2){
//             path = list_sp[1].path_image;
//             content_text = list_sp[1].content_type;
//             content_text1 = list_sp[1].content_type1;
//             content_text2 = list_sp[1].content_type2;
//             content_text3 = list_sp[1].content_type3;
//             content_text4 = list_sp[1].content_type4;
//             content_text5 = list_sp[1].content_type5;
//             price_del = list_sp[1].price_type_del;
//             price_sale = list_sp[1].price_type_sale;
//         }
//         var html = ""
//             html += "<section>"
//                     +'<div class="row lap_asus">'
//                     +' <div class="col-lg-4" style="margin-right: -70px;">'
//                     +'<div class="main_slider">'
//                     +'<div class="main_slider">'
//                     +'<div class="control_btn prev"><i class="fa-solid fa-angle-left"></i></div>'
//                     +'<div class="control_btn next"><i class="fa-solid fa-angle-right"></i></div>'
//                     +'</div>'
//                     +' <div class="list_image">'
//                     +'<div>'
//                     +'<img src="./img/Asus/44498_fa507nv_lp046w.jpg">'
//                     +'</div>'
//                     +'<div>'
//                     +'<img src="./img/Asus/44498_tufa15pure1__1_.jpg">'
//                     +'</div>'
//                     +'<div>'
//                     +'<img src="./img/Asus/44498_tufa15pure1__2_.jpg">'
//                     +'</div>'
//                     +'<div>'
//                     +'<img src="./img/Asus/44498_tufa15pure1__3_.jpg">'
//                     +'</div>'
//                     +'<div>'
//                     +'<img src="./img/Asus/44498_tufa15pure1__4_.jpg">'
//                     +'</div>'
//                     +' </div>'
//                     +'</div>'
//                     +' <div class="lap_asus_text col-lg-5 ">'
//                     +'<h1 style="font-size: 20px;"> Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray) </h1>'
//                     +'<div>'
//                     +'<span>'
//                     +'<b>Mã SP: </b><span>NBAS1276</span>'
//                     +'</span>'
//                     +'</div>'
//                     +'<hr>'
//                     +'<div>'
//                     +'<span>CPU: Ryzen 7-7735HS (3.2GHz upto 4.7GHz, 16MB)</span><br>'
//                     +'<span>RAM: 8GB DDR5-4800Mhz SO-DIMM (2 khe, tối đa 32GB)</span><br>'
//                     +'<span>VGA: NVIDIA GeForce RTX 4060 8GB GDDR6</span><br>'
//                     +'<span>VGA: NVIDIA GeForce RTX 4060 8GB GDDR6</span><br>'
//                     +'<a href="#" style="text-decoration: none; color: red;">Xem thêm</a>'
//                     +'</div>'
//                     +'<div>'
//                     +'<table>'
//                     +'<tr>'
//                     +'<td>Giá niêm yết:</td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td><del>34.990.000 đ</del></td>'
//                     +'</tr>'
//                     +'<tr>'
//                     +'<td>Giá khuyến mại:</td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'<td></td>'
//                     +'td><b style="font-size: 20px; color: red;">28.790.000 đ</b></td>'
//                     +'</tr>'
//                     +'</table>'
//                     +' </div>'
//                     +'</div>'
//                     +'<div class="col-lg-2"></div>'
//                     +'</div>'
//                     +'</section>'
//                     $(".content").html(html)    
//     })
// })