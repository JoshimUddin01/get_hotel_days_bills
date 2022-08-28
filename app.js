let btn = document.querySelector(".chk_btn");

btn.addEventListener("click", ()=>{
    let days_value = parseInt(document.querySelector("#days").value);

function get_bills(days) {
        if(days < 11) {
            let default_bill = days * 100;
            return default_bill
        }
        else if(days < 21) {
            let day_left_1 = days-10;
            let no_discount_1 = 10*100;
            let discount_twenty = day_left_1 * 80;

            return no_discount_1 + discount_twenty
        }
        else if(days > 20) {
            let day_left_2 = days - 10;
            let no_discount_2 = 10*100;
            let discount_twenty_day_left = day_left_2 - 10;
            let discount_twenty_2 = 10 * 80;
            let discount_fifty = discount_twenty_day_left * 50;
    
            return no_discount_2 + discount_twenty_2 + discount_fifty;
        }
    }

    let result_show = document.querySelector(".result");
    result_show.innerHTML = "Your total bills are : " + get_bills(days_value) + "TK";
})