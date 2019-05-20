let AccoJS = () => {
    let accoLink = document.querySelectorAll(".acco__link");
    accoLink.forEach(function(accoName) {
        accoName.addEventListener("click", function(e) {
            e.preventDefault();
            let activeItems = document.querySelector(".acco__items.is-active");

            if (activeItems) {
                let accordionDetails = activeItems.querySelector(".acco__desk")

                accordionDetails.style.height = "0px";
                activeItems.classList.remove("is-active");
            }
            
            if(!activeItems || activeItems.querySelector(".acco__link") !== e.target){
                let currentItem = e.target.closest(".acco__items");
                currentItem.classList.add("is-active");

                let currentItemInfo = currentItem.querySelector(".acco__desk");
                currentItemInfo.style.height = currentItemInfo.scrollHeight + "px";
            }
        })
    })
};
AccoJS();