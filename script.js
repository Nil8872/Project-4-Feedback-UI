const emojiEls = document.querySelectorAll('.emoji');
const reviewBtn = document.getElementById('btn');
const container =  document.querySelector(".container");

let selecteRatting = "";
emojiEls.forEach((emojiEl) => {
    emojiEl.addEventListener('click', (event) => {

        removeAllClasses();
        emojiEl.classList.add('active');
        selecteRatting =(event.target.innerText || event.target.parentNode.innerText
        )
    })

});

reviewBtn.addEventListener('click',()=>{
    if(selecteRatting !== ""){
        container.innerHTML = ` <h1 class="heading">Thank You!</h1>
        <div class="feedback">Your Feedback is : <strong>${selecteRatting}</strong></div>
        <div class="message">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, deleniti?</p>
        </div>
        `
    }
})

const removeAllClasses = () => {
    emojiEls.forEach((emojiEl) => {
        emojiEl.classList.remove("active");
    });
}
