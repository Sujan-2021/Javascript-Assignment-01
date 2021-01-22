// https://github.com/Sujan-2021/Javascript-Assignment-01


/*--------Assignment for converting kilometer To Meter-----------*/

function kilometerToMeter(kmUnit) {
    
    var meter = kmUnit * 1000;

    if (kmUnit > 0) {
        return meter;
    }
    else {
        return "Length cannot be Negative";
    }
}

    var meterUnit = kilometerToMeter(120);

// console.log(meterUnit);

/*---------------END-------------------*/



/*---------------- Assignment for budgetCalculator-------------------*/


function budgetCalculator(watch, phone, laptop) {
    
    var  watchPrice = watch * 50;
    var  phonePrice = phone * 100;
    var  laptopPrice = laptop * 500;

    var  totalPrice = watchPrice + phonePrice + laptopPrice;

    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        
        return totalPrice;

    }

    else {

        return "Quantity of Item can neither be Negative nor writable in string";

    }
}

    var   totalToBePaid = budgetCalculator(13, 12, 11);

// console.log(totalToBePaid);


            /*--------------END------------*/





/*---------------- Assignment for hotelCost -------------------*/

function hotelCost(daysStayed) {
    
        var bill = 0;

    if (daysStayed <= 10) {
        bill = daysStayed * 100;
    }

    else if (daysStayed <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = daysStayed - 10;
        var secondTenDays = remainingDays * 80;
        bill = firstTenDays + secondTenDays;
    }

    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = daysStayed - 20;
        var unlimitedDays = remainingDays * 50;
        bill = firstTenDays + secondTenDays + unlimitedDays;
    }

    return bill;
}

        var totalBillToBePaidBeforeCheckOut = hotelCost(28);
    
// console.log(totalBillToBePaidBeforeCheckOut);


            /*--------------END------------*/





/* -------------Assignment for megaFriend -----------------*/

function megaFriend(friendsList) {
    
        var longestName = friendsList[0];

    for (var i = 0; i < friendsList.length; i++) {
        
        var friendsName = friendsList[i].length;
        
    if (friendsName == []) {
         
            return "friendList is Empty";
        }

    else if (friendsName > longestName.length) {
            longestName = friendsList[i];
        }

    }
            return longestName;

}

        var friendsList = ['Md Najmul', 'Mohammed Shafique', 'Saifur Rahaman', 'Musharrof Hossain Khan', 'Saidur Rahman Wahid'];

        var longestNamedFriend = megaFriend(friendsList);

// console.log(longestNamedFriend);


            /*--------------END------------*/