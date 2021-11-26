let arr = [
    {
        img:  "https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg",
        tag : "outdoor pursuits"
    },
    {
        img:  "https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg",
        tag : "outdoor pursuits"
    },
    {
        img:  "https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg",
        tag : "outdoor pursuits"
    },
    {
        img:  "https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg",
        tag : "outdoor pursuits"
    }
]
function bindScrool(){
let temp='';
for(var i=0;i<arr.length;i++){
    temp +=`<img>
        ${arr[i].img}
        </img>
        <p id="gallery-item">
        ${arr[i].tag}
        </p>`
}
document.getElementById("gallery-item").innerHTML=temp
}