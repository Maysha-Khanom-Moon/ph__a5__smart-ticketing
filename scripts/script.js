const main = document.getElementById('main');
const success = document.getElementById('success');

let seat = document.getElementById('seats');

let leftSeatElement = document.getElementById('left-seat');

let selectedSeatElement = document.getElementById('selected-seat');

let nextButtonElement = document.getElementById('next-button');

let seatDetailElement = document.getElementById('seat-detail');

let totalPrice = document.getElementById('total-price');
let grandPrice = document.getElementById('grand-price');

let couponElement = document.getElementById('coupon');

let couponInputElement = document.getElementById('coupon-input');

let applyButtonElement = document.getElementById('apply-button');


let nameInputElement = document.getElementById('name-input');
let numberInputElement = document.getElementById('number-input');

seat.addEventListener('click', function (event) {
    let leftSeat = parseInt(leftSeatElement.innerText);
    let selectedSeat = parseInt(selectedSeatElement.innerText);

    seat = event.target;

    // left section
    if(seat.classList.contains('bg-[#1DD100]')) {
        seat.classList.replace('bg-[#1DD100]' ,'bg-gray-200');
        leftSeat = leftSeat + 1;
        selectedSeat = selectedSeat - 1;

        leftSeatElement.innerText = leftSeat;
        selectedSeatElement.innerText = selectedSeat;

        // remove new-element
        const newElement = document.getElementById('new-element');
        newElement.remove();

        // decrease price
        totalPrice.innerText = parseInt(totalPrice.innerText) - 550;
        grandPrice.innerText = parseInt(grandPrice.innerText) - 550;
    }
    else if(seat.classList.contains('bg-gray-200')) {        
        leftSeat = leftSeat - 1;
        selectedSeat = selectedSeat + 1;

        if(selectedSeat < 5) {
            seat.classList.replace('bg-gray-200' ,'bg-[#1DD100]');

            leftSeatElement.innerText = leftSeat;
            selectedSeatElement.innerText = selectedSeat;

            const newElement = document.createElement('div');

            newElement.innerHTML = '<div id="new-element" class="grid grid-cols-3 py-4"> <p>Seat</p> <p>Economoy</p> <div class="flex justify-end"> <p>550</p> </div> </div>'

            seatDetailElement.appendChild(newElement);

            totalPrice.innerText = parseInt(totalPrice.innerText) + 550;
            grandPrice.innerText = parseInt(grandPrice.innerText) + 550;
        }
        else {
            alert("you can't buy more than 4 ticket at a time");
        }
    }

    // right section
    if(selectedSeat > 0) {
        couponElement.classList.remove('hidden');

        nextButtonElement.removeAttribute("disabled");
    }
    else if(selectedSeat == 0) {
        couponElement.classList.add('hidden');
        nextButtonElement.setAttribute("disabled", true);
    }
})


// coupon calculation
applyButtonElement.addEventListener('click', function(event) {
    if(couponInputElement.value === 'NEW15' ) {
        grandPrice.innerText = parseInt(grandPrice.innerText) * 0.85;
        
        applyButtonElement.setAttribute('disabled', true);
    }
    else {
        alert('give a valid coupon code');
    }
})


nextButtonElement.addEventListener('click', function () {
    main.classList.add('hidden');

    success.classList.remove('hidden');
})

addEventListener('keyup', function (event) {
    if(event.key === 'Escape') {
        main.classList.remove('hidden');

        success.classList.add('hidden');
    }
})